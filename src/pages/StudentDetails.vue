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
    search: null
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
    GPA: <span v-if="this.student.gpa">{{ student.gpa.toFixed(2) }}</span>
    <span v-if="!student.gpa">N/A</span>
    <br />
    <input
      @input="filteredCourses"
      v-model="search"
      placeholder="Search by course"
    />
  </div>
  <div v-if="this.student.results" class="table-container">
    <table v-if="this.student.results.length > 0">
      <thead>
        <tr>
          <th class="course-name">Course</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-if="this.search"
          v-for="(e, index) in this.filteredCoursesData"
          :key="index"
        >
          <td class="course-name">
            <!-- {{ this.student.results }} -->
            {{ e.course.name }}
          </td>
          <td>
            {{ e.grade.letter }}
          </td>
        </tr>

        <tr v-else v-for="e in this.student.results">
          <td class="course-name">
            <!-- {{ this.student.results }} -->
            {{ e.course.name }}
          </td>
          <td class="grade-letter">
            {{ e.grade.letter }}
          </td>
        </tr>
      </tbody>
    </table>
    <span v-else> No Courses </span>
  </div>
</template>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  border: 1px solid white;
  border-radius: 15px;
  width: 30vw;
  margin: 0 auto;
}
.course-name {
  text-align: left;
  padding-right: 10vw;
}
.grade-letter {
  text-align: center;
}
th {
  font-size: 1.25rem;
}
</style>
