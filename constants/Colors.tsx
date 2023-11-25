const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export type ColorSchemeName = "light" | "dark";

export type ColorName =
  | "background"
  | "text"
  | "tint"
  | "tabIconDefault"
  | "tabIconSelected";

export type ColorType = {
  [key in ColorName]: string;
};

export type ColorsType = {
  [key in ColorSchemeName]: ColorType;
};

export const DEFAULT_COLOR_SCHEMA: ColorSchemeName = "light";

export const Colors: ColorsType = {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};
