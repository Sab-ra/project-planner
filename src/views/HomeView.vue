<template>
  <div class="home">
    <div v-if="projects.length">
      <div v-for="project in projects" v-bind:key="project.id">
        <p>{{ project.title }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading projects...</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {},
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
  }
}
</script>
