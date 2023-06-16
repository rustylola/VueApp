<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">My First practice</div>

                    <div class="card-body">
                        I tried to create own components hehe. {{ price }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // Similarly as document.ready, in Vue.js, the mounted lifecycle hook is a function that is called 
        // automatically by Vue.js once the component has been mounted to the DOM. It 
        // indicates that the component's template has been rendered and added to the DOM, 
        // and it's safe to access and manipulate the component's elements.
        // Link : https://vuejs.org/api/options-lifecycle.html#mounted
        mounted() {
            console.log('Component mounted.');
            console.log(this.price);
            // Modifiying the data from props will cause an error, it will suggest to modify using 'Data' properties
            // this.price = '4000';
        },
        props: {'itemTitle': String, 'itemContent': String,'price':Number}, 
    }
</script>

<!-- Scoped Property -->
<!-- This allows you to add style only affects within the template above -->
<style scoped>
    .card-body{
        color:yellow;
    }
</style>