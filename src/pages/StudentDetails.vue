<script>
import axios from 'axios'

export default {
  name: 'StudentDetails',
  components: {
    axios
  },
  data: () => ({
    student: {},
    filteredCoursesData: [],
    search: null,
  }),
  methods: {
    async getAllStudents() {
      const response = await axios.get(`http://localhost:3001/students`)
      this.student = response.data.filter(
        (e) => e.studentId == parseInt(this.$route.params.student_id)
      )[0]

      console.log(this.student)
      // console.log(
      // this.student.filter(
      //   (e) => e.studentId == parseInt(this.$route.params.student_id)
      // )[0].name
      // )
    },
    filteredCourses() {
      const searchTerm = this.search.toLowerCase()
      
      this.filteredCoursesData = this.student.results.filter((student) =>
        student.course.name.toLowerCase().includes(searchTerm)
      )
      console.log(this.filteredCoursesData)
      }
    },
  mounted() {
    this.getAllStudents()
  }
}
</script>

<template>
  <div>
    Student Name: {{ this.student.name }}
    <br />
    ID: {{ this.student.studentId }}
    <br />
    GPA: <span v-if="student.gpa">{{ student.gpa.toFixed(2) }}</span>
    <br />
    <input
      @input="filteredCourses"
      v-model="search"
      placeholder="Search by course"
    />

  </div>
  <div>
    <table>
      <thead>
        <tr>
          <th>Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="this.search" v-for=" (e, index) in this.filteredCoursesData" :key="index">
          <td>
            <!-- {{ this.student.results }} -->
            {{ e.course.name }}
          </td>
          <td>
            {{ e.grade.letter }}
          </td>
        </tr>

        <tr v-else v-for="e in this.student.results">
          <td>
            <!-- {{ this.student.results }} -->
            {{ e.course.name }}
          </td>
          <td>
            {{ e.grade.letter }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
