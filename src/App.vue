<template>
  <div class="app-container">
    <SideBar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from './components/sidebar/SideBar'

export default {
  components: {
    SideBar
  }
}
</script>

<style>
.app-container {
  display: flex;
}

.main-content {
  flex: 1;
  margin: 10px 10px 10px 5px
}

body {
  font-family: 'Satoshi', sans-serif;
}
</style>
