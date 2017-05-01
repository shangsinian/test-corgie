const Corgie = require('corgie')
const path = require('path')

const app = new Corgie({
	baseDir: path.join(__dirname, '../')
})

app.listen(8080);