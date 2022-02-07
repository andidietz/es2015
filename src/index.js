import { choice, remove } from './helpers'
import fruits from './foods'

const RANDOMFRUIT = choice(fruits)
const FRUITSREMAINING = remove(fruits, RANDOMFRUIT)

console.log(`I'd like one ${RANDOMFRUIT}, please`)
console.log(`Here you go: ${RANDOMFRUIT}`)
console.log(`Delicious! May I have another?`)

console.log(`I'm sorry, we're all out. We have ${FRUITSREMAINING} left.`)