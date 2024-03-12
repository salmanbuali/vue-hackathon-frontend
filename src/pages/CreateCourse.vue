<script>
export default {
  name: 'CreateCourse',
  data: () => ({
    name: '',
    grade: null
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    handleSubmit(e) {
      e.preventDefault()
      this.name = ''
      alert('Course Created')
    }
  }
}
</script>

<template>
  <div>
    <h1>Create Course</h1>
    <form v-on:submit="handleSubmit">
      <div>
        <input
          @input="handleChange"
          type="text"
          placeholder="Name"
          :value="name"
          name="name"
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>
