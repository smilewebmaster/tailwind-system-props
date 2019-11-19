# Tailwind System Props

Apply Tailwind CSS utility classes using [Styled System](https://styled-system.com/)-like props.

## Getting Started

```bash
yarn add tailwind-system-props
```

Add props to your React components to help you quickly build UIs.

In Tailwind, utility classes can be applied conditionally at different breakpoints. We can use props that accept arrays as values for mobile-first responsive styles.

```jsx
<Box fontSizes={['sm', 'md']} bg={['green', 'purple']} />
```

will output something like

```html
<div class="sm:text-sm md:text-md sm:bg-green md:bg-purple" />
```

## API

```jsx
import { color, compose, layout, size, space } from 'tailwind-system-props'
```

## Usage

Create a `Box`

```jsx
import { color, compose, space } from 'tailwind-system-props'

function Box(props) {
  return <div {...props} />
}

export default compose(color, space)(Box)
```

now, use the `Box`

```jsx
<Box bg="green-400" p="md" m="sm" />
```
