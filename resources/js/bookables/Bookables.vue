<template>
    <div>
        <!-- OPTION TWO FOR DISPLAYNG COMPONENTS - CAMEL CASE SAMPLE-->
        <!-- <BookablesListItems></BookablesListItems> -->

        
        <!-- OPTION ONE FOR DISPLAYNG COMPONENTS - KEBAB CASE -->
        <!-- PROPS is like simple html attribute but can use to pass data to child component -->
        <!-- a declared props camelCase will become kebab-case -->
        <!-- Link : https://vuejs.org/guide/essentials/component-basics.html#passing-props -->
        
        <!-- Use v-bind to preserve datatype by passing the value -->
        <bookables-list-items item-title="first title" item-content="first content" v-bind:price="100"></bookables-list-items> 
        <bookables-list-items item-title="second title" item-content="second content" :price="200"></bookables-list-items>
        <bookables-list-items item-title="third title" item-content="third content" :price="300"></bookables-list-items>
        
        <!-- INITIALIZE VIA GLOBAL COMPONENTS -->
        <!-- <practice-test></practice-test> -->

    </div>
</template>

<script>
// INITIALIZE COMPONENTS IN A SINGLE FILE
import BookablesListItems from "./BookablesListItems";

export default {
    // KEBAB CASE
    // NOTE : Only Pascal Case
    // <bookables-list-items>
    // "Bookable-list-item" : BookablesListItems,

    // CAMEL CASE / PASCAL CASE SHORT HAND JS ES6
    // Note : Can use both type of display
    // <bookables-list-items> AND <BookablesListItems>
    // Link : https://vuejs.org/guide/essentials/component-basics.html#using-a-component
    components:{
        // CAMEL CASE - SHORT HAND JS ES6
        // BookablesListItems,

        // KEBAB CASE : can rename 
        "bookables-list-items" : BookablesListItems,
    }
}
</script>
