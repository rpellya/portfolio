import { classNames } from 'app/lib/classNames';
import cls from './ProgressBar.module.scss';

interface ProgressBarProps {
    value: number;
    className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
    className,
    value,
}) => {
    return (
        <div className={classNames(cls.ProgressBar, {}, [className])}>
            <div
                className={cls.progressBarValue}
                style={{ width: `${value}%`, height: '10px' }}
            />
        </div>
    );
};
