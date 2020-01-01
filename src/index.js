const React = require('react')

function join(arr, separator = '') {
  return arr.join(separator)
}

function applyPropFns(fns) {
  return Component => ({ className = '', ...props }) => {
    for (let fn of Object.values(fns)) {
      className = join([className, fn(props)], ' ').trim()
    }

    return React.createElement(Component, { className, ...props })
  }
}

function compose(...fns) {
  return fns.reduce(
    (a, b) => (...args) => a(b(...args)),
    arg => arg
  )
}

function toClasses(tailwindKey, systemProp) {
  return props => {
    const prop = props[systemProp]

    if (prop) {
      if (Array.isArray(prop)) {
        const responsives = ['', 'sm:', 'md:', 'lg:', 'xl:']

        return prop
          .map((value, i) =>
            join([responsives[i], join([tailwindKey, value], '-')])
          )
          .reduce((acc, value) => join([acc, value], ' ').trim())
      }

      return join([tailwindKey, prop], '-')
    }

    return ''
  }
}

const colorFns = {
  color: toClasses('text', 'color'),
  bg: toClasses('bg', 'bg')
}

const flexFns = {
  // flexBasis:
  // flexGrow:
  // flexShrink:
  // justifyItems: toClasses('')
  // justifySelf:
  alignContent: toClasses('content', 'alignContent'),
  alignItems: toClasses('items', 'alignItems'),
  alignSelf: toClasses('self', 'alignSelf'),
  flex: toClasses('flex', 'flex'),
  flexDirection: toClasses('flex', 'flexDirection'),
  flexWrap: toClasses('flex', 'flexWrap'),
  justifyContent: toClasses('justify', 'justifyContent'),
  order: toClasses('order', 'order')
}

const layoutFns = {
  width: toClasses('w', 'width'),
  height: toClasses('h', 'height'),
  // display: toClasses('', ''),
  minWidth: toClasses('min-w', 'minWidth'),
  minHeight: toClasses('min-h', 'minHeight'),
  maxHeight: toClasses('max-h', 'maxHeight'),
  maxWidth: toClasses('max-w', 'maxWidth'),
  // size,
  verticalAlign: toClasses('align', 'verticalAlign'),
  overflow: toClasses('overflow', 'overflow'),
  overflowX: toClasses('overflow-x', 'overflowX'),
  overflowY: toClasses('overflow-y', 'overflowY')
}

const spaceFns = {
  m: toClasses('m', 'm'),
  mt: toClasses('mt', 'mt'),
  mr: toClasses('mr', 'mr'),
  mb: toClasses('mb', 'mb'),
  ml: toClasses('ml', 'ml'),
  mx: toClasses('mx', 'mx'),
  my: toClasses('my', 'my'),

  p: toClasses('p', 'p'),
  pt: toClasses('pt', 'pt'),
  pr: toClasses('pr', 'pr'),
  pb: toClasses('pb', 'pb'),
  pl: toClasses('pl', 'pl'),
  px: toClasses('px', 'px'),
  py: toClasses('py', 'py')
}

const typographyFns = {
  fontFamily: toClasses('font', 'fontFamily'),
  fontSize: toClasses('text', 'fontSize'),
  fontWeight: toClasses('font', 'fontWeight'),
  letterSpacing: toClasses('tracking', 'letterSpacing'),
  lineHeight: toClasses('leading', 'lineHeight'),
  textAlign: toClasses('text', 'textAlign')
}

module.exports = {
  color: applyPropFns(colorFns),
  compose,
  flex: applyPropFns(flexFns),
  layout: applyPropFns(layoutFns),
  space: applyPropFns(spaceFns),
  toClasses,
  typography: applyPropFns(typographyFns)
}
