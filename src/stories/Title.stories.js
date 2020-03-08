import React from 'react'
import {
  withKnobs, text, boolean, number, color, select, date,
} from '@storybook/addon-knobs'
import Title from '../components/ui/Title'
import colors from '../utils/colors'

export default {
  title: 'Title',
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
  <Title
    color={color('Color', colors.black)}
  >
    {text('Title', 'Page title')}
  </Title>
)
