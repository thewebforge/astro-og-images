/// <reference types="node" />
import type { OGImageOptions } from "./schema.js";
/**
 *
 * @param options object with options for the OG Image
 * @param template The template to use.
 * @returns Buffer with the generated image as PNG
 */
export declare const generate: (options: OGImageOptions, template: string) => Promise<Buffer>;
