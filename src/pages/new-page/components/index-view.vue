<template>
  <div id="app">
    <section class="top">
      Hello {{name}}
    </section>
    <Child :prop_1 = "prop_1"></Child>
  </div>
</template>

<style lang="less" rel="stylesheet/less">
@import '~common/css/base.less';
#app {
  display: flex;
  flex-direction: column;
  .top {
    color: green;
    font-size: 60 * @rpx;
  }
}
</style>
<dependency component="Child" src="./child.vue" lazy />

<script>
  import { Component } from '@ali/kylin-framework';

  @Component
  export default class IndexView {
    data = {
      name: 'NewPage',
      prop_1: '父传子 prop_1'
    }

    mounted() {
      console.log('NewPage.IndexView mounted');
    }
  }

</script>
