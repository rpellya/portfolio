import { memo } from 'react';
import { classNames } from 'app/lib/classNames';
import type { AppLinkTheme } from './types';
import cls from './AppLink.module.scss';

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
                className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            >
                {children}
            </a>
        );
    },
);
