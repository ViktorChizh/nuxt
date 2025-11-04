<template>
    <div class="wrapper">
        <h1>Погодное приложение </h1>
        <p>Узнать погоду в  {{ city == '' ? "вашем городе" : cityName}}</p>
        <input type="text" placeholder="Введите город" v-model="city">
        <button v-if="city" @click="getWeather()">Получить погоду</button>
        <button v-else disabled>Введите название города</button>
        <p class="error">{{ error }}</p>
        <div v-if="info" class="weather">
           <p>{{ showTemp }}</p>
           <p>{{ showFeelsLike }}</p>
           <p>{{ showMinTemp }}</p>
           <p>{{ showMaxTemp }}</p>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data() {
            return {
                city: '',
                error: '',
                info: null
            }
        },
        computed: {
            cityName() {
                return 'городе ' + this.city[0].toUpperCase() + this.city.split('').splice(1).join('').toLowerCase()
            },
            showTemp() {
                return "Температура: " + this.info.temp
            },
            showFeelsLike() {
                return "Ощущается как: " + this.info.feels_like
            },
            showMinTemp() {
                return "Минимальная температура: " + this.info.temp_min
            },
            showMaxTemp() {
                return "Максимальная температура: " + this.info.temp_max
            }
        },
        methods: {
            getWeather() {
                if(this.city.trim().length < 2) {
                    this.error = "Нужно название более одного символа"
                    return false
                }
                this.error = ''
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=06aa3ac5c903d381675b2d159d6de784`)
                    .then(res => this.info = res.data.main)
                    .catch(err =>  {
                        if(err == 'AxiosError: Network Error'){
                            this.error = "Отсутствует интернет"
                        } else {
                            this.error = "Некорректное название города"
                        }
                    })
            }
        },
        watch: {
            city() {
                this.info = null;
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        margin: 20px;
        width: 900px;
        height: 330px;
        border-radius: 50px;
        background: #1f0f24;
        padding: 20px;
        text-align: center;
        color: #fff;
        .error {
            color: #d03939;
        }
        .weather {
            width: 38%;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        p {
            margin-top: 20px;
        }
        input {
            margin-top: 30px;
            background: transparent;
            border: 0;
            border-bottom: 2px solid #110813;
            color: #fcfcfc;
            font-size: 14px;
            padding: 5px 8px;
            outline: none;
        }
        input:focus {
            border-bottom-color: #6e2d7d;
        }
        button {
            background: #e3bc4d;
            color: #fff;
            border-radius: 10px;
            border: 2px solid #b99935;
            padding: 10px 15px;
            margin-left: 20px;
            cursor: pointer;
            transition: transform 500ms ease;
        }
        button:hover {
            transform: scale(1.1) translateY(-5px);
        }
        button:disabled {
            cursor: not-allowed;
            background: #746027;
        }
    }
</style>
