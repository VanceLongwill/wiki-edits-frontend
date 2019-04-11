// .storybook/config.js
import { configure } from '@storybook/react'

const req = require.context('../components', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)

//@TODO: generate prop table documentation via https://github.com/storybooks/storybook/tree/master/addons/info
