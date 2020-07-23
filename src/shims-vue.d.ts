/*
 * @Author: your name
 * @Date: 2020-07-18 09:31:51
 * @LastEditTime: 2020-07-18 17:30:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /study-vue/src/shims-vue.d.ts
 */ 
import Vue from "vue";
import { AxiosInstance } from "axios";

declare module '*.vue' {
  export default Vue
}

declare module "vue/types/vue" {
  interface Vue {
    $http: AxiosInstance;
  }
}