import * as fromLabs from './labs.actions';

describe('loadLabss', () => {
  it('should return an action', () => {
    expect(fromLabs.loadLabss().type).toBe('[Labs] Load Labss');
  });
});
