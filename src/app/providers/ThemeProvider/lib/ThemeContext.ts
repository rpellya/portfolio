import { createContext } from 'react';

export const Theme = {
    LIGHT: 'App_light_theme',
    DARK: 'App_dark_theme',
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];

export interface ThemeContextProps {
    theme?: ThemeType;
    setTheme?: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
