import { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext, LOCALE_STORAGE_THEME_KEY } from '../lib/ThemeContext';


const defaultTheme = localStorage.getItem(LOCALE_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {


    const [theme, setTheme] = useState<Theme>(defaultTheme);

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