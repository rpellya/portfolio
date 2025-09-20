import cls from './BackgroundImage.module.scss';

export const BackgroundImage: React.FC = () => {
    return (
        <section className={cls.preview} id="home">
            <img
                className={cls.image}
                src="https://drscdn.500px.org/photo/123293205/q%3D90_m%3D2048_k%3D1/v2?sig=ca4467bd691b222691901458dc54bc3d2fef9dd9938c8dd3a6f01acdd96b5a0d"
            />
        </section>
    );
};
