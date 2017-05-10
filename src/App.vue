<template>
  <div id="app">
    <site-header></site-header>
    <main>
      <side-navigation></side-navigation>
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <router-view></router-view>            
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SiteHeader from './components/scaffolding/SiteHeader.vue'
import SideNavigation from './components/scaffolding/SideNavigation.vue'
export default {
  components: {
    SideNavigation,
    SiteHeader
  }
}
</script>
<style src="./style/components.scss" lang="scss"></style>
<style lang="scss" scoped>
  @import './style/components/variables.scss';

  main{
    padding-top: $navbar-height + 30px;
  }
</style>

