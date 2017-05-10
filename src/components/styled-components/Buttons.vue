<template>
  <div>
    <base-component title="Buttons">
      <component-section slot="section" title="Button Styles">
        <div class="btn-sequence" slot="body">
          <button class="btn btn-default" type="button">.btn-default</button>
          <button class="btn btn-primary" type="button">.btn-primary</button>
          <button class="btn btn-link" type="button">.btn-link</button>
        </div>
      </component-section>
      <component-section slot="section" title="Button Sizes">
        <div class="btn-sequence" slot="body">
          <button class="btn btn-primary btn-sm" type="button">.btn-sm</button>
          <button class="btn btn-primary" type="button">.btn</button>
          <button class="btn btn-primary btn-lg" type="button">.btn-lg</button>
        </div>
      </component-section>
    </base-component>
  </div>
</template>
<script>
  import _Component from './_Component'
  export default {
    mixins: [
      _Component
    ]
  }
</script>

