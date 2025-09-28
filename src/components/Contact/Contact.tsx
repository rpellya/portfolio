import { ContactItemCard } from './ContactItemCard/ContactItemCard';
import { contacts } from './mock/contacts';
import { useTranslation } from 'react-i18next';
import cls from './Contact.module.scss';

export const Contact: React.FC = () => {
    const { t } = useTranslation();
    return (
        <>
            <span>{t('contact.description')}</span>
            <div className={cls.card}>
                <div className={cls.socials}>
                    {contacts.map((i) => (
                        <ContactItemCard
                            key={i.label}
                            icon={i.icon}
                            title={i.label}
                            value={i.value}
                            link={i.link}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
