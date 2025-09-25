import { AppLink } from 'shared/ui/AppLink/AppLink';
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
    return (
        <div className={cls.ContactItemCard}>
            <AppLink to={link} className={cls.link} target={link && '_blank'}>
                <div className={cls.iconContainer}>{icon}</div>
                <div className={cls.infoContainer}>
                    <h4 className={cls.title}>{title}:</h4>
                    <span className={cls.value}>{value}</span>
                </div>
            </AppLink>
        </div>
    );
};
