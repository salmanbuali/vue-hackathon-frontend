<script>
import axios from "axios"

export default {
  name: "HomePage",
  data: () => ({
    students: [],
    filteredStudentsData: [],
    search: null,
    sorted: false,
  }),
  components: { axios },
  methods: {
    async getAllStudents() {
      const response = await axios.get(`http://localhost:3001/students`)
      this.students = response.data
      console.log("before order", this.students)
    },
    filteredStudents() {
      const searchTerm = this.search.toLowerCase()
      this.filteredStudentsData = this.students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm)
      )
    },
    StudentDetails(id) {
      this.$router.push(`/${id}`)
    },
    sortByGPADescending() {
      if (this.sorted === true) {
        this.sorted = false

        this.getAllStudents()
      } else {
        this.sorted = true
        // this.sorted = true
        this.students.sort((a, b) => b.gpa - a.gpa) // Sorting in descending order by GPA
        console.log("After order", this.students)
        this.filteredStudentsData.sort((a, b) => b.gpa - a.gpa)
      }
    },
  },
  mounted() {
    this.getAllStudents()
  },
}
</script>

<template>
  <div class="container">
    <h2>Welcome to General Assembly Academy</h2>

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
          <th @click="sortByGPADescending">GPA</th>
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
  padding: 0.5vw;
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
