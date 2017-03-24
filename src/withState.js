import createElement from 'inferno-create-element';
import Component from 'inferno-component';

const withState = (stateName, stateUpdaterName, initialState) => BaseComponent => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateValue: typeof initialState === 'function' ? initialState(props) : initialState
        };
        this.updateStateValue = value => this.setState(state => ({
            stateValue: typeof value === 'function' ? value(state.stateValue) : value
        }));
    }

    render(props, state) {
        return createElement(BaseComponent, Object.assign({}, props, {
            [stateName]: state.stateValue,
            [stateUpdaterName]: this.updateStateValue
        }));
    }
};

export default withState;
