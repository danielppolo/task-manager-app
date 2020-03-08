import React from 'react'
import {
  withKnobs, text, boolean, number, color, select,
} from '@storybook/addon-knobs'
import List from '../components/ui/List'
import options from '../utils/material-icons.json'
import colors from '../utils/colors'

export default {
  title: 'List',
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
  <List
    color={color('Color', colors.primary)}
    title={text('Title', 'React course')}
    icon={select('Icon', options, 'add')}
    tasks={[1, 2, 3]}
  >
    Hello List
  </List>
)
