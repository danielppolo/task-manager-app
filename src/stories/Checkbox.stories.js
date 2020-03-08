import React from 'react'
import {
  withKnobs, text, boolean, number, color,
} from '@storybook/addon-knobs'
import Checkbox from '../components/ui/Checkbox'
import colors from '../utils/colors'

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'white', value: colors.white, default: true },
      { name: 'gray', value: colors.lightGray },
      { name: 'black', value: colors.black },
    ],
  },
}

export const Default = () => (
  <Checkbox
    color={color('Color', colors.primary)}
  />
)
