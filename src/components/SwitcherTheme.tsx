'use client'

import { useEffect, useState } from 'react'

export default function SwitcherTheme() {
  const [theme, setTheme] = useState('light')
  const isDark = theme === 'dark'

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark'){
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="flex p-1 gap-1">
      <div className={`${!isDark && "bg-zinc-800"} hover:bg-zinc-800 rounded-full`}>
        <button
          type="button"
          className={`max-w-fit p-2 ${!isDark ? 'text-zinc-400' : 'text-zinc-600'} hover:text-zinc-400`}
          onClick={() => handleThemeSwitch()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        </button>
      </div>

      <div className={`${isDark && "bg-zinc-800"} hover:bg-zinc-800 rounded-full`}>
        <button
          type="button"
          className={`max-w-fit p-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'} hover:text-zinc-400`}
          onClick={() => handleThemeSwitch()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </button>
      </div>
    </div>
  )
}