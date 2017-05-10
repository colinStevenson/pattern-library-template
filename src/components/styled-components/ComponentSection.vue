<template>
  <div class="panel panel-pl">
    <header class="panel-heading">
      <h1 class="panel-title">{{title}}</h1>
    </header>
    <div class="panel-body">
      <slot name="body"></slot>
    </div>
    <div class="panel-footer clearfix" v-if="showMarkup">
      <pre v-if="markupIsShown">
        <div class="code" ref="code" v-html="markup"></div>
      </pre>
      <button class="btn pull-right" v-on:click="markupIsShown = !markupIsShown">{{markupIsShown ? 'Hide markup' : 'Show markup'}}</button>
    </div>
  </div>
</template>
<script>
  import Prism from 'prismjs'
  import htmlBeautify from 'html-beautify'
  export default {
    data () {
      return {
        markup: null,
        markupIsShown: false
      }
    },
    mounted () {
      this.markup = Prism.highlight(htmlBeautify(this.$slots.body[0].elm.outerHTML), Prism.languages.markup)
    },
    props: {
      title: {
        default: 'Untitled'
      },
      showMarkup: {
        default: true,
        type: Boolean
      }
    }
  }
</script>
<style lang="scss">
  .panel-pl{
    border: none;
    box-shadow: none;

    > .panel-heading, 
    > .panel-body,
    > .panel-footer{
      padding-left: 0;
      padding-right: 0;
      border: none;
    }
    > .panel-heading{
      border-bottom: 1px solid #eee;
    }
    > .panel-footer{
      background: transparent;
      border: none;
    }
  }
</style>
<style src="../../../node_modules/prismjs/themes/prism-coy.css"></style>
