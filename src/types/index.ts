/*
 * @Author: your name
 * @Date: 2020-07-18 09:31:51
 * @LastEditTime: 2020-07-18 18:12:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /study-vue/src/types/index.ts
 */ 
export type Feature = {
  id: number;
  name: string;
};

type Select = {
  selected: boolean
}

export type FeatureSelect = Feature & Select
