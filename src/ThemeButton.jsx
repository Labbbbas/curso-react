import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      className={`rounded-2xl p-2 cursor-pointer border ${theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      Cambiar tema
    </button>
  )
}

export default ThemeButton