import type { SatoriOptions } from "satori";
import type { OGImageOptions } from "./schema.js";
type FontOptions = SatoriOptions["fonts"];
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
export declare const getFonts: (options: OGImageOptions) => Promise<FontOptions>;
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
export declare const getTemplate: (options: OGImageOptions, template: string) => import("react/jsx-runtime.js").JSX.Element | Promise<import("react/jsx-runtime.js").JSX.Element>;
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
export declare const loadImageToBase64: (path: string) => Promise<string | null>;
export {};
