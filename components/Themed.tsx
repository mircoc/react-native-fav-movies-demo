// Learn more about Light and Dark modes:
// https://docs.expo.dev/guides/color-schemes/
import {
  Text as DefaultText,
  useColorScheme,
  View as DefaultView,
} from "react-native";

import {ColorName, Colors, DEFAULT_COLOR_SCHEMA} from "../constants/Colors";


export function useThemeColor(props: { [x: string]: any; light?: any; dark?: any; }, colorName: ColorName) {
  const theme = useColorScheme() || DEFAULT_COLOR_SCHEMA;

  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: { [x: string]: any; style?: any; lightColor?: string; darkColor?: string; }) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: { [x: string]: any; style?: any; lightColor?: string; darkColor?: string; }) {
  const { style, lightColor, darkColor, ...otherProps } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
