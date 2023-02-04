import { useContext } from 'react';
import { Theme, ThemeContext, LOCALE_STORAGE_THEME_KEY } from './ThemeContext';

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme(): useThemeResult {
    
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCALE_STORAGE_THEME_KEY, newTheme)
    }
    return {theme, toggleTheme}
}