<template>
  <div id="app">
    <h3>Vue Popup</h3>
    <vue-popup ref="vuePopup">
      <p>弹框内容</p>
    </vue-popup>
    <button @click="showPopup">显示弹框</button>
  </div>
</template>

<script>
export default {
  methods: {
    showPopup: function() {
      this.$refs.vuePopup.show()
    }  
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
