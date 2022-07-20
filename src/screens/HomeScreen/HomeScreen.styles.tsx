import { StyleSheet } from 'react-native'
import { ColorSet } from '~constants/types'

export const makeStyles = (theme: ColorSet) =>
  StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: theme.background,
    },
    text: {
      color: theme.label,
    },
  })
