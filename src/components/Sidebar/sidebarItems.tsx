import type { ReactNode } from 'react';
import { ReactComponent as HomeIcon } from 'shared/assets/icons/home.svg';
import { ReactComponent as MailIcon } from 'shared/assets/icons/mail.svg';
import { ReactComponent as ResumeIcon } from 'shared/assets/icons/resume.svg';
import { ReactComponent as PersonIcon } from 'shared/assets/icons/personOnMac.svg';
import { ReactComponent as SkillsIcon } from 'shared/assets/icons/skills.svg';

interface SidebarItems {
    text: string;
    icon?: ReactNode;
    link: string;
}

export const sidevarItems: SidebarItems[] = [
    {
        text: 'sidebar.home',
        icon: <HomeIcon />,
        link: 'home',
    },
    {
        text: 'sidebar.about',
        icon: <PersonIcon />,
        link: 'about',
    },
    {
        text: 'sidebar.skills',
        icon: <SkillsIcon />,
        link: 'skills',
    },
    {
        text: 'sidebar.resume',
        icon: <ResumeIcon />,
        link: 'resume',
    },
    {
        text: 'sidebar.contact',
        icon: <MailIcon />,
        link: 'contact',
    },
];
