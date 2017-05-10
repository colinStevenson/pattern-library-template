<template>
  <div>
    <base-component title="Tables">
      <component-section slot="section" title="Basic Table">
        <table class="table" slot="body">
          <caption>
            Table Caption
            <small>*Every table should have a meaningful caption. Use .sr-only if it should not be displayed</small>
          </caption>
          <thead>
            <tr>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
              <th scope="col">Heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
              <td>Data</td>
            </tr>
          </tbody>
        </table>
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
