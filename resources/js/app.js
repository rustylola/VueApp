/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./bootstrap');

import router from './routes';
import VueRouter from "vue-router";
import Index from "./index";

window.Vue = require('vue').default;

// NOTE: We don't need to register it here, the router already
//       regiter all components.
// REGISTER GLOBAL COMPONENTS LOCALLY : EXAMPLE
// Vue.component(
//     'example-component',
//      require('./components/ExampleComponent.vue').default
// );

// Vue.component(
//     'exampletwo-component',
//      require('./components/Example2.vue').default
// );

Vue.use(VueRouter);

// NOTE : As you can see, router import use here to access
//        route and components from routes.js
const app = new Vue({
    el: '#app',
    router,
    components :{
        'index' : Index,
    }
});
