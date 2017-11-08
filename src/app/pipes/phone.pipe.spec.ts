import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  let pipe: PhonePipe;
  beforeEach(() => {
    pipe = new PhonePipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transform an instance of phone number to required format', () => {
    expect(pipe.transform('1-770-736-8031 x56442')).toBe('1-770-736-8031');
  });
});
