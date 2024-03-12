<script>
export default {
  name: 'NavBar'
}
</script>

<template>
  <nav>
    <div class="div-flex">
      <img
        src="https://seeklogo.com/images/G/general-assembly-logo-D5C634F07A-seeklogo.com.png"
        alt="GA"
      />
      <span>Academy</span>
    </div>
    <div>
      <router-link class="link" to="/" name="HomePage"
        ><i class="fi fi-rs-home"></i> Home</router-link
      >
      <router-link class="link" to="/enroll"
        ><i class="fi fi-tr-file-signature"></i> Enroll</router-link
      >
      <router-link class="link" to="/CreateStudent"
        ><i class="fi fi-rr-user-add"></i> Student</router-link
      >
      <router-link class="link" to="/CreateCourse"
        ><i class="fi fi-rr-add-document"></i> Course</router-link
      >
    </div>
  </nav>
</template>

<style scoped>
@import url('https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-straight/css/uicons-regular-straight.css');

@import url('https://cdn-uicons.flaticon.com/2.1.0/uicons-thin-rounded/css/uicons-thin-rounded.css');

@import url('https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css');

@import url('https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css');
img {
  height: 5vh;
}

.div-flex {
  display: flex;
  align-items: center;
  gap: 1vh;
}
</style>
