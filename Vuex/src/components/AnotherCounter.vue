<template>
    <div>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            // ...mapMutations([
            //     'increment',
            //     'decrement'
            // ])
            // crypto-merchant uses commit, so commenting out the mapMutations bit
            increment() {
                // Vue will look for a method named increment in the store, and call it
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            }
        }
    }
</script>