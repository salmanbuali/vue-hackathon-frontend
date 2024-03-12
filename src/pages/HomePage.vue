<script>
import axios from 'axios'

export default {
  name: "HomePage",
  data: () => ({
    students: [
      { name: "John Doe", gpa: 3.0, id: 2024001 },
      { name: "Jane Smith", gpa: 4.0, id: 2024002 },
    ],
    filteredStudentsData: [],
    search: null,
  }),
  methods: {
    filteredStudents() {
      console.log("search")
      const searchTerm = this.search.toLowerCase()
      this.filteredStudentsData = this.students.filter((student) =>
        student.name.toLowerCase().includes(searchTerm)
      )
    },
  },
}
</script>

<template>
  <div>
    <h4>Welcome</h4>

    <h2>Student Table</h2>
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
          <tr v-for="(student, index) in this.filteredStudentsData" :key="index">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.gpa }}</td>
          </tr>
        </div>
        <div v-else>
          <tr v-for="(student, index) in students" :key="index">
            <td>{{ student.id }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.gpa }}</td>
          </tr>
        </div>
      </tbody>
    </table>
  </div>
</template>
