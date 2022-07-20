import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTranslation } from 'react-i18next'
import { useTheme } from '~services/ThemingService'
import { makeStyles } from './HomeScreen.styles'

const HomeScreen = () => {
  const { t } = useTranslation()
  const { colors } = useTheme()
  const styles = makeStyles(colors)

  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.text}>{t('screen_names.home')}</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
