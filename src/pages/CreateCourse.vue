<script>
import axios from 'axios'
export default {
  name: 'CreateCourse',
  data: () => ({
    name: '',
    allCourses: []
  }),
  mounted: function () {
    this.getCourses()
  },
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    handleSubmit(e) {
      let exists = false
      e.preventDefault()
      const request = {
        name: this.name
      }
      this.allCourses.forEach((el) => {
        if (el.name === this.name) {
          exists = true
          alert('course exists')
        }
      })
      if (!exists) {
        axios.post('http://localhost:3001/courses/create', request)
        alert('Course Created')
        this.$router.push('/')
      }
    },
    async getCourses() {
      const response = await axios.get('http://localhost:3001/courses')
      this.allCourses = response.data
      console.log(this.allCourses)
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
