<script setup>
</script>

<template>
  <section>
    <div><slot></slot></div>
  </section>
</template>

<style lang="scss" scoped>
section{
perspective: 800px;
}

div {
  background: #16a085;
  padding: 20px;
  animation: identifier 2s ease;
  transition:.5s;
  border-radius: .5rem;
  display: inline-block;
  color: #ffffff;
  cursor:pointer;
  &:hover{
    background: #f39c12;
  }
}
@keyframes identifier {
  from {
    transform: translateX(-5px);
  }

  20% {
    transform: translateX(5px);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  80% {
    transform: translateX(-5px);
  }
  to {
    transform: translateX(-5px);
  }
}
</style>
