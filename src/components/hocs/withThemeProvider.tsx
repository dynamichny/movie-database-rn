import React from 'react'
import { ThemeProvider } from '~services/ThemingService'

const withThemeProvider =
  (Component: React.ComponentType) => (props: React.Attributes) =>
    (
      <ThemeProvider>
        <Component {...props} />
      </ThemeProvider>
    )

export default withThemeProvider
