import reducer from '.';
import { exampleAction } from '../../actions';

describe('reducers', () => {
  describe('cities', () => {
    it('returns null', () => {
      expect(reducer(null, exampleAction())).toBe(null);
    });
  });
});