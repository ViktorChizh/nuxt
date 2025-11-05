<template>
    <input
    type="number"
    min="0"
    @input="changeAmount($event.target.value)"
    placeholder="Введите число"><br>
    <button @click="convert()">КОНВЕРТИРОВАТЬ</button>
    <button @click="favorite()" class='favorite'>ДОБАВИТЬ В ИЗБРАННОЕ</button>
</template>

<script>
    export default {
        props: {
            changeAmount: {
                type: Function,
                required: true
            },
            convert: {
                type: Function,
                required: true
            },
            favorite: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style>
    input {
        font-family: 'Montserrat', sans-serif;
        outline: none;
        border-radius: 3px;
        border: none;
        width: 500px;
        font-size: 1.2em;
        padding: 10px 15px;
        background: #fafafa;
        color: #333;
        margin: 15px auto;
    }
    button {
        padding: 15px 20px;
        color: #FFF;
        cursor: pointer;
        background: #1a032d;
        border: 0;
        border-radius: 5px;
    }
    .favorite {
        margin-left: 50px;
    }
</style>
