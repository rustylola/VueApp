

// vue-router@3 --legacy-peer-deps 
import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Example2Component from "./components/Example2";
import practice1 from "./components/practice1";

// EACH ARRAY/OBJECTS CONTAINS 2 PARAMETERS 

// BOOKABLES START
import Bookables from "./bookables/Bookables";
import BookablesListItems from "./bookables/BookablesListItems";

const routes = [
    // EXAMPLES
    // {
    //     path: "/",
    //     component:ExampleComponent,
    //     name: "home"
    // },
    // {
    //     path: "/second",
    //     component:Example2Component,
    //     name: "second"
    // },
    // {
    //     path: "/test1",
    //     component:practice1,
    //     name: "test1"
    // },
    {
        path: "/",
        component: Bookables,
        name: "Bookables",
    },
    {
        path: "/BookableListItems",
        component: BookablesListItems,
        name: "BookableList",
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