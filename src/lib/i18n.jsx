import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import content from '../data/content.js'

const STORAGE_KEY = 'clinicos.lang'
const LanguageContext = createContext(null)

function readInitialLang() {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'ar') return stored
  } catch {
    // Private mode or blocked storage: fall through to the browser language.
  }
  return window.navigator.language?.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  // Drive dir/lang from the root element so Tailwind's rtl: variants and the
  // browser's own bidi handling both work without per-component overrides.
  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = content[lang].dir
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Not worth failing the render over.
    }
  }, [lang])

  const toggle = useCallback(() => setLang((prev) => (prev === 'en' ? 'ar' : 'en')), [])

  const value = useMemo(
    () => ({ lang, setLang, toggle, t: content[lang], isRtl: content[lang].dir === 'rtl' }),
    [lang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
