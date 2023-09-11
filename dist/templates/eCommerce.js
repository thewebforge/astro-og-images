import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const eCommerce = (options) => {
    return (_jsx("div", { style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
        }, children: _jsxs("div", { style: {
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                height: "100%",
            }, children: [_jsxs("div", { style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        width: "40%",
                        padding: options?.spacing?.small ?? "20px",
                        background: options?.gradient
                            ? options.gradient
                            : options?.colors?.surface1 ?? "whitesmoke",
                    }, children: [_jsxs("div", { style: {
                                display: "flex",
                                flexDirection: "column",
                            }, children: [_jsx("p", { style: {
                                        fontSize: options?.site?.fontSize ?? 24,
                                        fontWeight: options?.site?.fontWeight ?? "bold",
                                        color: options?.site?.color ??
                                            options?.colors?.brand ??
                                            "blueviolet",
                                    }, children: options?.site?.text ?? "www.example.com" }), _jsx("h1", { style: {
                                        fontSize: options?.title?.fontSize ?? 72,
                                        fontFamily: options?.title?.fontFamily ?? "inherit",
                                        fontWeight: options?.title?.fontWeight ?? 700,
                                        fontStyle: options?.title?.fontStyle ?? "normal",
                                        lineHeight: options?.title?.lineHeight ?? 1.1,
                                        color: options?.title?.color ?? options.colors?.text1 ?? "blue",
                                        textAlign: "left",
                                    }, children: options?.title.text ?? "Example Title" }), _jsx("p", { style: {
                                        fontSize: options?.description?.fontSize ?? 24,
                                        fontWeight: options?.description?.fontWeight ?? 400,
                                        color: options?.description?.color ??
                                            options?.colors?.text2 ??
                                            "darkslategray",
                                    }, children: options?.description?.text ?? "www.example.com" })] }), _jsx("div", { style: { display: "flex" }, children: _jsx("p", { style: {
                                    fontSize: options?.price?.fontSize ?? 32,
                                    fontFamily: options?.price?.fontFamily ?? "inherit",
                                    fontWeight: options?.price?.fontWeight ?? 700,
                                    fontStyle: options?.price?.fontStyle ?? "normal",
                                    lineHeight: options?.price?.lineHeight ?? 1.1,
                                    color: options?.price?.color ?? options?.colors?.surface1 ?? "white",
                                    backgroundColor: options?.colors?.brand ?? "blueviolet",
                                    padding: "10px 40px",
                                    borderRadius: "10px",
                                }, children: options?.price?.text ?? "ex: $49.99" }) })] }), _jsx("div", { style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        width: "60%",
                    }, children: _jsx("img", { style: { objectFit: "cover", width: "100%", height: "100%" }, src: options?.image?.path ?? "https://source.unsplash.com/random/1200×1200/?shoes" }) })] }) }));
};
