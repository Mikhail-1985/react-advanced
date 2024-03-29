import { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext, LOCALE_STORAGE_THEME_KEY } from '../lib/ThemeContext';


const defaultTheme = localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {


    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);
    document.body.className = theme;

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme]);

    return <>
        <ThemeContext.Provider
            value={defaultProps}
        >
            {children}
        </ThemeContext.Provider>
    </>;
};


export default ThemeProvider;