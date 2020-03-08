import React from 'react'
import {
  withKnobs, text, boolean, number, color, select, date,
} from '@storybook/addon-knobs'
import Task from '../components/ui/Task'
import options from '../utils/material-icons.json'
import colors from '../utils/colors'

export default {
  title: 'Task',
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
  <Task
    color={color('Color', colors.primary)}
    title={text('Title', 'Finish slides')}
    date={date('Due date', new Date('Mar 20 2020'))}
    done={boolean('Done', false)}
  />
)

export const Past = () => (
  <Task
    color={color('Color', colors.primary)}
    title={text('Title', 'Finish slides')}
    date={date('Due date', new Date('Jan 20 2020'))}
    done={boolean('Done', false)}
  />
)
