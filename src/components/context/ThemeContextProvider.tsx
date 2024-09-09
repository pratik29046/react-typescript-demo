import { createContext } from "react";
import { theme } from "./themes";

type themeContextProps={
    children: React.ReactNode;
}
export const ThemeContext = createContext(theme)

export const  ThemeContextProvider = ({children}: themeContextProps)=>{

    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>

}
