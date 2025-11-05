<template>
    <div class="container">
        <h1>CRYPTO</h1>
        <p>
            {{ amount || 'from' }} &nbsp;&nbsp;{{ cryptoFrom || '...' }} &nbsp;&nbsp;
            {{ result ? `equals &nbsp;&nbsp; ${result} &nbsp;&nbsp; ${cryptoTo}` : `to &nbsp;&nbsp; ${cryptoTo || '...'}` }}
        </p>

        <Input :changeAmount="changeAmount" :convert="convert" :favorite="favorite"/>
        <p v-if="error" class="error">{{ error }}</p>
        <div class="selectors">
            <Selector :setCrypto="setCryptoFrom" :crypto="cryptoFrom"/>
            <Selector :setCrypto="setCryptoTo" :crypto="cryptoTo"/>
        </div>
        <Favorite v-if="fav.length" :fav="fav" :getFromFavorites="getFromFavorites"/>
    </div>
</template>

<script>
    import Input from './Input.vue';
    import Selector from './Selector.vue';
    import Favorite from './Favorite.vue';
    import CryptoConvert from 'crypto-convert';

    const convert = new CryptoConvert()

    export default {
        components: {Input, Selector, Favorite},
        data() {
            return {
                amount: 0,
                cryptoFrom: '',
                cryptoTo: '',
                error: '',
                result: 0,
                fav: []
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
            },
            favorite() {
                if (!this.cryptoFrom || !this.cryptoTo) {
                    this.error = 'Выберите валюту'
                    return
                } else if (this.cryptoFrom == this.cryptoTo) {
                    this.error = 'Выберите разные валюты'
                    return
                }
                this.error = ''
                this.fav.push({
                    from: this.cryptoFrom,
                    to: this.cryptoTo
                })
            },
            getFromFavorites(index) {
                this.cryptoFrom=this.fav[index].from
                this.cryptoTo=this.fav[index].to
            }
        },
        watch: {
            cryptoFrom() {
                this.result = 0
                this.error = ''
            },
            cryptoTo() {
                this.result = 0
                this.error = ''
            },
            amount() {
                this.result = 0
                this.error = ''
            }
        }
    }
</script>

<style>
    .container {
        min-height: 30vh;
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
            font-size: 1.5em;
        }
        .result {
            font-size: 1em;
        }
        h1 {
            font-family: 'Nabla', cursive;
            font-size: 3em;
        }
        p {
            font-family: 'Nabla', cursive;
            font-size: 1.5em;
        }
    }
</style>
