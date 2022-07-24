<template>
  <card>
    <template #header>微信</template>
    <div>
      <xinput title="appid" v-model="config.weixin.appid"></xinput>
      <xinput title="secret" v-model="config.weixin.secret"></xinput>
      <xinput title="老师" v-model="content"></xinput>
    </div>
  </card>
</template>

<script>

export default {
  inject:['config'],
  data() {
    return {
      content: 'uncle-weixin'
    }
  },
  methods:{
    show(){
      alert(this.content)
    }
  }
}
</script>