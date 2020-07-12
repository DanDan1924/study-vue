/*
 * @Author: your name
 * @Date: 2020-07-05 19:04:26
 * @LastEditTime: 2020-07-05 21:59:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /03/study-vue/01-defineProperty.js
 */ 
// 对象响应式原理
// 1.Object.defineProperty()
function defineReactive(obj,key,val){
  observer(val) //处理的是一开始的obj里有对象的情况
  Object.defineProperty(obj,key,{
    get(){
      console.log('get',val)
      return val
    },
    set(newval){
      if(newval!==val){
        console.log('set',newval)
        observer(newval) // 处理的是后期赋值新对象的情况
        val = newval 
      }
    }
  })
}
// 把对象做响应化
function observer(obj){
  // 判断传入的obj必须是对象
  if (typeof obj !== 'object' || obj == null) {
    return 
  }
  Object.keys(obj).forEach(key=>{
    defineReactive(obj, key, obj[key])
    // 可以把递归放在这里
    // if(typeof obj[key] =='object'){
    //   observer(obj[key])
    // }
  })
}
// 类似于vue的set方法
function set(obj,key,val){
  defineReactive(obj,key,val)
}

const obj = {foo:'foo',bar:'barval', bars:{a:1}}
// defineReactive(obj,'foo','foo')
observer(obj) //处理的是对象

// obj.foo
// obj.foo='foooo'
// obj.bars.a  = '33'
// obj.bars  = {b:10}//需要进一步处理，不然新进来的对象会有问题
// obj.bars.b

// obj.dong = 'dong' //新增属性
// obj.dong  //是没有值的，用下面的方式才有值

set(obj,'dong','dong')
obj.dong



// function defineReactive(obj, key, val) {
//   // val可能是对象，需要递归处理
//   observe(val)

//   Object.defineProperty(obj, key, {
//     get() {
//       console.log('get', val);
//       return val
//     },
//     set(newVal) {
//       if (newVal !== val) {
//         console.log('set', newVal);
//         observe(newVal)
//         val = newVal
//       }
//     }
//   })
// }

// // 对象响应式处理
// function observe(obj) {
//   // 判断obj类型必须是对象
//   if (typeof obj !== 'object' || obj == null) {
//     return
//   }

//   Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
// }

// function set(obj, key, val) {
//   defineReactive(obj, key, val)
// }

// const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 } }

// // defineReactive(obj, 'foo', 'foo')
// observe(obj)

// obj.foo
// obj.foo = 'foooooo'
// obj.bar
// obj.baz.a = 10
// obj.baz = { a: 10 }
// obj.baz.a = 100
// obj.dong = 'dong'
// set(obj, 'dong', 'dong')
// obj.dong