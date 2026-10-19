import { PHOTOS, type Photo } from "@/lib/site-data";

export const FOUR_PROJECTS: Photo[] = [
  { ...PHOTOS.epoxyRecepce, title: "Masiv s tyrkysovým epoxidem" },
  PHOTOS.epoxyStul,
  PHOTOS.postel,
  { ...PHOTOS.platek, title: "Deska s motýlkovými spoji" },
  PHOTOS.epoxyDesky,
  { ...PHOTOS.stolek, title: "Kulatý stolek z masivu" },
  PHOTOS.stoly,
];

export type InquiryValues = { name: string; email: string; phone: string; message: string };
export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

export function validateFourInquiry(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {};
  if (!values.name.trim()) errors.name = "Vyplňte prosím jméno.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Zadejte platný e-mail.";
  if (values.phone.trim() && !/^\+?[\d\s()-]{7,}$/.test(values.phone.trim())) errors.phone = "Zadejte platné telefonní číslo.";
  if (!values.message.trim()) errors.message = "Napište prosím, co si přejete vyrobit.";
  return errors;
}

export function nextFourProject(index: number, direction: number) {
  return (index + direction + FOUR_PROJECTS.length) % FOUR_PROJECTS.length;
}