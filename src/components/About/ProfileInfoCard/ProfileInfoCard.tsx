import { classNames } from 'app/lib/classNames';
import { ReactComponent as ArrowIcon } from 'shared/assets/icons/arrowRight.svg';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfileInfoCard, {}, [className])}>
            <ArrowIcon className={cls.icon} />
            <div className={cls.textContainer}>
                <strong className={cls.label}>{t(label)}:</strong>
                <span>{t(value)}</span>
            </div>
        </div>
    );
};
