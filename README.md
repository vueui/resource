# resource

```js
var Vue = require('vue')
var vueResource = require('vueui-resource')

var options = {
	host: '',
	namespace: '/api/v0',
	resources: {
		cats: {
			path: '/cats',
			parse: function(res) {
				return res['data']
			}
		},
		rooms: {
			path: '/rooms',
			resources: {
				equipment: {
					path: '/{roomId}/equipment'
				},
				keys: {
					path: '/{roomId}/keys'
				}
			}
		},
		names: {
			path: '/names/{team}'
		}
	}
}

Vue.use(vueResource, options)

var app = new Vue({
	resources: function($resource) {
		var roomQuery = $resource('rooms', 'room').query({ house: 'White House' }).limit(1).find()
		var	equipmentQuery = $resource('rooms.equipment', 'equipment').params({ roomId: 1 }).find()
		var keysQuery = $resource('rooms.keys', 'keys').params({ roomId: 1 }).find()
			
		return [ roomQuery, equipmentQuery, keysQuery ]
	}
})
```

### Finding records
```js
app.$resource('users', 'myUsers').find().then(function(users) {
	console.log(users)
})
```

### Creating records
```js
app.$resource('cats', 'myCat').create({ name: 'Kitten' }).then(function(cat) {
	console.log(cat) // => { id: 1, name: 'Kitten' }
})
```

### Saving records
```js
app.myCat.name = 'New Cat'
app.$resource('myCat').save().then(function(cat) {
	// cat.name = 'New Name'
})
```

### Deleting records
```js
app.$resource('myCat').delete(true).then(function() {
	// DELETE /cats/1
	// app.myCat === null
})
```

### Reloading records
```js
app.$resource('myUsers').reload().then(function(users) {
	// updated users
})
```
