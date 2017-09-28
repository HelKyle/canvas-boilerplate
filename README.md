# canvas-boilerplate
An HTML5 canvas boilerplate with ES6, SCSS, and live-reloading with BrowserSync.

# help to create a canvas boilerplate quickly by running the code below as node scripts.

``` js
var path = require('path')
var child_process = require('child_process')
var name = process.argv[2]

if (!name) {
  console.log('name field is required.')
  return
}

child_process.execSync(`
  cd ~/projects &&
  git clone https://github.com/christopher4lis/canvas-boilerplate.git ${name} &&
  cd ${name} &&
  code . &&
  npm i && 
  npm start
`,  {stdio:[0,1,2]})
```
