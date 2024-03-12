<script>
export default {
  name: 'NavBar'
}
</script>

<template>
  <nav>
    <router-link class="link" to="/" name="HomePage">Home</router-link>
    <router-link class="link" to="/enroll">Enroll</router-link>
    <router-link class="link" to="/CreateStudent">Add Student</router-link>
    <router-link class="link" to="/CreateCourse">Add course</router-link>
  </nav>
</template>

<style></style>
