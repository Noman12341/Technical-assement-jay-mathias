# Technical Challenge

Implement a feature that shows current time and weather temperature of 5 largest cities in the world.

- Use the provided code structure
- Only use dependencies that are already specified in _package.json_
- Create a GitHub issue and a pull request that resolves the issue
- Find and use weather API of your choice
- If the requirements are not clear, use your best judgement

## Code Structure

- Acceptance tests are located at:
  - `e2e/features/*.feature`: Cucumber tests in Gherkin
  - `e2e/steps/[feature].steps.js`: Feature step definitions
- Application code is under `src/`:
  - `index.ts`: Load the app
  - `components/`: React components
    - `[Component]`/
      - `index.tsx`: Component code
      - `index.test.tsx`: Component tests (snapshot verification)
      - `__snapshots__/`: Generated snapshots for tests
    - `index.tsx`/`index.test.tsx`/`__snapshots__/`: Root layout component
  - `app/`:
    - `index.tsx`: Setup react context providers
    - `store.ts`: Redux store initialization
    - `actions.ts`: Redux action creators
    - `reducers/`
      - `index.ts`: Combine and export Redux reducers
      - `[reducer]/`
        - `index.ts`: Reducer function
        - `index.test.ts`: Reducer function tests
    - `epics/`
      - `index.ts`: Combine and export redux-observable epics
      - `types.ts`: Types used by epics
      - `test-helpers.ts`: Helper functions for testing epics
      - `[epic]/`
        - `index.ts`: Epic
        - `index.test.ts`: Epic observable tests
    - `services/`
      - `index.ts`: Combine and export services
      - `[service]/`
        - `index.ts`: Service code
        - `index.test.ts`: Service tests

## Tests

Tests are not required to pass the challenge. You can write no tests, some tests, or go full BDD - up to you.

- Acceptance tests using `puppeteer`, `jest` and `jest-cucumber`
- React component snapshot tests using `jest`, `enzyme` and `enzyme-to-json`
- `jest` unit tests for `redux` reducers, `redux-observable` epics and services

Note: to mock 3rd party services in e2e tests you can use TEST_BUILD variable that is exported by webpack.
