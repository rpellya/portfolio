import { type ReactNode } from 'react';
import { AppLink } from '../AppLink/AppLink';
import cls from './SidebarButton.module.scss';

interface SidebarButtonProps {
    icon?: ReactNode;
    text: string;
    onClick: (e: React.MouseEvent) => void;
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({
    icon,
    text,
    onClick,
}) => {
    return (
        <div className={cls.sidebarButton}>
            <AppLink theme="secondary" onClick={onClick}>
                <div>{icon}</div>
                <span>{text}</span>
            </AppLink>
        </div>
    );
};
