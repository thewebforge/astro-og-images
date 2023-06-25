// Type definitions for @thewebforge/astro-og-images
// Project: Astro Open Graph Images
// Definitions by: Cédric Bontems <https://cedricbontems.fr>

type GetStaticPaths = import("astro").GetStaticPaths;
type APIRoute = import("astro").APIRoute;

import type { OGImageOptions, OGApiConfig } from "./schema";

export function ogApi(options: OGApiConfig): {
  getStaticPaths: GetStaticPaths;
  get: APIRoute;
};
