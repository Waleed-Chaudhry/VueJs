<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <!-- Step 1: Calling Edit Adge method on click -->
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
       props: ['userAge'], // Same as the name used in User.vue
        methods: {
            editAge() {
                this.userAge = 30;
                // Step 2: Emitting the data to the parent
                // this.$emit('ageWasEdited', this.userAge) 
                // Step 2: emit using eventBus instead
                // eventBus.$emit('ageWasEdited', this.userAge)
                // Using the method defined in main.js to prevent code duplication
                eventBus.changeAge(this.age) 
            }
        } 
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
