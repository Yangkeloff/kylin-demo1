<template>
  <div id="app">
    <a href="./loadmore.html">loadmore</a>
    <a href="./dialogue.html">dialogue</a>
    <a href="./listview.html">listview</a>
    <section class="btn1 center mt20" @click="toSign()">
      去签名
    </section>
    <input 
      class="ipt_1"
      placeholder="限制小数点后两位" 
      type="text" 
      v-model="count"
      @keydown="checkKeydown($event, count)"
      @input="count=/^\d+\.?\d{0,2}$/.test(count)||count == '' ? count : count=checkValue">
  </div>
</template>

<style lang="less" rel="stylesheet/less" >
  @import '~common/css/base.less';

  #app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ipt_1 {
    border-radius: 10 * @rpx;
    padding: 10 * @rpx;
    margin-top: 20 * @rpx;
  }
</style>

<dependency component="loadmore" src="common/components/loadmore.vue" lazy />

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class LoadmoreView {
    data = {
      count: '',
      checkValue: ''
    }
    methods = {
      checkKeydown(e, value) {
        this.checkValue = value;
      },
      toSign() {
        window.open('./sign.html', '_self');
      }
    }
  }

</script>
