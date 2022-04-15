<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <!-- 第二个card -->
          <Detail title="访问量" count="80">
             <template slot="charts">
                 <lineCharts></lineCharts>
             </template>
            <template slot="footer">
              <span>日访问量 10</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <!-- 第三个card -->
          <Detail title="支付笔数" count="8">
            <template slot="charts">
               <barCharts/>
            </template>
            <template slot="footer">
              <span>转换率64%</span>
            </template>
          </Detail>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from "./Detail";
import lineCharts from './lineChart'
import barCharts from './barCharts'
import progressCharts from './progressCharts'
export default {
  name: "",
  components: {
    Detail,
    lineCharts,
    barCharts,
    progressCharts
  },
};
</script>

<style scoped>
</style>
