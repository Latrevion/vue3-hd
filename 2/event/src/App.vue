<template>
  <div class="lesson">
    <lesson v-for="d in  db" :key.attr="d.id"
            :lesson="d" @del="show"
            v-model:title.toupper.substr_10="d.title"
            v-model:price="d.price"
    ></lesson>
  </div>
</template>

<script>
import db from "../data/db.js"
import lesson from "./components/lesson.vue"
import HdInput from "./components/HDinput.vue"
export default {
  components: {lesson,HdInput},
  data() {
    return {
      db,
      title:'hou-dun'
    }
  },
  methods: {
    show(id) {
      const index = this.db.findIndex(i => i.id === id)
      this.db.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.lesson {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>