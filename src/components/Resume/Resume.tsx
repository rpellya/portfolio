import { classNames } from 'app/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ResumeItemCard } from './ResumeItemCard/ResumeItemCard';
import { useTranslation } from 'react-i18next';
import cls from './Resume.module.scss';

interface ResumeProps {
    className?: string;
}

export const Resume: React.FC<ResumeProps> = ({ className }) => {
    const { t } = useTranslation();

    const resumeLabels = Array.from({ length: 10 }, (_, i) =>
        t(`resume.experience.labels.${i}`),
    ).map((i) => i);

    return (
        <div className={classNames('', {}, [className])}>
            <span>{t('resume.description')}</span>
            <p>
                {t('resume.download.text')}
                <AppLink theme="primary" className={cls.link}>
                    {t('resume.download.here')}
                </AppLink>
            </p>
            <div className={cls.items}>
                <ResumeItemCard
                    title={t('resume.sumary.title')}
                    subTitle={t('resume.sumary.subTitle')}
                    description={t('resume.sumary.description')}
                    labels={[t('resume.sumary.city'), 'rpellya@gmail.com']}
                />
                <ResumeItemCard
                    className={cls.experience}
                    title={t('resume.experience.title')}
                    subTitle={t('resume.experience.subTitle')}
                    years={t('resume.experience.years')}
                    geoPlace={t('resume.experience.place')}
                    labels={resumeLabels}
                />
                <ResumeItemCard
                    title={t('resume.education.title')}
                    items={[
                        {
                            subTitle: t('resume.education.university.subTitle'),
                            years: t('resume.education.university.years'),
                            geoPlace: t('resume.education.university.place'),
                            description: t(
                                'resume.education.university.description',
                            ),
                        },
                        {
                            subTitle: t('resume.education.college.subTitle'),
                            years: t('resume.education.college.years'),
                            geoPlace: t('resume.education.college.place'),
                            description: t(
                                'resume.education.college.description',
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
};
