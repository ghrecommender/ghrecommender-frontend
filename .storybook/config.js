import { configure } from '@storybook/react'

const reqStories = require.context('../src', true, /.stories.js$/)

function loadStories() {
  reqStories.keys().forEach(filename => reqStories(filename))
}

configure(loadStories, module)
