import cls from './ContactItemCard.module.scss';

interface ContactItemCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
}

export const ContactItemCard: React.FC<ContactItemCardProps> = ({
    title,
    value,
    icon,
}) => {
    return (
        <div className={cls.ContactItemCard}>
            <div className={cls.iconContainer}>{icon}</div>
            <div className={cls.infoContainer}>
                <h4 className={cls.title}>{title}:</h4>
                <span className={cls.value}>{value}</span>
            </div>
        </div>
    );
};
