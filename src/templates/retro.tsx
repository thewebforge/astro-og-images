import type { OGImageOptions } from "~/schema";

export const retro = (options: OGImageOptions) => {
  return (
    <div
      style={{
        background: options?.gradient
          ? options.gradient
          : options?.colors?.surface1 ?? "whitesmoke",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: `5px solid ${options?.colors?.text1 ?? "black"}`,
          background: `url('${
            options?.image?.path ??
            "https://source.unsplash.com/random/650/?abstract"
          }')`,
          backgroundSize: "cover",
          borderRadius: "5px",
          boxShadow: ` ${options.spacing?.small ?? 32}px ${
            options.spacing?.small ?? 32
          }px ${options.colors?.text1 ?? "black"}`,
          filter: "sepia(80%) grayscale(65%)",
          display: "flex",
          justifyContent: "center",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: 0,
            padding: options?.spacing?.large ?? 72,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255,255,255,0.5)",
          }}
        >
          <h1
            style={{
              fontSize: options?.title?.fontSize ?? 72,
              fontFamily: options?.title?.fontFamily ?? "inherit",
              fontWeight: options?.title?.fontWeight ?? 700,
              fontStyle: options?.title?.fontStyle ?? "normal",
              textAlign: "start",
              lineHeight: options?.title?.lineHeight ?? 1.1,
              color: options?.title?.color ?? options.colors?.text1 ?? "black",
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
                fontFamily: options?.description?.fontFamily ?? "inherit",
                fontWeight: options?.description?.fontWeight ?? 400,
                fontStyle: options?.description?.fontStyle ?? "normal",
                padding: 0,
                margin: 0,
                textAlign: "left",
                color:
                  options?.description?.color ??
                  options.colors?.text1 ?? "black",
              }}
            >
              {options.description.text}
            </p>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: 0,
              margin: 0,
            }}
          >
            {options?.author && (
              <span
                style={{
                  fontSize: options?.author?.fontSize ?? 28,
                  fontFamily: options?.author?.fontFamily ?? "inherit",
                  fontWeight: options?.author?.fontWeight ?? 400,
                  fontStyle: options?.author?.fontStyle ?? "normal",
                  textAlign: "start",
                  color:
                    options?.author?.color ?? options.colors?.text1 ?? "black",
                }}
              >
                By {options.author.text}
              </span>
            )}

            {options.site && (
              <span
                style={{
                  fontSize: options?.site?.fontSize ?? 28,
                  fontFamily: options?.site?.fontFamily ?? "inherit",
                  fontWeight: options?.site?.fontWeight ?? 400,
                  fontStyle: options?.site?.fontStyle ?? "normal",
                  color:
                  options?.author?.color ?? options.colors?.text1 ?? "black",
                }}
              >
                {options.site.text}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
