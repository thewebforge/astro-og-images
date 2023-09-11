import { generate } from "./generator.js";
const ogGetStaticPaths = ({ entries, param }) => {
    const paths = entries.map((entry) => ({
        params: { [param]: `${entry.slug}.png` },
    }));
    return function getStaticPaths() {
        return paths;
    };
};
const ogEndpoint = (options) => {
    return async function getOGImage({ params }) {
        const slug = params[options.param]?.split(".")[0];
        const entry = options.entries.find((entry) => entry.slug === slug);
        if (!entry)
            return new Response("Page not found", { status: 404 });
        const body = await generate((await options.getImageOptions(entry)), options.template ?? "simple");
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
 * import { ogApi } from "astro-og-images";
 * ```
 *
 * @param options user options for the OG Image
 * @returns object with the getStaticPaths and get functions for Astro
 */
export const ogApi = (options) => {
    return {
        getStaticPaths: ogGetStaticPaths(options),
        GET: ogEndpoint(options),
    };
};
