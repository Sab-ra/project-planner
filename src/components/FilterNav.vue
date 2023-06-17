<template>
  <nav class="filter-nav">
    <button @click="updateFilter( 'all' )"
            v-bind:class="{ active:current_filter === 'all' }"
    >
      All
    </button>
    <button @click="updateFilter( 'done' )"
            v-bind:class="{ active:current_filter === 'done' }"    
    >
      Complete
    </button>
    <button @click="updateFilter( 'in_progress' )"
            v-bind:class="{ active:current_filter === 'in_progress' }"    
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: [
    'current_filter'
  ],
  methods: {
    updateFilter( update_by ) {
      this.$emit( 'filterChange', update_by)
    }
  }
}
</script>

<style>

</style>