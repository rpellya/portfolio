import type { ReactNode } from 'react';
import { ReactComponent as MailIcon } from 'shared/assets/icons/mail.svg';
import { ReactComponent as TelegramIcon } from 'shared/assets/icons/telegram.svg';
import { ReactComponent as YoutubeIcon } from 'shared/assets/icons/youtube.svg';
import { ReactComponent as GithubIcon } from 'shared/assets/icons/github.svg';

interface Contact {
    label: string;
    value: string;
    icon: ReactNode;
    link?: string;
}
export const contacts: Contact[] = [
    {
        label: 'Email',
        value: 'rpellya@gmail.com',
        icon: <MailIcon />,
    },
    {
        label: 'Telegram',
        value: 'pellya',
        icon: <TelegramIcon />,
        link: 'https://t.me/pellya',
    },
    {
        label: 'Github',
        value: 'rpellya',
        icon: <GithubIcon />,
        link: 'https://github.com/rpellya',
    },
    {
        label: 'YouTube',
        value: 'Pellya Roman',
        icon: <YoutubeIcon />,
        link: 'https://www.youtube.com/@pellyait',
    },
];
