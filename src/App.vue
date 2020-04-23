<template>
  <div id="app">
    <div @click="openToast">点击弹出Toast center</div>
    <div @click="openToast2">点击弹出Toast top</div>
    <div @click="openToast3">点击弹出Toast bottom</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    openToast() {
      this.$crazyToast.open({
        loading: true,
        title: 'ToastcenterToastToastcenterToastToastcenterToastToastcenterToastToastcenterToast'
      })
    },
    openToast2() {
      this.$crazyToast.open({
        position: 'top',
        title: 'Toast top'
      })
    },
    openToast3() {
      this.$crazyToast.open({
        position: 'bottom',
        title: 'Toast bottom'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
