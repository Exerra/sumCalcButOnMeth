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
					let x = number.toString().charAt(i)
					x = x * 4
					arr.push(+x)
				}

				return arr
			}

			const decode = (arr) => {
				let str = ""

				arr.forEach(s => {
					s = s / 4
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

		const add = (x, y) => {
			if (y == 0)
				return x;
			else
				return myFunction(x ^ y, (x & y) << 1);
		}

		let sum = await add(ai, bi)

		return sum
	}

	return getValue(a, b)
}
console.time("myFunction")
myFunction(25, 49).then(n => {console.log(n); console.timeEnd("myFunction")})