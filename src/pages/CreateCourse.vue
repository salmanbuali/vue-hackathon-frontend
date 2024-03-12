<script>
import axios from 'axios'
export default {
  name: 'CreateCourse',
  data: () => ({
    name: '',
    grade: null
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    handleSubmit(e) {
      e.preventDefault()
      const request = {
        name: this.name
      }
      axios.post('http://localhost:3001/courses/create', request)
      alert('course created!!!!!!')
      this.name = ''
    }
  }
}
</script>

<template>
  <div>
    <h1>Create Course</h1>
    <form v-on:submit="handleSubmit">
      <div>
        <input
          @input="handleChange"
          type="text"
          placeholder="Name"
          :value="name"
          name="name"
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>
