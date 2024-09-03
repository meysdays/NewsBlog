<template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <!-- <div>
            {{ news }}
        </div> -->

        <div class="container">
            <div class="card-container">
                <div v-for="n in news.value.articles" :key="index" class="card">
                    <NewsCard :news="n"/>
                     <!-- <p>{{ n.author }}</p> -->
                </div>
            </div>
        </div>



        <!-- <div v-else-if="error">{{ error.message }}</div>
        <div v-else>Loading...</div> -->
    </div>
</template>

<script setup>
import Index from './products/index.vue';


const query = ref('')
const search = ref('tinubu')
const news = ref({})


const response = await useFetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=edaad9b9d20f4153b099f76e6ccd39ce')
news.value = response.data
console.log(news);


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
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap; 
    min-height: 100vh; 
    width: 80%;
    margin: 0 auto;
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
    /* max-width: 300px; */
    width: 30%;
    background-color: white;
    margin: 0 auto;
    padding: 0.8em 0em;
    border-radius: 20px;
    text-align: center;
    border: 1px solid black;
}

.card img{
    width: 90%;
    object-fit: cover;
    height: 300px;
    border-radius: 20px;
    /* max-height: 120px; */
    /* margin: 0 auto; */
}
</style>