import { Progress } from 'shared/ui/Progress/Progress';
import { classNames } from 'app/lib/classNames';
import { skills } from './mock/skills';
import cls from './Skills.module.scss';
import { useTranslation } from 'react-i18next';

interface SkillsProps {
    className?: string;
}

export const Skills: React.FC<SkillsProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.description}>{t('skills.description')}</div>
            <div className={cls.skillsContainer}>
                {skills.map((skill) => (
                    <Progress
                        key={skill.name}
                        label={skill.name}
                        value={skill.value}
                    />
                ))}
            </div>
        </div>
    );
};
