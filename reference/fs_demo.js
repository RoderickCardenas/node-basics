const fs = require('fs')
const path = require('path')

//create folder fs.mkdir(path[,options], callback)
// sync ver fs.mkdirSync(path[, options])

//create folder named test in current directory
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err
//   console.log('Folder created...')
// })

//Create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   err => {
//     if (err) throw err
//     console.log('File written to...')

//     //file append text
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       ' I love node js',
//       err => {
//         if (err) throw err
//         console.log('File written to...')
//       }
//     )
//   }
// )

//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
