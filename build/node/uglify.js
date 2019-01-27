const Uglify = require('uglify-js')
const fs = require('fs')

const js = fs.readFileSync('r.js', 'utf8')
const result = Uglify.minify(js).code

fs.writeFileSync('index.js', result, 'utf8')
