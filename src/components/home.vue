<template>
  <div style="background-color: white;min-height:900px">
    <div style="width:100%;height:55px;background-color:rgb(50, 64, 87); overflow: hidden">
      <span class="demonstration" style="float:left;color:white;padding-top:17px;margin-left:1%">
        <!-- <img src="../assets/ico.png" alt=""> -->
        <div style="color:white">微梅科技</div>
      </span>
      <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
      </span>
      <span class="demonstration" style="float:right;padding-top:17px;margin-right:1%">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link" style="color:white">
            公众号<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>详细信息</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:900px;background-color:#eef1f6;" @select="handleSelect">
              <el-menu-item index="1"><i class="el-icon-message"></i>自动回复</el-menu-item>
              <el-menu-item index="2"><i class="el-icon-menu"></i>自定义菜单</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div style="margin-top:10px">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchCriteria: '',
        breadcrumbItems: ['自动回复'],
      }
    },

    methods: {
      handleIconClick(ev) {
        console.log(ev);
      },

      handleSelect(key, keyPath) {
        switch (key) {
          case '1':
            this.$router.push('/automaticResponse');
            this.breadcrumbItems = ['自动回复']
            break;
          case '2':
            this.$router.push('/customMenu')
            this.breadcrumbItems = ['自定义菜单']
            break;
        }
      },

    },
  }

</script>
