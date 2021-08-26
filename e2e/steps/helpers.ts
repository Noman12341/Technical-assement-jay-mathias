import { DefineStepFunction } from 'jest-cucumber';

export const givenIOpenTheApp = (given: DefineStepFunction) => given('I open the app', async () => {
  await page.goto(SERVER_URL, { waitUntil: 'domcontentloaded' });
});

export const whenItFinishesToLoadData = (when: DefineStepFunction) => when('it finishes to load data', async () => {
  await page.waitForFunction(() => !document.getElementById('preloader'));
});