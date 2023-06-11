<template>
  <div class="project">
    <div class="actions">
      <h3>{{ project.title }}</h3>
    </div>
    <div>
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'project'
    ]
  }
</script>

<style>

</style>