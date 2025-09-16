import { classNames } from 'app/lib/classNames';
import styles from './ResumeInfo.module.scss';
import { Layout } from 'shared/ui/Layout';
import { About } from 'components/About';

interface ResumeInfoProps {
    className?: string;
}

export const ResumeInfo = ({ className }: ResumeInfoProps) => {
    return (
        <div className={classNames(styles.ResumeInfo, {}, [className])}>
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
