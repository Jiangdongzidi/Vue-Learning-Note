## 10.toRef 和 toRefs

- 作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。

- 语法：`const name = toRef(person,'name')`

- 应用: 要将响应式对象中的某个属性单独提供给外部使用时。

- 扩展：`toRefs` 与`toRef`功能一致，但可以批量创建多个 ref 对象，语法：`toRefs(person)`
  
  ![](E:\Learn\note\vue_note\img\2022-09-29-13-41-01-image.png)
  
  ![](E:\Learn\note\vue_note\img\2022-09-29-13-34-23-image.png)
