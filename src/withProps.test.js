import { render } from 'inferno';
import createElement from 'inferno-create-element';
import { withProps } from './';

test('withProps passes additional props to base component', () => {
    const results = [];
    const DoReMi = withProps({ 'data-so': 'do', 'data-la': 'fa' })(props => results.unshift(props));
    render(createElement(DoReMi, { 'data-oh': 'ah' }), document.createElement('div'));
    expect(results[0]).toEqual({
        'data-la': 'fa',
        'data-so': 'do',
        'data-oh': 'ah'
    });
});

test('withProps takes precedent over owner props', () => {
    const results = [];
    const DoReMi = withProps({ 'data-so': 'do', 'data-la': 'fa' })(props => results.unshift(props));
    render(createElement(DoReMi, { 'data-so': 're', 'data-oh': 'ah' }), document.createElement('div'));
    expect(results[0]).toEqual({
        'data-la': 'fa',
        'data-so': 'do',
        'data-oh': 'ah'
    });
});

test('withProps should accept function', () => {
    const results = [];
    const DoReMi = withProps(props => ({ 'data-so': props['data-la'] }))(props => results.unshift(props));
    render(createElement(DoReMi, { 'data-la': 'la' }), document.createElement('div'));
    expect(results[0]).toEqual({
        'data-la': 'la',
        'data-so': 'la'
    });
});
