import { createI18n } from 'vue-i18n';
import { Messages } from './i18n-types';

import en from './en.json';
import ru from './ru.json';
import by from './by.json';

const messages: Messages = {
  en,
  ru,
  by,
}

const browserLanguage = navigator.language.split('-')[0]

const supportedLanguages = Object.keys(messages)
const defaultLanguage = supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en'

const i18n = createI18n({
  locale: defaultLanguage,
  legacy: false,
  fallbackLocale: 'en',
  globalInjection: true,
  messages,
})

export default i18n
