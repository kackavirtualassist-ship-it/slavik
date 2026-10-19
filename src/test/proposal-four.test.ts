import { describe, it, expect } from "vitest";
import { FOUR_PROJECTS, nextFourProject, validateFourInquiry } from "@/lib/proposal-four";

const valid = { name: "Kateřina", email: "katerina@example.com", phone: "", message: "Přeji si stůl z masivu." };
describe("Fourth proposal inquiry", () => {
  it("accepts an omitted optional telephone", () => expect(validateFourInquiry(valid)).toEqual({}));
  it("requires a name", () => expect(validateFourInquiry({ ...valid, name: " " }).name).toBeDefined());
  it("rejects an invalid email", () => expect(validateFourInquiry({ ...valid, email: "not-email" }).email).toBeDefined());
  it("requires the requested product", () => expect(validateFourInquiry({ ...valid, message: " " }).message).toBeDefined());
});
describe("Fourth proposal project navigation", () => {
  it("wraps next from the final actual photo", () => expect(nextFourProject(FOUR_PROJECTS.length - 1, 1)).toBe(0));
  it("wraps previous to the final actual photo", () => expect(nextFourProject(0, -1)).toBe(6));
});