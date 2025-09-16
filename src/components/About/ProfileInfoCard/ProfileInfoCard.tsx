import { classNames } from 'app/lib/classNames';
import { ReactComponent as ArrowIcon } from 'shared/assets/icons/arrowRight.svg';
import cls from './ProfileInfoCard.module.scss';

interface ProfileInfoCardProps {
    label: string;
    value: string;
    className?: string;
}

export const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({
    label,
    value,
    className,
}) => {
    return (
        <div className={classNames(cls.ProfileInfoCard, {}, [className])}>
            <ArrowIcon />
            <div className={cls.textContainer}>
                <strong className={cls.label}>{label}:</strong>
                <span>{value}</span>
            </div>
        </div>
    );
};
