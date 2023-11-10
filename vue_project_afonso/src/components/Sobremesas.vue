<template>
    <div v-for="obj in sobremesas">
        <h1>{{ obj.name }}</h1>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            sobremesas: []
        }
    },
    mounted() {
        axios.get('https://silver-space-telegram-x5wvvwv9w6gj367jw-5173.app.github.dev/sobremesas.json')
            .then(res => {
                this.sobremesas = res.data
            })
    }
}

</script>

<style></style>