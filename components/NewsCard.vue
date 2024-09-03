<template>
            
                <NuxtLink :to="{ name: news-detail, params: { id: news.url}, state: { article: news} }" class="card-link" >
                    <img :src="`${news.urlToImage}`" alt="ugiiiiiibi">
                    <p>{{ news.title }}</p>
                    <div class="least">
                        <p>{{ news.author }}</p>
                        <p>{{ news.publishedAt }}</p>
                    </div>
                </NuxtLink>
            
</template>

<script setup>
import Index from '~/pages/index.vue';

const {news} = defineProps(['news'])
</script>

<style >
.card-link{
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    /* padding: 1em; */
    /* width: 80%; */
}
.least{
    display: flex;
    width: 90%;
    margin: 0 auto;
    font-size: 1rem;
    justify-content: space-between;
}
</style>