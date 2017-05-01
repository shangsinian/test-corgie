'use strict'

module.exports = function(app, controller){
	app.get('/api/user', controller.user.update)
}

