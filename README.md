# vue-crazy-toast

![screenShot](https://github.com/crazy-hope/vue-crazy-toast/blob/master/screenshot/toast-bottom.png)

### 安装 `vue-crazy-toast`
``` shell
yarn add vue-crazy-toast
# or
npm install vue-crazy-toast
```

### 引入 `vue-crazy-toast`
``` javascript
// main.js
import CrazyToast from 'vue-crazy-toast'
Vue.use(CrazyToast)
```

### 使用 `vue-crazy-toast`
``` javascript
// 打开
this.$crazyToast.open({
    title: 'Title'
})

// 关闭
this.$crazyToast.close()
```

### 属性说明
| 属性 | 默认值 | 说明 |
|-|-|-|
| loading | `false` | 是否显示loading图标 |
| title |  | 标题 |
| mask | `true` | 遮罩层 |
| position | `center` | 弹窗位置 // bottom, center, top |
| fail |  | 调用失败的回调函数 |
| success |  | 调用成功的回调函数 |
| autoClose | `3000` | 默认等待3s后自动关闭 |
