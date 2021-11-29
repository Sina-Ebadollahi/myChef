import { createContext, useReducer } from "react";
export const ThemeContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#58249c",
    theme: "dark",
  });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_MODE", payload: theme });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
