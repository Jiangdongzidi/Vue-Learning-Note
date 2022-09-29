class MyPromise {
    // 构造方法
    constructor(executor) {

        // 初始化值
        this.initValue()
        // 初始化this指向
        this.initBind()
        // 执行传进来的函数
        executor(this.resolve, this.reject)
    }

    initBind() {
        // 初始化this
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
    }

    initValue() {
        // 初始化值
        this.PromiseResult = null // 终值
        this.PromiseState = 'pending' // 状态
        this.onFulfilledCallbacks = []  // 保存成功回调
        this.onRejectedCallbacks = []  // 保存失败回调
    }

    resolve(value) {
        // state是不可变的
        if (this.PromiseState !== 'pending') return
        // 如果执行resolve，状态变为fulfilled
        this.PromiseState = 'fulfilled'
        // 终值为传进来的值
        this.PromiseResult = value

        // 执行保存的成功回调
        while(this.onFulfilledCallbacks.length) {
            this.onFulfilledCallbacks.shift()(this.PromiseResult)
        }
    }

    reject(reason) {
        // state是不可变的
        if (this.PromiseState !== 'pending') return
        // 如果执行reject，状态变为rejected
        this.PromiseState = 'rejected'
        // 终值为传进来的reason
        this.PromiseResult = reason

        // 执行保存的失败回调
        while (this.onRejectedCallbacks.length) {
            this.onRejectedCallbacks.shift()(this.PromiseResult)
        }
    }
    
    // then 接收成功和失败回调
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
        if (this.PromiseState === 'fulfilled') {
            onFulfilled(this.PromiseResult)
        } else if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult)
        } else if (this.PromiseState === 'pending') {
            this.onFulfilledCallbacks.push(onFulfilled.bind(this))
            this.onRejectedCallbacks.push(onRejected.bind(this))
        }
    }
}

const test2 = new MyPromise ((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
    }, 1000)
}).then(res => console.log(res), err => console.log(err))

