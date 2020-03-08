import React from 'react'
import {
  withKnobs, text, boolean, number, color, select,
} from '@storybook/addon-knobs'
import colors from '../utils/colors'
import CircleButton from '../components/ui/CircleButton'
import Icon from '../components/ui/Icon'
import options from '../utils/material-icons.json'

export default {
  title: 'CircleButton',
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
  <CircleButton
    color={color('Color', colors.primary)}
    size={number('Radius', 60)}
    flat={boolean('Shadow', false)}
  >
    <Icon color={colors.white} name={select('Icon', options, 'add')} />
  </CircleButton>
)
