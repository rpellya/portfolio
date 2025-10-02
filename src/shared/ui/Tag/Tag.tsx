import { classNames } from 'app/lib/classNames';
import cls from './Tag.module.scss';

interface TagProps {
    className?: string;
    label?: string;
}

export const Tag: React.FC<TagProps> = ({ className, label }) => {
    return (
        <span className={classNames(cls.Tag, {}, [className])}>{label}</span>
    );
};
