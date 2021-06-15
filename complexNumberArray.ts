export type ComplexNumberArray = [number, number] //[real, imaginary]

const makeNew = (r?: number, i?: number):ComplexNumberArray => [r===undefined?0:r,i===undefined?0:i]

/**
 * Add the given complex numbers
 * @param a first number being added
 * @param b first number being added
 * @returns new complex number array
 */
const add = (a: ComplexNumberArray, b: ComplexNumberArray) => [ a[0]+b[0], a[1]+b[1] ]

/**
* Add b to a in place
* @param a the number being added to
* @param b the number being added
*/
const addInPlace = (a: ComplexNumberArray, b: ComplexNumberArray) => {
  a[0] += b[0]
  a[1] += b[1]
}

/**
* Subtract b from a
* @param a the number being subtracted from
* @param b the number being subtracted
* @returns new complex number difference
*/
const subtract = (a: ComplexNumberArray, b: ComplexNumberArray) => [ a[0]-b[0], a[1]-b[1] ]

/**
* Multiply the given complex number with this complex number
* (a + bi)(c + di) = ac + adi + bci + bd(-1) = ac - bd + (ad + bc)i
* @param a first number being multiplied
* @param b first number being multiplied
* @returns new complex number product
*/
const multiply = (a: ComplexNumberArray, b: ComplexNumberArray) => [
  a[0]*b[0] - a[1]*b[1],
  a[0]*b[1] + a[1]*b[0],
]

/**
* Multiply the given complex number with this complex number in place
* (a + bi)(c + di) = ac + adi + bci + bd(-1) = ac - bd + (ad + bc)i
* @param a first number being multiplied into
* @param b first number being multiplied
*/
const multiplyInPlace = (a: ComplexNumberArray, b: ComplexNumberArray) => {
  a[0] = a[0]*b[0] - a[1]*b[1]
  a[1] = a[0]*b[1] + a[1]*b[0]
}

/**
* return the conjugate of this complex number 
* @param n input complex number
* @returns new complex number conjugate
*/
const conjugate = (n: ComplexNumberArray):ComplexNumberArray => [n[0], -n[1]]

/**
* Divide this complex number by the given complex number
* @param dividend the number being divided
* @param divisor  what to divide the dividend by
* @returns        new complex number quotient
*/
const divide = (dividend: ComplexNumberArray, divisor: ComplexNumberArray) => {
  const conj = conjugate(divisor)
  const numerator = multiply(dividend, conj)
  const denominator = divisor[0]**2 + divisor[1]**2
  return [numerator[0] / denominator, numerator[1] / denominator]
}

/**
* Get the magnitue of this complex number
* @param n complex number
* @returns the magnitude of this complex number
*/
const magnitude = (n: ComplexNumberArray) => Math.hypot(n[0], n[1])

/**
* Get the phase of this complex number between -pi and pi
* @param n complex number
* @returns phase (arctan) of this complex number
*/
const phase = (n: ComplexNumberArray) => Math.atan2(n[1], n[0])

export default {
  makeNew,
  add,
  addInPlace,
  subtract,
  multiply,
  multiplyInPlace,
  conjugate,
  divide,
  magnitude,
  phase,
}