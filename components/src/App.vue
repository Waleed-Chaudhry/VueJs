<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue'; // Import the Component

    export default {
        components: {
            appUser: User // Assign the imported component to a selector, to be used in the template
            // View lets you refer to appUser as appUser or app-user on the template
            // The component is registered locally in App.vue there
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }
</style>
