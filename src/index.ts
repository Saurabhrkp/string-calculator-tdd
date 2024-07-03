export const add = (numbers: string): number => {
	if (!numbers) return 0

	let delimiters = [',', '\n']
	let customDelimiterMatch = numbers.match(/^\/\/(\[.*?\])+\n|^\/\/.\n/)
	// console.log(customDelimiterMatch)

	if (customDelimiterMatch) {
		const delimiterSection = customDelimiterMatch[0]
		numbers = numbers.substring(delimiterSection.length)

		if (delimiterSection.startsWith('//[')) {
			// Custom delimiters of any length
			const matches = delimiterSection.match(/\[(.*?)\]/g)
			if (matches) {
				delimiters = matches.map((match) => match.slice(1, -1))
			}
		} else {
			// Single custom delimiter
			delimiters = [delimiterSection[2]]
		}
	}

	// console.log(delimiters)
	// Create a regex pattern to split by all delimiters
	let splitPattern = new RegExp(
		`[${delimiters
			.map((del) => del.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
			.join('|')}]`
	)

	let numArray = numbers.split(splitPattern).map((num) => parseInt(num))

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
