<template>
  <div>
    <img :src="lesson.preview">
    <h3 @dblclick="inputShow = true">
      <input v-if="inputShow" type="text"
             :value="lesson.title"
             @input="changeTitle"
             @blur="inputShow = false"
             @keyup.enter="inputShow = false" />
      <strong v-else>
        {{ lesson.title }}
      </strong>
    </h3>
    <h3 @dblclick="inputPriceShow = true">
      <input v-if="inputPriceShow" type="text"
             :value="lesson.price"
             @input="$emit('update:price',$event.target.value)"
             @blur="inputPriceShow = false"
             @keyup.enter="inputPriceShow = false" />
      <strong v-else>
        {{ lesson.price}}
      </strong>
    </h3>
    <span @click="del">x</span>
  </div>
</template>

<script>
export default {
  props: ["lesson",'title','price','titleModifiers'],
  data() {
    return {
      inputShow: false,
      inputPriceShow: false,
    }
  },
  created() {

  },
  emits: {
    //不对他验证
    'update:price':null,
    'update:title':null,
    del(v) {
      if (/^\d+$/.test(v)) {
        return true
      }
      console.error("del emit 需要数字参数")
      throw new Error("del emit 需要数字参数")
    }
  },
  methods: {
    changeTitle($event){
      let value = $event.target.value
      //变成大写
      if (this.titleModifiers.toupper){
        value = value.toUpperCase()
      }

      //切断字符
      const substr =Object.keys(this.titleModifiers).find(m=>/^substr_/.test(m))
      if (substr){
        let info = substr.split('_')
        value = value.substr(0, info[1])
      }
      this.$emit('update:title',value)
    },
    del() {
      if (confirm("确认删除吗？")) {
        this.$emit("del", this.lesson.id)
      }
    }
  }

}
</script>

<style scoped lang='scss'>
div {
  border: 1px solid #ddd;
  text-align: center;
  transition: 1s;
  position: relative;

  &:hover {
    box-shadow: 0 0 20px #aaaaaa;

    > span {
      opacity: 1;
    }
  }

  h3 {
    margin: 0;
    padding: 0 0 20px 0;
    font-size: 16px;
  }

  img {
    width: 100%;
  }

  span {
    background: #666666;
    color: #ffffff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 12px;
    opacity: 0;
    transition: 1s;
  }
}
</style>