// IMPORT
import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";


// EACH ARRAY/OBJECTS CONTAINS 2 PARAMETERS 

const routes = [
    {
        path: "/",
        component:ExampleComponent,
    }
];

const router = new VueRouter({
    routes,
});

export default router;