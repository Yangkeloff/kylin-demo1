<template>
  <div class="child_wrap col aln-center">
    <section style="color: #333;">Hello {{name}}</section>
    <section style="color: #237fd4;">props测试:{{prop_1}}</section>
    <button class="btn1 mt20" @click="back()">返回</button>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
@import '~common/css/base.less';
.child_wrap {
  section {
    font-size: 58 * @rpx;
  }
}
</style>

<script>
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class Child {
    data = {
      name: 'Child'
    }
    props = ['prop_1']
    mounted() {
      console.log('component.Child mounted');
    }
    methods = {
      back() {
        window.history.go(-1);
      }
    }
  }

</script>
