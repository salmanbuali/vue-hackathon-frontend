<script>
export default {
  name: 'Enroll',
  data: () => ({
    studentName: '',
    courseName: '',
    grade: '',
    allStudents: [],
    allCourses: []
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    handleSubmit(e) {
      e.preventDefault()
      const request = {}
      // axios.post("http://localhost:3001/students/create",request)
    }
  }
}
</script>

<template>
  <div>
    <h1>Enroll Student</h1>
    <form v-on:Submit="handleSubmit">
      <div>
        <label>Student: </label>
        <select v-model="studentName">
          <option disabled>Please Select A Student</option>
          <option>Salman</option>
          <option>Nayef</option>
          <option>Hamad</option>
        </select>
      </div>
      <div>
        <label>Course: </label>
        <select v-model="courseName">
          <option disabled>Please Select A Course</option>
          <option>Math</option>
          <option>Acrobatics</option>
        </select>
      </div>
      <button>Confirm Selection</button>
    </form>
  </div>
</template>
