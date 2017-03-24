import mapProps from './mapProps.js';

const withProps = input =>
    mapProps(props => Object.assign({}, props, typeof input === 'function' ? input(props) : input));

export default withProps;
