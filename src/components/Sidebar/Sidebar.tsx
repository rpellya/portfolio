import { SidebarButton } from 'shared/ui/SidebarButton/SidebarButton';
import { sidevarItems } from './sidebarItems';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
    return (
        <div className={styles.sideBar}>
            {sidevarItems.map((item) => (
                <SidebarButton
                    icon={item.icon}
                    text={item.text}
                    key={item.text}
                />
            ))}
        </div>
    );
};
