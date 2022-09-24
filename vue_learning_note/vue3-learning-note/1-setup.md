## 1.拉开序幕的setup

1. 理解：Vue3.0中一个新的配置项，值为一个函数。

2. setup是所有**Composition API（组合API）****“ 表演的舞台 ”**。

3. 组件中所用到的：数据、方法等等，均要配置在setup中。

4. setup函数的两种返回值：
   
   1. 若返回一个对象，则对象中的属性、方法, 在模板中均可以直接使用。（重点关注！）
   
   2. 若返回一个渲染函数：则可以自定义渲染内容。（了解）
      
      ```vue
       setup() {
          // 数据
          let name = 'zs'
          let age = 18
          function sayHello() {
            alert(`我叫${name}, 我${age}岁了，你好啊`)
          }
          // setup 返回一个对象（常用）
          return {
            name,
            age,
            sayHello
          }
          // 返回一个函数（渲染函数）
          // return () => h('h1','尚硅谷')
        }
      ```

5. 注意点：
   
   1. 尽量不要与Vue2.x配置混用
      
      - Vue2.x配置（data、methos、computed...）中**可以访问到**setup中的属性、方法。
      - 但在setup中**不能访问到**Vue2.x配置（data、methos、computed...）。
      - 如果有重名, setup优先。
   
   2. setup不能是一个async函数，因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性。（后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合）
      
      【想要取出属性，需要使用 .then】
- - - ```js
      new Proxy(data, {
          // 拦截读取属性值
          get (target, prop) {
              return Reflect.get(target, prop)
          },
          // 拦截设置属性值或添加新属性
          set (target, prop, value) {
              return Reflect.set(target, prop, value)
          },
          // 拦截删除属性
          deleteProperty (target, prop) {
              return Reflect.deleteProperty(target, prop)
          }
      })
      
      proxy.name = 'tom'   
      ```

## 2.setup的两个注意点

- setup执行的时机
  
  - 在beforeCreate之前执行一次，this是undefined。（在setup中不使用this）
    
    ![](E:\Learn\note\vue_note\img\learning-img\2022-09-24-19-12-45-image.png)
    
    ![](E:\Learn\note\vue_note\img\learning-img\2022-09-24-19-13-00-image.png)

- setup的参数
  
  - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
  - context：上下文对象
    - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 `this.$attrs`。
    - slots: 收到的插槽内容, 相当于 `this.$slots`。
    - emit: 分发自定义事件的函数, 相当于 `this.$emit`。

![](E:\Learn\note\vue_note\img\learning-img\2022-09-24-20-53-29-image.png)

##### 补习：Vue中的props和插槽

![](E:\Learn\note\vue_note\img\learning-img\2022-09-24-20-29-25-image.png)

![](E:\Learn\note\vue_note\img\learning-img\2022-09-24-20-33-00-image.png)
