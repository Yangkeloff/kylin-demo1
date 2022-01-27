<template>
  <div>
    Hello {{name}}
  </div>
</template>

<style lang="less" rel="stylesheet/less">

</style>

<script>

  import { Component } from '@ali/kylin-framework';

  @Component
  export default class MyComponent {
    data = {
      name: 'MyComponent'
    }

    mounted() {
      console.log('component.MyComponent mounted');
    }
  }

</script>
