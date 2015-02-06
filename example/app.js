
var domReady = require('domready');
var Vue = require('vue');
var resource = require('..')

domReady(function () {

    Vue.use(resource, { baseUrl: '/api/v0' })

    window.app = new Vue({
        resources: function ($resource) {
            var room = $resource('rooms').key('room').query({ house: 'White House' }).limit(1)

            return [ room ]
        },

        template: '<div> Welcome to {{room.name}} </div>'
    }).$mount()
});
