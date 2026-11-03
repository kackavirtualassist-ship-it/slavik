import { createFileRoute } from "@tanstack/react-router";
import { SelectedWebsite } from "@/components/presentation/SelectedWebsite";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Truhlářství Slavík — nábytek z masivu na zakázku" },
    { name: "description", content: "Zakázkový nábytek z masivního dřeva, tuzemské i exotické dřeviny, dřevo s epoxidem a renovace. Prohlédněte si realizace Truhlářství Slavík." },
    { property: "og:title", content: "Truhlářství Slavík — nábytek z masivu na zakázku" },
    { property: "og:description", content: "Skutečné realizace nábytku z masivu a dřeva s epoxidem od Truhlářství Slavík." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SelectedWebsite,
});
