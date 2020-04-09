<template>
    <!-- can refer to the prop child_counter as is. No data binding needed -->
    <p>Counter is: {{ child_counter }}</p>
</template>

<script>
    export default {
        props: ['child_counter']
    }
</script>