<template>
  <base-component title="Typography">
    <component-section slot="section" title="Headers">
      <div slot="body">
        <h1>Heading Style 1</h1>
        <h2>Heading Style 2</h2>
        <h3>Heading Style 3</h3>
        <h4>Heading Style 4</h4>
      </div>
    </component-section>
    <component-section slot="section" title="Text Styles">
      <div slot="body">
        <ul>
          <li class="text-muted">Text Muted</li>
          <li class="text-positive">Text Positive</li>
          <li class="text-negative">Text Negative</li>
          <li class="text-neutral">Text Neutral</li>
          <li class="text-left">Text Left</li>
          <li class="text-center">Text Center</li>
          <li class="text-right">Text Right</li>
        </ul>
      </div>
    </component-section>
  </base-component>
</template>
<script>
  import _Component from './_Component'
  export default {
    mixins: [
      _Component
    ]
  }
</script>
