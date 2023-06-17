<template>
  <div class="project" v-bind:class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons">
        <router-link v-bind:to="{ name: 'edit_project', params: { id: project.id }}">
          <span class="material-icons">edit</span>
        </router-link>
        <span @click="deleteProject" class="material-icons">delete</span>
        <span @click="toggleIfDone" class="material-icons tick">done</span>
      </div>
    </div>
    <div v-if="show_details" class="details">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
import { assertTSConstructSignatureDeclaration } from '@babel/types';

export default {
  props: [
    'project'
  ],
  data() {
    return {
      show_details: false,
      uri: 'http://localhost:3000/project/' + this.project.id
    }
  },
  methods: {
    toggleDetails() {
    this.show_details = !this.show_details
    },
    deleteProject() {
      fetch( this.uri, { method: 'DELETE' })
        .then( () => this.$emit( 'delete', this.project.id ))
        .catch( err => console.log( err ))
    },
    toggleIfDone() {
      fetch( this.uri, { 
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { complete: !this.project.complete })
      }).then( () => {
        this.$emit( 'complete', this.project.id )
      }).catch( err => console.log( err))
    }
  }
}
</script>

<style>
  .project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba( 0, 0, 0, 0.05 );
    border-left: 4px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777
  }
  /* For completed projects */
  .project.complete {
    border-left: 4px solid #00ce89;
  }
  .project.complete .tick {
    color: #00ce89;
  }
</style>