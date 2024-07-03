export const add = (numbers: string): number => {
	if (!numbers) return 0

	const delimiterMatch = numbers.match(/^\/\/(.+)\n/)
	const delimiterRegex = delimiterMatch
		? new RegExp(delimiterMatch[1], 'g')
		: /,/
	console.log(delimiterRegex)
	const sanitizedNumbers = delimiterMatch
		? numbers.slice(delimiterMatch[0].length)
		: numbers

	const numArray = sanitizedNumbers
		.split(/[\n]+/)
		.flatMap((line) => line.split(delimiterRegex))
		.map(Number)

	const negatives = numArray.filter((num) => num < 0)
	if (negatives.length > 0) {
		throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`)
	}

	let sum = 0

	for (const number of numArray) {
		if (Number(number) <= 1000) sum = sum + Number(number)
	}

	return sum
}
