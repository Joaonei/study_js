const {html} = require ('./regex')
// $1 $2 $3 retrovisores
console.log(html)
console.log(html.match(/<(\w+).*?>.+?<\/.+\1>/g))