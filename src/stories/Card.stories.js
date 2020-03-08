import React from 'react'
import {
  withKnobs, text, boolean, number, color,
} from '@storybook/addon-knobs'
import Card from '../components/ui/Card'
import Title from '../components/ui/Title'
import colors from '../utils/colors'

export default {
  title: 'Card',
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
  <Card
    color={color('Background', colors.white)}
    radius={number('Border radius')}
    padding={number('Padding')}
  >
    <Title>Tasks</Title>
    <br />
    Example of tasks card
  </Card>
)
