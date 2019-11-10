const { color, space, toClasses } = require('../index')

test('toClasses formats class name correctly', () => {
  expect(
    toClasses('tailwind key', 'system prop')({ 'system prop': 'value' })
  ).toMatch('tailwind key-value')
})

test('toClasses formats class names correctly with responsive props', () => {
  const classNames = toClasses('tailwind key', 'system prop')({
    'system prop': ['value 1', 'value 2']
  })

  expect(classNames).toEqual(expect.stringContaining('sm:tailwind key-value 1'))
  expect(classNames).toEqual(expect.stringContaining('md:tailwind key-value 2'))
})

test('color has fns', () => {
  expect(color).toHaveProperty('color')
  expect(color).toHaveProperty('bg')
})

test('space has fns', () => {
  expect(space).toHaveProperty('p')
  expect(space).toHaveProperty('pt')
  expect(space).toHaveProperty('pr')
  expect(space).toHaveProperty('pb')
  expect(space).toHaveProperty('pl')
  expect(space).toHaveProperty('px')
  expect(space).toHaveProperty('py')

  expect(space).toHaveProperty('m')
  expect(space).toHaveProperty('mt')
  expect(space).toHaveProperty('mr')
  expect(space).toHaveProperty('mb')
  expect(space).toHaveProperty('ml')
  expect(space).toHaveProperty('mx')
  expect(space).toHaveProperty('my')
})
