/*
 * @Author: your name
 * @Date: 2020-07-18 09:33:41
 * @LastEditTime: 2020-07-18 09:44:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /study-vue/index.ts
 */
// const msg = 'typesctipt'
var msg = ['typesctipt'];
function sayHello(msg) {
    return 'hello,' + msg;
}
document.body.textContent = sayHello(msg);
