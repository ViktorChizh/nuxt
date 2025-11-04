<template>
    <div class="container">
        <h1>CRYPTO</h1>
        <p v-html="`
            ${amount ? amount : 'from'}  &nbsp;&nbsp;${ cryptoFrom || '...'} &nbsp;&nbsp;
            ${result ? `equals &nbsp;&nbsp;${result} &nbsp;&nbsp;${cryptoTo}`
                    : `to &nbsp;&nbsp; ${ cryptoTo || '...'} &nbsp;&nbsp;`}`"/>
        <Input :changeAmount="changeAmount" :convert="convert"/>
        <p v-if="error" class="error">{{ error }}</p>
        <div class="selectors">
            <Selector :setCrypto="setCryptoFrom"/>
            <Selector :setCrypto="setCryptoTo"/>
        </div>
    </div>
</template>

<script>
    import Input from './Input.vue';
    import Selector from './Selector.vue';
    import CryptoConvert from 'crypto-convert';

    const convert = new CryptoConvert()

    export default {
        components: {Input, Selector},
        data() {
            return {
                amount: 0,
                cryptoFrom: '',
                cryptoTo: '',
                error: '',
                result: 0
            }
        },
        methods: {
            changeAmount(val) {
                this.amount = val
            },
            setCryptoFrom(val) {
                this.cryptoFrom = val
            },
            setCryptoTo(val) {
                this.cryptoTo = val
            },
            async convert() {
                if (this.amount <=0) {
                    this.error = 'Введите число больше нуля'
                    return
                } else if (!this.cryptoFrom || !this.cryptoTo) {
                    this.error = 'Выберите валюту'
                    return
                } else if (this.cryptoFrom == this.cryptoTo) {
                    this.error = 'Выберите разные валюты'
                    return
                }
                this.error = ''
                await convert.ready()
                if (this.cryptoFrom == 'Bitcoin' && this.cryptoTo == 'ETH')
                    this.result = convert.BTC.ETH(this.amount)
                else if (this.cryptoFrom == 'Bitcoin' && this.cryptoTo == 'USDT')
                    this.result = convert.BTC.USDT(this.amount)
                else if (this.cryptoFrom == 'ETH' && this.cryptoTo == 'Bitcoin')
                    this.result = convert.ETH.BTC(this.amount)
                else if (this.cryptoFrom == 'ETH' && this.cryptoTo == 'USDT')
                    this.result = convert.ETH.USDT(this.amount)
                else if (this.cryptoFrom == 'USDT' && this.cryptoTo == 'Bitcoin')
                    this.result = convert.USDT.BTC(this.amount)
                else if (this.cryptoFrom == 'USDT' && this.cryptoTo == 'ETH')
                    this.result = convert.USDT.ETH(this.amount)
            }
        },
        watch: {
            cryptoFrom() {
                this.result = 0
            },
            cryptoTo() {
                this.result = 0
            },
            amount() {
                this.result = 0
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');

    .container {
        height: 44vh;
        background: rgb(86,18,91);
        background: linear-gradient(339deg, rgba(86,18,91,1) 0%, rgba(40,10,80,1) 100%);
        border-radius: 20px;
        padding: 10px;
        color: #FFF;
        text-align: center;
        .selectors {
            display: flex;
            justify-content: space-around;
            width: 700px;
            margin: 15px auto;
        }
        .error {
            color: rgb(222, 150, 150);
            font-size: 1em;
        }
        .result {
            font-size: 1em;
        }
        h1 {
            font-family: 'Nabla', cursive;
            font-size: 5em;
        }
        p {
            font-family: 'Nabla', cursive;
            font-size: 2em;
        }
    }
</style>
