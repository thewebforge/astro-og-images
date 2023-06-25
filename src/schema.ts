import { z } from "zod";

export const pageEntry = z.object({
  path: z.string(),
  page: z.any(),
});
export type PageEntry = z.infer<typeof pageEntry>;

export const textOptions = z.object({
  text: z.string(),
  fontFamily: z.string().optional(),
  fontSize: z.number().optional(),
  fontWeight: z
    .custom<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>((val) => {
      return [100, 200, 300, 400, 500, 600, 700, 800, 900].includes(
        val as number
      );
    })
    .optional(),
  lineHeight: z.number().optional(),
  fontStyle: z.enum(["normal", "italic"]).optional(),
  color: z.string().optional(),
});
export type TextOptions = z.infer<typeof textOptions>;

export const fontOptions = z.object({
  name: z.string(),
  source: z.string(),
  weight: z
    .custom<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>((val) => {
      return [100, 200, 300, 400, 500, 600, 700, 800, 900].includes(
        val as number
      );
    })
    .optional(),
  style: z.enum(["normal", "italic"]).optional(),
  lang: z.string().optional(),
});
export type FontOptions = z.infer<typeof fontOptions>;

export const imageOptions = z
  .object({
    path: z.string(),
    title: textOptions,
    description: textOptions.optional(),
    site: textOptions.optional(),
    author: textOptions.optional(),
    price: textOptions.optional(),
    spacing: z
      .object({
        small: z.number().optional(),
        large: z.number().optional(),
      })
      .optional(),
    colors: z
      .object({
        brand: z.string().optional(),
        accent: z.string().optional(),
        text1: z.string().optional(),
        text2: z.string().optional(),
        surface1: z.string().optional(),
        surface2: z.string().optional(),
      })
      .optional(),
    gradient: z.string().optional(),
    image: z.object({
      path: z.string(),
      width: z.array(z.number()).optional(),
    }).optional(),
    logo: z
      .object({
        path: z.string(),
        width: z.number().optional(),
      })
      .optional(),
    fonts: z.array(fontOptions).optional(),
    graphemeImages: z.object({}).catchall(z.string()).optional(),
    debug: z.boolean().optional(),
    format: z.enum(["PNG", "JPEG", "WEBP"]).optional(),
    quality: z.number().optional(),
  })
  .strict();
export type OGImageOptions = z.infer<typeof imageOptions>;

export const ogApiConfig = z.object({
  entries: z.record(z.any()),
  param: z.string(),
  template: z
    .enum(["wave", "eCommerce", "retro", "bgPhoto", "simple", "branded"])
    .optional(),
  getSlug: z
    .function()
    .args(z.string(), z.any())
    .returns(z.string())
    .optional(),
  getImageOptions: z
    .function()
    .args(z.any())
    .returns(z.string().or(z.promise(imageOptions))),
});
export type OGApiConfig = z.infer<typeof ogApiConfig>;
