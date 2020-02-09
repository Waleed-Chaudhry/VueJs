import Vue from 'vue'
import App from './App.vue'

// Step 1: Export the eventBus, has to be before creating the Vue instance
export const eventBus = new Vue(
  // Can also add some common code here e.g.
  {
    methods: {
      change(age) {
        this.$emit('ageWasEdited', age)
      }
    }
  }
);

new Vue({
  el: '#app',
  render: h => h(App)
})
