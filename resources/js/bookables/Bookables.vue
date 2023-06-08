<template>
    <div>
        <bookables-list-items>

        </bookables-list-items>
        <!-- OPTION ONE FOR DISPLAYNG COMPONENTS -->
        <bookables-list-items>

        </bookables-list-items>
        <!-- OPTION TWO FOR DISPLAYNG COMPONENTS -->
        <BookablesListItems>

        </BookablesListItems>
    </div>
</template>

<script>
// INITIALIZE COMPONENTS IN A SINGLE FILE
import BookablesListItems from "./BookablesListItems";
export default {
    components:{
        BookablesListItems,
    }
}
</script>
