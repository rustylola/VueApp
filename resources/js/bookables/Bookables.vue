<template>
    <div>
        <!-- OPTION TWO FOR DISPLAYNG COMPONENTS - CAMEL CASE SAMPLE-->
        <!-- <BookablesListItems></BookablesListItems> -->

        
        <!-- OPTION ONE FOR DISPLAYNG COMPONENTS - KEBAB CASE -->
        <!-- PROPS is like simple html attribute but can use to pass data to child component -->
        <!-- a declared props camelCase will become kebab-case -->
        <!-- Link : https://vuejs.org/guide/essentials/component-basics.html#passing-props -->
        
        <!-- Use v-bind to preserve datatype by passing the value -->
        <!-- Note: declaring props is a 'One-way data flow' which means it is a read-only data or a data has ability to pass to child property -->
        <!-- Link : https://v2.vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow -->

        <!-- ####### -->
        <!-- Data function and declaration of objects used -->
        <!-- Put v-bind/: on props to enabled the declared objects inside the data() passing through it -->
        <!-- <bookables-list-items :item-title="bookables1.title" :item-content="bookables1.content" v-bind:price="100"></bookables-list-items>  -->
        <!-- <bookables-list-items :item-title="bookables2.title" :item-content="bookables2.content" :price="200"></bookables-list-items> -->

        <!-- Without declaring in data() -->
        <!-- <bookables-list-items :item-title="bookables3.title" :item-content="bookables3.content" :price="200"></bookables-list-items> -->
        <!-- Normal Props Example -->
        <!-- <bookables-list-items item-title="third title" item-content="third content" :price="300"></bookables-list-items> -->
        <!-- ####### -->

        <!-- ####### -->
        <!-- Conditional rendering -->
        <!-- <bookables-list-items v-if="bookables1 != null"
            :item-title="bookables1.title" :item-content="bookables1.content" v-bind:price="100"></bookables-list-items>  -->

        <!-- List and rendering v-for -->
        <!-- Row : {{ rows }} -->
        <div v-if="loading">
            <h1>Data is Loading ...</h1>
        </div>
        <div v-else>
            <div class="row" v-for="row in rows" :key="'row' + row">
                <div class="col mb-3" 
                    v-for="(bookable,column) in bookablesInRow(row)" 
                    :key="'row'+row+column">
                    <!-- {{ (row-1) * columns }}  -  {{ row*columns }}  -  {{ column }} -->
                    <bookables-list-items 
                        :item-title="bookable.title" 
                        :item-content="bookable.content" 
                        :price="200"
                    >
                    </bookables-list-items>
                </div>

                <div class="col mb-3" v-for="p in placeHolder(row) " :key="'placeholder' + row + p">

                </div>
            </div>

           
            
        </div>
        
    
        <!-- <bookables-list-items item-title="third title" item-content="third content" :price="300"></bookables-list-items> -->
        
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
    },
    data(){
        return{
            bookables: null,
            loading:false,
            columns:5,
        };
    },
    // [2]
    computed:{
        rows(){
            return this.bookables == null ? 0 : Math.ceil(this.bookables.length/this.columns);
        }
    },
    methods:{
        bookablesInRow(row){
            return this.bookables.slice((row-1) * this.columns,row*this.columns);
        },
        placeHolder(row){
            return this.columns - this.bookablesInRow(row).length;
        }
    },
    created(){
        this.loading = true;
        setTimeout(() => {
            this.bookables = [{
                id:1,
                title:'book 1',
                content: 'English 1',
            },{
                id:2,
                title:'book 2',
                content: 'Math 1',
            },{
                id:3,
                title:'book 3',
                content: 'Science 1',
            },{
                id:4,
                title:'book 4',
                content: 'Filipino 1',
            },{
                id:5,
                title:'book 5',
                content: 'Arts 1',
            },{
                id:6,
                title:'book 6',
                content: 'Math 1',
            },{
                id:7,
                title:'book 7',
                content: 'Logic 1',
            }];

            this.loading = false;
        }, 5000);
        
    },

    // VUE Life cycle hooks
    // Link : https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram
    // beforeCreate(){
    //     console.log('before created');
    // },

    // created(){
    //     console.log('created');
    //     console.log(this.bookables1);
    //     console.log(this.bookables2);

    //     // Example: fetching data from the server in the form of settime out
    //     // bookables3 nad its component is with component that are reactive that made it the component (child) reload/render
    //     setTimeout(() => {
    //         // this.bookables1.title = 'Modify Book 1';
    //         // this.bookables2.title = 'Modify Book 2';
    //         console.log('first Change');
    //         this.bookables1 = {
    //             title:'book 1',
    //             content: 'english 1',
    //         };
    //         this.bookables2 = {
    //             title:'book 2',
    //             content: 'Math 1',
    //         };
    //         this.bookables3 = {
    //             title:'book 3',
    //             content: 'Science 1',
    //         };
    //     }, 5000);

    //     setTimeout(() => {
    //         console.log('Second Change ');
    //         this.bookables2 = {
    //             title:'Modify book 2',
    //             content: 'Math 1',
    //         };
    //     }, 8000);

    //     [1]
    //     // bookables3 and its component is not with component that are reactive
    //     // in order to reflect this changes, always declare the object inside data(method)
    //     setTimeout(() => {
    //         console.log('third Change ');
    //         this.bookables3 = {
    //             title:'Modify book 3',
    //             content: 'Science 1',
    //         };
    //     }, 12000);
    // },
    // beforeMount(){
    //     console.log('before mount');
    // },
    // mounted(){
    //     console.log('mounted');
    // },
    // beforeUpdate(){
    //     console.log('before update');
    // },
    // updated(){
    //     console.log('update');
    // },
    // beforeDestroy(){
    //     console.log('before destroy');
    // },
    // destroyed(){
    //     console.log('destroyed');
    // }
    
}

// [1]
// Note: 
// the difference between function() and arrow function is the accessibility of data 
// function can access the data by putting it in parameters Ex. function test(this.bookables1,this.bookables2)
// unlike from arrow function, you can actually access it without putting it on parameters

// [2]
// Computed Properties 
// Short Explain:
// Computed Properties:
// Computed properties are properties that are calculated based on the values of other properties in the component. 
// They are defined using the computed property in a Vue component. Computed properties are cached and only recalculated 
// when their dependencies change. This caching mechanism helps improve performance by avoiding unnecessary recalculations.
// Computed properties are useful when you have data that depends on other data and needs to be recalculated whenever 
// the dependencies change. For example, if you have two data properties a and b, and you want to calculate their sum, you 
// can define a computed property that returns the sum of a and b. Whenever a or b changes, the computed property will be 
// automatically updated.
// Link: https://v2.vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods
</script>
