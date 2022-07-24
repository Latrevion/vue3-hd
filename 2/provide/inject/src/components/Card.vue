<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>

export default {}
</script>

<style scoped lang='scss'>
div {
  border-radius: 5px;
  margin-top: 20px;
  border: 1px solid #dddddd;

  header {
    background: #f3f3f3;
    border: 1px solid #dddddd;
    padding: 10px;
  }

  main {
    padding: 10px;
  }
}
</style>