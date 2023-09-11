import { z } from "zod";
export declare const pageEntry: z.ZodObject<{
    path: z.ZodString;
    page: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    path: string;
    page?: any;
}, {
    path: string;
    page?: any;
}>;
export type PageEntry = z.infer<typeof pageEntry>;
export declare const textOptions: z.ZodObject<{
    text: z.ZodString;
    fontFamily: z.ZodOptional<z.ZodString>;
    fontSize: z.ZodOptional<z.ZodNumber>;
    fontWeight: z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>;
    lineHeight: z.ZodOptional<z.ZodNumber>;
    fontStyle: z.ZodOptional<z.ZodEnum<["normal", "italic"]>>;
    color: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    text: string;
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
    lineHeight?: number | undefined;
    fontStyle?: "normal" | "italic" | undefined;
    color?: string | undefined;
}, {
    text: string;
    fontFamily?: string | undefined;
    fontSize?: number | undefined;
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
    lineHeight?: number | undefined;
    fontStyle?: "normal" | "italic" | undefined;
    color?: string | undefined;
}>;
export type TextOptions = z.infer<typeof textOptions>;
export declare const fontOptions: z.ZodObject<{
    name: z.ZodString;
    source: z.ZodString;
    weight: z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>;
    style: z.ZodOptional<z.ZodEnum<["normal", "italic"]>>;
    lang: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    source: string;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
    style?: "normal" | "italic" | undefined;
    lang?: string | undefined;
}, {
    name: string;
    source: string;
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
    style?: "normal" | "italic" | undefined;
    lang?: string | undefined;
}>;
export type FontOptions = z.infer<typeof fontOptions>;
export declare const imageOptions: z.ZodObject<{
    path: z.ZodString;
    title: z.ZodObject<{
        text: z.ZodString;
        fontFamily: z.ZodOptional<z.ZodString>;
        fontSize: z.ZodOptional<z.ZodNumber>;
        fontWeight: z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>;
        lineHeight: z.ZodOptional<z.ZodNumber>;
        fontStyle: z.ZodOptional<z.ZodEnum<["normal", "italic"]>>;
        color: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        text: string;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }, {
        text: string;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }>;
    description: z.ZodOptional<z.ZodObject<{
        text: z.ZodOptional<z.ZodString>;
        fontFamily: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        fontSize: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        fontWeight: z.ZodOptional<z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>>;
        lineHeight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        fontStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
        color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }, {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }>>;
    site: z.ZodOptional<z.ZodObject<{
        text: z.ZodOptional<z.ZodString>;
        fontFamily: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        fontSize: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        fontWeight: z.ZodOptional<z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>>;
        lineHeight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        fontStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
        color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }, {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }>>;
    author: z.ZodOptional<z.ZodObject<{
        text: z.ZodOptional<z.ZodString>;
        fontFamily: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        fontSize: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        fontWeight: z.ZodOptional<z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>>;
        lineHeight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        fontStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
        color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }, {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }>>;
    price: z.ZodOptional<z.ZodObject<{
        text: z.ZodOptional<z.ZodString>;
        fontFamily: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        fontSize: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        fontWeight: z.ZodOptional<z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>>;
        lineHeight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        fontStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
        color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }, {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    }>>;
    spacing: z.ZodOptional<z.ZodObject<{
        small: z.ZodOptional<z.ZodNumber>;
        large: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        small?: number | undefined;
        large?: number | undefined;
    }, {
        small?: number | undefined;
        large?: number | undefined;
    }>>;
    colors: z.ZodOptional<z.ZodObject<{
        brand: z.ZodOptional<z.ZodString>;
        accent: z.ZodOptional<z.ZodString>;
        text1: z.ZodOptional<z.ZodString>;
        text2: z.ZodOptional<z.ZodString>;
        surface1: z.ZodOptional<z.ZodString>;
        surface2: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        brand?: string | undefined;
        accent?: string | undefined;
        text1?: string | undefined;
        text2?: string | undefined;
        surface1?: string | undefined;
        surface2?: string | undefined;
    }, {
        brand?: string | undefined;
        accent?: string | undefined;
        text1?: string | undefined;
        text2?: string | undefined;
        surface1?: string | undefined;
        surface2?: string | undefined;
    }>>;
    gradient: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodObject<{
        path: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        width?: number | undefined;
    }, {
        path: string;
        width?: number | undefined;
    }>>;
    logo: z.ZodOptional<z.ZodObject<{
        path: z.ZodString;
        width: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        width?: number | undefined;
    }, {
        path: string;
        width?: number | undefined;
    }>>;
    fonts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        source: z.ZodString;
        weight: z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>;
        style: z.ZodOptional<z.ZodEnum<["normal", "italic"]>>;
        lang: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        source: string;
        weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        style?: "normal" | "italic" | undefined;
        lang?: string | undefined;
    }, {
        name: string;
        source: string;
        weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        style?: "normal" | "italic" | undefined;
        lang?: string | undefined;
    }>, "many">>;
    graphemeImages: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    debug: z.ZodOptional<z.ZodBoolean>;
    format: z.ZodOptional<z.ZodEnum<["PNG", "JPEG", "WEBP"]>>;
    quality: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    path: string;
    title: {
        text: string;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    };
    description?: {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    } | undefined;
    site?: {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    } | undefined;
    author?: {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    } | undefined;
    price?: {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    } | undefined;
    spacing?: {
        small?: number | undefined;
        large?: number | undefined;
    } | undefined;
    colors?: {
        brand?: string | undefined;
        accent?: string | undefined;
        text1?: string | undefined;
        text2?: string | undefined;
        surface1?: string | undefined;
        surface2?: string | undefined;
    } | undefined;
    gradient?: string | undefined;
    image?: {
        path: string;
        width?: number | undefined;
    } | undefined;
    logo?: {
        path: string;
        width?: number | undefined;
    } | undefined;
    fonts?: {
        name: string;
        source: string;
        weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        style?: "normal" | "italic" | undefined;
        lang?: string | undefined;
    }[] | undefined;
    graphemeImages?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    debug?: boolean | undefined;
    format?: "PNG" | "JPEG" | "WEBP" | undefined;
    quality?: number | undefined;
}, {
    path: string;
    title: {
        text: string;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    };
    description?: {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    } | undefined;
    site?: {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    } | undefined;
    author?: {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    } | undefined;
    price?: {
        text?: string | undefined;
        fontFamily?: string | undefined;
        fontSize?: number | undefined;
        fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        lineHeight?: number | undefined;
        fontStyle?: "normal" | "italic" | undefined;
        color?: string | undefined;
    } | undefined;
    spacing?: {
        small?: number | undefined;
        large?: number | undefined;
    } | undefined;
    colors?: {
        brand?: string | undefined;
        accent?: string | undefined;
        text1?: string | undefined;
        text2?: string | undefined;
        surface1?: string | undefined;
        surface2?: string | undefined;
    } | undefined;
    gradient?: string | undefined;
    image?: {
        path: string;
        width?: number | undefined;
    } | undefined;
    logo?: {
        path: string;
        width?: number | undefined;
    } | undefined;
    fonts?: {
        name: string;
        source: string;
        weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
        style?: "normal" | "italic" | undefined;
        lang?: string | undefined;
    }[] | undefined;
    graphemeImages?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    debug?: boolean | undefined;
    format?: "PNG" | "JPEG" | "WEBP" | undefined;
    quality?: number | undefined;
}>;
export type OGImageOptions = z.infer<typeof imageOptions>;
export declare const ogApiConfig: z.ZodObject<{
    entries: z.ZodRecord<z.ZodString, z.ZodAny>;
    param: z.ZodString;
    template: z.ZodOptional<z.ZodEnum<["wave", "eCommerce", "retro", "bgPhoto", "simple", "branded"]>>;
    getSlug: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodString, z.ZodAny], z.ZodUnknown>, z.ZodString>>;
    getImageOptions: z.ZodFunction<z.ZodTuple<[z.ZodAny], z.ZodUnknown>, z.ZodUnion<[z.ZodString, z.ZodPromise<z.ZodObject<{
        path: z.ZodString;
        title: z.ZodObject<{
            text: z.ZodString;
            fontFamily: z.ZodOptional<z.ZodString>;
            fontSize: z.ZodOptional<z.ZodNumber>;
            fontWeight: z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>;
            lineHeight: z.ZodOptional<z.ZodNumber>;
            fontStyle: z.ZodOptional<z.ZodEnum<["normal", "italic"]>>;
            color: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            text: string;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }, {
            text: string;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }>;
        description: z.ZodOptional<z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            fontSize: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            fontWeight: z.ZodOptional<z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>>;
            lineHeight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            fontStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
            color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }, {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }>>;
        site: z.ZodOptional<z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            fontSize: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            fontWeight: z.ZodOptional<z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>>;
            lineHeight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            fontStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
            color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }, {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }>>;
        author: z.ZodOptional<z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            fontSize: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            fontWeight: z.ZodOptional<z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>>;
            lineHeight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            fontStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
            color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }, {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }>>;
        price: z.ZodOptional<z.ZodObject<{
            text: z.ZodOptional<z.ZodString>;
            fontFamily: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            fontSize: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            fontWeight: z.ZodOptional<z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>>;
            lineHeight: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
            fontStyle: z.ZodOptional<z.ZodOptional<z.ZodEnum<["normal", "italic"]>>>;
            color: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }, {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        }>>;
        spacing: z.ZodOptional<z.ZodObject<{
            small: z.ZodOptional<z.ZodNumber>;
            large: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            small?: number | undefined;
            large?: number | undefined;
        }, {
            small?: number | undefined;
            large?: number | undefined;
        }>>;
        colors: z.ZodOptional<z.ZodObject<{
            brand: z.ZodOptional<z.ZodString>;
            accent: z.ZodOptional<z.ZodString>;
            text1: z.ZodOptional<z.ZodString>;
            text2: z.ZodOptional<z.ZodString>;
            surface1: z.ZodOptional<z.ZodString>;
            surface2: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            brand?: string | undefined;
            accent?: string | undefined;
            text1?: string | undefined;
            text2?: string | undefined;
            surface1?: string | undefined;
            surface2?: string | undefined;
        }, {
            brand?: string | undefined;
            accent?: string | undefined;
            text1?: string | undefined;
            text2?: string | undefined;
            surface1?: string | undefined;
            surface2?: string | undefined;
        }>>;
        gradient: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodObject<{
            path: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            path: string;
            width?: number | undefined;
        }, {
            path: string;
            width?: number | undefined;
        }>>;
        logo: z.ZodOptional<z.ZodObject<{
            path: z.ZodString;
            width: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            path: string;
            width?: number | undefined;
        }, {
            path: string;
            width?: number | undefined;
        }>>;
        fonts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            source: z.ZodString;
            weight: z.ZodOptional<z.ZodType<100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, z.ZodTypeDef, 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900>>;
            style: z.ZodOptional<z.ZodEnum<["normal", "italic"]>>;
            lang: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            source: string;
            weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            style?: "normal" | "italic" | undefined;
            lang?: string | undefined;
        }, {
            name: string;
            source: string;
            weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            style?: "normal" | "italic" | undefined;
            lang?: string | undefined;
        }>, "many">>;
        graphemeImages: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
        debug: z.ZodOptional<z.ZodBoolean>;
        format: z.ZodOptional<z.ZodEnum<["PNG", "JPEG", "WEBP"]>>;
        quality: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        path: string;
        title: {
            text: string;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        };
        description?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        site?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        author?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        price?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        spacing?: {
            small?: number | undefined;
            large?: number | undefined;
        } | undefined;
        colors?: {
            brand?: string | undefined;
            accent?: string | undefined;
            text1?: string | undefined;
            text2?: string | undefined;
            surface1?: string | undefined;
            surface2?: string | undefined;
        } | undefined;
        gradient?: string | undefined;
        image?: {
            path: string;
            width?: number | undefined;
        } | undefined;
        logo?: {
            path: string;
            width?: number | undefined;
        } | undefined;
        fonts?: {
            name: string;
            source: string;
            weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            style?: "normal" | "italic" | undefined;
            lang?: string | undefined;
        }[] | undefined;
        graphemeImages?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }, {
        path: string;
        title: {
            text: string;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        };
        description?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        site?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        author?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        price?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        spacing?: {
            small?: number | undefined;
            large?: number | undefined;
        } | undefined;
        colors?: {
            brand?: string | undefined;
            accent?: string | undefined;
            text1?: string | undefined;
            text2?: string | undefined;
            surface1?: string | undefined;
            surface2?: string | undefined;
        } | undefined;
        gradient?: string | undefined;
        image?: {
            path: string;
            width?: number | undefined;
        } | undefined;
        logo?: {
            path: string;
            width?: number | undefined;
        } | undefined;
        fonts?: {
            name: string;
            source: string;
            weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            style?: "normal" | "italic" | undefined;
            lang?: string | undefined;
        }[] | undefined;
        graphemeImages?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }>>]>>;
}, "strip", z.ZodTypeAny, {
    entries: Record<string, any>;
    param: string;
    getImageOptions: (args_0: any, ...args_1: unknown[]) => string | Promise<{
        path: string;
        title: {
            text: string;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        };
        description?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        site?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        author?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        price?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        spacing?: {
            small?: number | undefined;
            large?: number | undefined;
        } | undefined;
        colors?: {
            brand?: string | undefined;
            accent?: string | undefined;
            text1?: string | undefined;
            text2?: string | undefined;
            surface1?: string | undefined;
            surface2?: string | undefined;
        } | undefined;
        gradient?: string | undefined;
        image?: {
            path: string;
            width?: number | undefined;
        } | undefined;
        logo?: {
            path: string;
            width?: number | undefined;
        } | undefined;
        fonts?: {
            name: string;
            source: string;
            weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            style?: "normal" | "italic" | undefined;
            lang?: string | undefined;
        }[] | undefined;
        graphemeImages?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }>;
    template?: "wave" | "eCommerce" | "retro" | "bgPhoto" | "simple" | "branded" | undefined;
    getSlug?: ((args_0: string, args_1: any, ...args_2: unknown[]) => string) | undefined;
}, {
    entries: Record<string, any>;
    param: string;
    getImageOptions: (args_0: any, ...args_1: unknown[]) => string | Promise<{
        path: string;
        title: {
            text: string;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        };
        description?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        site?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        author?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        price?: {
            text?: string | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            lineHeight?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            color?: string | undefined;
        } | undefined;
        spacing?: {
            small?: number | undefined;
            large?: number | undefined;
        } | undefined;
        colors?: {
            brand?: string | undefined;
            accent?: string | undefined;
            text1?: string | undefined;
            text2?: string | undefined;
            surface1?: string | undefined;
            surface2?: string | undefined;
        } | undefined;
        gradient?: string | undefined;
        image?: {
            path: string;
            width?: number | undefined;
        } | undefined;
        logo?: {
            path: string;
            width?: number | undefined;
        } | undefined;
        fonts?: {
            name: string;
            source: string;
            weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | undefined;
            style?: "normal" | "italic" | undefined;
            lang?: string | undefined;
        }[] | undefined;
        graphemeImages?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }>;
    template?: "wave" | "eCommerce" | "retro" | "bgPhoto" | "simple" | "branded" | undefined;
    getSlug?: ((args_0: string, args_1: any, ...args_2: unknown[]) => string) | undefined;
}>;
export type OGApiConfig = z.infer<typeof ogApiConfig>;
