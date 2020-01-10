# Tailwind System Props

Apply Tailwind CSS utility classes using [Styled System](https://styled-system.com/)-like props.

## Getting Started

```bash
yarn add tailwind-system-props
```

Add props to your React components to help you quickly build UIs.

In Tailwind, utility classes can be applied conditionally at different breakpoints. We can use props that accept arrays as values for mobile-first responsive styles.

```jsx
<Box fontSizes={['sm', 'md']} bg={['green', 'purple', 'pink']} />
```

will output something like

```html
<div class="text-sm sm:text-md bg-green sm:bg-purple md:bg-pink" />
```

## API

```jsx
import { color, compose, layout, size, space } from 'tailwind-system-props'
```

## Usage

Create a `Box`

```jsx
import React from 'react'
import { color, compose, space } from 'tailwind-system-props'

function Box({ as = 'div', ...props }) {
  return React.createElement(as, props)
}

export default compose(color, space)(Box)
```

now, use the `Box`

```jsx
<Box bg="green-400" p="md" m="sm" />
```

### Advanced

Let's say we want to change a button component's size based on conditional breakpoints.

Start with a button component with size utilties wrapped in a `@responsive` directive. This directive allows you to use these styles conditionally at different breakpoints.

```css
.btn {
  @apply bg-purple text-white px-md;
}

@responsive {
  .btn-sm {
    @apply py-sm;
  }

  .btn-md {
    @apply py-md;
  }

  .btn-lg {
    @apply py-lg;
  }
}
```

You can use `toTailwindClasses` to pass the Tailwind class name (e.g., `btn`) and value (or array of values for responsive classes) to create custom Tailwind classes.

```jsx
import React  from 'react'
import { toTailwindClasses } from 'tailwind-system-props'

function Button({ size, ...props }) {
  const fromSize = toTailwindClasses('btn', size)
  return <button className={`btn ${fromSize}`} {...props}>
}

// Usage
<Button size={['md', 'lg']}>Save</Button>
```

will output something like

```html
<button class="btn btn-md sm:btn-lg">Save</button>
```
