import { classNames } from 'app/lib/classNames';
import { ProgressBar } from './ProgressBar';
import cls from './Progress.module.scss';

interface ProgressProps {
    label: string;
    value: number;
    className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
    className,
    label,
    value,
}) => {
    return (
        <div className={classNames(cls.Progress, {}, [className])}>
            <div className={cls.progressContainer}>
                <span className={cls.label}>{label.toUpperCase()}</span>
                <span className={cls.label}>{value}%</span>
            </div>
            <ProgressBar value={value} />
        </div>
    );
};
