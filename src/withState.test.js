import { render } from 'inferno';
import createElement from 'inferno-create-element';
import { withState } from './';

test('withState adds a stateful value and a function for updating it', () => {
    const results = [];
    const Counter = withState('counter', 'updateCounter', 0)(props => results.unshift(props));

    render(createElement(Counter, { pass: 'through' }), document.createElement('div'));
    const { updateCounter } = results[0];

    expect(results[0].counter).toEqual(0);
    expect(results[0].pass).toEqual('through');

    updateCounter(n => n + 9);
    updateCounter(n => n * 2);

    expect(results[0].counter).toEqual(18);
    expect(results[0].pass).toEqual('through');
});

test('withState also accepts a non-function, which is passed directly to setState()', () => {
    const results = [];
    const Counter = withState('counter', 'updateCounter', 0)(props => results.unshift(props));

    render(createElement(Counter), document.createElement('div'));
    const { updateCounter } = results[0];

    updateCounter(18);
    expect(results[0].counter).toEqual(18);
});

test('withState also accepts initialState as function of props', () => {
    const results = [];
    const Counter = withState(
        'counter',
        'updateCounter',
        props => props.initialCounter
    )(props => results.unshift(props));

    render(createElement(Counter, { initialCounter: 1 }), document.createElement('div'));
    const { updateCounter } = results[0];

    expect(results[0].counter).toEqual(1);
    updateCounter(n => n * 3);
    expect(results[0].counter).toEqual(3);
});
