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
    <AButton style="margin-top: 30px" :loading="isLoading" type="warn" @click="fail()" >交易失败</AButton>
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
<dependency component="{ PageResult, AButton }" src="@alipay/antui-vue" ></dependency>
<dependency component="loadmore" src="common/components/loadmore.vue" lazy />
<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';
  import { PageResult, AButton } from '@alipay/antui-vue';
  @Component
  export default class LoadmoreView {
    data = {
      count: '',
      checkValue: '',
      isLoading: false
    }
    methods = {
      checkKeydown(e, value) {
        // console.log(value);
        this.checkValue = value;
      },
      to(name) {
        window.open(`./${name}.html`, '_self');
      },
      fail() {
        this.isLoading = true;
        let _this = this;
        setTimeout(() => {
          _this.isLoading = false;
          PageResult.show({
            type: 'error',
            text: '错误!'
          });
        }, 1500);
      }
    }
  }

</script>
