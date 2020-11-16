<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="footer-link">
      <div class="link-text">
        <ul>
          <li class="text" v-for="(item,index) in footerNavList" :key="index">
            <a :href="item.href">{{item.name}}</a>
          </li>
        </ul>
      </div>
      <div>© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</div>
      <div>（京）网械平台备字（2022）第22222号 互联网药品信息服务资格证 (京)-非经营性-1111-9999 营业执照 医疗器械质量公告</div>
      <div>增值电信业务许可证 网络食品经营备案 京食药网食备22229999   食品经营许可证</div>
      <div>违法和不良信息举报电话：188-8888-8888 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'nav-footer',
  data(){
    return {
      footerNavList:[
        {"name":"小米商城","href":"www.baidu.com"},
        {"name":"MIUI","href":"www.baidu.com"},
        {"name":"米家","href":"www.baidu.com"},
        {"name":"米聊","href":"www.baidu.com"},
        {"name":"多看","href":"www.baidu.com"},
        {"name":"游戏","href":"www.baidu.com"},
        {"name":"政企服务","href":"www.baidu.com"},
        {"name":"小米天猫店","href":"www.baidu.com"},
        {"name":"小米集团隐私政策","href":"www.baidu.com"},
        {"name":"小米公司儿童信息保护规则","href":"www.baidu.com"},
        {"name":"小米商城隐私政策","href":"www.baidu.com"},
        {"name":"小米商城用户协议","href":"www.baidu.com"},
        {"name":"问题反馈","href":"www.baidu.com"},
        {"name":"Select Location","href":"www.baidu.com"},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import './../assets/css/config.scss';
.footer{
  display: flex;
  justify-content: center;
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  .footer-logo img{
    width: 57px;
    height: 57px;
    margin-right: 10px;
  }
  .footer-link{
      display: inline-block;
      width: 1200px;
      color: #ccc;
    .link-text{
      .text{
        display: inline;   
        width: 20px;
        a{
          color: #757575;
        }
        a:hover{
          color: $colorA;
        }
        &:after{
          content: '';
          border-right: 1px solid #757575;
          margin: 5px;
        }
        &:last-child:after{
          display: none;
        }
      }
      
    }
    div{
      margin: 5px 0 ;
    }
  }
}
</style>