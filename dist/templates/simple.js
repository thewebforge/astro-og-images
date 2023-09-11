import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const simple = (options) => {
    return (_jsxs("div", { style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            background: options?.gradient
                ? options.gradient
                : options?.colors?.surface1 ?? "whitesmoke",
            padding: options?.spacing?.large ?? 72,
            gap: options?.spacing?.small ?? 36,
            border: `${options?.spacing?.small ?? 36}px solid ${options?.colors?.brand ?? "blueviolet"}`,
        }, children: [_jsx("h1", { style: {
                    fontSize: options?.title?.fontSize ?? 72,
                    fontFamily: options?.title?.fontFamily ?? "Atkinson Hyperlegible",
                    fontWeight: options?.title?.fontWeight ?? 700,
                    fontStyle: options?.title?.fontStyle ?? "normal",
                    textAlign: "left",
                    lineHeight: options?.title?.lineHeight ?? 1.1,
                    color: options?.title?.color ?? options.colors?.text1 ?? "black",
                    padding: 0,
                    margin: 0,
                }, children: options.title.text }), options.description && (_jsx("p", { style: {
                    fontSize: options?.description?.fontSize ?? 32,
                    fontFamily: options?.description?.fontFamily ?? "Atkinson Hyperlegible",
                    fontWeight: options?.description?.fontWeight ?? 400,
                    fontStyle: options?.description?.fontStyle ?? "normal",
                    padding: 0,
                    margin: 0,
                    textAlign: "start",
                    color: options?.description?.color ?? options.colors?.text2 ?? "darkslategrey",
                }, children: options.description.text })), options?.site && (_jsx("p", { style: {
                    fontSize: options?.site?.fontSize ?? 24,
                    fontFamily: options?.site?.fontFamily ?? "Atkinson Hyperlegible",
                    fontWeight: options?.site?.fontWeight ?? 700,
                    fontStyle: options?.site?.fontStyle ?? "normal",
                    textAlign: "left",
                    lineHeight: options?.site?.lineHeight ?? 1.1,
                    color: options?.site?.color ?? options.colors?.text2 ?? "darkslategray",
                    padding: 0,
                    margin: 0,
                }, children: options?.site?.text }))] }));
};
