# @trysound/compose [![Build Status][travis-img]][travis]

[travis-img]: https://travis-ci.org/TrySound/compose.svg
[travis]: https://travis-ci.org/TrySound/compose

HOC library for inferno

## API

### compose()

```js
compose(...functions: Array<Function>): Function
```

Use to compose multiple higher-order components into a single higher-order component.
This works exactly like the function of the same name in Redux.

### mapProps()

```js
mapProps(
  propsMapper: (ownerProps: Object) => Object,
): HigherOrderComponent
```

Accepts a function that maps owner props to a new collection of props that are passed to the base component.

### withProps()

```js
withProps(
  createProps: (ownerProps: Object) => Object | Object
): HigherOrderComponent
```

Like mapProps(), except the newly created props are merged with the owner props.

### withPropsOnChange()

```js
withPropsOnChange(
  propsKeys: Array<string>,
  createProps: (ownerProps: Object) => Object
): HigherOrderComponent
```

Like withProps(), except the new props are only created when one of the owner props specified by propsKeys changes.
This helps ensure that expensive computations inside createProps() are only executed when necessary.

### withHandlers()

```js
withHandlers(
  handlerCreators: {
    [handlerName: string]: (props: Object, ...args) => void
  }
): HigherOrderComponent
```

Takes an object map of handler creators.

### withState()

```js
withState(
  stateName: string,
  stateUpdaterName: string,
  initialState: any | (props: Object) => any
): HigherOrderComponent
```

Passes two additional props to the base component: a state value, and a function to update that state value. The state updater has the following signature:

```js
stateUpdater<T>((prevValue: T) => T): void
stateUpdater(newValue: any): void
```
