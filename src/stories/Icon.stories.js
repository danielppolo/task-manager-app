import React from 'react'
import {
  withKnobs, text, boolean, number, color, select,
} from '@storybook/addon-knobs'
import colors from '../utils/colors'
import Icon from '../components/ui/Icon'
import options from '../utils/material-icons.json'

export default {
  title: 'Icon',
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
  <Icon color={color('Color', colors.black)} name={select('Icon', options, 'add')} />
)
