import { SidebarButton } from 'shared/ui/SidebarButton/SidebarButton';
import { sidevarItems } from './sidebarItems';
import { ReactComponent as GithubIcon } from 'shared/assets/icons/github.svg';
import { ReactComponent as TelegramIcon } from 'shared/assets/icons/telegram.svg';
import { ReactComponent as YoutubeIcon } from 'shared/assets/icons/youtube.svg';
import styles from './Sidebar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';

export const Sidebar = () => {
    return (
        <div className={styles.sideBar}>
            <header className={styles.infoContainer}>
                <div>
                    <img
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/103450915?v=4"
                    />
                </div>
                <h1 className={styles.titleName}>Pellya Roman</h1>

                <div className={styles.socials}>
                    <AppLink
                        className={styles.appLink}
                        theme="secondary"
                        href="https://github.com/rpellya"
                        target="_blank"
                    >
                        <GithubIcon />
                    </AppLink>
                    <AppLink
                        className={styles.appLink}
                        theme="secondary"
                        href="https://t.me/rpellya"
                        target="_blank"
                    >
                        <TelegramIcon />
                    </AppLink>
                    <AppLink
                        className={styles.appLink}
                        theme="secondary"
                        href="https://www.youtube.com/@pellyait"
                        target="_blank"
                    >
                        <YoutubeIcon />
                    </AppLink>
                </div>
            </header>

            <menu className={styles.menu}>
                {sidevarItems.map((item) => (
                    <SidebarButton
                        icon={item.icon}
                        text={item.text}
                        key={item.text}
                    />
                ))}
            </menu>

            <footer className={styles.license}>
                <div>
                    <span>© Copyright</span>
                    <span className={styles.name}>Pellya</span>
                </div>
                <div>
                    <span>Designed by</span>
                    <a
                        className={styles.link}
                        href="https://github.com/rpellya"
                        target="_blank"
                    >
                        Pellya
                    </a>
                </div>
            </footer>
        </div>
    );
};
