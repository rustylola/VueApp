

// vue-router@3 --legact-peer-deps 
import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2Component from "./components/Example2";

// EACH ARRAY/OBJECTS CONTAINS 2 PARAMETERS 

const routes = [
    {
        path: "/",
        component:ExampleComponent,
        name: "home"
    },
    {
        path: "/second",
        component:Example2Component,
        name: "second"
    },
];

// BY DEFAULT WITHOUT MODE history
// ADDRESS ALWAYS PUT Example : 127.0.0.1:8000/home#/
// MODE HISTORY REMOVE '#' From address
// Reference : https://v3.router.vuejs.org/guide/essentials/history-mode.html#html5-history-mode
const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;