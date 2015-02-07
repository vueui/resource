var Vue = require('vue')

Vue.use(function(Vue) {
	window.Vue = Vue.prototype
})

window.app = new Vue({ 
	resources: function($resource) {
		var userQuery = $resource('users').query({ name: 'people' }).get(1)

		return {
			user: userQuery
		}
	} 
}).$mount('#app')

