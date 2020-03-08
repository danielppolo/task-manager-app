import React from 'react'
import {
  withKnobs, text, boolean, number, color,
} from '@storybook/addon-knobs'
import Button from '../components/ui/Button'
import colors from '../utils/colors'

export default {
  title: 'Button',
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
  <Button
    background={color('Background', colors.primary)}
    color={color('Color', colors.white)}
  >
    {text('Text', 'Create task')}
  </Button>
)
