import type { ReactNode } from 'react';
import { ReactComponent as HomeIcon } from 'shared/assets/icons/home.svg';
import { ReactComponent as MailIcon } from 'shared/assets/icons/mail.svg';
import { ReactComponent as ResumeIcon } from 'shared/assets/icons/resume.svg';
import { ReactComponent as PersonIcon } from 'shared/assets/icons/personOnMac.svg';

interface SidebarItems {
    text: string;
    icon?: ReactNode;
    link: string;
}

export const sidevarItems: SidebarItems[] = [
    {
        text: 'Home',
        icon: <HomeIcon />,
        link: '/',
    },
    {
        text: 'About',
        icon: <PersonIcon />,
        link: 'about',
    },
    {
        text: 'Resume',
        icon: <ResumeIcon />,
        link: 'resume',
    },
    {
        text: 'Contact',
        icon: <MailIcon />,
        link: 'contact',
    },
];
