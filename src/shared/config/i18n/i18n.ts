import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n.use(LanguageDetector) // определяет язык из браузера
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: navigator.language, // язык по умолчанию
        debug: false,

        interpolation: {
            escapeValue: false, // react сам экранирует
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },

        react: {
            useSuspense: false,
        },
    });

export default i18n;
