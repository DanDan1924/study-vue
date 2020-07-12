/*
 * @Author: your name
 * @Date: 2020-07-09 18:26:01
 * @LastEditTime: 2020-07-09 18:35:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /kkb/jiagou/03/study-vue/kvue1.js
 */ 
function defineReactive(obj, key, val){
    // val 可能是对象 需要递归处理
    observe(val)
    Object.defineProperty(obj, key,{
        get(){
            return val
        },
        set(newval){
            if(newval !== val){
                observe(newval)
                val = newval
            }
        }
    })
}
// 对象响应式处理
function observe(obj){
    // 判断obj类型必须是对象
  if (typeof obj !== 'object' || obj == null) {
    return
  }

  new Observer(obj)
}
// 每个响应式对象，伴生一个Observer实例
class Observer{
    constructor(value){
        this.value = value

        // 判断value是
    }
}