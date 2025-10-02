import { type PropsWithChildren } from 'react';
import { classNames } from 'app/lib/classNames';
import cls from './Layout.module.scss';

interface LayoutProps {
    id: string;
    title: string;
    className?: string;
}

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
    id,
    title,
    children,
    className,
}) => {
    return (
        <div className={classNames(cls.Layout, {}, [className])} id={id}>
            <h2 className={cls.title}>{title}</h2>
            {children}
        </div>
    );
};
