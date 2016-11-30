import { utils } from '../utils';

describe('call luis default app', () => {
    it('get results', () => {
        //todo: create sensible test...        
        expect(utils.analyze("some text")).not.toBeNull();
    });
});