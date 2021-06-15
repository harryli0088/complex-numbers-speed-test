import ComplexNumberClass from "./ComplexNumberClass";
import complexNumberArray from "./complexNumberArray";
import complexNumberObject from "./complexNumberObject";


function runTest(name: string, callback: Function, iterations: number = 1000000) {
  const start = new Date()
  for(let i=0; i<iterations; ++i) {
    callback()
  }
  const end = new Date()
  const diff = end.getTime() - start.getTime()
  console.log(name, "Time", diff)
  return diff
}

function runTestSet(name: string, callback: Function, iterations: number = 1000000, reps: number = 5) {
  const times = Array.from(Array(reps).keys())
  for(let i=0; i<reps; ++i) {
    times[i] = runTest(name, callback, iterations)
  }
  return times.reduce((sum, t) => sum + t, 0) / times.length
}

const REPS = 5
const POWERS = 9
const iterations = Array.from(Array(POWERS).keys()).map(n => Math.pow(10, n))
const classTimes = Array.from(Array(POWERS).keys())
const arrayTimes = Array.from(Array(POWERS).keys())
const objectTimes = Array.from(Array(POWERS).keys())
iterations.forEach((iter,i) => {
  arrayTimes[i] = runTestSet("Array", () => {
    const n = complexNumberArray.makeNew(Math.random()*1000, Math.random()*1000)
    const sum = complexNumberArray.multiply(n, complexNumberArray.makeNew(Math.random()*1000, Math.random()*1000))
  }, iter, REPS)
  
  classTimes[i] = runTestSet("Class", () => {
    const n = new ComplexNumberClass({r: Math.random()*1000, i:Math.random()*1000})
    const sum = n.multiply(new ComplexNumberClass({r: Math.random()*1000, i:Math.random()*1000}))
  }, iter, REPS)

  objectTimes[i] = runTestSet("Object", () => {
    const n = complexNumberObject.makeNew(Math.random()*1000, Math.random()*1000)
    const sum = complexNumberObject.multiply(n, complexNumberObject.makeNew(Math.random()*1000, Math.random()*1000))
  }, iter, REPS)
})

console.log("iterations\n", iterations.join("\n"))
console.log("classTimes\n", classTimes.join("\n"))
console.log("arrayTimes\n", arrayTimes.join("\n"))
console.log("objectTimes\n", objectTimes.join("\n"))