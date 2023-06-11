<template>
  <div class="home">
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

export default {
  name: 'HomeView',
  components: {
    SingleProject
  },
  data() {
    return {
      projects: []
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
