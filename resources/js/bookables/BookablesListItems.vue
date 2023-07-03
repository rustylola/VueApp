<template>
    <div>
        <!-- Use declared varable from props -->
        <!-- <h1>{{ itemTitle }}</h1>
        <p>{{ itemContent }} </p> -->

        <div class="card m-1">
            <div class="card-body">
                <div class="card-title">{{ itemTitle }}</div>
                <div class="card-text">{{ itemContent }}</div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    // PROPS - passing data from parent component which is bookables.vue
    // props: ['itemTitle','itemContent','price'], (Basic Prop declaration)
    props: {'itemTitle': String, 'itemContent': String,'price':Number},  // (Prop object with datatype)
    // mounted(){
    //     console.log(this.itemTitle);
    // },
}

</script>