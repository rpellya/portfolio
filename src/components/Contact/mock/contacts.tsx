import type { ReactNode } from 'react';
import { ReactComponent as MailIcon } from 'shared/assets/icons/mail.svg';
import { ReactComponent as TelegramIcon } from 'shared/assets/icons/telegram.svg';
import { ReactComponent as YoutubeIcon } from 'shared/assets/icons/youtube.svg';
import { ReactComponent as GithubIcon } from 'shared/assets/icons/github.svg';

interface Contact {
    label: string;
    value: string;
    icon: ReactNode;
}
export const contacts: Contact[] = [
    {
        label: 'Email',
        value: 'rpellya@gmail.com',
        icon: <MailIcon />,
    },
    {
        label: 'Telegram',
        value: '@pellya',
        icon: <TelegramIcon />,
    },
    {
        label: 'Github',
        value: '@rpellya',
        icon: <GithubIcon />,
    },
    {
        label: 'YouTube',
        value: 'Pellya Roman',
        icon: <YoutubeIcon />,
    },
];
