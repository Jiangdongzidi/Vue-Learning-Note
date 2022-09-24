## 一、ref函数

- 作用: 定义一个响应式的数据

- 语法: `const xxx = ref(initValue)`
  
  - 创建一个包含响应式数据的**引用对象（reference对象，简称ref对象）**。
  
  - JS中操作数据： `xxx.value`
  
  - 模板中读取数据: 不需要.value，直接：`<div>{{xxx}}</div>`
    
    ![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-19-46-48-image.png)
    
    ![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-19-47-57-image.png)

- 备注：
  
  - 接收的数据可以是：基本类型、也可以是对象类型。
  
  - 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
  
  - 对象类型的数据：内部 **“ 求助 ”** 了Vue3.0中的一个新函数—— `reactive`函数。
    
    ![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-20-34-09-image.png)
    
    ![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-20-39-23-image.png)
    
    ![](E:\Learn\note\vue_note\img\learning-img\2022-09-22-20-41-03-image.png)
