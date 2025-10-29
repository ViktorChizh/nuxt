export default defineEventHandler(async () => {
    return await fetch('https://dummyjson.com/users')
})