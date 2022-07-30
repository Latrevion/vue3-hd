<script setup>
</script>

<template>
  <section>
    <div>uncle</div>
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
  transition:2s;
  &:hover{
    transform: rotateY(360deg) rotateX(100deg) ;
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
