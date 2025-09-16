import type { ReactNode } from 'react';
import cls from './SidebarButton.module.scss';

interface SidebarButtonProps {
    icon?: ReactNode;
    text: string;
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, text }) => {
    return (
        <div className={cls.sidebarButton}>
            {icon}
            <span>{text}</span>
        </div>
    );
};
