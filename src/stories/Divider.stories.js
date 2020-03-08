import React from 'react'
import {
  withKnobs, text, boolean, number, color,
} from '@storybook/addon-knobs'
import Title from '../components/ui/Title'
import Divider from '../components/ui/Divider'
import colors from '../utils/colors'

export default {
  title: 'Divider',
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
  <div>
    <Title>Title</Title>
    <Divider
      color={color('Stroke color', colors.black)}
      verticalMargin={number('Margin', 20)}
      stroke={number('Stroke', 2)}
    />
    <Title>Subtitle</Title>
  </div>
)
