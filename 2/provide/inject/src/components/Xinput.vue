<template>
  <label>
    <div>{{ title }}</div>
    <input type="text" v-model="content">
  </label>
</template>

<script>
export default {
  //下面可以省略
  emits: ["update:modelValue"],
  props: ["title", "modelValue"],
  inject:['webname'],
  data() {
    return {
      content: this.modelValue
    }
  },
  watch: {
    content(value) {
      this.$emit('update:modelValue',value)
    }
  }
}
</script>

<style scoped lang='scss'>
label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  div {
    color: #666666;
    margin-right: 10px;
    font-size: 16px;
    width: 100px;
  }

  input {
    color: #666666;
    padding: 5px 10px;
    border: 2px solid #dddddd;
    outline: none;
  }
}

</style>