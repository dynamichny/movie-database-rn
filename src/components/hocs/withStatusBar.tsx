import React from 'react'
import { StatusBar } from 'react-native'

const withStatusBar = (Component: React.ComponentType) => (props: any) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="white"
        translucent={false}
      />
      <Component {...props} />
    </>
  )
}

export default withStatusBar
