import logo from "@/assets/logo.jpg.asset.json";
import epoxyDesky from "@/assets/epoxy-desky.jpg.asset.json";
import epoxyRecepce from "@/assets/epoxy-recepce.jpg.asset.json";
import epoxyStul from "@/assets/epoxy-stul-sedy.jpg.asset.json";
import platek from "@/assets/platek-motylky.jpg.asset.json";
import stolek from "@/assets/stolek-les.jpg.asset.json";
import postel from "@/assets/postel-dub.jpg.asset.json";
import stoly from "@/assets/stoly-umyvadlo.jpg.asset.json";

export const LOGO_URL = logo.url;
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100089360948596";
export const BRAND = "Truhlářství Slavík";

export type Category = "epoxid" | "masiv";
export const CATEGORY_LABEL: Record<Category, string> = {
  epoxid: "Dřevo s epoxidem",
  masiv: "Masivní dřevo",
};

export type Photo = { src: string; alt: string; title: string; category: Category; w: number; h: number };

export const PHOTOS = {
  epoxyDesky: { src: epoxyDesky.url, title: "Desky s epoxidovou výplní", alt: "Tři masivní desky s modrou a šedou epoxidovou výplní opřené o zeď", category: "epoxid", w: 1920, h: 1280 },
  epoxyRecepce: { src: epoxyRecepce.url, title: "Pult s tyrkysovým epoxidem", alt: "Masivní deska s tyrkysovým pruhem epoxidu a dřevěným plátkem na zdi", category: "epoxid", w: 1920, h: 1440 },
  epoxyStul: { src: epoxyStul.url, title: "Stůl se šedým epoxidem", alt: "Dlouhý jídelní stůl z masivu se šedou epoxidovou řekou na kovové podnoži", category: "epoxid", w: 1440, h: 1920 },
  platek: { src: platek.url, title: "Plátek s motýlkovými spoji", alt: "Velký dřevěný plátek s tmavými motýlkovými spoji", category: "masiv", w: 1404, h: 1756 },
  stolek: { src: stolek.url, title: "Konferenční stolek z plátku", alt: "Kulatý stolek z dřevěného plátku na kovových nohách v lese", category: "masiv", w: 768, h: 1024 },
  postel: { src: postel.url, title: "Postel z masivu", alt: "Dřevěná manželská postel s lamelovým čelem v prosvětlené místnosti", category: "masiv", w: 1920, h: 1440 },
  stoly: { src: stoly.url, title: "Stoly a umyvadlový stolek", alt: "Masivní desky stolů s přírodní hranou a stolek s keramickým umyvadlem v dílně", category: "masiv", w: 1440, h: 1920 },
} satisfies Record<string, Photo>;

export const GALLERY: Photo[] = [
  PHOTOS.epoxyStul,
  PHOTOS.platek,
  PHOTOS.epoxyRecepce,
  PHOTOS.stoly,
  PHOTOS.postel,
  PHOTOS.epoxyDesky,
  PHOTOS.stolek,
];

export const SERVICES = [
  { title: "Zakázková výroba nábytku", text: "Nábytek z masivního dřeva podle vašeho prostoru, rozměrů a představ." },
  { title: "Tuzemské dřeviny", text: "Výrobky z domácího dřeva s jeho přirozenou kresbou." },
  { title: "Exotické dřeviny", text: "Kusy z exotického dřeva pro výraznější charakter." },
  { title: "Dřevo s epoxidem", text: "Stoly a desky, kde masiv doplňuje barevná epoxidová výplň." },
  { title: "Renovace starého nábytku", text: "Oprava a obnova nábytku, který si zaslouží další život." },
];

export const PROCESS = [
  { title: "Poptávka", text: "Napíšete, co potřebujete — stačí pár vět, rozměry nebo fotka." },
  { title: "Upřesnění zadání", text: "Společně doladíme dřevinu, rozměry a detaily." },
  { title: "Návrh řešení a nabídka", text: "Připravíme návrh a cenovou nabídku." },
  { title: "Realizace", text: "Po odsouhlasení vyrobíme nábytek na míru." },
];

export const PROCESS_NOTE = "Pracovní text — k potvrzení klientem.";
