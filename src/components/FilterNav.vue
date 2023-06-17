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
.filter-nav button {
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active {
  color: #555;
}
</style>