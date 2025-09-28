import { classNames } from 'app/lib/classNames';
import cls from './ResumeItemCard.module.scss';

interface ResumeItemCardProps {
    title: string;
    subTitle?: string;
    description?: string;
    years?: string;
    geoPlace?: string;
    labels?: string[];
    className?: string;
    items?: {
        subTitle?: string;
        description?: string;
        years?: string;
        geoPlace?: string;
        labels?: string[];
    }[];
}

export const ResumeItemCard: React.FC<ResumeItemCardProps> = ({
    title,
    subTitle,
    description,
    years,
    geoPlace,
    labels,
    className,
    items,
}) => {
    return (
        <div className={classNames(cls.ResumeItemCard, {}, [className])}>
            {items ? (
                <>
                    <h3 className={cls.title}>{title}</h3>
                    {items.map((item, index) => (
                        <div className={cls.itemCardContainer} key={index}>
                            <h4 className={cls.subTitle}>{item.subTitle}</h4>
                            {item.years && (
                                <span className={cls.years}>{item.years}</span>
                            )}
                            {item.geoPlace && (
                                <span className={cls.geoPlace}>
                                    {item.geoPlace}
                                </span>
                            )}
                            <span>{item.description}</span>

                            <ul className={cls.labelsContainer}>
                                {item.labels?.map((label, index) => (
                                    <li key={index} className={cls.label}>
                                        {label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </>
            ) : (
                <>
                    <h3 className={cls.title}>{title}</h3>
                    <div className={cls.itemCardContainer}>
                        <h4 className={cls.subTitle}>{subTitle}</h4>
                        {years && <span className={cls.years}>{years}</span>}
                        {geoPlace && (
                            <span className={cls.geoPlace}>{geoPlace}</span>
                        )}
                        <span>{description}</span>

                        <ul className={cls.labelsContainer}>
                            {labels?.map((label, index) => (
                                <li key={index} className={cls.label}>
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};
