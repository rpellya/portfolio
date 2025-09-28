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
        label: 'contact.socials.email',
        value: 'rpellya@gmail.com',
        icon: <MailIcon />,
    },
    {
        label: 'contact.socials.telegram',
        value: 'pellya',
        icon: <TelegramIcon />,
        link: 'https://t.me/pellya',
    },
    {
        label: 'contact.socials.github',
        value: 'rpellya',
        icon: <GithubIcon />,
        link: 'https://github.com/rpellya',
    },
    {
        label: 'contact.socials.youtube',
        value: 'Pellya Roman',
        icon: <YoutubeIcon />,
        link: 'https://www.youtube.com/@pellyait',
    },
];
