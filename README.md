# resource

```js
var Vue = require('vue')
var vueResource = require('vueui-resource')

Vue.use(vueResource, { baseUrl: '/api/v0' })

var app = new Vue({
	resources: function($resource) {
		var room = $resource('rooms').key('room')
				.query({ house: 'White House' })
				.limit(1)
				.get()
			
		return [ room ]
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

```

### Reloading records
```js
app.$resource('myUsers').reload().then(function(users) {
	// updated users
})
```


