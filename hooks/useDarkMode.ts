import { useState, useEffect, useCallback } from 'react'

type Mode = 'light' | 'dark' | 'system'

export const useDarkMode = () => {
    const [mode, setMode] = useState<Mode>(() => {
        if (typeof window === 'undefined') return 'system'
        return (localStorage.getItem('theme') as Mode) || 'system'
    })

    const changeMode = useCallback((newMode: Mode) => {
        setMode(newMode)
        localStorage.setItem('theme', newMode)
    }, [])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        const isDark = mode === 'dark' || (mode === 'system' && mediaQuery.matches)
        document.documentElement.classList.toggle('dark', isDark)

        const handleChange = (e: MediaQueryListEvent) => {
            if (mode === 'system') {
                document.documentElement.classList.toggle('dark', e.matches)
            }
        }

        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [mode])

    return { mode, changeMode }
}