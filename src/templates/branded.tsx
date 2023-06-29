import type { OGImageOptions } from "../schema.js";
import { loadImageToBase64 } from "../loader.js";

export const branded = async (options: OGImageOptions) => {
    const logo = options.logo ? await loadImageToBase64(options.logo.path) : null;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        background: options?.gradient
          ? options.gradient
          : options?.colors?.surface1 ??
            "linear-gradient( 111.4deg,  rgba(7,7,9,1) 6.5%, rgba(27,24,113,1) 93.2% )",
        padding: options?.spacing?.large ?? 72,
        gap: options?.spacing?.small ?? 36,
        borderLeft: `${options?.spacing?.small ?? 36}px solid ${
          options?.colors?.brand ?? "darkorange"
        }`,
      }}
    >
      {logo && (<img
        src={logo}
        width="250"
      />)}
      <h1
        style={{
          fontSize: options?.title?.fontSize ?? 72,
          fontFamily: options?.title?.fontFamily ?? "Atkinson Hyperlegible",
          fontWeight: options?.title?.fontWeight ?? 700,
          fontStyle: options?.title?.fontStyle ?? "normal",
          textAlign: "left",
          lineHeight: options?.title?.lineHeight ?? 1,
          color: options?.title?.color ?? options.colors?.text1 ?? "white",
          padding: 0,
          margin: 0,
        }}
      >
        {options.title.text}
      </h1>
      {options.description && (
        <p
          style={{
            fontSize: options?.description?.fontSize ?? 32,
            fontFamily:
              options?.description?.fontFamily ?? "Atkinson Hyperlegible",
            fontWeight: options?.description?.fontWeight ?? 400,
            fontStyle: options?.description?.fontStyle ?? "normal",
            padding: 0,
            margin: 0,
            textAlign: "start",
            color:
              options?.description?.color ??
              options.colors?.text2 ??
              "whitesmoke",
          }}
        >
          {options.description.text}
        </p>
      )}
    </div>
  );
};
