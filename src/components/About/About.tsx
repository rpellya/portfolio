import { classNames } from 'app/lib/classNames';
import { ProfileInfoCard } from './ProfileInfoCard/ProfileInfoCard';
import { profileInfo } from './mock/profileInfo';
import { useTranslation } from 'react-i18next';
import cls from './About.module.scss';

interface AboutProps {
    className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.About, {}, [className])}>
            <p className={cls.description}>{t('about.description')}</p>
            <div className={cls.infoContainer}>
                <img
                    className={cls.avatar}
                    src="https://avatars.githubusercontent.com/u/103450915?v=4"
                />
                <div className={cls.info}>
                    <h3 className={cls.header}>{t('about.header')}</h3>
                    <span className={cls.subHeader}>
                        {t('about.subHeader')}
                    </span>
                    <div>
                        {profileInfo.map((item, index) => (
                            <ProfileInfoCard
                                key={index}
                                label={item.label}
                                value={item.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
