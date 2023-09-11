declare const templates: {
    bgPhoto: (options: {
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
        graphemeImages?: import("zod").objectOutputType<{}, import("zod").ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    branded: (options: {
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
        graphemeImages?: import("zod").objectOutputType<{}, import("zod").ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }) => Promise<import("react/jsx-runtime").JSX.Element>;
    eCommerce: (options: {
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
        graphemeImages?: import("zod").objectOutputType<{}, import("zod").ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    retro: (options: {
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
        graphemeImages?: import("zod").objectOutputType<{}, import("zod").ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    simple: (options: {
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
        graphemeImages?: import("zod").objectOutputType<{}, import("zod").ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    wave: (options: {
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
        graphemeImages?: import("zod").objectOutputType<{}, import("zod").ZodString, "strip"> | undefined;
        debug?: boolean | undefined;
        format?: "PNG" | "JPEG" | "WEBP" | undefined;
        quality?: number | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
};
export default templates;
