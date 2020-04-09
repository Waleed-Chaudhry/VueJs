import Vue from 'vue';
import Vuex from 'vuex';

// Enable the package
Vue.use(Vuex)

// Create a new store and export it, to use the state outside this file
export const store = new Vuex.Store({
    // Has to be named state
    state: {
        counter: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + ' Clicks';
        }
    },
    mutations : {
        increment: state => {
            // This updates the value of counter, doesn't return an incremented variable
            state.counter++;
        },
        decrement: state => {
            state.counter--;
        }
    }
})