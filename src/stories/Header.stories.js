import React from 'react'
import {
  withKnobs, text, boolean, number, color,
} from '@storybook/addon-knobs'
import Title from '../components/ui/Title'
import Icon from '../components/ui/Icon'
import Header from '../components/ui/Header'
import colors from '../utils/colors'

export default {
  title: 'Header',
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
  <Header
    left={<Icon name="add" size={20} />}
    right={<Icon name="more" size={20} />}
  >
    {text('Title', 'Task list')}
  </Header>
)
