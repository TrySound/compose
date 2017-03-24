import createElement from 'inferno-create-element';
import Component from 'inferno-component';

const withHandlers = handlers => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.handlers = Object.keys(handlers).reduce((acc, key) => {
            acc[key] = (...args) => handlers[key](this.props, ...args);
            return acc;
        }, {});
    }

    render(props) {
        return createElement(BaseComponent, Object.assign({}, props, this.handlers));
    }
};

export default withHandlers;
