function myFunction(a, b) {
	const getValue = (a, b) => {
		const getNumber = async (number) => {
			const encode = (number) => {
				let arr = []

				for (let i = 0; i < number.toString().length; i++) {
					arr.push(+number.toString().charAt(i))
				}

				return arr
			}

			const decode = (arr) => {
				let str = ""

				arr.forEach(s => {
					str += s.toString()
				})

				return parseInt(str)
			}

			const checkType = (number) => {
				return typeof (number + 1)
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

		return { a: getA(a, b), b: getB(a, b) }
	}

	console.log(getValue(a, b))
}

myFunction(25, 49)