import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/navrh-2")({
  beforeLoad: () => { throw redirect({ to: "/", replace: true }); },
});
