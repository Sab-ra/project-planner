<template>
    <form @submit.prevent="handleEdit">
    <label>Title</label>
    <input type="text" v-model="title" required>
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Update Project</button>
  </form>
</template>

<script>
export default {
  props: [
    'id'
  ],
  data() {
    return {
      title: '',
      details: '',
      uri: 'http://localhost:3000/project/' + this.id
    }
  },
  mounted() {
    fetch( this.uri )
      .then( response => response.json() )
      .then( data => {
        this.title = data.title
        this.details = data.details
      })
  },
  methods: {
    handleEdit() {
      console.log( this.title, this.details )
      fetch( this.uri, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { 
          title: this.title,
          details: this.details 
        })
      }).then( () => {
        this.$router.push( '/' )
      }).catch( err => console.log( err ))
    }
  }
}
</script>

<style>

</style>