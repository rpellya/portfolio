import { classNames } from 'app/lib/classNames';
import { Layout } from 'shared/ui/Layout';
import { About } from 'components/About';
import { Skills } from 'components/Skills';
import { Resume } from 'components/Resume';
import cls from './ProfileOverview.module.scss';

interface ProfileOverviewProps {
    className?: string;
}

export const ProfileOverview: React.FC<ProfileOverviewProps> = ({
    className,
}) => {
    return (
        <div className={classNames(cls.ProfileOverview, {}, [className])}>
            <Layout title={'About'}>
                <About />
            </Layout>
            <Layout title={'Skills'} className={cls.greenBackground}>
                <Skills />
            </Layout>
            <Layout title={'Resume'}>
                <Resume />
            </Layout>
            <Layout title={'Contact'} className={cls.greenBackground}>
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
