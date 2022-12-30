<template>
  <MyNavbar />
  <div class="container">
    <router-view></router-view>
  </div>
  <MyFooter />
</template>

<script>
import MyNavbar from '@/components/Navbar'
import MyFooter from '@/components/Footer'
export default {
  name: 'App',
  components: {
    MyNavbar,
    MyFooter
  }
}
</script>

<style>
@import "bootstrap";

.intro {
  width: 100%;
}
.intro__inner {
  text-align: center;
  margin-top: 8%;
}
.intro__inner > h1 {
  font-size: 50px;
}
</style>
