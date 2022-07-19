import React from 'react'
import { StatusBar } from 'react-native'
import { useTheme } from '~services/ThemingService'

const withStatusBar =
  (Component: React.ComponentType) => (props: React.Attributes) => {
    const { isDark } = useTheme()
    return (
      <>
        <StatusBar
          barStyle={isDark ? 'light-content' : 'dark-content'}
          backgroundColor={isDark ? 'black' : 'white'}
          translucent={true}
        />
        <Component {...props} />
      </>
    )
  }

export default withStatusBar
