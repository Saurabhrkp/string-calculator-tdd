import { add } from '../index'

describe('add should', () => {
	test('return 0 if given an empty string', () => {
		expect(add('')).toEqual(0)
	})

	test(`return number if input is just one number`, () => {
		expect(add('1')).toEqual(1)
		expect(add('42')).toBe(42)
	})

	test(`return sum of two numbers`, () => {
		expect(add('1,5')).toEqual(6)
		expect(add('10,20')).toBe(30)
	})

	it('handle any amount of numbers', () => {
		expect(add('1,2,3,4,5')).toBe(15)
		expect(add('10,20,30,40,50')).toBe(150)
	})

	it('allow new lines between numbers', () => {
		expect(add('1\n2,3')).toBe(6)
		expect(add('10\n20\n30')).toBe(60)
	})

	it('support custom delimiters', () => {
		expect(add('//;\n1;2')).toBe(3)
		expect(add('//|\n1|2|3')).toBe(6)
	})

	it('throw an exception for negative numbers', () => {
		expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2')
		expect(() => add('1,-2,-3')).toThrow('Negative numbers not allowed: -2, -3')
	})

	it('ignore numbers greater than 1000', () => {
		expect(add('2,1001')).toBe(2)
		expect(add('500,1000,2500')).toBe(1500)
	})

	it('handle custom delimiters of any length', () => {
		expect(add('//[***]\n1***2**3')).toBe(6)
		expect(add('//[---]\n10--20---30')).toBe(60)
	})

	it('handle multiple delimiters', () => {
		expect(add('//[*][%]\n1*2%3')).toBe(6)
		expect(add('//[&][#]\n5&10#15')).toBe(30)
	})

	it('handle multiple delimiters with any length', () => {
		expect(add('//[*][%%]\n1*2%3')).toBe(6)
		expect(add('//[&&][#]\n5&10#15')).toBe(30)
	})
})
