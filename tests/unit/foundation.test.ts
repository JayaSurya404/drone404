import { describe, expect, it } from "vitest";

import { siteConfig } from "@/config/site";

describe("application foundation", () => {
  it("exposes the Drone404 site identity", () => {
    expect(siteConfig.name).toBe("Drone404");
    expect(siteConfig.url).toMatch(/^https?:\/\//);
  });
});
