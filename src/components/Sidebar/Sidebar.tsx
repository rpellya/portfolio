import { SidebarButton } from 'shared/ui/SidebarButton/SidebarButton';
import { sidevarItems } from './sidebarItems';
import { ReactComponent as GithubIcon } from 'shared/assets/icons/github.svg';
import { ReactComponent as TelegramIcon } from 'shared/assets/icons/telegram.svg';
import { ReactComponent as YoutubeIcon } from 'shared/assets/icons/youtube.svg';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SwitchBurger } from './SwitchBurger/SwitchBurger';
import { useCallback, useEffect, useState } from 'react';
import { classNames } from 'app/lib/classNames';
import { useDebounce } from 'shared/hooks/useDebounse/useDebounse';
import cls from './Sidebar.module.scss';

export const Sidebar = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [closeSidebar, setCloseSidebar] = useState<boolean>(
        windowWidth <= 1200,
    );

    const handleResize = useCallback(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    const debouncedHandleResize = useDebounce<Event>(handleResize, 250);

    useEffect(() => {
        window.addEventListener('resize', debouncedHandleResize);
        // Очистка слушателя при размонтировании компонента
        return () =>
            window.removeEventListener('resize', debouncedHandleResize);
    }, [debouncedHandleResize, windowWidth]);

    useEffect(() => {
        if (windowWidth < 1200) {
            setCloseSidebar(true);
        } else {
            setCloseSidebar(false);
        }
    }, [windowWidth]);

    const handleToggle = useCallback(() => {
        setCloseSidebar(!closeSidebar);
    }, [closeSidebar]);

    const handleClickLink = useCallback(
        (event: React.MouseEvent, link: string) => {
            event.preventDefault();
            document
                .getElementById(link)
                ?.scrollIntoView({ behavior: 'smooth' });
        },
        [],
    );

    return (
        <>
            <div
                className={classNames(cls.sideBarContent, {
                    [cls.closed]: closeSidebar,
                })}
            >
                <header className={cls.infoContainer}>
                    <div>
                        <img
                            className={cls.avatar}
                            src="https://avatars.githubusercontent.com/u/103450915?v=4"
                        />
                    </div>
                    <h1 className={cls.titleName}>Pellya Roman</h1>

                    <div className={cls.socials}>
                        <AppLink
                            className={cls.appLink}
                            theme="secondary"
                            href="https://github.com/rpellya"
                            target="_blank"
                        >
                            <GithubIcon />
                        </AppLink>
                        <AppLink
                            className={cls.appLink}
                            theme="secondary"
                            href="https://t.me/rpellya"
                            target="_blank"
                        >
                            <TelegramIcon />
                        </AppLink>
                        <AppLink
                            className={cls.appLink}
                            theme="secondary"
                            href="https://www.youtube.com/@pellyait"
                            target="_blank"
                        >
                            <YoutubeIcon />
                        </AppLink>
                    </div>
                </header>

                <menu className={cls.menu}>
                    {sidevarItems.map((item) => (
                        <SidebarButton
                            onClick={(e: React.MouseEvent) =>
                                handleClickLink(e, item.link)
                            }
                            icon={item.icon}
                            text={item.text}
                            key={item.text}
                        />
                    ))}
                </menu>

                <footer className={cls.license}>
                    <div>
                        <span>© Copyright</span>
                        <span className={cls.name}>Pellya</span>
                    </div>
                    <div>
                        <span>Designed by</span>
                        <a
                            className={cls.link}
                            href="https://github.com/rpellya"
                            target="_blank"
                        >
                            Pellya
                        </a>
                    </div>
                </footer>
            </div>

            <SwitchBurger onClick={handleToggle} closed={closeSidebar} />
        </>
    );
};
