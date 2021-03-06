import { compose } from './';

test('compose composes from right to left', () => {
    const double = x => x * 2;
    const square = x => x * x;
    expect(compose(square)(5)).toEqual(25);
    expect(compose(square, double)(5)).toEqual(100);
    expect(compose(double, square, double)(5)).toEqual(200);
});

test('compose can be seeded with multiple arguments', () => {
    const square = x => x * x;
    const add = (x, y) => x + y;
    expect(compose(square, add)(1, 2)).toEqual(9);
});

test('compose returns the identity function if given no arguments', () => {
    expect(compose()(1, 2)).toEqual(1);
    expect(compose()(3)).toEqual(3);
    expect(compose()()).toEqual(undefined);
});

test('compose returns the first function if given only one', () => {
    const fn = () => {};
    expect(compose(fn)).toBe(fn);
});
