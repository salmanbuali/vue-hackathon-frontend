<script>
import axios from "axios"

export default {
  name: "HomePage",
  data: () => ({
    students: [],
    filteredStudentsData: [],
    // filteredCoursesData:[],
    search: null,
    // currentOption: 'studentName',
  }),
  components: { axios },
  methods: {
    async getAllStudents() {
      const response = await axios.get(`http://localhost:3001/students`)
      this.students = response.data
    },
    filteredStudents() {
      const searchTerm = this.search.toLowerCase()
      this.filteredStudentsData = this.students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm)
      )
    },
    // filteredCourses(){

    // },
    // toggleOption() {
    //   this.currentOption = this.currentOption === 'studentName' ? 'course' : 'studentName';
    // },
    StudentDetails(id) {
      this.$router.push(`/${id}`)
    },
  },
  mounted() {
    this.getAllStudents()
  },
}
</script>

<template>
  <div>
    <h4>Welcome</h4>

    <!-- <button @click="toggleOption">Toggle</button>
    <p v-if="currentOption === 'studentName'">Show Student Name</p>
    <p v-else>Show Course</p> -->

    <input
      @input="filteredStudents"
      v-model="search"
      placeholder="Search by name"
    />

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Student Name</th>
          <th>GPA</th>
        </tr>
      </thead>
      <tbody>
        <div v-if="this.search">
          <tr
            v-for="(student, index) in this.filteredStudentsData"
            :key="index"
          >
            <td>{{ student.studentId }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.gpa }}</td>
          </tr>
          <!-- <tr
            v-for="(student, index) in this.filteredStudentsData"
            :key="index"
            v-if="currentOption=='course'"
          >
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.gpa }}</td>
          </tr> -->
        </div>
        <div
          v-else
          v-for="(student, index) in students"
          @click="StudentDetails(student.studentId)"
        >
          <tr :key="index">
            <td>{{ student.studentId }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.gpa }}</td>
          </tr>
        </div>
      </tbody>
    </table>
  </div>
</template>
