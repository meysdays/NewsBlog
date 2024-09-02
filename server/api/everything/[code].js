export default defineEventHandler(async(event) => {

    const {code} = event.context.params
    const {newsKey} = useRuntimeConfig()

    const uri = `https://newsapi.org/v2/everything?q=${code}&apiKey=${newsKey}`;

    try {
        const data = await $fetch(uri)
        return data
    } catch (error) {
        console.error('error fetching data:', error);
        return{error:true, message: error.message}
    }
})