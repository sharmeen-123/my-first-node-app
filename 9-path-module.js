const path = require('path')
console.log(path.sep)

// will join the path --> including slash '/' will not be effected or will be removed at runtime 
const filePath = path.join( '/content', 'subfolder', 'test.txt' )
console.log(filePath)

// wiil give last or base name of the path (test.txt)
const base = path.basename(filePath)
console.log(base)

// will give you an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt' )
console.log(absolute)
