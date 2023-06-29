import type { OGImageOptions } from "../schema.js";

export const eCommerce = (options: OGImageOptions) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "40%",
            padding: options?.spacing?.small ?? "20px",
            background: options?.gradient
              ? options.gradient
              : options?.colors?.surface1 ?? "whitesmoke",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                fontSize: options?.site?.fontSize ?? 24,
                fontWeight: options?.site?.fontWeight ?? "bold",
                color:
                  options?.site?.color ??
                  options?.colors?.brand ??
                  "blueviolet",
              }}
            >
              {options?.site?.text ?? "www.example.com"}
            </p>
            <h1
              style={{
                fontSize: options?.title?.fontSize ?? 72,
                fontFamily: options?.title?.fontFamily ?? "inherit",
                fontWeight: options?.title?.fontWeight ?? 700,
                fontStyle: options?.title?.fontStyle ?? "normal",
                lineHeight: options?.title?.lineHeight ?? 1.1,
                color: options?.title?.color ?? options.colors?.text1 ?? "blue",
                textAlign: "left",
              }}
            >
              {options?.title.text ?? "Example Title"}
            </h1>
            <p
              style={{
                fontSize: options?.description?.fontSize ?? 24,
                fontWeight: options?.description?.fontWeight ?? 400,
                color:
                  options?.description?.color ??
                  options?.colors?.text2 ??
                  "darkslategray",
              }}
            >
              {options?.description?.text ?? "www.example.com"}
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <p
              style={{
                fontSize: options?.price?.fontSize ?? 32,
                fontFamily: options?.price?.fontFamily ?? "inherit",
                fontWeight: options?.price?.fontWeight ?? 700,
                fontStyle: options?.price?.fontStyle ?? "normal",
                lineHeight: options?.price?.lineHeight ?? 1.1,
                color: options?.price?.color ?? options?.colors?.surface1 ?? "white",
                backgroundColor: options?.colors?.brand ?? "blueviolet",
                padding: "10px 40px",
                borderRadius: "10px",
              }}
            >
              {options?.price?.text ?? "ex: $49.99"}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "60%",
          }}
        >
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={options?.image?.path ?? "https://source.unsplash.com/random/1200×1200/?shoes"}
          />
        </div>
      </div>
    </div>
  );
};
