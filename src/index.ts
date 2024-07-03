export const add = (numbers: string): number => {
	if (!numbers) return 0

	const delimiterMatch = numbers.match(/^\/\/(.+)\n/)
	const delimiter = delimiterMatch ? delimiterMatch[1] : ','

	const sanitizedNumbers = delimiterMatch
		? numbers.slice(delimiterMatch[0].length)
		: numbers

	const numArray = sanitizedNumbers
		.split(new RegExp(`[${delimiter}\\n]+`))
		.map(Number)

	const negatives = numArray.filter((num) => num < 0)
	if (negatives.length > 0) {
		throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`)
	}

	let sum = 0

	for (const number of numArray) {
		sum = sum + Number(number)
	}

	return sum
}
