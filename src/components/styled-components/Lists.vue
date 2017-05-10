<template>
  <div>
    <base-component title="Lists">
      <component-section slot="section" title="Basic List">
        <ul slot="body">
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
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
