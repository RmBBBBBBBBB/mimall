<template>
  <div>
    <order-header></order-header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>
<script>

import OrderHeader from './../components/OrderHeader';
import NavFooter from './../components/NavFooter';


export default {
  name:'cart', //订单页面
  components: {
    OrderHeader,
    NavFooter
  }
}
</script>
<style lang="less" scoped>

</style>