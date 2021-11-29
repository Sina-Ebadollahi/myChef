import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function UseTheme() {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("UseTheme() is not used in ThemeProvider area!");
  }
  return theme;
}
