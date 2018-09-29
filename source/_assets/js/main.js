
// import vueSmoothScroll from 'vue-smooth-scroll'
// Vue.use(vueSmoothScroll)


// var app = new Vue({
//     el: '#app',
//     data: {
//         homeActive: false,
//         servicesActive: false,
//         aboutActive: false,
//         contactActive: false,
//     },
//     methods: {
//     }
//     // ...
    
// // ...
// })

let NavScroll = require('navscroll');
Vue.use(NavScroll);

new Vue({
    directives: { 'new-name': NavScroll }
})
