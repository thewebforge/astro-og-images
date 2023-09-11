import type { APIRoute, GetStaticPaths } from "astro";
import type { OGApiConfig } from "./schema.js";
/**
 * The Open Graph image generation API for Astro
 *
 * Create a dynamic route in your Astro pages folder and import this function.
 *
 * @example
 * ```ts
 * // src/pages/open-graph/[...ogImage].astro
 * import { ogApi } from "astro-og-images";
 * ```
 *
 * @param options user options for the OG Image
 * @returns object with the getStaticPaths and get functions for Astro
 */
export declare const ogApi: (options: OGApiConfig) => {
    getStaticPaths: GetStaticPaths;
    GET: APIRoute;
};
