import { loadFeature, defineFeature } from 'jest-cucumber';
import { givenIOpenTheApp, whenItFinishesToLoadData } from './helpers';

defineFeature(loadFeature('e2e/features/loader.feature'), test => {
  const rootChildrenLen = () => page.evaluate(() => document.getElementById('root')?.children.length);
  test('Loader animation', ({ given, when, then }) => {
    givenIOpenTheApp(given);

    when("it's still loading", () => {
      // nothing to do
    });

    then('I should see preloader animation', async () => {
      const loader = await page.evaluate(() => document.getElementById('preloader'));
      expect(loader).toBeTruthy();
      expect(await rootChildrenLen()).toBe(0);
    });
  }, JEST_TIMEOUT);
  test('App loaded', ({ given, when, then }) => {
    givenIOpenTheApp(given);

    whenItFinishesToLoadData(when);

    then('I should see the app', async () => {
      expect(await rootChildrenLen()).toBe(1);
    });
  }, JEST_TIMEOUT);
});