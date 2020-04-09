<template>
    <!-- counter() is used as counter in the template -->
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    export default {
        computed: {
            // whenever the state.counter changes, the value of counter (name of function) will change
            counter() {
                return this.$store.state.counter
            }
        }
    }
</script>