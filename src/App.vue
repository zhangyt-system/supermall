
<template>
  <div id="app">
    <div>
      <TarBar>
        <TarBarItem></TarBarItem>
      </TarBar>
      <TarBar>
        <TarBarItem></TarBarItem>
      </TarBar>
      <TarBar>
        <TarBarItem></TarBarItem>
      </TarBar>
      <TarBar>
        <TarBarItem></TarBarItem>
      </TarBar>
    </div>
    <router-view />
  </div>
</template>

<script>
import TarBar from "./components/tarbar/TarBar";
import TarBarItem from "./components/tarbar/TarBarItem";
export default {
  name: "App",
  components: {
    TarBar,
    TarBarItem
  }
};
</script>

<style scoped>

</style>
