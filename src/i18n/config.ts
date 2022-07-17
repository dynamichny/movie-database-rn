import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { getLocales } from 'react-native-localize'

import en from './translations/en.json'
import pl from './translations/pl.json'

const FALLBACK_LANGUAGE = 'en'
const SUPPORTED_LANGUAGES = ['en', 'pl']

const resources = {
  en: {
    translation: en,
  },
  pl: {
    translation: pl,
  },
}

const getCurrentLanguage = () => {
  const locales = getLocales()
  const systemLang = Array.isArray(locales) ? locales[0].languageCode : null

  if (!systemLang || !SUPPORTED_LANGUAGES.includes(systemLang)) {
    return FALLBACK_LANGUAGE
  }

  return systemLang
}

i18n.use(initReactI18next).init({
  lng: getCurrentLanguage(),
  fallbackLng: FALLBACK_LANGUAGE,
  resources,
  debug: false,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
})

export { i18n }
