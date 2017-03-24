import createElement from 'inferno-create-element';

const mapProps = propsMapper => BaseComponent => props => createElement(BaseComponent, propsMapper(props));

export default mapProps;
