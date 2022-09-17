<script setup>
import * as echarts from "echarts";
import { computed, nextTick, onMounted, watch } from "vue";

function getUUID() {
  return new Date().getTime();
}
let uuid = getUUID();
let Echarts = null;

// 绘制图表
onMounted(() => {
  Echarts = echarts.init(document.getElementById(uuid));
  Echarts.setOption(style.option);
});

watch(
  () => style.option,
  (option) => {
    nextTick(() => {
      Echarts.setOption(option);
    });
  },
  {
    deep: true,
    immediate: true,
  }
);

watch(
  () => style.width,
  (width) => {
    if (Echarts) {
      nextTick(() => {
        Echarts.resize(width, {
          animation: {
            duration: 200,
          },
        });
      });
    }
  }
);

const style = defineProps({
  height: {
    type: String,
    default: "500px",
  },
  width: {
    type: String,
    default: "500px",
  },
  option: {
    type: Object,
    default: {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    },
  },
});
computed(() => {
  return style;
});
</script>
<script>
export default {
  name: "myChart",
};
</script>
<template>
  <div :id="uuid" :style="style"></div>
</template>
<style lang="less" scoped></style>
