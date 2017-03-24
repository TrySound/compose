import { render } from 'inferno';
import createElement from 'inferno-create-element';
import { withPropsOnChange } from './'

test('withPropsOnChange maps subset of owner props to child props', () => {
    const stub = document.createElement('div');
    const changes = [];
    const results = [];
    const Wrapped = withPropsOnChange(['a', 'b'], props => {
        changes.unshift(props);
        return Object.assign({}, props, {
            foobar: props.a + props.b
        });
    })(props => results.unshift(props));

    render(createElement(Wrapped, { a: 'a', b: 'b', c: 'c' }), stub);
    expect(results[0].foobar).toEqual('ab');
    expect(results.length).toEqual(1);
    expect(changes.length).toEqual(1);

    // Does not re-map for non-dependent prop updates
    render(createElement(Wrapped, { a: 'a', b: 'b', c: 'baz' }), stub);
    expect(results[0].foobar).toEqual('ab');
    expect(results[0].c).toEqual('c');
    expect(results.length).toEqual(2);
    expect(changes.length).toEqual(1);

    render(createElement(Wrapped, { a: 'foo', b: 'b', c: 'baz' }), stub);
    expect(results[0].foobar).toEqual('foob');
    expect(results[0].c).toEqual('baz');
    expect(results.length).toEqual(3);
    expect(changes.length).toEqual(2);
});
