import { classNames } from 'app/lib/classNames';
import styles from './ProfileOverview.module.scss';
import { Layout } from 'shared/ui/Layout';
import { About } from 'components/About';

interface ProfileOverviewProps {
    className?: string;
}

export const ProfileOverview: React.FC<ProfileOverviewProps> = ({
    className,
}) => {
    return (
        <div className={classNames(styles.ProfileOverview, {}, [className])}>
            <Layout title={'About'}>
                <About />
            </Layout>
            <Layout title={'Resume'}>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
                <div>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Quisquam, quod.
                </div>
            </Layout>
        </div>
    );
};
