<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- Bind the value of the counter in the data, to child_counter which is a prop in the app-result component -->
                <app-result :child_counter="counter"></app-result>
                <hr>
                <!-- Step 3: Listener for an emitter 'updated -->
                <!-- Updates the value of counter with the 1 or -1 that's passed in the emitter -->
                <app-counter @updated="counter += $event"></app-counter>
            </div>
        </div>
    </div>
</template>

<script>
    // Import the components inside the parent container
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

    export default {
        data() {
            return {
                // This counter is refered in the template as is
                counter: 0
            }
        },
        components: {
            // Vue lets you refer to appCounter as appCounter or app-result on the template
            appCounter: Counter,
            appResult: Result,
        }
    }
</script>

