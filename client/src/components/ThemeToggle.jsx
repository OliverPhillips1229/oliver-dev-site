import React, { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <button className="btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} title="Toggle theme">
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  )
}
