<template>
  <div>
  <v-toolbar>
    <v-toolbar-title>Project 17</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat router to="/overview">Overview</v-btn>
      <v-btn flat router to="/assignment">Assignment</v-btn>
      <v-btn flat router to="/settings">Settings</v-btn></v-btn>
      <v-btn flat router to="/logout">Logout</v-btn></v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
