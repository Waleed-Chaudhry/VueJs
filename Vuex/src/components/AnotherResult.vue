<template>
    <div>
        <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        // Assigns the getter to the doubleCounter and stringCounter prop
        // That prop can then be used on the template
        computed: {
            // Use Es6 to use our own computed properties in addition to the mapGetters
            // Need to use npm install --save-dev babel-preset-stage-2
            // Also have to add ["stage-2"] to .babelrc
            // See Result.vue for how you can do this without using getters and how crpyto-merchant does it
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ]),
            ourOwn() {
                return 1
            }
        }
    }
</script>