export const add = (numbers: string): number => {
	if (!numbers) return 0

	const delimiterMatch = numbers.match(/^\/\/(.+)\n/)
	const delimiter = delimiterMatch ? delimiterMatch[1] : ','
	console.log(delimiter)

	const sanitizedNumbers = delimiterMatch
		? numbers.slice(delimiterMatch[0].length)
		: numbers

	const numArray = sanitizedNumbers
		.split(new RegExp(`[${delimiter}\\n]+`))
		.map(Number)

	let sum = 0

	for (const number of numArray) {
		sum = sum + Number(number)
	}

	return sum
}
