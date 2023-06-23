import type { OGImageOptions } from "./schema";
import { cyan, dim, green } from "kleur/colors";
import satori, { SatoriOptions } from "satori";
import { Resvg } from "@resvg/resvg-js";
import { getTemplate, getFonts } from "./loader";

type FontOptions = SatoriOptions["fonts"];

/**
 * 
 * @param options object with options for the OG Image
 * @param template The template to use.
 * @returns Buffer with the generated image as PNG
 */
export const generate = async (options: OGImageOptions, template: string) => {
  const fonts = await getFonts(options);
  const satoriOptions: SatoriOptions = {
    width: 1200,
    height: 630,
    embedFont: true,
    fonts: fonts.filter((font) => font !== undefined) as FontOptions,
    debug: options.debug ?? false,
  };
  const renderedTemplate = await getTemplate(options, template);
  const svg = await satori(renderedTemplate, satoriOptions);
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  console.info(
    cyan("  │  ") +
      green("✔") +
      dim(` OG Image created for post: ${options.path}`)
  );
  return pngBuffer;
};
