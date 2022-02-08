<template>
  <div id="app">
    <section class="top">
      Hello {{name}}
    </section>
    <Child @test="emitTest" :prop_1 = "prop_1"></Child>
    <section class="prop2 col" v-if="prop_2">
      <section class="mr20">子→父（1）：{{p_2_1}}</section>
      <section class="mr20">子→父（2）：{{p_2_2}}</section>
    </section>
    <div style="padding: 10px;">
    </div>
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
  .prop2 {
    color: yellowgreen;
    font-size: 38 * @rpx;
    font-weight: bold;
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
      prop_1: '父传子 prop_1',
      prop_2: true,
      p_2_1: 'null',
      p_2_2: 'null'
    }

    mounted() {
      console.log('NewPage.IndexView mounted');
    }

    methods = {
      emitTest(args) {
        // console.log(args);
        this.p_2_1 = args.a;
        this.p_2_2 = args.b;
      }
    }
  }

</script>
