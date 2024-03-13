<script>
import axios from "axios"

export default {
  name: "StudentDetails",
  components: {
    axios,
  },
  data: () => ({
    student: {},
  }),
  methods: {
    async getAllStudents() {
      const response = await axios.get(`http://localhost:3001/students`)
      this.student = response.data.filter(
          (e) => e.studentId == parseInt(this.$route.params.student_id)
        )[0]
      // console.log(
        // this.student.filter(
        //   (e) => e.studentId == parseInt(this.$route.params.student_id)
        // )[0].name
      // )
    },
  },
  mounted() {
    this.getAllStudents()
  },
}
</script>

<template>
  <div>
    Student Name: {{ this.student.name }}
    <br />
    ID: {{ this.student.studentId }}
  </div>
</template>

<style></style>
