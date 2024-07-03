import { add } from '../index'

describe('add should', () => {
	test('return 0 if given an empty string', () => {
		expect(add('')).toEqual(0)
	})

	test(`return number if input is just one number`, () => {
		expect(add('1')).toEqual(1)
	})

	test(`return sum of two numbers`, () => {
		expect(add('1,5')).toEqual(6)
	})
})
