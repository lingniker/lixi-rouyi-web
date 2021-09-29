## 关于js 的设计模式。

## 现在主推两种设计模式

1. 第一种是 flux 流模式

```js
 // 这个模式的特点就是,一个变量一个action. 主要的是知道所有的变量情况下可以使用这个模式
 // 最大的特点就是 一个 动作 , 一个状态
 // 上代码
 var store = { // 所有的数据都在这里
   state: {
    nama: 'ling',
    online: false,
   }
 }
 // 接下来就是行为的定义了
 var action = function (action) { // 可以是一个函数
    switch (action.type) {
      case 'add': 
        return addFun(action);
      case 'remove': 
        return remove(action);
    }
 }

 function addFun () {
   // 就是使用一些简单的例子
   // 就是一些简单的例子 通过这个例子呢。 你可以扩展一下你自己的业务逻辑。 现在留一个作业题了
   // 带着这个问题去思考了。
   // 这样就很不错了。已经做到这一点就已经很不错了。这是入门.大神们就不要来挖苦我了
 }
 function remove () {

 }

```

### 其实还有很多的问题，但是现在要用什么方式去做呢,现在也不会是这样的情况

### 没有什么事情是这样的.不仅仅是这样子，我想想总体规划呢?

### 简单画一下吧.思维导图.

### 尽量是错误的事情少发生.

升级vue3.0 的问题

1. 创建 createApp 不是 new Vue

2. ruter addRouters 不存在

3. #app 替代了 slot 

4. store 的使用 router 的使用

5. 异步加载方式， 现在还没有用上vue3.0的加载方式.

6. #default={row}

7. ::v-deep

### todo list

#### 一期

1. vue 源码 带问题去看

2. keep-alive

3. 代码结构,路径结构,生成的md文件，以及锚点

4. 国际化，代码分割, 版本控制

5. 文档规范，设计图，流程图

7. 原型图设计

8. 样式

9. 代码风格(js 模式)

10. 单元测试，ts规范

11. 异步加载

12. bus ， spc

13. 若依的分析及拆解

14. webpack 的进度条优化，打包优化，与其他框架的分析

#### 后期

1. 图片过大，加载错误

2. server 服务器，搜索功能 

3. 自动化脚本, sh

4. bug规范，开发规范，代码风格 eslint

5. mysql,mongod 的用户规范，redis 部署, 亚马逊服务器

6. java 部署

7. cli package-lock 原理.

8. 脚本生成代码

9. 加入我们，团队协作，任务协调

10. 邮件与推广

11. git bi标签

12. 统计, 百度统计

13. loader 与 puligin 的详细

14. 两个框架的结合

15. 移动端

16. vite 脚手架

17. xss 攻击

18. babel,es6,commont amd,umd

