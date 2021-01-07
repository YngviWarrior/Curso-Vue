<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c" />
    </div>
</template>

<script>
import Contador from './Contador'

export default {
    components: {
        'app-contador':  Contador
    }
}
</script>

<style scoped>

    span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }

     button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #fff;
        margin-left: 10px;
        outline: none;
    }
</style>