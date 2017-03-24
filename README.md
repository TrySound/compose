# @trysound/compose

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
