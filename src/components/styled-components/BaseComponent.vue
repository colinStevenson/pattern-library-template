<template>
  <section>
    <h1 class="page-header">{{title}}</h1>
    <slot name="section"></slot>
  </section>
</template>
<script>
  export default {
    props: [
      'title'
    ]
  }
</script>
