import { useState, type FormEvent } from "react";

export type FormStyles = {
  label: string;
  input: string;
  error: string;
  button: string;
  notice: string;
};

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

export function InquiryForm({ s, idPrefix }: { s: FormStyles; idPrefix: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const phone = String(f.get("phone") ?? "").trim();
    const message = String(f.get("message") ?? "").trim();
    const err: Errors = {};
    if (name.length < 2) err.name = "Vyplňte prosím jméno.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Zadejte platný e-mail.";
    if (phone && !/^[+\d][\d\s]{7,}$/.test(phone)) err.phone = "Telefon zadejte jen číslicemi, případně s předvolbou.";
    if (message.length < 10) err.message = "Popište prosím požadavek alespoň pár slovy.";
    setErrors(err);
    setSent(Object.keys(err).length === 0);
  }

  const field = (key: keyof Errors, label: string, el: React.ReactNode) => (
    <div>
      <label htmlFor={`${idPrefix}-${key}`} className={s.label}>
        {label}
      </label>
      {el}
      {errors[key] && (
        <p id={`${idPrefix}-${key}-err`} className={s.error}>
          {errors[key]}
        </p>
      )}
    </div>
  );
  const a = (key: keyof Errors) => ({
    id: `${idPrefix}-${key}`,
    name: key,
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `${idPrefix}-${key}-err` : undefined,
    className: s.input,
  });

  return (
    <form onSubmit={submit} noValidate className="grid gap-5">
      {field("name", "Jméno", <input {...a("name")} autoComplete="name" />)}
      {field("email", "E-mail", <input {...a("email")} type="email" autoComplete="email" />)}
      {field("phone", "Telefon (nepovinné)", <input {...a("phone")} type="tel" autoComplete="tel" />)}
      {field("message", "Popis požadavku", <textarea {...a("message")} rows={5} />)}
      <button type="submit" className={s.button}>
        Odeslat poptávku
      </button>
      <div aria-live="polite">
        {sent && (
          <p className={s.notice}>
            Toto je prezentační ukázka. Formulář prošel kontrolou, ale poptávka nebyla nikam odeslána.
          </p>
        )}
      </div>
    </form>
  );
}
