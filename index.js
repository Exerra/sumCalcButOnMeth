/*
	This follows the format of the very popular beginners exercise of creating a very simple 3 line sum calc function

	You can only edit everything *inside* of myFunction
 */
function myFunction(a, b) {
	const getValue = async (a, b) => {
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

		const as = await (await getA(a, b)).toString()
		const bs = await (await getB(a, b)).toString()

		const ai = parseInt(as)
		const bi = parseInt(bs)

		return ai + bi
	}

	return getValue(a, b)
}

myFunction(25, 49).then(n => {console.log(n)})