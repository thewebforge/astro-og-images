import type { OGImageOptions } from "./schema";
import type { SatoriOptions } from "satori";
import fetch from "node-fetch-cache";
import fs from "fs";
import fsPromises from "fs/promises";
import { cyan, dim, red } from "kleur/colors";

import templates from "./templates";

type FontOptions = SatoriOptions["fonts"];

/**
 * Get the font file from a source.
 *
 * This function is used by the `getFonts` and `getDefaultFonts` functions to
 * get the font file from a URL.
 *
 * Recommended usage is to use the `fontsource.org` API to get the font file.
 * @see https://fontsource.org/docs/api/fonts
 *
 * Satori currently supports three font formats: TTF, OTF and WOFF.
 * Note that WOFF2 is not supported at the moment.
 * @see https://github.com/vercel/satori#fonts
 *
 * The function uses the `node-fetch-cache` package to fetch the font file.
 * @see https://github.com/mistval/node-fetch-cache
 *
 * @param source A URL a font file.
 * @returns Promise<Buffer> that resolves to a Buffer containing the font file.
 */
const fetchFontSource = async (source: string) => {
  const fontFile = await fetch(source);
  if (fontFile.status !== 200) {
    throw new Error(`Font not found: ${source}`);
  }
  return await fontFile.arrayBuffer();
};

/**
 * Get the default fonts.
 *
 * This function is used by the `getFonts` function to get the
 * default fonts if no fonts are specified by the user.
 *
 * The fonts defaults to the Atkinson Hyperlegible font. This font is designed
 * to increase readability for readers with low vision. It is also open source.
 * @see https://brailleinstitute.org/freefont
 *
 * @returns Promise<FontOptions> that resolves to an array of font options.
 */
const getDefaultFonts = async (): Promise<FontOptions> => {
  return [
    {
      name: "Atkinson Hyperlegible",
      data: await fetchFontSource(
        "https://api.fontsource.org/v1/fonts/atkinson-hyperlegible/latin-400-normal.ttf"
      ),
      weight: 400,
      style: "normal",
    },
    {
      name: "Atkinson Hyperlegible",
      data: await fetchFontSource(
        "https://api.fontsource.org/v1/fonts/atkinson-hyperlegible/latin-400-italic.ttf"
      ),
      weight: 400,
      style: "italic",
    },
    {
      name: "Atkinson Hyperlegible",
      data: await fetchFontSource(
        "https://api.fontsource.org/v1/fonts/atkinson-hyperlegible/latin-700-normal.ttf"
      ),
      weight: 700,
      style: "normal",
    },
    {
      name: "Atkinson Hyperlegible",
      data: await fetchFontSource(
        "https://api.fontsource.org/v1/fonts/atkinson-hyperlegible/latin-700-italic.ttf"
      ),
      weight: 700,
      style: "italic",
    },
  ];
};

/**
 * Get the fonts.
 *
 * This function is used by the `generate` function to get the
 * fonts specified by the user.
 *
 * The function uses the `fetchFontSource` function to get the font file from
 * a URL.
 *
 * @param options The image generation options object.
 * @returns Promise<FontOptions> that resolves to an array of font options.
 * @throws Error if the font is not found.
 */
export const getFonts = async (
  options: OGImageOptions
): Promise<FontOptions> => {
  if (!options.fonts || options.fonts.length === 0) {
    return await getDefaultFonts();
  }
  const fonts = await Promise.all(
    options.fonts.map(async (font) => {
      try {
        let fontItem: FontOptions[0] = {
          name: font.name,
          data: await fetchFontSource(font.source),
        };
        if (font.weight) fontItem.weight = font.weight;
        if (font.style) fontItem.style = font.style;
        if (font.lang) fontItem.lang = font.lang;
        return fontItem;
      } catch (e) {
        console.error(
          cyan("  │  ") + red("✖") + dim(` Font not found: ${font.source}`)
        );
        return undefined;
      }
    })
  );
  const defaults = await getDefaultFonts();
  fonts.push(...defaults);
  return fonts.filter((font) => font !== undefined) as FontOptions;
};

/**
 * Get a JSX representation of the OG Image.
 *
 * This function is used by the `generate` function to get the
 * JSX representation of the OG Image that will be processed by the Satori library.
 *
 * @param options The image generation options object.
 * @param template The template to use.
 * @returns A JSX construct of the OG Image.
 */
export const getTemplate = (options: OGImageOptions, template: string) => {
  switch (template) {
    case "bgPhoto":
      return templates.bgPhoto(options);
    case "branded":
      return templates.branded(options);
    case "eCommerce":
      return templates.eCommerce(options);
    case "retro":
      return templates.retro(options);
    case "simple":
      return templates.simple(options);
    case "wave":
      return templates.wave(options);
    default:
      return templates.eCommerce(options);
  }
};

/**
 * Cache for images in memory.
 * 
 * This cache is used by the `getImageBuffer` function to avoid repeat disk-reads.
 */
const store = new Map<string, Buffer>();

/**
 * Get an image content from path.
 * 
 * This function is used by the `loadImageToBase64` function to handle the image cache.
 * It will either return the image from the cache or read the image from disk and store
 * it in the cache.
 * 
 * @param path path to the image file on disk.
 * @returns Buffer containing the image contents.
 */
const getImageBuffer = async (path: string) => {
  let buffer: Buffer;
  const cached = store.get(path);
  if (undefined !== cached) {
    buffer = cached;
  } else {
    if (!fs.existsSync(path)) {
      throw new Error(`File not found: ${path}`);
    }
    buffer = await fsPromises.readFile(path);
    store.set(path, buffer);
  }
  return buffer;
};

/**
 * Load an image to base64.
 * 
 * Supported image formats: `.jpg`, `.jpeg`, `.png`, `.svg`
 * 
 * This function is used by the `getTemplate` function to load an image from disk
 * and convert it to base64 which will be consumed in the template JSX.
 * 
 * The function will return null if the image is not supported or if the image
 * is not found.
 * 
 * @param path to the image file on disk.
 * @returns string|null containing the image contents in base64.
 */
export const loadImageToBase64 = async (
  path: string
): Promise<string | null> => {
  const extRe = /(?:\.([^.]+))?$/;
  const ext = extRe.exec(path)?.[1];
  const supported = ["jpg", "jpeg", "png", "svg"];
  if (!ext || supported.indexOf(ext) < 0) return null;
  const isSvg = ext === "svg";
  const isJpg = ["jpg", "jpeg"].indexOf(ext) > -1;
  let prefix;
  switch (true) {
    case isSvg:
      prefix = "data:image/svg+xml;base64,";
      break;
    case isJpg:
      prefix = "data:image/jpeg;base64,";
      break;
    default:
      prefix = `data:image/${ext};base64,`;
      break;
  }
  let buffer: Buffer;
  try {
    buffer = await getImageBuffer(path);
  } catch (e) {
    console.error(
      cyan("  │  ") + red("✖") + dim(` File not found: ${path}`)
    );
    return null;
  }
  const logo = buffer ? `${prefix}${buffer.toString("base64")}` : null;
  return logo;
};
