<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>

</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid #ddd;

  header, main, footer {
    padding: 10px;
  }

  main {
    border-width: 1px 0 1px 0;
    border-style: solid;
    boder-color: #ddd;
  }
}
</style>