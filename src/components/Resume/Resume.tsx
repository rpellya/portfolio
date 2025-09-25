import { classNames } from 'app/lib/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ResumeItemCard } from './ResumeItemCard/ResumeItemCard';
import cls from './Resume.module.scss';

interface ResumeProps {
    className?: string;
}

export const Resume: React.FC<ResumeProps> = ({ className }) => {
    const descriptionSumary =
        'Frontend-разработчик с 2+ годами опыта. Специализируюсь на создании адаптивных и производительных веб-приложений. Постоянно изучаю современные инструменты и оптимизирую процессы.';

    const descriptionEducationSPO =
        ' 09.02.07. Программирование и информационные технологии';

    return (
        <div className={classNames('', {}, [className])}>
            <span>
                Я стремлюсь занять позицию middle+, senior
                frontend-разработчика. Всегда открыт для изучения новых
                возможностей и применения своих навыков в разработке
                программного обеспечения. Готов взять на себя ответственность за
                сложные задачи и внести вклад в создание качественных продуктов.
            </span>
            <p>
                Вы можете скачать моё резюме
                <AppLink theme="primary" className={cls.link}>
                    здесь
                </AppLink>
            </p>
            <div className={cls.items}>
                <ResumeItemCard
                    title={'Sumary'}
                    subTitle={'Pellya Roman'}
                    description={descriptionSumary}
                    labels={['St. Petersburg, Russia', 'rpellya@gmail.com']}
                />
                <ResumeItemCard
                    className={cls.experience}
                    title={'Professional Experience'}
                    subTitle={'Frontend Developer'}
                    years="2023 - Present"
                    geoPlace={'Datagile, Russia'}
                    labels={[
                        'Создание и поддержка административных панелей для управления крупными продуктами.',
                        'Реализация сложной бизнес-логики с использованием React, Redux и RTK Query.',
                        'Участие в полном цикле разработки: от проектирования архитектуры до тестирования и деплоя.',
                        'Проведение код-ревью и менторинг junior-разработчиков.',
                        'Внедрение лучших практик (code style, типизация, документация).',
                        'Оптимизация процессов разработки: сокращение времени сборки на 40% через настройку Webpack и Vite.',
                        'Доведение покрытия кода тестами до 80%+ для критически важных модулей.',
                        '3 больших и тяжелых проекта на React.ts:',
                        'Миграция на TypeScript, рефакторинг кода, создание своей UI-библиотеки для проекта.',
                        'Настройка unit-тестов (Jest, React Testing Library) и скриншотного тестирования.',
                    ]}
                />
                <ResumeItemCard
                    title={'Education'}
                    items={[
                        {
                            subTitle:
                                'Санкт-Петербургский политехнический университет Петра Великого (СПбПУ)',
                            years: '2024 - Present',
                            geoPlace: 'St. Petersburg, Russia',
                            description: '09.03.03. Прикладная инфорамтика',
                        },
                        {
                            subTitle:
                                'Институт среднего профессионального образования им. Петра Великого',
                            years: '2020 - 2024',
                            geoPlace: 'St. Petersburg, Russia',
                            description: descriptionEducationSPO,
                        },
                    ]}
                />
            </div>
        </div>
    );
};
