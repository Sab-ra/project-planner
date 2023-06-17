<template>
  <div class="home">
    <FilterNav @filterChange="current_filter = $event" />
    <div v-if="projects.length">
      <div v-for="project in projects" v-bind:key="project.id">
        <SingleProject v-bind:project="project" 
          @delete="handleDelete"
          @complete="handleComplete"/>
      </div>
    </div>
    <div v-else>
      <p>Loading projects...</p>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue"
import FilterNav from "../components/FilterNav.vue"

export default {
  name: 'HomeView',
  components: {
    SingleProject,
    FilterNav
  },
  data() {
    return {
      projects: [],
      current_filter: 'all'
    }
  },
  mounted() {
    fetch( 'http://localhost:3000/project' )
      .then( response => response.json() )
      .then( data => this.projects = data )
      .catch( err => console.log( err.message ) )
  },
  methods: {
    handleDelete( id ) {
      this.projects = this.projects.filter( ( project ) => {
        return project.id !== id
      })
    },
    handleComplete( id ) {
      let update_project = this.projects.find( project => {
        return project.id === id
      })
      update_project.complete = !update_project.complete
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
</style>
