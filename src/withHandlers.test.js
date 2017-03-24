import { render } from 'inferno';
import createElement from 'inferno-create-element';
import { withHandlers } from './';

test('withHandlers passes handlers to base component', () => {
    const stub = document.createElement('div');
    const results = [];
    const Wrapped = withHandlers({
        handler1: () => 1,
        handler2: () => 2
    })(props => results.unshift(props));
    render(createElement(Wrapped), stub);
    expect(results[0].handler1()).toEqual(1);
    expect(results[0].handler2()).toEqual(2);
});

test('withHandlers passes immutable handlers', () => {
    const stub = document.createElement('div');
    const results = [];
    const Wrapped = withHandlers({
        handler1: () => 1,
        handler2: () => 2
    })(props => results.unshift(props));
    render(createElement(Wrapped), stub);
    render(createElement(Wrapped), stub);
    expect(results[0].handler1).toBe(results[1].handler1);
    expect(results[0].handler2).toBe(results[1].handler2);
});

test('withHandlers binds props as a first parameter', () => {
    const stub = document.createElement('div');
    const handlerArgs = [];
    const results = [];
    const Wrapped = withHandlers({
        handler: (props, ...args) => handlerArgs.unshift([props, ...args])
    })(props => results.unshift(props));
    render(createElement(Wrapped,  { param: 2 }), stub);
    results[0].handler(1, 2);
    render(createElement(Wrapped,  { param: 3 }), stub);
    results[0].handler(0, 1);
    expect(handlerArgs).toEqual([
        [{ param: 3 }, 0, 1],
        [{ param: 2 }, 1, 2]
    ]);
});
