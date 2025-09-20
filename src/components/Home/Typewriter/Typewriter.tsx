import { classNames } from 'app/lib/classNames';
import { useTypewriter } from './useTypeWriter';
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

export const Typewriter: React.FC<TypewriterProps> = ({ className }) => {
    const [{ disaplayTypingText }, { isDeleting }, { isTyping }] =
        useTypewriter({
            phrases,
        });

    const subTitle = 'I am a';

    return (
        <div className={classNames(cls.Typewriter, {}, [className])}>
            <div className={cls.textBlock}>
                <h1 className={cls.title}>Pellya Roman</h1>
                <h2 className={cls.subTitle}>
                    {subTitle}
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
