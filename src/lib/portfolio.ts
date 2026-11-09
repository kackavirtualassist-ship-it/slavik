import { PHOTOS, type Photo } from "@/lib/site-data";
import photo1 from "@/assets/realizace-01.webp.asset.json";
import photo2 from "@/assets/realizace-02.webp.asset.json";
import photo3 from "@/assets/realizace-03.webp.asset.json";
import photo4 from "@/assets/realizace-04.webp.asset.json";
import photo5 from "@/assets/realizace-05.webp.asset.json";
import photo6 from "@/assets/realizace-06.webp.asset.json";
import photo7 from "@/assets/realizace-07.webp.asset.json";
import photo8 from "@/assets/realizace-08.webp.asset.json";
import photo9 from "@/assets/realizace-09.webp.asset.json";
import photo10 from "@/assets/realizace-10.webp.asset.json";
import photo11 from "@/assets/realizace-11.webp.asset.json";
import photo12 from "@/assets/realizace-12.webp.asset.json";
import photo13 from "@/assets/realizace-13.webp.asset.json";
import photo14 from "@/assets/realizace-14.webp.asset.json";
import photo15 from "@/assets/realizace-15.webp.asset.json";
import photo16 from "@/assets/realizace-16.webp.asset.json";
import photo17 from "@/assets/realizace-17.webp.asset.json";
import photo18 from "@/assets/realizace-18.webp.asset.json";
import photo19 from "@/assets/realizace-19.webp.asset.json";
import photo20 from "@/assets/realizace-20.webp.asset.json";
import photo21 from "@/assets/realizace-21.webp.asset.json";
import photo22 from "@/assets/realizace-22.webp.asset.json";
import photo23 from "@/assets/realizace-23.webp.asset.json";
import photo24 from "@/assets/realizace-24.webp.asset.json";
import photo25 from "@/assets/realizace-25.webp.asset.json";
import photo26 from "@/assets/realizace-26.webp.asset.json";
import photo27 from "@/assets/realizace-27.webp.asset.json";
import photo28 from "@/assets/realizace-28.webp.asset.json";
import photo29 from "@/assets/realizace-29.webp.asset.json";
import photo30 from "@/assets/realizace-30.webp.asset.json";
import photo31 from "@/assets/realizace-31.webp.asset.json";
import photo32 from "@/assets/realizace-32.webp.asset.json";
import photo33 from "@/assets/realizace-33.webp.asset.json";
import photo34 from "@/assets/realizace-34.webp.asset.json";
import photo35 from "@/assets/realizace-35.webp.asset.json";
import photo36 from "@/assets/realizace-36.webp.asset.json";
import photo37 from "@/assets/realizace-37.webp.asset.json";
import photo38 from "@/assets/realizace-38.webp.asset.json";
import photo39 from "@/assets/realizace-39.webp.asset.json";
import photo40 from "@/assets/realizace-40.webp.asset.json";
import photo41 from "@/assets/realizace-41.webp.asset.json";
import photo42 from "@/assets/realizace-42.webp.asset.json";
import photo43 from "@/assets/realizace-43.webp.asset.json";
import photo44 from "@/assets/realizace-44.webp.asset.json";
import photo45 from "@/assets/realizace-45.webp.asset.json";
import photo46 from "@/assets/realizace-46.webp.asset.json";
import photo47 from "@/assets/realizace-47.webp.asset.json";
import photo48 from "@/assets/realizace-48.webp.asset.json";
import photo49 from "@/assets/realizace-49.webp.asset.json";
import photo50 from "@/assets/realizace-50.webp.asset.json";

export type PortfolioPhoto = Photo & { id: string; label?: "Před" | "Po" };
export type PortfolioGroup = { id: string; title: string; photos: PortfolioPhoto[] };

export const NEW_PHOTOS: PortfolioPhoto[] = [
  { id: "new-01", src: photo1.url, title: "Schodiště s lamelovou příčkou", alt: "Dřevěné schodiště se svislými lamelami při pohledu shora", category: "masiv", w: 1200, h: 1600, label: "Po" },
  { id: "new-02", src: photo2.url, title: "Lamelová příčka v chodbě", alt: "Svislé dřevěné lamely v chodbě vedle schodiště", category: "masiv", w: 1200, h: 1600, label: "Po" },
  { id: "new-03", src: photo3.url, title: "Lamelová příčka v chodbě", alt: "Dřevěná lamelová příčka u dveří v chodbě", category: "masiv", w: 1200, h: 1600, label: "Po" },
  { id: "new-04", src: photo4.url, title: "Schodiště a lamelová příčka", alt: "Dřevěné schodiště se svislou lamelovou příčkou", category: "masiv", w: 1200, h: 1600, label: "Po" },
  { id: "new-05", src: photo5.url, title: "Detail lamelové příčky", alt: "Dřevěné lamely vedle radiátoru v chodbě", category: "masiv", w: 1200, h: 1600, label: "Po" },
  { id: "new-06", src: photo6.url, title: "Lamelová příčka u schodiště", alt: "Celkový pohled na lamelovou příčku v chodbě", category: "masiv", w: 1200, h: 1600, label: "Po" },
  { id: "new-07", src: photo7.url, title: "Prostor u schodiště", alt: "Prostor u bílého schodiště bez lamelové příčky", category: "masiv", w: 1200, h: 1600, label: "Před" },
  { id: "new-08", src: photo8.url, title: "Detail dřevěné desky", alt: "Detail kresby masivní dřevěné desky", category: "masiv", w: 1200, h: 1600 },
  { id: "new-09", src: photo9.url, title: "Dřevěný parapet", alt: "Široký dřevěný parapet nad radiátorem", category: "masiv", w: 1200, h: 1600 },
  { id: "new-10", src: photo10.url, title: "Dřevěný rám zrcadla", alt: "Zrcadlo s nepravidelným dřevěným rámem", category: "masiv", w: 1200, h: 1600 },
  { id: "new-11", src: photo11.url, title: "Vnitřní uspořádání skříně", alt: "Vestavěná skříň s policemi, zásuvkami a šatní tyčí", category: "masiv", w: 1200, h: 1600 },
  { id: "new-12", src: photo12.url, title: "Úložný prostor na míru", alt: "Otevřená vestavěná skříň s policemi a zásuvkami", category: "masiv", w: 1200, h: 1600 },
  { id: "new-13", src: photo13.url, title: "Vestavěná skříň", alt: "Bílá vestavěná skříň s dlouhými svislými úchytkami", category: "masiv", w: 1200, h: 1600 },
  { id: "new-14", src: photo14.url, title: "Dřevěné noční stolky", alt: "Dvojice dřevěných nočních stolků", category: "masiv", w: 1200, h: 1600 },
  { id: "new-15", src: photo15.url, title: "Noční stolky se zásuvkami", alt: "Dva dřevěné noční stolky s otevřenými zásuvkami", category: "masiv", w: 1200, h: 1600 },
  { id: "new-16", src: photo16.url, title: "Dřevěné zábradlí", alt: "Dřevěné zábradlí kolem schodišťového otvoru", category: "masiv", w: 1600, h: 1200 },
  { id: "new-17", src: photo17.url, title: "Zábradlí schodiště", alt: "Pohled shora na dřevěné zábradlí a schodiště", category: "masiv", w: 1200, h: 1600 },
  { id: "new-18", src: photo18.url, title: "Dřevěné schodiště", alt: "Dřevěné schodiště se zábradlím při pohledu z boku", category: "masiv", w: 900, h: 1600 },
  { id: "new-19", src: photo19.url, title: "Schodiště se zábradlím", alt: "Celkový pohled na dřevěné schodiště a zábradlí", category: "masiv", w: 900, h: 1600 },
  { id: "new-20", src: photo20.url, title: "Koupelnový nábytek", alt: "Dřevěné zásuvky pod umyvadlovou deskou vedle pračky", category: "masiv", w: 1200, h: 1600 },
  { id: "new-21", src: photo21.url, title: "Umyvadlová sestava", alt: "Dřevěná umyvadlová sestava s pračkou a kulatým zrcadlem", category: "masiv", w: 1200, h: 1600 },
  { id: "new-22", src: photo22.url, title: "Umyvadlová deska", alt: "Kamenné umyvadlo na dřevěné desce s přírodní hranou", category: "masiv", w: 1200, h: 1600 },
  { id: "new-23", src: photo23.url, title: "Detail koupelnových zásuvek", alt: "Detail kresby dřeva koupelnových zásuvek", category: "masiv", w: 1200, h: 1600 },
  { id: "new-24", src: photo24.url, title: "Deska s přírodní hranou", alt: "Masivní umyvadlová deska s nepravidelnou přírodní hranou", category: "masiv", w: 1200, h: 1600 },
  { id: "new-25", src: photo25.url, title: "Posuvné dřevěné dveře", alt: "Dřevěné posuvné dveře na černé horní kolejnici", category: "masiv", w: 1200, h: 1600 },
  { id: "new-26", src: photo26.url, title: "Detail umyvadlové desky", alt: "Detail umyvadla na masivní dřevěné desce", category: "masiv", w: 1200, h: 1600 },
  { id: "new-27", src: photo27.url, title: "Posuvné dveře", alt: "Dřevěné posuvné dveře v interiéru", category: "masiv", w: 1200, h: 1600 },
  { id: "new-28", src: photo28.url, title: "Dřevěné dveře v interiéru", alt: "Dřevěné dveře s černou klikou a kováním", category: "masiv", w: 1200, h: 1600 },
  { id: "new-29", src: photo29.url, title: "Dveře z masivu", alt: "Zavřené dřevěné dveře s výraznou kresbou", category: "masiv", w: 1200, h: 1600 },
  { id: "new-30", src: photo30.url, title: "Detail dřeva s epoxidem", alt: "Detail dřevěné desky s tyrkysovou epoxidovou výplní", category: "masiv", w: 1200, h: 1600 },
  { id: "new-31", src: photo31.url, title: "Dřevěné dveře v dílně", alt: "Dřevěné dveřní křídlo položené v dílně", category: "masiv", w: 1200, h: 1600 },
  { id: "new-32", src: photo32.url, title: "Schodiště s kovovým zábradlím", alt: "Dřevěné schodiště s černým kovovým zábradlím", category: "masiv", w: 1200, h: 1600 },
  { id: "new-33", src: photo33.url, title: "Epoxidová výplň", alt: "Detail přírodní hrany dřeva s barevnou epoxidovou výplní", category: "masiv", w: 1200, h: 1600 },
  { id: "new-34", src: photo34.url, title: "Detail posuvných dveří", alt: "Detail horní hrany dřevěných posuvných dveří s kováním", category: "masiv", w: 1200, h: 1600 },
  { id: "new-35", src: photo35.url, title: "Kování dřevěných dveří", alt: "Detail černého kování na dřevěných dveřích", category: "masiv", w: 1200, h: 1600 },
  { id: "new-36", src: photo36.url, title: "Dřevěné stupně schodiště", alt: "Pohled shora na dřevěné schodišťové stupně", category: "masiv", w: 1200, h: 1600 },
  { id: "new-37", src: photo37.url, title: "Schodiště z masivu", alt: "Dřevěné schodiště u bílých stěn s černým zábradlím", category: "masiv", w: 1200, h: 1600 },
  { id: "new-38", src: photo38.url, title: "Detail parapetu", alt: "Boční detail silného dřevěného parapetu", category: "masiv", w: 1200, h: 1600 },
  { id: "new-39", src: photo39.url, title: "Parapet z masivu", alt: "Dřevěný parapet pod oknem s černým rámem", category: "masiv", w: 1200, h: 1600 },
  { id: "new-40", src: photo40.url, title: "Kresba dřevěné desky", alt: "Detail výrazné kresby a suku v dřevěné desce", category: "masiv", w: 1200, h: 1600 },
  { id: "new-41", src: photo41.url, title: "Hrana dřevěného parapetu", alt: "Detail hrany masivního dřevěného parapetu", category: "masiv", w: 1200, h: 1600 },
  { id: "new-42", src: photo42.url, title: "Dřevěný parapet u okna", alt: "Celkový pohled na masivní parapet u okna", category: "masiv", w: 1200, h: 1600 },
  { id: "new-43", src: photo43.url, title: "Dětská postel", alt: "Dřevěná dětská postel s rámem ve tvaru domečku", category: "masiv", w: 1200, h: 1600 },
  { id: "new-44", src: photo44.url, title: "Rošt dětské postele", alt: "Dětská postel s odhaleným lamelovým roštem", category: "masiv", w: 1200, h: 1600 },
  { id: "new-45", src: photo45.url, title: "Postel s domečkovým rámem", alt: "Dřevěná dětská postel s domečkovým rámem a lůžkovinami", category: "masiv", w: 1200, h: 1600 },
  { id: "new-46", src: photo46.url, title: "Posuvné dveře v chodbě", alt: "Dřevěné posuvné dveře na černé kolejnici v chodbě", category: "masiv", w: 1200, h: 1600 },
  { id: "new-47", src: photo47.url, title: "Dřevěné dveře", alt: "Dřevěné dveře s přírodní kresbou a černou klikou", category: "masiv", w: 1200, h: 1600 },
  { id: "new-48", src: photo48.url, title: "Posuvné dveře z masivu", alt: "Dřevěné posuvné dveře s černým horním kováním", category: "masiv", w: 594, h: 907 },
  { id: "new-49", src: photo49.url, title: "Dřevěný pult", alt: "Dlouhý dřevěný pult s přírodní hranou v interiéru", category: "masiv", w: 1200, h: 1600 },
  { id: "new-50", src: photo50.url, title: "Detail dveřního kování", alt: "Detail černého kovového závěsu dřevěných dveří", category: "masiv", w: 1200, h: 1600 },
];

export const ORIGINAL_PHOTOS: PortfolioPhoto[] = [PHOTOS.epoxyStul, PHOTOS.platek, PHOTOS.stoly, PHOTOS.epoxyDesky, PHOTOS.postel, PHOTOS.stolek, PHOTOS.epoxyRecepce].map((photo, i) => ({ ...photo, id: `original-${i}` }));

// Unconfirmed before/after relationships remain standalone photographs.
// No kitchen, renovation or visualization groups are inferred from appearance.
const allPhotos = [...NEW_PHOTOS, ...ORIGINAL_PHOTOS];
const group = (id: string, title: string, ids: string[]): PortfolioGroup => ({
  id, title, photos: ids.flatMap(photoId => {
    const photo = allPhotos.find(item => item.id === photoId);
    return photo ? [photo] : [];
  }),
});

export const PORTFOLIO_GROUPS: PortfolioGroup[] = [
  group("skrine", "Vestavěné skříně", ["new-13", "new-11", "new-12"]),
  group("schodiste", "Schodiště a příčky", ["new-04", "new-01", "new-02", "new-03", "new-05", "new-06", "new-07", "new-16", "new-17", "new-18", "new-19", "new-32", "new-36", "new-37"]),
  group("koupelny", "Koupelnový nábytek", ["new-21", "new-20", "new-22", "new-23", "new-24", "new-26", "original-2"]),
  group("dvere", "Dveře z masivu", ["new-27", "new-25", "new-28", "new-29", "new-31", "new-34", "new-35", "new-46", "new-47", "new-48", "new-50"]),
  group("postele", "Postele a noční stolky", ["original-4", "new-14", "new-15", "new-43", "new-44", "new-45"]),
  group("masiv", "Stoly, desky a epoxid", ["original-6", "original-0", "original-1", "original-3", "original-5", "new-08", "new-09", "new-10", "new-30", "new-33", "new-38", "new-39", "new-40", "new-41", "new-42", "new-49"]),
];

export const PORTFOLIO_PHOTOS = PORTFOLIO_GROUPS.flatMap(group => group.photos);
