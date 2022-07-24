<template>
  <Lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson">
    <template #icon>:)</template>
    <template #default="{id}">
      <button @click="del(id)">delete</button>
    </template>
  </Lesson>
</template>

<script>
import lessons from "./components/data.js"
import Lesson from "./components/lesson.vue"

export default {
  components: {Lesson},
  data() {
    return {
      lessons
    }
  },
  methods: {
    del(id) {
      //寻找索引
      const index = this.lessons.findIndex(i=>i.id===id)
      // 删除对应索引的课程
      this.lessons.splice(index,1)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>