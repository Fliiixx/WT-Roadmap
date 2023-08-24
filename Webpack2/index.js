

import moment from "moment";
console.log(moment().endOf('day').fromNow());




//Transpilling Code
//npm i babel-core babel-preset-env babel-loader --save-dev
//=> converting new JS in older one with same output

var name = "Bob";
var time = "today";

console.log(`Hello ${name}, how are you ${time}?`);
console.log("Hello World");
//converts this to older style
//ability to use newer Syntax before all Browsers adapt them

//-------------------------------------------

//Using a task runner
//=> helps automating parts
//e.g minifing, optimizing images, ...
//in npm scripts
//build for building
//watch for build on reload
//strg-c to end

//---------------------------------
//Using a dev server

