<template>
    <div>
        <!-- LINK EXAMPLE IN VUE -->
       
        <!-- v-bind:to/:to (shor-hand) -->
        <!-- Link : https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings -->

        <nav class="navbar bg-white border-bottom navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand " v-bind:to="{name:'Bookables'}">QBookApp</router-link>
                <div class="navbar">
                    <router-link class="btn navbar-button" :to="{name:'BookableList'}">Book List</router-link>
                </div>
            </div>
        </nav>

        <div class="container mt-2 mb-2">
            <router-view></router-view>
        </div>
    </div>
</template>