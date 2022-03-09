<template>
  <div>
    <nav-bar></nav-bar>
    <el-container id="main">
      <el-main>
        <log-in-moduel></log-in-moduel>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import NavBar from "../components/NavBar";
import LogInModuel from "../components/LogInModuel";
export default {
  name: "Login",
  components: {
    NavBar,
    LogInModuel,
  },
  data() {
    return {};
  },
};
</script>
<style >


</style>
