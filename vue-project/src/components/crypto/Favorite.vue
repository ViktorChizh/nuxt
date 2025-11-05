<template>
    <h2>Favorites</h2>
    <div v-for="(el, index) in fav" :key="index" @click="getFromFavorites(index)">
        <span>{{ el.from }}</span>
        <span>{{ el.to }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            fav: {
                type: Array,
                required: true
            },
            getFromFavorites: {
                type: Function,
                required: true
            }
        }

    }
</script>

<style scoped>
    h2 {
        margin-top: -30px;
        font-family: 'Nabla', cursive;
        font-size: 1.5em;
        color: red;
    }
    div {
        display: flex;
        justify-content: space-between;
        width: 500px;
        margin: 10px auto;
        transition: all 500ms ease;
    }
    div:hover {
        opacity: 0.7;
        transform: scale(1.1);
        cursor: pointer;
    }
    span {
        background: #8c00ff;
        color: #fff;
        padding: 10px 15px;
    }
</style>
