<template>
  <div class="chart">
    <el-card>
      <ul class="list">
        <li>
          <div class="itemContent color1">{{ info.increment_users }}</div>
          <p>今日新增用户</p>
        </li>
        <li>
          <div class="itemContent color1">{{ info.total_users }}</div>
          <p>总用户量</p>
        </li>
        <li>
          <div class="itemContent color2">{{ info.increment_questions }}</div>
          <p>新增试题</p>
        </li>
        <li>
          <div class="itemContent color2">{{ info.total_questions }}</div>
          <p>总试题量</p>
        </li>
        <li>
          <div class="itemContent color2">{{ info.total_done_questions }}</div>
          <p>总刷题量</p>
        </li>
        <li>
          <div class="itemContent color2">{{ info.personal_questions }}</div>
          <p>人均刷题量</p>
        </li>
      </ul>
    </el-card>
    <el-card style="marginTop:20px;">
      <div class="charts" ref="charts" style="height:380px"></div>
    </el-card>
  </div>
</template>

<script>
const echarts = require('echarts')
export default {
  name: 'charts',
  data () {
    return {
      info: {},
      myCharts: ''
    }
  },
  methods: {
    async getData () {
      const res = await this.$axios.post('/data/title')
      if (res.code === 200) {
        this.info = res.data
      }
    },
    async getCharts () {
      this.myCharts = echarts.init(this.$refs.charts)
      const res = await this.$axios.post('/data/statistics')
      if (res.code === 200) {
        this.myCharts.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            top: '5%',
            right: '5%',
            orient: 'vertical'
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['60%', '90%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: res.data
            }
          ]
        })
      }
    }
  },
  mounted () {
    this.getCharts()
  },
  created () {
    this.getData()
  }
}
</script>

<style lang="less">
.chart {
  .list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    .itemContent {
      border-radius: 50%;
      width: 99px;
      height: 99px;
      line-height: 99px;
    }
    .color1 {
      border: 3px solid #0086fa;
      color: #0086fa;
    }
    .color2 {
      border: 3px solid #f76137;
      color: #f76137;
    }
  }
}
</style>
