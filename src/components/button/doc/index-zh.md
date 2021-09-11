## 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。
```html
  <div class="demo-image__error">
    <div class="block">
      <lv-button>默认按钮</lv-button>
      <lv-button type="primary">主要按钮</lv-button>
      <lv-button type="success">成功按钮</lv-button>
      <lv-button type="info">信息按钮</lv-button>
      <lv-button type="warning">警告按钮</lv-button>
      <lv-button type="danger">危险按钮</lv-button>
    </div>

    <div class="block">
      <lv-button plain>朴素按钮</lv-button>
      <lv-button type="primary" plain>主要按钮</lv-button>
      <lv-button type="success" plain>成功按钮</lv-button>
      <lv-button type="info" plain>信息按钮</lv-button>
      <lv-button type="warning" plain>警告按钮</lv-button>
      <lv-button type="danger" plain>危险按钮</lv-button>
    </div>

    <div class="block">
      <lv-button round>圆角按钮</lv-button>
      <lv-button type="primary" round>主要按钮</lv-button>
      <lv-button type="success" round>成功按钮</lv-button>
      <lv-button type="info" round>信息按钮</lv-button>
      <lv-button type="warning" round>警告按钮</lv-button>
      <lv-button type="danger" round>危险按钮</lv-button>
    </div>

    <div class="block">
      <lv-button icon="el-icon-search" circle>圆</lv-button>
      <lv-button type="primary" icon="el-icon-edit" circle>圆</lv-button>
      <lv-button type="success" icon="el-icon-check" circle>圆</lv-button>
      <lv-button type="info" icon="el-icon-message" circle>圆</lv-button>
      <lv-button type="warning" icon="el-icon-star-off" circle>圆</lv-button>
      <lv-button type="danger" icon="el-icon-delete" circle>圆</lv-button>
    </div>
  </div>
  <script>
    export default {
      name: 'Md11',
      data() {
        return {
          name: 'ling'
        }
      }
    }
  </script>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<div class="block">
  <lv-button disabled>默认按钮</lv-button>
  <lv-button type="primary" disabled>主要按钮</lv-button>
  <lv-button type="success" disabled>成功按钮</lv-button>
  <lv-button type="info" disabled>信息按钮</lv-button>
  <lv-button type="warning" disabled>警告按钮</lv-button>
  <lv-button type="danger" disabled>危险按钮</lv-button>
</div>

<div class="block">
  <lv-button plain disabled>朴素按钮</lv-button>
  <lv-button type="primary" plain disabled>主要按钮</lv-button>
  <lv-button type="success" plain disabled>成功按钮</lv-button>
  <lv-button type="info" plain disabled>信息按钮</lv-button>
  <lv-button type="warning" plain disabled>警告按钮</lv-button>
  <lv-button type="danger" plain disabled>危险按钮</lv-button>
</div>
```

:::

### 文字按钮

没有边框和背景色的按钮。

:::demo

```html
<lv-button type="text">文字按钮</lv-button>
<lv-button type="text" disabled>文字按钮</lv-button>
```

:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element Plus 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<lv-button type="primary" icon="el-icon-edit">圆</lv-button>
<lv-button type="primary" icon="el-icon-share">圆</lv-button>
<lv-button type="primary" icon="el-icon-delete">圆</lv-button>
<lv-button type="primary" icon="el-icon-search">搜索</lv-button>
<lv-button type="primary"
  >上传<i class="el-icon-upload el-icon--right"></i
></lv-button>
```

:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<lv-button type="primary" :loading="true">加载中</lv-button>
```

:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<div class="block">
  <lv-button>默认按钮</lv-button>
  <lv-button size="medium">中等按钮</lv-button>
  <lv-button size="small">小型按钮</lv-button>
  <lv-button size="mini">超小按钮</lv-button>
</div>
<div class="block">
  <lv-button round>默认按钮</lv-button>
  <lv-button size="medium" round>中等按钮</lv-button>
  <lv-button size="small" round>小型按钮</lv-button>
  <lv-button size="mini" round>超小按钮</lv-button>
</div>
<div class="block">
  <lv-button icon="el-icon-search" circle>圆</lv-button>
  <lv-button icon="el-icon-search" size="medium" circle>圆</lv-button>
  <lv-button icon="el-icon-search" size="small" circle>圆</lv-button>
  <lv-button icon="el-icon-search" size="mini" circle>圆</lv-button>
</div>
```

:::

### Attributes

| 参数        | 说明           | 类型    | 可选值                                             | 默认值 |
| ----------- | -------------- | ------- | -------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                              | —      |
| type        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| plain       | 是否朴素按钮   | boolean | —                                                  | false  |
| round       | 是否圆角按钮   | boolean | —                                                  | false  |
| circle      | 是否圆形按钮   | boolean | —                                                  | false  |
| loading     | 是否加载中状态 | boolean | —                                                  | false  |
| disabled    | 是否禁用状态   | boolean | —                                                  | false  |
| icon        | 图标类名       | string  | —                                                  | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                  | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                            | button |