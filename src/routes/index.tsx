import { createFileRoute } from "@tanstack/react-router";
import { SelectedWebsite } from "@/components/presentation/SelectedWebsite";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Truhlářství Slavík — kuchyně a nábytek na míru" },
    { name: "description", content: "Kuchyně a kuchyňské linky na míru, vestavěné skříně, nábytek na míru, masiv z tuzemských i exotických dřevin, epoxid a renovace starého nábytku. Prohlédněte si realizace Truhlářství Slavík." },
    { property: "og:title", content: "Truhlářství Slavík — kuchyně a nábytek na míru" },
    { property: "og:description", content: "Skutečné realizace Truhlářství Slavík: kuchyně, vestavěné skříně, nábytek na míru, masiv, epoxid a renovace." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SelectedWebsite,
});
