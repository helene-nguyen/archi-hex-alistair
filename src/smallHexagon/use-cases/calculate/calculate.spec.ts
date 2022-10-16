import { SimpleTest } from './calculate';

describe('SimpleTest', () => {
    let simpleTest = new SimpleTest();
    //a test not that I expect but well, go for another one !

    const a = 2;
    const b = 9;
    const c = 8;

    it('should return', () => {
        return calculationOperation(a)(b)(c);
    });

    const calculationOperation = (a: number) => {
        return (b: number) => {
            return (c: number) => {
                expect(simpleTest.handle(a, b, c)).toEqual(a + b + c);
            }
        }
    }
});
