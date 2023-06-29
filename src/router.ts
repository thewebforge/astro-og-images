import type { APIRoute, GetStaticPaths } from "astro";
import type { OGApiConfig, OGImageOptions } from "./schema.js";
import { generate } from "./generator.js";

const ogGetStaticPaths = ({ entries, param }: OGApiConfig): GetStaticPaths => {
  const paths = entries.map((entry: { slug: string }) => ({
    params: { [param]: `${entry.slug}.png` },
  }));
  return function getStaticPaths() {
    return paths;
  };
};

const ogEndpoint = (options: OGApiConfig): APIRoute => {
  return async function getOGImage({ params }): Promise<Response> {
    const slug = params[options.param]?.split(".")[0];
    const entry = options.entries.find(
      (entry: { slug: string }) => entry.slug === slug
    );
    if (!entry) return new Response("Page not found", { status: 404 });
    const body = await generate(
      (await options.getImageOptions(entry)) as OGImageOptions,
      options.template ?? "simple"
    );
    return new Response(body, { status: 200 });
  };
};

/**
 * The Open Graph image generation API for Astro
 *
 * Create a dynamic route in your Astro pages folder and import this function.
 *
 * @example
 * ```ts
 * // src/pages/open-graph/[...ogImage].astro
 * import { ogApi } from "astro-og-image";
 * ```
 *
 * @param options user options for the OG Image
 * @returns object with the getStaticPaths and get functions for Astro
 */
export const ogApi = (
  options: OGApiConfig
): {
  getStaticPaths: GetStaticPaths;
  get: APIRoute;
} => {
  return {
    getStaticPaths: ogGetStaticPaths(options),
    get: ogEndpoint(options),
  };
};
