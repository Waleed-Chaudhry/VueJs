# Vuex
npm install --save vuex

### Intro
* Put the state in src/store/store.js
* Register the store in main.js
* Simply update the counter directly in the emitter component (Counter.vue)
* And refer to the state in a computed method in the result component 

### Getters
* Referring to the state works for a simple application, 
* It gets complicated when multiple components are accessing and changing variable on the state
* For that we need getters
* Getters are added to the store where you run a calculation based on a state variable e.g. double the counter
* You can then create mapGetters inside the component (AnotherResult.vue)

### Mutations
* Mutators are for when we need to change the value of a state variable in the store
* You can then use mapMutations inside the component (AnotherCounter.vue)