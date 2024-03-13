<script>
import axios from 'axios'

export default {
  name: 'HomePage',
  data: () => ({
    students: [],
    filteredStudentsData: [],
    // filteredCoursesData:[],
    search: null
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
    }
  },
  mounted() {
    this.getAllStudents()
  }
}
</script>

<template>
  <div class="container">
    <h2>Welcome to General Assembly Academy</h2>

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
        <tr
          v-if="this.search"
          v-for="(student, index) in this.filteredStudentsData"
          @click="StudentDetails(student.studentId)"
        >
          <td>{{ student.studentId }}</td>
          <td>{{ student.name }}</td>
          <td>
            <span v-if="student.gpa">{{ student.gpa.toFixed(2) }}</span>
            <span v-if="!student.gpa">N/A</span>
          </td>
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

        <tr
          v-else
          v-for="(student, index) in students"
          @click="StudentDetails(student.studentId)"
        >
          <td>{{ student.studentId }}</td>
          <td>{{ student.name }}</td>
          <td>
            <span v-if="student.gpa">{{ student.gpa.toFixed(2) }}</span>

            <span v-if="!student.gpa">N/A</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td,
th {
  border: 0.5px solid white;
  padding: 1vw;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  width: 60vw;
  margin-top: 2vh;
}

th {
  font-size: 1.75rem;
}

td {
  font-size: 1.25rem;
}
</style>
