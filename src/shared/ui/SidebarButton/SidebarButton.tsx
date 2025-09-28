import { type ReactNode } from 'react';
import { AppLink } from '../AppLink/AppLink';
import cls from './SidebarButton.module.scss';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    return (
        <div className={cls.sidebarButton}>
            <AppLink theme="secondary" onClick={onClick} className={cls.link}>
                <div>{icon}</div>
                <span>{t(text)}</span>
            </AppLink>
        </div>
    );
};
