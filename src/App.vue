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
@import "bootstrap"
</style>
