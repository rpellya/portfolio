import { useMemo, useState, type PropsWithChildren } from 'react';
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
    type ThemeType,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: ThemeType;
}

function getInitialTheme(): ThemeType {
    const saved = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    if (saved === Theme.LIGHT || saved === Theme.DARK) {
        return saved;
    }
    return Theme.LIGHT;
}

const ThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = ({
    children,
    initialTheme,
}) => {
    const [theme, setTheme] = useState<ThemeType>(
        initialTheme || getInitialTheme(),
    );

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
