# vue-simple-popup

> vue模态框组件


### 1. 安装

``` bash
npm install vue-simple-popup
```


#### 2. 使用

```
# 全局引用
import VuePopup from 'vue-popup'
Vue.use(VuePopup)
...

# 局部引用
<script>
import VuePopup from 'vue-popup'

export default {
  components: { VuePopup },
  ...
}
</script>
```

```
<template>
  <div>
    <vue-popup ref="vuePopup">
      <div>
        <p>弹框内容</p>
        <button @click="hidePopup">关闭</button>
      </div>
    </vue-popup>
    <button @click="showPopup">显示弹框</button>
  </div>
</template>
<script>
export default {
  methods: {
    showPopup: function() {
      this.$refs.vuePopup.show()
    },

    hidePopup: function() {
      this.$refs.vuePopup.hide()
    }
  }
}
</script>
```

#### 3. 配置项

* **ref：**
  * 组件ref值，用于索引组件并调用其show、hide方法
  * 是否必须：**必须**
* **slot**
  * 组件插槽，用于填充弹框内容
  * 插槽数量：**1**
* **options：**
  * 弹框控制选项
  * 类型：**Object**
  * 是否必须：**非必须**
  * **options.width**
    * 弹框宽度（px）
    * 类型： **Number/String**
    * 是否必须：**非必须**
    * 默认值：“800”
  * **options.bgClose**
    * 点击背景部分关闭弹框
    * 类型：**Boolean**
    * 是否必须：**非必须**
    * 默认值：**true**


PS： 当组件插槽为另一个子组件时，可在子组件内部使用```this.$parent.hide()```实现弹框的关闭操作。
