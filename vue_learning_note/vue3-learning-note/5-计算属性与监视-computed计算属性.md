## 计算属性与监视

### 1.computed函数

- 与Vue2.x中computed配置功能一致（Vue3的计算属性是组合式API）

- 写法
  
  ```js
  import {computed} from 'vue'
  
  setup(){
      ...
      //计算属性——简写
      let fullName = computed(()=>{
          return person.firstName + '-' + person.lastName
      })
      //计算属性——完整
      let fullName = computed({
          get(){
              return person.firstName + '-' + person.lastName
          },
          set(value){
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
  }
  ```

![](E:\Learn\note\vue_note\img\learning-img\2022-09-24-21-45-43-image.png)

#### 复习：Vue2计算属性

![](E:\Learn\note\vue_note\img\learning-img\2022-09-24-21-18-48-image.png)
