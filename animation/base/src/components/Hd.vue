<script setup>

</script>

<template>
  <div>uncle</div>
</template>

<style lang="scss" scoped>
div {
  background: #16a085;
  padding: 20px;
  animation: identifier 2s ease;
}
@keyframes identifier  {
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
