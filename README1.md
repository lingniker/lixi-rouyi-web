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
