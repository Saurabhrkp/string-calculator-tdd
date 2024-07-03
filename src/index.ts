export const add = (input: string): number => {
	let sum = 0

	for (const number of input.split(',')) {
		sum = sum + Number(number)
	}

	return sum
}
