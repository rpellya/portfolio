import { Progress } from 'shared/ui/Progress/Progress';
import { classNames } from 'app/lib/classNames';
import { skills } from './mock/skills';
import cls from './Skills.module.scss';

interface SkillsProps {
    className?: string;
}

export const Skills: React.FC<SkillsProps> = ({ className }) => {
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.description}>
                I work on creating information systems in the field of
                information security. I have experience in developing
                administrative panels for large products on React, as well as
                experience in mentoring.
            </div>
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
