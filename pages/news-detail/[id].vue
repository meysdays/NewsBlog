<template>
    <div v-if="article">
        <h1>{{ article.title }}</h1>
        <p>{{ article.author }}</p>
        <p>{{ article.content }}</p>

    </div>
</template>

<script setup>

const route = useRoute();
const article = route.state.article;

if (!article) {
    console.warn("No article data found in route state");
    
}
</script>

<style scoped>

</style>