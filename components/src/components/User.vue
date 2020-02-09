<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <!-- Button with a click listener that will call a method changeName -->
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- Passing the name prop to the child using :name="name-->
                <!-- @listening to the emitter -->
                <app-user-detail 
                    :name="name" 
                    @nameWasReset="name = $event"
                    :userAge="age">
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
            <!-- Step 3: userAge="age" to set the value of userAge to age in data 
                         Setting age to be the value of the event on the emitter in UserEdit-->
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age = $event">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        // All the data of the component
        data: function() {
            return {
                name: 'Max',
                age: 25
            }
        },
        // Methods to be executed e.g. upon clicking
        methods: {
            changeName() {
                // methods has acess to variables defined in data using this keyword
                this.name = 'Ana'
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
