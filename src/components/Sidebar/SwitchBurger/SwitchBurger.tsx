import { classNames } from 'app/lib/classNames';
import styles from './SwitchBurger.module.scss';

interface SwitchBurgerProps {
    className?: string;
    closed: boolean;
    onClick: () => void;
}

export const SwitchBurger: React.FC<SwitchBurgerProps> = ({
    className,
    closed,
    onClick,
}) => {
    return (
        <div
            className={classNames(
                styles.SwitchBurger,
                { [styles['closed']]: closed },
                [className],
            )}
            onClick={onClick}
        >
            <div className={styles.burgerLines}>
                <span className={classNames(styles.line, {}, [styles.line1])} />
                <span className={classNames(styles.line, {}, [styles.line2])} />
                <span className={classNames(styles.line, {}, [styles.line3])} />
            </div>
        </div>
    );
};
