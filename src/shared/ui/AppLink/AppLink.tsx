import { memo } from 'react';
import { classNames } from 'app/lib/classNames';
import styles from './AppLink.module.scss';
import type { AppLinkTheme } from './types';

interface AppLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
    theme?: AppLinkTheme;
}
/**
 * AppLink component - with memo, because children is string on 99%
 */
export const AppLink = memo(
    ({
        href,
        className,
        theme = 'primary',
        children,
        ...props
    }: AppLinkProps) => {
        return (
            <a
                {...props}
                href={href}
                className={classNames(styles.AppLink, {}, [
                    className,
                    styles[theme],
                ])}
            >
                {children}
            </a>
        );
    },
);
