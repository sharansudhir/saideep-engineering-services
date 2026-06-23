import { createContext, useContext, useState } from 'react'
import en from '../content/en-IN.json'
import fr from '../content/fr-IN.json'

const locales = { en, fr }

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en')

  const toggle = () => setLocale(l => (l === 'en' ? 'fr' : 'en'))

  return (
    <LocaleContext.Provider value={{ content: locales[locale], locale, toggle }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}
