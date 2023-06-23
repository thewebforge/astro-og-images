// Type definitions for @thewebforge/astro-og-images
// Project: Astro Open Graph Images
// Definitions by: Cédric Bontems <https://cedricbontems.fr>

type GetStaticPaths = import("astro").GetStaticPaths;
type APIRoute = import("astro").APIRoute;

import type { OGImageOptions, OGApiConfig } from "./schema";

export function generate(
  title: string,
  siteName: string,
  author: string
): Promise<string>;

export function ogApi(options: OGApiConfig): {
  getStaticPaths: GetStaticPaths;
  get: APIRoute;
};



export type RGBColor = [r: number, g: number, b: number];
export type XYWH = [x: number, y: number, w: number, h: number];
export type LogicalSide =
  | "block-start"
  | "inline-end"
  | "block-end"
  | "inline-start";
export type IllogicalSide = "top" | "right" | "bottom" | "left";

export interface FontConfig {
  /** RGB text color. Default: `[255, 255, 255]` */
  color?: RGBColor;
  /** Font size. Title default is `70`, description default is `40`. */
  size?: number;
  /** Font weight. Make sure you provide a URL for the matching font weight. */
  weight?: string;
  /** Line height, a.k.a. leading. */
  lineHeight?: number;
  /**
   * Font families to use to render this text. These must be loaded using the
   * top-level `fonts` config option.
   *
   * Similar to CSS, this operates as a “font stack”. The first family in the
   * list will be preferred with next entries used if a glyph isn’t in earlier
   * families. Useful for providing fallbacks for different alphabets etc.
   *
   * Example: `['Noto Sans', 'Noto Sans Arabic']`
   */
  families?: string[];
}
