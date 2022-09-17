<template>
    <myChart :width=width :option="option"/>
    <button @click="changeOption()">改变配置</button>
    <button @click="changeWidth()">改变宽度</button>
</template>

<script>
import { ref } from 'vue'

import {option1,option2} from './options'
export default {
  setup() {
    var option=ref({...option1}) 
    const width=ref("100vw")
    var option3=ref({...option2}) 
    function changeOption(){
      if(option.value==option3.value){
         option.value={...option1}
      }else
        option.value=option3.value
    }
    function changeWidth(){
        if(width.value==='100vw')
        width.value="50vw";
        else
        width.value="100vw"; 
    }
    return {
      option,option3,changeOption,changeWidth,width
    }
  },

}
</script>

