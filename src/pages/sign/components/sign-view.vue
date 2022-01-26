<template>
  <div id="app">
    <p class="title">Sign Page</p>
    <button class="btn1 back-btn" @click="back()">返回</button>
  </div>
</template>

<style lang="less" rel="stylesheet/less" >
  @import '~common/css/base.less';

  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 33 * @rpx;
  }
  .back-btn {
    align-self: center;
  }

</style>

// <dependency component="loadmore" src="common/components/loadmore.vue" lazy />

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class SignView {
    methods = {
      back() {
        window.history.go(-1);
      }
    }
  }

</script>
