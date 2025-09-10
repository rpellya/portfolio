import type { ReactNode } from 'react';
import styles from './SidebarButton.module.scss';

interface SidebarButtonProps {
    icon?: ReactNode;
    text: string;
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, text }) => {
    return (
        <div className={styles.sidebarButton}>
            {icon}
            <span>{text}</span>
        </div>
    );
};
