function toClasses(tailwindKey, systemProp) {
  return props => {
    const prop = props[systemProp]

    if (prop) {
      if (Array.isArray(prop)) {
        const responsives = ['sm:', 'md:', 'lg:', 'xl:']

        return prop
          .map((value, i) => `${responsives[i]}${tailwindKey}-${value}`)
          .reduce((acc, value) => `${acc} ${value}`.trim())
      }
    }

    return `${tailwindKey}-${prop}`
  }
}

module.exports = {
  color: {
    color: toClasses('text', 'color'),
    bg: toClasses('bg', 'bg')
  },
  space: {
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
  },
  toClasses
}
