import { render } from 'inferno';
import createElement from 'inferno-create-element';
import { mapProps } from './'

test('mapProps maps owner props to child props', () => {
    const results = [];
    const Wrapped = mapProps(props => ({
        a: props.a,
        c: props.c
    }))(props => results.unshift(props));

    render(createElement(Wrapped, { a: 'a', b: 'b', c: 'c', d: 'd' }), document.createElement('div'));
    expect(results[0]).toEqual({
        a: 'a',
        c: 'c'
    });
});
