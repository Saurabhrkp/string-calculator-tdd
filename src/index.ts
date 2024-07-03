export const add = (numbers: string): number => {
	if (!numbers) return 0

	const numArray = numbers.split(new RegExp(`[,\\n]+`)).map(Number)

	let sum = 0

	for (const number of numArray) {
		sum = sum + Number(number)
	}

	return sum
}
