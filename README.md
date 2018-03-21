# @hrgui/classy-components

This is a forked copy of [sk22/classy-components](https://github.com/sk22/classy-components.js). Please see for original changes and manual.

This has a couple of additional bugfixes and additional features described below, and is under the @hrgui alias.

## Installation

```bash
yarn install @hrgui/classy-components
```

## Bugfixes

### Standard function notation
```jsx
const Button = classy.button('btn');
// => <button class="btn">

const PrimaryButton = classy(Button)('btn-primary');
// => <button class="btn btn-primary">
```

would return `b t b t` previously. Now it returns `btn btn-primary`

## Additional features

### Created component can have props.className as an added class

Before:
```jsx
const Button = classy.button('btn');
// => <button class="btn">
<Button className="hello"></Button>
// => <button class="hello">
```

After:
```jsx
const Button = classy.button('btn');
// => <button class="btn">
<Button className="hello btn"></Button>
// => <button class="hello btn">
```

### Interpolation through tagged literals w/ functions (combines features from [@memphju/classed-components](https://github.com/mephju/classed-components/))

```jsx
const Button = classy.button`green ${props => props.className}`

<Button className="hello btn"></Button>
// => <button class="green hello btn">
```

## References
- [sk22/classy-components](https://github.com/sk22/classy-components.js)
- [@memphju/classed-components](https://github.com/mephju/classed-components/)