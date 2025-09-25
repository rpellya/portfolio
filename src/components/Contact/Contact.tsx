import cls from './Contact.module.scss';
import { ContactItemCard } from './ContactItemCard/ContactItemCard';
import { contacts } from './mock/contacts';

export const Contact: React.FC = () => {
    return (
        <>
            <span>
                Вы можете связаться со мной через различные социальные сети или
                написать мне напрямую по адресу rpellya@gmail.com
            </span>
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
