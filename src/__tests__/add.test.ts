import { add } from '../index'

describe('add should', () => {
	test('return 0 if given an empty string', () => {
		expect(add('')).toEqual(0)
	})

	test(`return 1 if input is '1'`, () => {
		expect(add('1')).toEqual(1)
	})
})
