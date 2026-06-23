import { createContext, useContext, useState } from 'react'
import en from '../content/en-IN.json'
import fr from '../content/fr-IN.json'
import de from '../content/de-IN.json'
import it from '../content/it-IN.json'
import es from '../content/es-IN.json'
import hi from '../content/hi-IN.json'

export const locales = {
  en: { label: 'English 🇬🇧', content: en },
  fr: { label: 'Français 🇫🇷', content: fr },
  de: { label: 'Deutsch 🇩🇪', content: de },
  it: { label: 'Italiano 🇮🇹', content: it },
  es: { label: 'Español 🇪🇸', content: es },
  hi: { label: 'हिन्दी 🇮🇳', content: hi },
}

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en')

  return (
    <LocaleContext.Provider value={{ content: locales[locale].content, locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}
