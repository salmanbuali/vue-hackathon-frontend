<script>
export default {
  name: 'CreateStudent',
  data: () => ({
    name: '',
    email: ''
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    handleSubmit(e) {
      e.preventDefault()
      this.name = ''
      this.email = ''
      const request = {
        name: this.name,
        email: this.email
      }
      // axios.post("",request)
    }
  }
}
</script>

<template>
  <div>
    <h1>Create Student</h1>
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
      <div>
        <input
          @input="handleChange"
          type="text"
          placeholder="Email"
          name="email"
          :value="email"
        />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>
