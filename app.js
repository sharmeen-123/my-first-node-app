/* 
*-- for using external pakages like bootstrap you always have to install them first
*-- manual approach (create package.json in the root, create properties etc)
*-- npm init --> step by step press enter to skip
*-- npm init -y --> every thing default init
*-- npm i <package name> --> to install package
*/
const _ = require('lodash')
const items = [1,[2,[3,[4]]]] 
const newitem = _.flattenDeep(items) // will store items in the single array
console.log(newitem);