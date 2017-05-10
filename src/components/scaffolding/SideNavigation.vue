<template>
  <nav role="navigation">
    <ul class="nav nav-stacked">
      <router-link v-for="route in routes" active-class="active" :to="{name: route.name}" tag="li">
        <a href="#">{{route.name}}</a>
      </router-link>
    </ul>
  </nav>
</template>
<script>
  import ComponentRoutes from '../../router/component-routes.js'
  export default {
    data () {
      return {
        routes: ComponentRoutes.sort(route => route.name.charAt(0))
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/components/variables.scss';

  nav{
    background: $navbar-default-bg;
    margin-top: 74px;
    min-height: 100vh; //should be calc 100vh - navbar-height;
    position: fixed;
    top: 0;
  }

  .nav > li > a{
    min-width: 200px;
  }
  .nav > li.active > a{
    background: $body-bg;
  }
</style>
