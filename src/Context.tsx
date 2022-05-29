import { createContext, ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

export const themeContext = createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <themeContext.Provider value={props.theme}>
            {props.children}
        </themeContext.Provider>
    );
}

export function useTheme(): Theme {
    return useContext(themeContext);
}
