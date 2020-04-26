const { describe, test, expect } = require('./')

const sum = (a, b) => a + b

describe('sum function', () => {
  test('adds 2 numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('concatenates 2 strings', () => {
    expect(sum('a', 'b')).toBe('ab')
  })
})
