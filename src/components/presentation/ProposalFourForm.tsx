import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { validateFourInquiry, type InquiryErrors, type InquiryValues } from "@/lib/proposal-four";

export function ProposalFourForm() {
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [reviewed, setReviewed] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values: InquiryValues = { name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""), phone: String(data.get("phone") ?? ""), message: String(data.get("message") ?? "") };
    const result = validateFourInquiry(values);
    setErrors(result);
    setReviewed(Object.keys(result).length === 0);
    if (Object.keys(result).length) event.currentTarget.querySelector<HTMLInputElement>(`[name="${Object.keys(result)[0]}"]`)?.focus();
  }
  const fields = [
    { key: "name", label: "Jméno", type: "text", autocomplete: "name" },
    { key: "email", label: "E-mail", type: "email", autocomplete: "email" },
    { key: "phone", label: "Telefon — nepovinný", type: "tel", autocomplete: "tel" },
    { key: "message", label: "Co si přejete vyrobit?", type: "text", autocomplete: "off" },
  ] as const;
  return (
    <form noValidate onSubmit={submit} onChange={() => setReviewed(false)} className="d4-form">
      {fields.map((field) => {
        const props = { id: `d4-${field.key}`, name: field.key, autoComplete: field.autocomplete, "aria-invalid": !!errors[field.key], "aria-describedby": errors[field.key] ? `d4-${field.key}-error` : undefined, required: field.key !== "phone" };
        return <div key={field.key} className={field.key === "message" ? "d4-form-wide" : ""}>
          <label htmlFor={props.id}>{field.label}</label>
          {field.key === "message" ? <textarea {...props} rows={4} /> : <input {...props} type={field.type} />}
          {errors[field.key] && <p id={`d4-${field.key}-error`} className="d4-error">{errors[field.key]}</p>}
        </div>;
      })}
      <div className="d4-form-wide">
        <Button type="submit" className="d4-cta">Odeslat poptávku <ArrowUpRight /></Button>
        <p className="d4-form-note">Prezentační formulář — zprávy se neodesílají.</p>
        <div role="status">{reviewed && <p className="d4-notice">Toto je ukázka. Údaje prošly kontrolou, ale zpráva nebyla odeslána.</p>}</div>
      </div>
    </form>
  );
}