import { cyan, dim, green } from "kleur/colors";
import satori from "satori";
import sharp from "sharp";
import { getTemplate, getFonts } from "./loader.js";
const svgToSharp = async (image, { width, height }) => {
    const instance = sharp(image);
    const metadata = await instance.metadata();
    const initDensity = metadata.density ?? 300;
    if (metadata.format !== "svg") {
        return instance;
    }
    let wDensity = 0;
    let hDensity = 0;
    if (width && metadata.width) {
        wDensity = (initDensity * width) / metadata.width;
    }
    if (height && metadata.height) {
        hDensity = (initDensity * height) / metadata.height;
    }
    if (!wDensity && !hDensity) {
        return instance;
    }
    return sharp(image, { density: Math.max(wDensity, hDensity) }).resize(width, height);
};
/**
 *
 * @param options object with options for the OG Image
 * @param template The template to use.
 * @returns Buffer with the generated image as PNG
 */
export const generate = async (options, template) => {
    const fonts = await getFonts(options);
    const satoriOptions = {
        width: 1200,
        height: 630,
        embedFont: true,
        fonts: fonts.filter((font) => font !== undefined),
        debug: options.debug ?? false,
    };
    const renderedTemplate = await getTemplate(options, template);
    const svg = await satori(renderedTemplate, satoriOptions);
    const svgBuffer = Buffer.from(svg);
    const svgSharp = await svgToSharp(svgBuffer, {
        height: 630,
    });
    const pngBuffer = await svgSharp.png().toBuffer();
    console.info(cyan("  │  ") +
        green("✔") +
        dim(` OG Image created for post: ${options.path}`));
    return pngBuffer;
};
