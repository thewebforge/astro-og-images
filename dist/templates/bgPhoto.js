import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const bgPhoto = (options) => {
    return (_jsxs("div", { style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: options?.gradient
                ? options.gradient
                : options?.colors?.surface1 ?? "whitesmoke",
            padding: options?.spacing?.large ?? 72,
            gap: options?.spacing?.small ?? 36,
        }, children: [_jsx("img", { style: {
                    width: 1200,
                    height: 630,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                    margin: 0,
                    padding: 0,
                }, src: options?.image?.path ??
                    `https://picsum.photos/630/1200?random=${Math.floor(Math.random() * 1000)}` }), _jsx("div", { style: {
                    background: options?.colors?.surface1 ?? "black",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    opacity: 0.7,
                    position: "absolute",
                } }), _jsx("h1", { style: {
                    fontSize: options?.title?.fontSize ?? 72,
                    fontFamily: options?.title?.fontFamily ?? "inherit",
                    fontWeight: options?.title?.fontWeight ?? 700,
                    fontStyle: options?.title?.fontStyle ?? "normal",
                    textAlign: "center",
                    lineHeight: options?.title?.lineHeight ?? 1.1,
                    color: options?.title?.color ?? options.colors?.text1 ?? "white",
                    padding: 0,
                    margin: 0,
                }, children: options.title.text }), options.description && (_jsx("p", { style: {
                    fontSize: options?.description?.fontSize ?? 32,
                    fontFamily: options?.description?.fontFamily ?? "inherit",
                    fontWeight: options?.description?.fontWeight ?? 400,
                    fontStyle: options?.description?.fontStyle ?? "normal",
                    padding: 0,
                    margin: 0,
                    textAlign: "center",
                    color: options?.description?.color ??
                        options.colors?.text1 ?? "white",
                }, children: options.description.text }))] }));
};
