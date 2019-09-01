### Wikipedia Edit Tracker using Hatnote API data

#### Features:

##### Stack :computer:

- [Next.js](https://nextjs.org) Node/React framework supporting SSR (The bar charts are populated and rendered server side, then updated on the client)
- [Zeit now]() for serverless deployment
- [React]() for a view library
- [Antd]() design/ui library for high quality components (NB: [babel-plugin-import]() used to reduce bundle size by importing css as required)
- [Styled-components]() CSS-in-JS solution for easily extending component based styles
- [Nivo](https://github.com/plouc/nivo) for the responsive isomorphic bar chart component

##### Code Quality :microscope:

- Static type checking with [Typescript]()
- Linting with [tslint]() for typescript and [stylelint]() for styled-components css template literals
- Code formatting via [prettier]() to ensure a consistent style
- Enforces the javascript standard code style [standardjs](https://standardjs.com)
- [Husky]() & [lint-staged]() powered pre-commit hook to prevent non-compliant commits entering the codebase

##### Testing :white_check_mark:

- [Jest]() testing framework/test runner
- [Enzyme]() for rendering react components
- [Enzyme-to-json]() for human readable snapshot tests
- [Storybook](https://storybook.js.org) for developing components in isolation
- [redux-devtools]() enabled for easy redux debugging in browser

###### Coverage Report

| File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s  |
| ------------------------ | ------- | -------- | ------- | ------- | ------------------ |
| All files                | 70.21   | 77.78    | 46.67   | 70.21   |                    |
| **test**                 | 100     | 100      | 100     | 100     |                    |
| stateStub.ts             | 100     | 100      | 100     | 100     |                    |
| actions                  | 100     | 100      | 100     | 100     |                    |
| index.ts                 | 0       | 0        | 0       | 0       |                    |
| netChangeActions.ts      | 100     | 100      | 100     | 100     |                    |
| components/EditsChart    | 50      | 100      | 33.33   | 50      |                    |
| EditsChart.tsx           | 50      | 100      | 33.33   | 50      | 24,27              |
| components/PageContainer | 100     | 100      | 100     | 100     |                    |
| PageContainer.tsx        | 100     | 100      | 100     | 100     |                    |
| reducers                 | 100     | 100      | 100     | 100     |                    |
| netChangeReducer.ts      | 100     | 100      | 100     | 100     |                    |
| sagas                    | 50      | 100      | 25      | 50      |                    |
| netChangeSagas.ts        | 50      | 100      | 25      | 50      | ... 41,44,45,46,51 |
| utils                    | 0       | 0        | 0       | 0       |                    |
| time.ts                  | 0       | 0        | 0       | 0       | 2,6,10,11          |

### Setup

1. clone this repo
2. run `npm install`
3. start the dev server with `npm run dev`

#### Available scripts

- `npm run types` - typescript type check (also performed on starting the server)
- `npm test` - run all project tests
- `npm test:watch` - run all project tests and watch for changes
- `npm test:coverage` - generate a test coverage report
- `npm run format` - lint & format code
- `npm run lint` - only lint
- `npm run lint:fix` - lint code and autofix where possible
- `npm run lint:css` - only lint css template literals
- `npm run storybook` - start the storybook instance

- `npm run build` - build a production bundle
- `npm run start` - start a production server
- `npm run dev` - start the development server with HMR
- `npm run export` - build a static render of the app
- `npm run deploy` - build a static render of the app and deploy it to github pages
