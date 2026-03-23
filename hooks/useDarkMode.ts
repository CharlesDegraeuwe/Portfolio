import { useState, useEffect, useCallback } from 'react'

type Mode = 'light' | 'dark' | 'system'

export const useDarkMode = () => {
    const [mode, setMode] = useState<Mode>('system')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        const saved = localStorage.getItem('theme') as Mode | null
        if (saved) setMode(saved)
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return
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
    }, [mode, mounted])

    const changeMode = useCallback((newMode: Mode) => {
        setMode(newMode)
        localStorage.setItem('theme', newMode)
    }, [])

    return { mode, changeMode, mounted }
}