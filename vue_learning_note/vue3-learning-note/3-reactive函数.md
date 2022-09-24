## 一、reactive函数

- 作用: 定义一个**对象类型**的响应式数据（基本类型不要用它，要用`ref`函数）

- 语法：`const 代理对象= reactive(源对象)`接收一个对象（或数组），返回一个**代理对象（Proxy的实例对象，简称proxy对象）**

- reactive定义的响应式数据是“深层次的”。

- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。
  
  （1）reactive定义的响应式数据是“深层次的”。
  
  ![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-21-15-48-image.png)

![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-21-07-52-image.png)

![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-21-14-18-image.png)

（2）reactive验证是否可以监测数组类型的数据。

![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-21-16-26-image.png)

![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-21-11-56-image.png)

```

```
