<template>
  <div class="sidebar">
    <div class="sidebar-icon-container">
      <img src="../../assets/sidebarIcons/IconOne.png" class="logo-icon" />
    </div>
    <div class="menu">
      <div class="sidebar-icon-container">
        <router-link to="/" class="home-icon-container">
          <img src="../../assets/sidebarIcons/IconTwo.png" class="home-icon" />
        </router-link>
      </div>
      <div class="sidebar-icon-container">
        <img src="../../assets/sidebarIcons/IconThree.png" />
      </div>
      <div class="sidebar-icon-container">
        <img src="../../assets/sidebarIcons/IconFour.png" />
      </div>
      <div class="sidebar-icon-container">
        <img src="../../assets/sidebarIcons/IconFive.png" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.sidebar {
  background-color: rgba(20, 20, 20, 1);
  height: 92vh;
  width: 80px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 10px 5px 10px 10px;
}
.sidebar-icon-container {
  margin-bottom: 20px;
}
.logo-icon {
  height: 30px;
}
.home-icon-container {
  align-items: center;
  text-decoration: none;
  color: #333;
  border-radius: 5px;
}
.home-icon {
  height: 40px;
}
.home-icon[data-v-7973fd09]:hover {
  background-color: transparent !important;
}
.home-icon:hover {
  background-color: #ddd;
}
.flex {
  flex: 1;
}
</style>