<template>
    <div>
        <div v-for="(n, index) in items" :key="index">
            <h1>{{ n.title }}</h1>
            <p>{{ n.author }}</p>
            <p>{{ n.publishedAt }}</p>
            <img :src="`${n.urlToImage}`" alt="[photo]">
            <p>{{ n.content }}</p>
        </div>
        <!-- <p>{{ items }}</p> -->
    </div>
</template>

<script setup>
const { id } = useRoute().params
const article = ref()
const items = ref([])

const { data } = await useFetch(`/api/everything/${id}`)
article.value = data.value.articles

onMounted(() => {
    const fetchedItems = article
    const a = fetchedItems.value.length - 1

    for (let i = 0; i < fetchedItems.value.length - a; i++) {
        items.value.push(fetchedItems.value[i])
    }
})
</script>

<style scoped></style>