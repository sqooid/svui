import { expect } from 'chai'
import { wildcardStrInObj, wildcardStrInStr } from '$lib/utils/search'

describe('wildcardContainsString', () => {
  it('finds exact', () => {
    const query = 'pineapple'
    const str = 'pineapple'
    expect(wildcardStrInStr(query, str)).to.be.true
  })
  it('finds with extra before', () => {
    const query = 'pineapple'
    const str = 'asdfpineapple'
    expect(wildcardStrInStr(query, str)).to.be.true
  })
  it('finds with extra between', () => {
    const query = 'pineapple'
    const str = 'asdfpinedfdapsdple'
    expect(wildcardStrInStr(query, str)).to.be.true
  })
  it('finds with extra after', () => {
    const query = 'pineapple'
    const str = 'pineappleasfasdf'
    expect(wildcardStrInStr(query, str)).to.be.true
  })
  it('does not find when empty', () => {
    const query = 'pineapple'
    const str = ''
    expect(wildcardStrInStr(query, str)).to.be.false
  })
  it('does not find when does not contain', () => {
    const query = 'pineapple'
    const str = 'pineaple'
    expect(wildcardStrInStr(query, str)).to.be.false
  })
  it('does not find if case sensitive', () => {
    const query = 'Pineapple'
    const str = 'pineapple'
    expect(wildcardStrInStr(query, str, { caseSensitive: true })).to.be.false
  })
  it('does find if case sensitive', () => {
    const query = 'Pineapple'
    const str = 'Pineapple'
    expect(wildcardStrInStr(query, str, { caseSensitive: true })).to.be.true
  })
})

describe('wildcardStrInObj', () => {
  it('finds string on top layer', () => {
    const query = 'cat'
    const obj = {
      c: 123,
      a: 'caaat',
      b: 'chicken',
    }
    expect(wildcardStrInObj(query, obj)).to.be.true
  })
  it('finds string on second layer', () => {
    const query = 'cat'
    const obj = {
      c: 123,
      d: {
        d: 123123,
        a: 'caaat',
        b: 'dasdhai',
      },
      b: 'chicken',
    }
    expect(wildcardStrInObj(query, obj)).to.be.true
  })
  it('finds in array', () => {
    const obj = [
      {
        value: 'cat',
        title: 'Cat',
        description: 'Will claw your face',
      },
      {
        value: 'dog',
        title: 'Dog',
        description: "Man's best friend",
      },
      {
        value: 'parrot',
        title: 'Parrot',
        description: 'Teach it how to swear',
      },
    ]
    const query = 'will'
    expect(wildcardStrInObj(query, obj)).to.be.true
  })
  it('does not find when not there', () => {
    const query = 'cat'
    const obj = {
      c: 123,
      d: {
        d: 123123,
        a: 'ct',
        b: 'dasdhai',
      },
      b: 'chicken',
    }
    expect(wildcardStrInObj(query, obj)).to.be.false
  })
  it('does not find when in ignored field', () => {
    const query = 'cat'
    const obj = {
      c: 123,
      d: {
        d: 123123,
        a: 'cat',
        b: 'dasdhai',
      },
      b: 'chicken',
    }
    expect(wildcardStrInObj(query, obj, { ignore: ['a'] })).to.be.false
  })
})
