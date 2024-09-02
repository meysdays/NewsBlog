<template>
    <div>
        <p>product detail for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</template>

<script setup>
const {id} = useRoute().params

definePageMeta({
    layout: 'products'
})
</script>

<style scoped>

</style>