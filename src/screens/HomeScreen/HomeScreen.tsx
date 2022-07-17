import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTranslation } from 'react-i18next'

const HomeScreen = () => {
  const { t } = useTranslation()
  return (
    <SafeAreaView>
      <Text>{t('screen_names.home')}</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
