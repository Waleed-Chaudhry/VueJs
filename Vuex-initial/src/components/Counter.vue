<template>
    <div>
        <!-- Step 1: on click, the increment method is called -->
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                // Step 2: emit to the parent (App.vue) the value (1 or -1)
                this.$emit('updated', 1);
            },
            decrement() {
                this.$emit('updated', -1);
            }
        }
    }
</script>