import { classNames } from 'app/lib/classNames';
import { Layout } from 'shared/ui/Layout';
import { About } from 'components/About';
import { Skills } from 'components/Skills';
import { Resume } from 'components/Resume';
import { Contact } from 'components/Contact';
import { useTranslation } from 'react-i18next';
import cls from './ProfileOverview.module.scss';

interface ProfileOverviewProps {
    className?: string;
}

export const ProfileOverview: React.FC<ProfileOverviewProps> = ({
    className,
}) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ProfileOverview, {}, [className])}>
            <Layout title={t('about.title')} id="about">
                <About />
            </Layout>
            <Layout
                title={t('skills.title')}
                className={cls.greenBackground}
                id="skills"
            >
                <Skills />
            </Layout>
            <Layout title={t('resume.title')} id="resume">
                <Resume />
            </Layout>
            <Layout
                title={t('contact.title')}
                className={cls.greenBackground}
                id="contact"
            >
                <Contact />
            </Layout>
        </div>
    );
};
