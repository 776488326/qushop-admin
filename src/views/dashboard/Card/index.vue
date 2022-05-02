<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-card>
          <!-- 第二个card -->
          <Detail title="访问量" :count="message.totalVisit">
             <template slot="charts">
                 <lineCharts></lineCharts>
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
  data(){
    return {
      message:{
        totalVisit:0
      }
    }
  },
  async mounted(){
    const res = await this.$API.message.reqGetSiteMessage();
    if(res.code ==200){
      this.message = res.data;
    }else{
      this.$message.error(res.msg);
    }
  }
};
</script>

<style scoped>
</style>
