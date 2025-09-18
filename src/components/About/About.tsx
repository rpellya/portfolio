import { classNames } from 'app/lib/classNames';
import cls from './About.module.scss';
import { ProfileInfoCard } from './ProfileInfoCard/ProfileInfoCard';
import { profileInfo } from './mock/profileInfo';

interface AboutProps {
    className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
    return (
        <div className={classNames(cls.About, {}, [className])} id="About">
            <p className={cls.description}>
                My name is Pellya Roman based in Russia and I am a software
                developer. My career has been characterised by continuous
                professional growth and the successful implementation of a
                number of projects. Some of my achievements are listed below.
            </p>
            <div className={cls.infoContainer}>
                <img
                    className={cls.avatar}
                    src="https://avatars.githubusercontent.com/u/103450915?v=4"
                />
                <div className={cls.info}>
                    <h3 className={cls.header}>Forntend Web Developer.</h3>
                    <span className={cls.subHeader}>
                        I am a skilled frontend developer with modern web
                        technologies. I have a strong understanding of web
                        development principles and best practices, and I am
                        committed to delivering high-quality, user-friendly web
                        applications.
                    </span>
                    <div>
                        {profileInfo.map((i) => (
                            <ProfileInfoCard label={i.label} value={i.value} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
