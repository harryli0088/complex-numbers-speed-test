import ComplexNumberClass from "./ComplexNumberClass";
import complexNumberArray from "./complexNumberArray";
import complexNumberObject from "./complexNumberObject";

/**
 * Run the callback for the number of iterations and return the time taken
 * @param name        the name of the speed test for console logging purposes
 * @param callback    the callback function to run
 * @param iterations  the number of iterations to run the callback
 * @returns           the time elapsed in milliseconds
 */
function runSpeedTest(name: string, callback: Function, iterations: number = 1000000) {
  const start = new Date() //record the start date
  for(let i=0; i<iterations; ++i) { //run the callback for the number of iterations
    callback() //run the callback
  }
  const end = new Date() //record the end date
  const diff = end.getTime() - start.getTime() //get the time difference
  console.log(name, "Time", diff)
  return diff //return the time difference
}

//initialize several base-10 logarithmic iterations to test
const POWERS = 10 
const iterations = Array.from(Array(POWERS).keys()).map(n => Math.pow(10, n)) //[1, 10, 100, ..., 10^(POWERS-1)]

//these arrays will hold the times taken to run the number of iterations
const classTimes = Array.from(Array(POWERS).keys())
const arrayTimes = Array.from(Array(POWERS).keys())
const objectTimes = Array.from(Array(POWERS).keys())

iterations.forEach((iter,i) => { //for all the iterations we want
  //run all the tests and record the times taken

  arrayTimes[i] = runSpeedTest("Array", () => {
    const n = complexNumberArray.makeNew(Math.random()*1000, Math.random()*1000)
    complexNumberArray.add(n, complexNumberArray.makeNew(Math.random()*1000, Math.random()*1000))
  }, iter)
  
  classTimes[i] = runSpeedTest("Class", () => {
    const n = new ComplexNumberClass({r: Math.random()*1000, i:Math.random()*1000})
    n.add(new ComplexNumberClass({r: Math.random()*1000, i:Math.random()*1000}))
  }, iter)

  objectTimes[i] = runSpeedTest("Object", () => {
    const n = complexNumberObject.makeNew(Math.random()*1000, Math.random()*1000)
    complexNumberObject.add(n, complexNumberObject.makeNew(Math.random()*1000, Math.random()*1000))
  }, iter)
})

//console log the results
console.log("iterations\n", iterations.join("\n"))
console.log("classTimes\n", classTimes.join("\n"))
console.log("arrayTimes\n", arrayTimes.join("\n"))
console.log("objectTimes\n", objectTimes.join("\n"))