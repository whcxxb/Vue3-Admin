<template>
  <el-card class="box-card">
    <div class="chart-box" ref="chart"></div>
  </el-card>
</template>
<script setup lang="ts">
  import * as echarts from 'echarts'
  import { ref, onMounted } from 'vue'
  const chart = ref<any>(null)
  onMounted(() => {
    const chartBox = echarts.init(chart.value)
    const option = {
      tooltip: {},
      legend: {
        data: ['登录次数'],
        textStyle: {
          fontSize: 16
        }
        // bottom: 0
      },
      grid: {
        top: '6%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        data: [
          '2023-1-23',
          '2023-1-24',
          '2023-1-25',
          '2023-1-26',
          '2023-1-27',
          '2023-1-28',
          '2023-1-29'
        ]
      },
      yAxis: {},
      series: [
        {
          name: '登录次数',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20, 30],
          lineStyle: {
            color: '#7986CB'
          },
          itemStyle: {
            color: '#7986CB',
            borderColor: '#7986CB',
            borderWidth: 2
          }
        }
      ]
    }
    chartBox.setOption(option)
    window.addEventListener('resize', () => {
      chartBox.resize()
    })
  })
</script>
<style lang="less" scoped>
  .box-card {
    height: 100%;
    .chart-box {
      width: 100%;
      height: 550px;
    }
  }
</style>
