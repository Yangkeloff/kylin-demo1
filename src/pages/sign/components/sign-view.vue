<template>
  <div id="app">
    <canvas id="canvas" width="400" height="300"></canvas>
    <div class="btn col">
      <section class="flex">
        <button class="btn1" @click="toClear()">清除</button>
        <button class="btn1" @click="toSave()">保存</button>
      </section>
      <button class="btn1 back_btn" @click="back()">返回</button>
    </div>
  </div>
</template>
<dependency component="{ Toast }" src="@alipay/antui-vue" ></dependency>
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
  .btn {
    margin: auto 0 40 * @rpx;
  }
  .btn button:nth-child(1) {
    margin-right: 60 * @rpx;
  }
  .back_btn {
    align-self: center;
    margin-top: 40 * @rpx;
  }
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    border: 2px dashed #cccccc;
  }
  
</style>

<script type="text/javascript">
  import { Component } from '@ali/kylin-framework';
  import { Toast } from '@alipay/antui-vue';
  @Component
  export default class SignView {
    data = {
      ctx: null,
      canvas: null,
      count: 0
    }
    mounted() {
      this.initPage();
    }
    methods = {
      initPage() {
        this.canvas = document.getElementById('canvas');
        if (this.canvas.getContext) {
          this.ctx = this.canvas.getContext('2d');
          let background = '#ffffff';
          this.ctx.lineCap = 'round';
          this.ctx.fillStyle = background;
          this.ctx.lineWidth = 2;
          this.ctx.fillRect(0, 0, 400, 300);

          this.canvas.addEventListener('touchstart', (e) => {
            this.count++;
            console.log(this.count, e);
            this.ctx.beginPath();
            this.ctx.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
          });

          this.canvas.addEventListener('touchmove', (e) => {
            this.ctx.lineTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
            this.ctx.stroke();
          });
        }
      },
      toClear() {
        this.ctx.clearRect(0, 0, 400, 300);
        this.count = 0;
      },
      toSave() {
        if (this.count < 5) {
          console.log(false);
          Toast.show({
            type: 'text',
            text: '签名不可少于5笔'
          });
          return;
        }
        let base64Img = this.canvas.toDataURL();
        console.log(123, base64Img);
      },
      back() {
        window.history.go(-1);
      }
    }
  }

</script>
