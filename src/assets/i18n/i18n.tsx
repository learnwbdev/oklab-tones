import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// импорт файлов перевода
import ru from '../translations/ru.json';
import en from '../translations/en.json';

const resources = {
    ru,
    en
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ru", // язык по умолчанию
    interpolation: {
      escapeValue: false
    }
  });


export default i18n;