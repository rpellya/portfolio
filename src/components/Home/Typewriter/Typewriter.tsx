import { classNames } from 'app/lib/classNames';
import { useTypewriter } from './useTypeWriter';
import { useTranslation } from 'react-i18next';
import cls from './Typewriter.module.scss';

interface TypewriterProps {
    className?: string;
}

const phrases = [
    'Frontend Developer',
    'Software Engineer',
    'Sportsman',
    'React Developer',
    'Creator',
];

const ruPhrases = [
    'Frontend-разработчик',
    'React-разработчик',
    'Инженер-программист',
    'Спортсмен',
    'Создатель обучающих видео',
];

export const Typewriter: React.FC<TypewriterProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const [{ disaplayTypingText }, { isDeleting }, { isTyping }] =
        useTypewriter({
            phrases: i18n.language === 'ru' ? ruPhrases : phrases,
        });

    return (
        <div className={classNames(cls.Typewriter, {}, [className])}>
            <div className={cls.textBlock}>
                <h1 className={cls.title}>{t('home.title')}</h1>
                <h2 className={cls.subTitle}>
                    {t('home.subTitle')}
                    <span className={cls.phrase}>{disaplayTypingText}</span>
                    <span
                        className={classNames(cls.caret, {
                            [cls.caretStatic]: isTyping || isDeleting,
                        })}
                        aria-hidden="true"
                    />
                </h2>
            </div>
        </div>
    );
};
