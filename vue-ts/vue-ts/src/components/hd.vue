<script setup lang="ts">
import {ref} from "vue"
const data = await fetch('http://127.0.0.1:3003/posts/1').then(r =>r.json())
const post = ref(data)

type user = {age:number,name?:string}
let f:user|string|boolean= {age:12}
f = 'bad'
</script>

<template>
{{post.title}}
</template>

<style scoped>

</style>
