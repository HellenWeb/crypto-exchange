<template>
  <MyNavbar />
  <router-view></router-view>
</template>

<script>
import MyNavbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    MyNavbar  
  }
}
</script>

<style>
@import "bootstrap"
</style>
