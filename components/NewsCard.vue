<template>

    <NuxtLink :to="`/${post.title}`" class="card-link">
        <img :src="`${post.urlToImage}`" alt="[photo]">
        <p>{{ post.title }}</p>
        <div class="least">
            <p>{{ post.author }}</p>
            <p>{{ post.publishedAt }}</p>
        </div>
    </NuxtLink>

</template>

<script setup>


const { post } = defineProps(['post'])

// console.log(post);

</script>

<style>
.card-link {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
}

.least {
    display: flex;
    width: 90%;
    margin: 0 auto;
    font-size: 1rem;
    justify-content: space-between;
}
</style>