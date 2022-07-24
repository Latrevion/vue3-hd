<template>
  <card>
    <template #header>站点信息</template>
    <div>
      <xinput title="网站名称" v-model="config.site.title"></xinput>
      <x-textarea  title="站点介绍" v-model="config.site.desc"></x-textarea>
    </div>
  </card>
</template>

<script>

export default {
  inject:['config'],
}
</script>
