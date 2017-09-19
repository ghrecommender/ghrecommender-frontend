import { configure } from '@kadira/storybook'

const reqStories = require.context('../src', true, /.stories.js$/)

function loadStories() {
  reqStories.keys().forEach(filename => reqStories(filename))
}

configure(loadStories, module)
