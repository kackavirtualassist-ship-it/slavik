import { describe, expect, it } from "vitest";
import { NEW_PHOTOS, ORIGINAL_PHOTOS, PORTFOLIO_GROUPS, PORTFOLIO_PHOTOS } from "@/lib/portfolio";
import { PHOTOS } from "@/lib/site-data";

describe("Verified portfolio records", () => {
  it("retains all seven original photographs", () => {
    expect(ORIGINAL_PHOTOS).toHaveLength(7);
    for (const photo of Object.values(PHOTOS)) {
      expect(PORTFOLIO_PHOTOS.some(item => item.src === photo.src)).toBe(true);
    }
  });
  it("includes all fifty uploaded photographs once", () => {
    expect(NEW_PHOTOS).toHaveLength(50);
    expect(new Set(PORTFOLIO_PHOTOS.map(photo => photo.id)).size).toBe(57);
    expect(PORTFOLIO_PHOTOS).toHaveLength(57);
  });
  it("has no unsupported or empty kitchen and renovation groups", () => {
    expect(PORTFOLIO_GROUPS.map(group => group.id)).toEqual(["interier", "masiv"]);
    expect(PORTFOLIO_GROUPS.every(group => group.photos.length > 0)).toBe(true);
  });
  it("keeps the supplied before and after labels without inferring pairs", () => {
    expect(NEW_PHOTOS.find(photo => photo.id === "new-07")?.label).toBe("Před");
    expect(NEW_PHOTOS.filter(photo => photo.label === "Po").map(photo => photo.id)).toEqual(["new-01", "new-02", "new-03", "new-04", "new-05", "new-06"]);
    expect(NEW_PHOTOS.some(photo => "pairId" in photo)).toBe(false);
  });
});