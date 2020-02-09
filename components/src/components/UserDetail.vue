<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <!-- Displaying the received property. Name has to match with whats in the props -->
        <!-- <p>User Name: {{ name }} </p> -->
        <p>User Name: {{ switchName() }} </p>
        <!-- Step 5: Displaying the received user age -->
        <p>User Age: {{ userAge }} </p>
        <!-- Button to Reset the name -->
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main'
    export default {
        // List of all props we can receive
        props: {
            name: {
                type: [String, Array], // Setting the type of the received prop
                required: true,
                default: "Waleed" // Default value
            },
            userAge: Number // Step 4: Listening to the userAge passed by the parent
        },
        // Can also use it in a function
        methods: {
            switchName() {
                // Just reverses the name
                return this.name.split("").reverse().join("");
            },
            resetName() {
                this.name = 'Max';
                // We need to pass this on the parent
                // First argument can be anything
                // Second is the updated data
                this.$emit('nameWasReset', this.name);
            }
        },
        // Step 3: Event Listener
        created() {
            eventBus.$on('ageWasEdited', (data) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
