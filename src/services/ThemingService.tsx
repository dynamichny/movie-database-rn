import React, { createContext, useContext, useState, useEffect } from 'react'
import { useColorScheme, ColorSchemeName } from 'react-native'
import { lightColors, darkColors } from '~constants/colors'

export const ThemeContext = createContext({
  isDark: false,
  colors: lightColors,
  setScheme: (scheme: ColorSchemeName) => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme()
  const [isDark, setIsDark] = useState<boolean>(colorScheme === 'dark')

  useEffect(() => {
    setIsDark(colorScheme === 'dark')
  }, [colorScheme])

  const defaultTheme = {
    isDark,
    colors: isDark ? darkColors : lightColors,
    setScheme: (scheme: ColorSchemeName) => setIsDark(scheme === 'dark'),
  }

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => useContext(ThemeContext)
