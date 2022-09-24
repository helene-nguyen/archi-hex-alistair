import { app, TestRepo } from './hex';

describe('hex test hello', () => {
  //~ Variables
  let testRepo = new TestRepo();

  //~ Tests
  it(`should return 'Hello'`, () => {
    //& ASSERT
    expect(app.getValue()).toBe('Hello');
  });

  it('should return "hi"', () => {
    //& ASSERT
    expect(testRepo.sayHi()).toBe('hi');
  });

  //   it('should return "hi"', () => {
  //     expect(TestRepo.new()).toBe('hi');
  //   }); ??
});
