import { objToCssVars, toKebabCase } from '$lib/utils/transform'
import { expect } from 'chai'

describe('toKebabCase', () => {
  it('does nothing to only lower case string', () => {
    const str = 'hello'
    expect(toKebabCase(str)).to.equal(str)
  })
  it('correctly converts word with single capital', () => {
    const str = 'helloBob'
    expect(toKebabCase(str)).to.equal('hello-bob')
  })
  it('correctly converts word with single number', () => {
    const str = 'hello1'
    expect(toKebabCase(str)).to.equal('hello-1')
  })
  it('correctly converts word with multiple capitals', () => {
    const str = 'helloMyNameIsBob'
    expect(toKebabCase(str)).to.equal('hello-my-name-is-bob')
  })
  it('correctly converts word with multiple capitals and numbers', () => {
    const str = 'helloMyNameIsBob123'
    expect(toKebabCase(str)).to.equal('hello-my-name-is-bob-1-2-3')
  })
})

describe('objToCssVars', () => {
  it('correctly converts object to css variables', () => {
    const obj = {
      primary: '#123456',
      onPrimary: '#098321',
    }
    expect(objToCssVars(obj)).to.equal(
      '--svui-primary: #123456;--svui-on-primary: #098321;',
    )
  })
})
