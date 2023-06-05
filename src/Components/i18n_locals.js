import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import engF from '../translations/eng.json'
import uaF from '../translations/ua.json'

const resources = {
  eng: {
    translation: engF
  },
  ua: {
    translation: uaF
  }
};

i18n
  .use(initReactI18next)
  .init({
    lng: 'ua', // Поточна мова
    resources,
    fallbackLng: 'eng',
    interpolation: {escapeValue: false}
  });

export default i18n;