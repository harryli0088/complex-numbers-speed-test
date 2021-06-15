export default class ComplexNumberClass {
  i: number //imaginary
  r: number //real

  constructor({i,r}:{i?: number, r?: number}) {
    this.i = i || 0
    this.r = r || 0
  }

  /**
   * Add the given ComplexNumberClass to this ComplexNumberClass
   * @param n the number being added
   * @returns new ComplexNumberClass sum
   */
  add = (n: ComplexNumberClass) => new ComplexNumberClass({
    i: this.i + n.i,
    r: this.r + n.r,
  })

  /**
   * Add the given ComplexNumberClass to this ComplexNumberClass in place
   * @param n the number being added
   */
  addInPlace = (n: ComplexNumberClass) => {
    this.i += n.i,
    this.r += n.r
  }

  /**
   * Subtract the given ComplexNumberClass from this ComplexNumberClass
   * @param subtrahend the number being subtracted
   * @returns          new ComplexNumberClass difference
   */
  subtract = (subtrahend: ComplexNumberClass) => new ComplexNumberClass({
    i: this.i - subtrahend.i,
    r: this.r - subtrahend.r,
  })

  /**
   * Multiply the given ComplexNumberClass with this ComplexNumberClass
   * (a + bi)(c + di) = ac + adi + bci + bd(-1) = ac - bd + (ad + bc)i
   * @param n the number being multiplied
   * @returns new ComplexNumberClass product
   */
  multiply = (n: ComplexNumberClass) => new ComplexNumberClass({
    i: this.r*n.i + this.i*n.r,
    r: this.r*n.r - this.i*n.i,
  })

  /**
   * Multiply the given ComplexNumberClass with this ComplexNumberClass in place
   * (a + bi)(c + di) = ac + adi + bci + bd(-1) = ac - bd + (ad + bc)i
   * @param n the number being multiplied
   */
   multiplyInPlace = (n: ComplexNumberClass) => {
    this.i = this.r*n.i + this.i*n.r
    this.r = this.r*n.r - this.i*n.i
  }

  /**
   * return the conjugate of this ComplexNumberClass 
   * @returns new ComplexNumberClass conjugate
   */
  conjugate = () => new ComplexNumberClass({
    i: -1*this.i, //negative imaginary part
    r: this.r,
  })

  /**
   * Divide this ComplexNumberClass by the given ComplexNumberClass
   * @param divisor what to divide this ComplexNumberClass by
   * @returns       new ComplexNumberClass quotient
   */
  divide = (divisor: ComplexNumberClass) => {
    const conjugate = divisor.conjugate()
    const numerator = this.multiply(conjugate)
    const denominator = divisor.r**2 + divisor.i**2
    return new ComplexNumberClass({
      i: numerator.i / denominator,
      r: numerator.r / denominator,
    })
  }

  /**
   * Get the magnitue of this ComplexNumberClass
   * @returns the magnitude of this ComplexNumberClass
   */
  magnitude = () => Math.hypot(this.r, this.i)

  /**
   * Get the phase of this ComplexNumberClass between -pi and pi
   * @returns phase (arctan) of this ComplexNumberClass
   */
  phase = () => Math.atan2(this.i, this.r)
}