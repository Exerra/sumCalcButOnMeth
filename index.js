/*
	This follows the format of the very popular beginners exercise of creating a very simple 3 line sum calc function

	You can only edit everything *inside* of myFunction
 */
function myFunction(a, b) {
	class number {
		constructor(value) {
			this.value = value;
		}
		getValue() {
			return this.value;
		}
	}

	class numberFactory {
		createNewNumberWithValue(value) {
			return new number(value);
		}
	}

	const getValue = async (a, b) => {
		const parseNumber = (numberString) => {
			digits = {
				'0': 0,
				'1': 1,
				'2': 2,
				'3': 3,
				'4': 4,
				'5': 5,
				'6': 6,
				'7': 7,
				'8': 8,
				'9': 9,
			}
			nDigits = numberString.split('')
			num = 0
			isNegative = false
			hasDecimal = false
			decimalDigits = 0
			nDigits.forEach((digit) => {
				if (digits[digit] !== undefined) {
					num *= 10
					num += digits[digit]
					if (hasDecimal) {
						decimalDigits += 1
					}
				} else if (digit === '.') {
					hasDecimal = true
				} else if (digit === '-') {
					isNegative = true
				}
			})
			for (let i = 0; i < decimalDigits; i++) {
				num /= 10
			}
			if (isNegative) {
				num = -num
			}
			return num
		}

		const getNumber = async (number) => {
			const encode = (number) => {
				let arr = []

				for (let i = 0; i < number.toString().length; i++) {
					let x = number.toString().charAt(i)
					if (x === '.') {
						arr.push('.')
					} else if (x === '-') {
						arr.push('-')
					} else {
						x = x * 4
						arr.push(+x)
					}
				}

				return arr
			}

			const decode = (arr) => {
				let str = ""

				arr.forEach(s => {
					if (s === '.') {
						str += '.'
					} else if (s === '-') {
						str += '-'
					} else {
						s = s / 4
						str += s.toString()
					}
				})
				return parseNumber(str)
			}

			const checkType = (number) => {
				return ['.', '-'].includes(number) ? 'number' : typeof (number + 1)
			}

			let res = encode(number)

			res.forEach(n => {
				if (checkType(n) != "number") throw new Error("fuck you")
			})

			return decode(res)
		}


		const getA = (a, b) => {
			return getNumber(a)
		}
		const getB = (a, b) => {
			return getNumber(b)
		}

		const as = await (await getA(a, b)).toString()
		const bs = await (await getB(a, b)).toString()

		const ai = parseNumber(as)
		const bi = parseNumber(bs)
		
		const numFact = new numberFactory()
		const an = numFact.createNewNumberWithValue(ai)
		const bn = numFact.createNewNumberWithValue(bi)

		const add = async (x, y) => {
			const numFact = new numberFactory()
			const zero = numFact.createNewNumberWithValue(0)
			const one = numFact.createNewNumberWithValue(1)

			if (y.getValue() == zero.getValue())
				return x.getValue();
			else
				return myFunction(x.getValue() ^ y.getValue(), (x.getValue() & y.getValue()) << one.getValue());
		}

		let sum = await add(an, bn)

		return sum
	}

	return getValue(a, b)
}
console.time("myFunction")
myFunction(25, 49).then(n => {console.log(n); console.timeEnd("myFunction")})