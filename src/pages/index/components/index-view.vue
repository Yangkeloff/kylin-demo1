<template>
  <div id="app">
    <a href="./loadmore.html">loadmore</a>
    <a href="./dialogue.html">dialogue</a>
    <a href="./listview.html">listview</a>
    <section class="btn1 center mt20" @click="to('sign')">
      去签名
    </section>
    <section class="btn1 center mt20" @click="to('new-page')">
      new-page
    </section>
    <input 
      class="ipt_1"
      placeholder="限制小数点后两位" 
      type="text" 
      v-model="count"
      @keydown="checkKeydown($event, count)"
      @input="count=/^\d+\.?\d{0,2}$/.test(count)||count == '' ? count : count=checkValue">
    <!-- 最大限制6位 -->
    <input class="ipt_1 mt20" type="number" oninput="if(value.length>6) value=value.slice(0,6)" />
    <!-- <AButton >主按钮</AButton>
    <AButton type="white">次按钮</AButton>
    <AButton disabled>按钮不可点</AButton>

    <AButton href="#">a标签 主按钮</AButton>
    <AButton href="#" type="white">a标签 次按钮</AButton>
    <AButton href="#" disabled>a标签 按钮不可点</AButton> -->
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
  // import { AButton } from '@alipay/antui-vue';
  @Component
  export default class LoadmoreView {
    data = {
      count: '',
      checkValue: ''
    }
    methods = {
      checkKeydown(e, value) {
        // console.log(value);
        this.checkValue = value;
      },
      to(name) {
        window.open(`./${name}.html`, '_self');
      }
    }
  }

</script>
