<template>
  <div
    class="popup-bg"
    :class="showPopup"
    @click.self="clickBg"
  >
    <div class="popup-body" :style="{ width: options.width + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        width: '800',
        bgClose: false
      })
    }
  },

  data: () =>({
    showPopup: ''
  }),

  methods: {
    show: function() {
      this.showPopup = 'popup-show'
    },

    hide: function() {
      this.showPopup = 'popup-hide'
    },

    clickBg: function() {
      if (this.options.bgClose) {
        this.hide()
      }
    }
  }
}
</script>

<style lang="scss">
.popup-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 100%;
  z-index: 1025;
  background-color: rgba(0, 0, 0, .4);
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;

  .popup-body {
    display: inline-block;
    text-align: left;
    margin-top: 120px;
    position: relative;
    border: 1px solid #fff;
    border-radius: 4px;
    box-shadow: 0 0 4px #8b8b8b;
    background-color: #fff;
  }
}

.popup-bg.popup-show {
  left: 0;
  animation: showPopup .2s both linear;
}
.popup-bg.popup-hide {
  animation: hidePopup .2s both linear;
}

@keyframes showPopup {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes hidePopup {
  0% {
    left: 0;
    opacity: 1;
  }
  99% {
    left: 0;
    opacity: 0;
  }
  100% {
    left: -100%;
    opacity: 0;
  }
}
</style>
