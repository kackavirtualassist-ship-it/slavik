import { fireEvent, render, screen, within, cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { PortfolioGallery } from "@/components/presentation/PortfolioGallery";
import { PORTFOLIO_GROUPS } from "@/lib/portfolio";

afterEach(cleanup);

describe("Compact portfolio navigation", () => {
  it("keeps the complete collection out of the initial page", () => {
    render(<PortfolioGallery />);
    expect(screen.getAllByRole("img")).toHaveLength(PORTFOLIO_GROUPS.length);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("makes every category photograph reachable through paginated thumbnails", () => {
    render(<PortfolioGallery />);
    for (const group of PORTFOLIO_GROUPS) {
      fireEvent.click(screen.getByRole("button", { name: `Prohlédnout: ${group.title}` }));
      const dialog = screen.getByRole("dialog", { name: group.title });
      const seen: string[] = [];
      for (let page = 0; page < Math.ceil(group.photos.length / 6); page++) {
        const images = within(dialog).getAllByRole("img");
        expect(images.length).toBeLessThanOrEqual(6);
        seen.push(...images.map(img => img.getAttribute("src") ?? ""));
        if ((page + 1) * 6 < group.photos.length) {
          fireEvent.click(within(dialog).getByRole("button", { name: "Další náhledy" }));
        }
      }
      expect(seen).toEqual(group.photos.map(photo => photo.src));
      fireEvent.click(within(dialog).getByRole("button", { name: "Close" }));
    }
  });

  it("opens the selected image and moves only within its category", () => {
    render(<PortfolioGallery />);
    fireEvent.click(screen.getByRole("button", { name: "Prohlédnout: Vestavěné skříně" }));
    fireEvent.click(screen.getByRole("button", { name: "Zvětšit: Vestavěná skříň" }));
    const imageDialog = screen.getByRole("dialog", { name: "1 / 3 · Vestavěná skříň" });
    fireEvent.click(within(imageDialog).getByRole("button", { name: "Další fotografie" }));
    expect(screen.getByRole("dialog", { name: "2 / 3 · Vnitřní uspořádání skříně" })).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Zavřít galerii" }));
    expect(screen.getByRole("dialog", { name: "Vestavěné skříně" })).toBeTruthy();
  });
});