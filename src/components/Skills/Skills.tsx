import { Progress } from 'shared/ui/Progress/Progress';
import { classNames } from 'app/lib/classNames';
import { additionalSkills, skills } from './mock/skills';
import { useTranslation } from 'react-i18next';
import { Tag } from 'shared/ui/Tag';
import cls from './Skills.module.scss';

interface SkillsProps {
    className?: string;
}

export const Skills: React.FC<SkillsProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.description}>{t('skills.description')}</div>
            <h3 className={cls.subtitle}>{t('skills.subtitle')}</h3>
            <div className={cls.skillsContainer}>
                {skills.map((skill) => (
                    <Progress
                        key={skill.name}
                        label={skill.name}
                        value={skill.value}
                    />
                ))}
            </div>
            <h4 className={cls.addSkillsTitle}>{t('skills.addSkills')}</h4>
            <div className={cls.addSkillsContainer}>
                {additionalSkills.map((skill) => (
                    <Tag label={skill} />
                ))}
            </div>
        </div>
    );
};
