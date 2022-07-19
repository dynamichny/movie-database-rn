import { ColorSet } from './types'

const sharedColors = {
  primary: '#5FCF80',
}

export const lightColors: ColorSet = {
  ...sharedColors,
  background: '#ffffff',
  label: '#000000',
  secondaryLabel: '#3C3C43',
}

export const darkColors: ColorSet = {
  ...sharedColors,
  background: '#000000',
  label: '#FFFFFF',
  secondaryLabel: '#EBEBF5',
}
