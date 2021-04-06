//npm -global command,comes with node
//npm --version

//local dependency -use it only in this aprticular project 
//npm i <package name>
//global dependency -use it any  project 
//npm install -g <packageName>
// sudo install -g <pakageName> (mac)


//package.json manifest file (stores important info about project/package)' 
// manual approach (create package.json in the root, create properties etc) 
//npm init (step by step, press enter to skip) 14 // npm init -y (everything default)

const _ = require('lodash')
const items =[1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)
