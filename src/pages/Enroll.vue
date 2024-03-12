<script>
export default {
  name: 'Enroll',
  data: () => ({
    studentName: '',
    courseName: '',
    grade: '',
    allStudents: [],
    allCourses: []
  })
}
</script>

<template>
  <div>
    <h1>Enroll Student</h1>
    <form>
      <select>
        <option disabled value="">Please Select A Student</option>
        <option>Salman</option>
        <option>Nayef</option>
        <option>Hamad</option>
      </select>
      <select>
        <option disabled value=""></option>
        <option>Math</option>
        <option>Acrobatics</option>
      </select>
    </form>
  </div>
</template>
