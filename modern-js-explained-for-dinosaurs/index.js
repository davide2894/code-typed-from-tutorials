//ES2015 import statement - replaces require statement for loading modules
import moment from "moment";

console.log("Hello from JavaScript!");

//use moment.js library, need to download it
//see more: http://momentjs.com
console.log(moment().startOf("day").fromNow());

//ES2015
var name = "Bob", time = "today";
console.log("Hello ${name}, how are yoy ${time}?");