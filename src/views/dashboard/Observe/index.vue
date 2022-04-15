<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="24">
          <Category></Category>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Category from "./Category";
export default {
  name: "",
  components: {
    Category,
  },
};
</script>

<style scoped>
</style>
