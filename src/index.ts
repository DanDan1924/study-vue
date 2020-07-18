/*
 * @Author: your name
 * @Date: 2020-07-18 09:33:41
 * @LastEditTime: 2020-07-18 10:39:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /study-vue/index.ts
 */ 
const msg = 'typesctipt'
// const msg = ['typesctipt']

function sayHello(msg:string){
    return 'hello,'+msg
}
document.body.textContent = sayHello(msg)