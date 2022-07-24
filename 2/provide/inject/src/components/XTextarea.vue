<template>
  <label>
    <div>{{ title }}</div>
    <textarea :rows="rows" v-model="content" @input="$emit('update:modelValue',$event.target.value)"></textarea>
  </label>
</template>

<script>
export default {
  //下面可以省略
  emits: ["update:modelValue"],
  props: {
    title: {type:String,required:true},
    modelValue: String,
    rows: {
      type: Number,
      default: 3
    }
  },

  inject: ["webname"],
  data() {
    return {
      content: this.modelValue
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

  textarea {
    color: #666666;
    padding: 5px 10px;
    border: 2px solid #dddddd;
    outline: none;
  }
}

</style>