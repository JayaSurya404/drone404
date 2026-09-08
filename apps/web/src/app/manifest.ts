import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Drone404",
    short_name: "Drone404",
    start_url: "/",
    display: "standalone",
  };
}
