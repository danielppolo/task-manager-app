import React from 'react'
import {
  withKnobs, text, boolean, number, color,
} from '@storybook/addon-knobs'
import Input from '../components/ui/Input'
import colors from '../utils/colors'

export default {
  title: 'Input',
  decorators: [withKnobs],
  parameters: {
    backgrounds: [
      { name: 'white', value: colors.white, default: true },
      { name: 'gray', value: colors.lightGray },
      { name: 'black', value: colors.black },
    ],
  },
}


export const textfield = () => (
  <Input
    type="text"
    color={color('Color', colors.primary)}
    label={text('Label', 'Task due date')}
  />
)

export const datefield = () => (
  <Input
    type="date"
    color={color('Color', colors.primary)}
    label={text('Label', 'Task due date')}
  />
)
