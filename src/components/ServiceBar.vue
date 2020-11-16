<template>
  <div class="serviceBar">
    <div class="containe">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150包邮</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceBar", //
};
</script>
<style lang="scss" scoped>
@import "./../assets/css/mixin.scss";
@import './../assets/css/config.scss';

.serviceBar {
  padding: 13px 0;
  color: #666;
  font-size: 16px;
  width: 1277px;
  margin-right: auto;
  margin-left: auto;
  border-bottom: 1px solid #ccc;
  li {
    display: inline-block;
    width: 24.9%;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    cursor: pointer;
    &:hover{
      color: $colorA;
    }
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 8px;
      
    }
    .icon-setting {
      @include bgImg(20px, 20px, "../assets/images/icon-setting.png");
    }
    .icon-7day {
      @include bgImg(20px, 20px, "../assets/images/icon-7day.png");
    }
    .icon-15day {
      @include bgImg(20px, 20px, "../assets/images/icon-15day.png");
    }
    .icon-post {
      @include bgImg(20px, 20px, "../assets/images/icon-post.png");
    }
    &:last-child:before{
      display: none;
    }
  }
}
</style>
