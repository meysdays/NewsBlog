<template>
    <div class="container">
        <div class="search">
            <div class="cont-search">
                <input type="text" placeholder="search keyword" v-model="query" @keyup.enter="fetchNews(query)"/>
                <button @click="fetchNews(query)">search</button>
            </div>
        </div>

        <div v-if="status === 'pending'">
            Loading...
        </div>
        <div v-else class="card-container">
            <div v-for="news in users.articles" class="card">
                <NewsCard :post="news" />
            </div>
        </div>
    </div>

</template>

<script setup>

const users = ref()
const query = ref('')
const loading = ref('pending')

onMounted(() =>{
    const saved = localStorage.getItem('query')
    
})

watch(query, (newValue) => {
    localStorage.setItem('query', newValue)
})

// console.log(loading);

const term = query.value || 'biology'



const { status, data } = await useFetch(`/api/everything/${term}`, {
    lazy:true
})
users.value = data.value
loading.value = status.value

// console.log(users.value);

const fetchNews = (async(find)=>{
    // await nextTick()
    loading.value = true;
    const{ status:log, data: blog} = await useFetch(`/api/everything/${find}`,{
        lazy: true
    })
    query.value = find
    users.value = blog.value
    
})

// const search = ref('tinubu')
// const { status, data: news } = await useFetch(`/api/everything/${search.value}`, {
//     lazy: true
// })
// users.value = data.value;
// console.log(status.value);


// const news = ref({})

// news.value = response.data
// console.log(news);


// const { data: news } = await useFetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=edaad9b9d20f4153b099f76e6ccd39ce')

// const { data, error } = await useFetch(`/api/everything/${search.value}`);

// if (!data.value && !error.value) {
//     console.warn("No data received and no error occurred, returning an empty object");

// }

</script>

<style>
body {
    background-color: rgb(224, 217, 217);
}

.container {
    width: 80%;
    margin: 0 auto;
    /* background-color: red; */
}

.card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
}

.card {
    flex: 1 1 300px;
    width: 100%;
    background-color: white;
    margin: 0 auto;
    padding: 0.8em 0em;
    border-radius: 20px;
    text-align: center;
    border: 1px solid black;
}

.card img {
    width: 90%;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 20px;
}

.cont-search {
    margin: 0.8em 0.2em;
    width: 30%;
    display: flex;
    justify-content: space-between;
}

.search {
    display: flex;
    justify-content: flex-end;
    padding: 1em 0.5em;
}

.cont-search input {
    padding: 1em 0.5em;
    width: 60%;
    border: none;
    border-radius: 20px;
    font-size: 1em;
}

.cont-search button {
    font-size: 1em;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    background-color: blue;
    color: white;
    border-radius: 20px;
}

.cont-search button:hover {
    color: blue;
    background-color: white;
}
</style>