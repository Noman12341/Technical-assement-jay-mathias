import { TestScheduler } from 'rxjs/testing';
import { removePreloader$ } from '.';
import { assertDeepEqual } from '../test-helpers';

describe('epics', () => {
  describe('removePreloader$', () => {
    it('removes preloader when loaded', () => {
      // Create preloader element similar to public/index.html
      const preloader = document.createElement('div');
      preloader.id = 'preloader';
      document.body.appendChild(preloader);

      const scheduler = new TestScheduler(assertDeepEqual);
      scheduler.run((helpers) => {
        const action$ = helpers.hot('|');
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const target$ = removePreloader$(action$ as any, {} as any, {} as any);
        // Assert the epic doesn't emit anything and completes after first emission
        helpers.expectObservable(target$).toBe('|');
        helpers.flush();
        // Assert preloader element is removed
        expect(document.getElementById('preloader')).toBeFalsy();
      });
    });
  });
});