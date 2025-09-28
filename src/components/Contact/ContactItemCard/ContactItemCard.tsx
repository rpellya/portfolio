import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './ContactItemCard.module.scss';

interface ContactItemCardProps {
    title: string;
    value: string;
    link?: string;
    icon: React.ReactNode;
}

export const ContactItemCard: React.FC<ContactItemCardProps> = ({
    title,
    value,
    link,
    icon,
}) => {
    const { t } = useTranslation();

    return (
        <div className={cls.ContactItemCard}>
            <AppLink to={link} className={cls.link} target={link && '_blank'}>
                <div className={cls.iconContainer}>{icon}</div>
                <div className={cls.infoContainer}>
                    <h4 className={cls.title}>{t(title)}:</h4>
                    <span className={cls.value}>{value}</span>
                </div>
            </AppLink>
        </div>
    );
};
