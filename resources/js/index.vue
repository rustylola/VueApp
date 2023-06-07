<template>
    <div>
        <!-- LINK EXAMPLE IN VUE -->
       
        <!-- v-bind:to/:to (shor-hand) -->
        <!-- Link : https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings -->

        <nav class="navbar bg-white border-bottom navbar-light">
            <div class="container-fluid">
                <router-link class="navbar-brand " v-bind:to="{name:'home'}">QApp</router-link>
                <router-link class="btn navbar-button" :to="{name:'second'}">Second</router-link>
            </div>
        </nav>

        <div class="container mt-2 mb-2">
            <router-view></router-view>
        </div>
    </div>
</template>