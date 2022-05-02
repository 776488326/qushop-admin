<template>
  <div class="messageBox">
    <el-descriptions title="站点信息" direction="vertical" :column="4" border>
      <el-descriptions-item label="网站名称">趣购物商城</el-descriptions-item>
      <el-descriptions-item label="开发人员">冯亮</el-descriptions-item>
      <el-descriptions-item label="源码获取"
        >https://github.com/776488326</el-descriptions-item
      >
      <el-descriptions-item label="备注">
        <el-tag size="small">客户端</el-tag>
        <el-tag size="small">管理端</el-tag>
        <el-tag size="small">服务端</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="QQ">776488326</el-descriptions-item>
      <el-descriptions-item label="微信">15135256460</el-descriptions-item>
      <el-descriptions-item label="备注"
        >源码，数据库表，架构图，开发文档，设计说明书全部在源码仓库中
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="站点配置" direction="vertical" :column="1" border class="cfg">
      <template slot="extra">
        <el-button type="message" size="big" @click="submit">保存修改</el-button>
      </template>
      <el-descriptions-item label="个人名片">
        <el-input v-model="message.followMe"></el-input>
        <img :src="message.followMe" alt="名片" style="width: 300px;">
      </el-descriptions-item>
      <el-descriptions-item label="轮播列表">
        <el-table :data="message.swiperList" style="width: 100%">
          <el-table-column label="地址" width="1000px">
            <template slot-scope="scope">
              <el-input v-model="message.swiperList[scope.$index]"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="预览">
            <template slot-scope="scope">
              <img
                :src="message.swiperList[scope.$index]"
                style="width: 100px"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-descriptions-item>
      <el-descriptions-item label="精选列表">
        <el-table :data="message.bestAdvImg" style="width: 100%">
          <el-table-column label="地址" width="1000px">
            <template slot-scope="scope">
              <el-input v-model="message.bestAdvImg[scope.$index]"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="预览">
            <template slot-scope="scope">
              <img
                :src="message.bestAdvImg[scope.$index]"
                style="width: 100px"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-descriptions-item>
      <el-descriptions-item label="广告列表">
        <el-table :data="message.advertisment" style="width: 100%">
          <el-table-column label="序号" type="index" width="100px"> </el-table-column>
          <el-table-column label="广告语" >
            <template slot-scope="scope">
              <el-input v-model="message.advertisment[scope.$index]"></el-input>
            </template>
          </el-table-column>
        </el-table>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  name: "Site",
  data() {
    return {
      message: {},
    };
  },
  methods: {
    async submit(){
      const res = await this.$API.message.reqSetSiteMessage(this.message);
      if (res.code === 200) {
      this.$message.success(res.msg);
    } else {
      this.$message.error(res.msg);
    }
    }
  },
  async mounted() {
    const res = await this.$API.message.reqGetSiteMessage();
    if (res.code === 200) {
      this.message = res.data;
    } else {
      this.$message.error(res.msg);
    }
  },
};
</script>
<style lang="scss" scoped>
  .messageBox{
    &>.cfg{
      padding-top: 30px;
    }
  }
</style>