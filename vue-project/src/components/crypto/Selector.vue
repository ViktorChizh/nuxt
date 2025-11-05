<template>
    <ul>
        <li @click="setCrypto('Bitcoin')" :class="crypto=='Bitcoin' && 'active'">Bitcoin</li>
        <li @click="setCrypto('USDT')" :class="crypto=='USDT' ? 'active' : ''">USDT</li>
        <li @click="setCrypto('ETH')" :class="crypto=='ETH' ? 'active' : ''">ETH</li>
    </ul>
</template>

<script>
    export default {
        props: {
            setCrypto: {
                type: Function,
                required: true
            },
            crypto: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>
    ul {
        list-style: none;
        width: 200px;
        padding: 0;
        border-radius: 3px;
        border: 3px solid #000;
        li {
            display: block;
            background: #1a032d;
            color: #fff;
            padding: 5px 0;
        }
        li:hover,
        li.active {
            background: #341151;
            cursor: pointer;
        }
    }
</style>
