<template>
  <el-card>
    <div slot="header" class="header">
      <div class="category-header">
        <span>销售额类别占比</span>
        <el-radio-group v-model="value">
          <el-radio-button label="线上"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div>
      <div class="charts" ref="charts"></div>
    </div>
  </el-card>
</template>

<script>
import echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      value: "线上",
    };
  },
  mounted() {
    //饼图
    let mychart = echarts.init(this.$refs.charts);
    let option = {
      title: {
        text: "销售额分类占比",
        subtext: "分类占比",
        left: "center",
        top: "center",
      },
      tooltip: {
        trigger: "item",
      },
      series: [
        {
          name: "销售额分类占比",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
            position: "outsize",
          },
          labelLine: {
            show: true,
          },
          data: [
            { value: 1048, name: "手机" },
            { value: 735, name: "厨具" },
            { value: 580, name: "母婴" },
            { value: 484, name: "零食" },
            { value: 300, name: "数码" },
          ],
        },
      ],
    }
    option.series[0].data = 
    mychart.setOption(option);
    //绑定事件

    mychart.on("mouseover",(params)=>{
        //获取鼠标移上去那条数据
        const {name,value} = params.data;
        //重新设置标题
        mychart.setOption({
          title:{
            text:name,
            subtext:'value'
          }
        })
    });
  },
};
</script>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  border-bottom: 1px solid #eee;
}
.charts {
  width: 100%;
  height: 500px;
}
</style>
