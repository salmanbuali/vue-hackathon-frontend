<script>
import axios from 'axios'
export default {
  name: 'Enroll',
  data: () => ({
    studentName: '',
    courseName: '',
    grade: '',
    allStudents: [],
    allCourses: [],
    allGrades: []
  }),
  mounted: function () {
    this.getGrades()
    this.getStudents()
    this.getCourses()
  },

  methods: {
    // handleChange(e) {
    //   this[e.target.name] = e.target.value
    // },
    handleSubmit(e) {
      e.preventDefault()
      const request = {
        student: this.studentName,
        course: this.courseName,
        grade: this.grade
      }

      axios.post('http://localhost:3001/students/enroll', request)
    },
    async getGrades() {
      const response = await axios.get('http://localhost:3001/grades')
      this.allGrades = response.data
      console.log(this.allGrades)
    },
    async getStudents() {
      const response = await axios.get('http://localhost:3001/students')
      this.allStudents = response.data
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
    <h1>Enroll Student</h1>

    <form v-on:submit="handleSubmit">
      <div class="select">
        <label>Student: </label>
        <select v-model="studentName">
          <option :value="student._id" v-for="student in this.allStudents">
            {{ student.name }}
          </option>
        </select>
      </div>
      <div class="select">
        <label>Course: </label>
        <select v-model="courseName">
          <option :value="course._id" v-for="course in this.allCourses">
            {{ course.name }}
          </option>
        </select>
      </div>
      <div class="select">
        <label>Grade: </label>
        <select v-model="grade">
          <option :value="grade._id" v-for="grade in this.allGrades">
            {{ grade.letter }}
          </option>
        </select>
      </div>
      <button>Confirm Selection</button>
    </form>
  </div>
</template>
