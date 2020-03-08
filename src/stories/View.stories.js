import React from 'react'
import {
  withKnobs, text, boolean, number, color,
} from '@storybook/addon-knobs'
import View from '../components/ui/View'
import Header from '../components/ui/Header'
import Icon from '../components/ui/Icon'

import Button from '../components/ui/Button'
import colors from '../utils/colors'

export default {
  title: 'View',
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
  <View
    background={color('Background', colors.lightGray)}
    padding={number('Padding', 12)}
  >
    <Header
      left={<Icon name="add" size={20} />}
      right={<Icon name="more" size={20} />}
    >
      Task's list
    </Header>
    <Button>Add</Button>
  </View>
)
