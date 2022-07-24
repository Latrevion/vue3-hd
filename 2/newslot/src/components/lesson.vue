<template>
<div>
  {{lesson.title}}
  <slot name="icon"></slot>
  <slot :id="lesson.id"></slot>
</div>
</template>

<script>
export default {
props:['lesson']
}
</script>

<style scoped lang='scss'>
div{
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px ;
  border: 1px solid #dddddd;
}
</style>