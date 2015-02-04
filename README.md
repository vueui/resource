# resource

```js
var Vue = require('vue')
var vueResource = require('vueui-resource')

Vue.use(vueResource, { baseUrl: '/api/v0' })

var app = new Vue({
	resources: function($resource) {
		var room = $resource('rooms').key('room').query({ house: 'White House' }).limit(1).get()
			
		return [ room ]
	}
})

```
