<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
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
      show_details: false
    }
  },
  methods: {
    toggleDetails() {
    this.show_details = !this.show_details
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
</style>