<template>
  <nav class="filter-nav">
    <button @click="updateFilter( 'all' )">
      All
    </button>
    <button @click="updateFilter( 'done' )">
      Complete
    </button>
    <button @click="updateFilter( 'in_progress' )">
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  methods: {
    updateFilter( update_by ) {
      this.$emit( 'filterChange', update_by)
    }
  }
}
</script>

<style>

</style>