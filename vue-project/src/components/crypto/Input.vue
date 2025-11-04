<template>
    <input
    type="number"
    min="0"
    @input="changeAmount($event.target.value)"
    placeholder="Введите число"><br>
    <button @click="convert()">КОНВЕРТИРОВАТЬ</button>
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
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
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
</style>
