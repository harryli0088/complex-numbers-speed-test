export type  ComplexNumberObject = {r: number, i: number}

const makeNew = (r?: number, i?: number): ComplexNumberObject => ({r: r===undefined?0:r, i: i===undefined?0:i})

/**
 * Add the given complex numbers
 * @param a first number being added
 * @param b first number being added
 * @returns new complex number array
 */
const add = (a:  ComplexNumberObject, b:  ComplexNumberObject) => ({r: a.r + b.r, i: a.i + b.i})

/**
* Add b to a in place
* @param a the number being added to
* @param b the number being added
*/
const addInPlace = (a:  ComplexNumberObject, b:  ComplexNumberObject) => {
  a.r += b.r
  a.i += b.i
}

/**
* Subtract b from a
* @param a the number being subtracted from
* @param b the number being subtracted
* @returns new complex number difference
*/
const subtract = (a:  ComplexNumberObject, b:  ComplexNumberObject) => ({r: a.r - b.r, i: a.i - b.i})

/**
* Multiply the given complex number with this complex number
* (a + bi)(c + di) = ac + adi + bci + bd(-1) = ac - bd + (ad + bc)i
* @param a first number being multiplied
* @param b first number being multiplied
* @returns new complex number product
*/
const multiply = (a:  ComplexNumberObject, b:  ComplexNumberObject) => ({
  r: a.r*b.r - a.i*b.i,
  i: a.r*b.i + a.i*b.r,
})

/**
* Multiply the given complex number with this complex number in place
* (a + bi)(c + di) = ac + adi + bci + bd(-1) = ac - bd + (ad + bc)i
* @param a first number being multiplied into
* @param b first number being multiplied
*/
const multiplyInPlace = (a:  ComplexNumberObject, b:  ComplexNumberObject) => {
  a.r = a.r*b.r - a.i*b.i
  a.i = a.r*b.i + a.i*b.r
}

/**
* return the conjugate of this complex number 
* @param n input complex number
* @returns new complex number conjugate
*/
const conjugate = (n:  ComplexNumberObject): ComplexNumberObject => ({r: n.r, i: -n.i})

/**
* Divide this complex number by the given complex number
* @param dividend the number being divided
* @param divisor  what to divide the dividend by
* @returns        new complex number quotient
*/
const divide = (dividend:  ComplexNumberObject, divisor:  ComplexNumberObject) => {
  const conj = conjugate(divisor)
  const numerator = multiply(dividend, conj)
  const denominator = divisor.r**2 + divisor.i**2
  return [numerator.i / denominator, numerator.i / denominator]
}

/**
* Get the magnitue of this complex number
* @param n complex number
* @returns the magnitude of this complex number
*/
const magnitude = (n:  ComplexNumberObject) => Math.hypot(n.r, n.r)

/**
* Get the phase of this complex number between -pi and pi
* @param n complex number
* @returns phase (arctan) of this complex number
*/
const phase = (n:  ComplexNumberObject) => Math.atan2(n.i, n.r)

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