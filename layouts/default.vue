<template>
    <div>
        <header>
            <nav>
                <div class="cont">
                    <div class="logo">
                        <NuxtLink to="/"> <img src="../assets/union.svg" alt="icon"></NuxtLink>
                        <p>Meta<b>Blog</b></p>
                    </div>
                    <ul class="link">
                        <li><NuxtLink to="/">Home</NuxtLink></li>
                        <li><NuxtLink to="/about">Blog</NuxtLink></li>
                        <li><NuxtLink to="/products">Contact</NuxtLink></li>
                    </ul>
    
                    <div class="search">
                        <input type="text" placeholder="search keyword" v-model="search" @keyup.enter="fetchNews()">
                    </div>
                </div>
            </nav>
        </header>

        <div>
            <slot :site="blog"/>
        </div>

        <footer>
            <a href="https://github.com/meysdays/TodoApp">View Repo</a>
        </footer>
    </div>
</template>

<script setup>
const search = ref('')
const blog = ref({})

const fetchNews = (async() =>{
    const response = await useFetch(`/api/everything/${search.value}`)
    blog.value = response.data
})
</script>

<style scoped>

.router-link-exact-active{
    color: #12b488;
    /* text-decoration: none; */
}

nav{
    /* background-color: red; */
}

.cont{
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: green; */
}

.cont ul{
    text-decoration: none;
}

.logo{
    width: 20%;
    display: flex;
    align-items: center;
    /* background-color: blue; */
}
.logo img{
    width: 100%;
}
.logo p{
    margin: 0.3rem;
}
.link{
    width: 40%;
    display: flex;
    justify-content: space-between;
    color: black;
    /* background-color: blue; */
}
.link li{
    /* text-decoration: none; */
    list-style-type: none;
    font-size: 1.2rem;
}

.search input{
    /* width: 40%; */
    border: none;
    padding: 0.5em;
    background-color: white;
}

footer{
    /* background-color: red; */
    padding: 2rem 0;
    display: flex;
}
footer a{
    margin: 0 auto;
    text-decoration: none;
    font-size: 1.3em;
    padding: 1rem 1rem;
    color: white;
    background-color: black;
    border-radius: 25px;
}

footer a:hover{
    color: black;
    background-color: white;
}

</style>