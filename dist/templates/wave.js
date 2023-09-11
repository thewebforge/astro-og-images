import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const wave = (options) => {
    return (_jsxs("div", { style: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            background: options?.gradient ? options.gradient : options?.colors?.surface1 ?? "whitesmoke",
            position: "relative",
            padding: options?.spacing?.large ?? 72,
            paddingBottom: options?.spacing?.small ?? 36,
            gap: options?.spacing?.small ?? 36,
        }, children: [_jsxs("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: options?.spacing?.small ?? 36,
                    padding: 0,
                    margin: 0,
                }, children: [_jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: 0,
                            padding: 0,
                            margin: 0,
                        }, children: [_jsx("h1", { style: {
                                    fontSize: options?.title?.fontSize ?? 72,
                                    fontFamily: options?.title?.fontFamily ?? "inherit",
                                    fontWeight: options?.title?.fontWeight ?? 700,
                                    fontStyle: options?.title?.fontStyle ?? "normal",
                                    textAlign: "left",
                                    lineHeight: options?.title?.lineHeight ?? 1.1,
                                    color: options?.title?.color ?? options.colors?.text1 ?? "black",
                                    padding: 0,
                                    margin: 0,
                                }, children: options.title.text }), options?.author && (_jsxs("p", { style: {
                                    fontSize: options?.author?.fontSize ?? 28,
                                    fontFamily: options?.author?.fontFamily ?? "inherit",
                                    fontWeight: options?.author?.fontWeight ?? 400,
                                    fontStyle: options?.author?.fontStyle ?? "normal",
                                    padding: 0,
                                    margin: 0,
                                    textAlign: "start",
                                    color: options?.author?.color ?? options.colors?.brand ?? "tomato",
                                }, children: ["By ", options.author.text] }))] }), options.description && (_jsx("p", { style: {
                            fontSize: options?.description?.fontSize ?? 32,
                            fontFamily: options?.description?.fontFamily ?? "inherit",
                            fontWeight: options?.description?.fontWeight ?? 400,
                            fontStyle: options?.description?.fontStyle ?? "normal",
                            padding: 0,
                            margin: 0,
                            textAlign: "start",
                            color: options?.description?.color ?? options.colors?.text2 ?? "darkslategrey",
                        }, children: options.description.text }))] }), _jsx("svg", { style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                }, viewBox: "0 0 1200 627", width: "1200", height: "627", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M0 513L28.5 509.8C57 506.7 114 500.3 171.2 484.5C228.3 468.7 285.7 443.3 342.8 435C400 426.7 457 435.3 514.2 447.3C571.3 459.3 628.7 474.7 685.8 490.7C743 506.7 800 523.3 857.2 522.5C914.3 521.7 971.7 503.3 1028.8 491.8C1086 480.3 1143 475.7 1171.5 473.3L1200 471L1200 628L1171.5 628C1143 628 1086 628 1028.8 628C971.7 628 914.3 628 857.2 628C800 628 743 628 685.8 628C628.7 628 571.3 628 514.2 628C457 628 400 628 342.8 628C285.7 628 228.3 628 171.2 628C114 628 57 628 28.5 628L0 628Z", fill: options?.colors?.accent ?? "tomato", strokeLinecap: "round", strokeLinejoin: "miter" }) }), options.site && (_jsx("p", { style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    width: "100%",
                    fontSize: options?.site?.fontSize ?? 24,
                    fontFamily: options?.site?.fontFamily ?? "inherit",
                    fontWeight: options?.site?.fontWeight ?? 400,
                    fontStyle: options?.site?.fontStyle ?? "normal",
                    padding: 0,
                    margin: 0,
                    color: options?.site?.color ?? options.colors?.surface1 ?? "white",
                }, children: options.site.text }))] }));
};
