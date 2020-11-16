<template>
  <!-- 头部导航栏 -->
  <div class="header">
    <!-- 头部 topbar -->
    <div class="nav-topbar">
      <!-- 容器 -->
      <div class="container">
        <div class="topbat-menu">
          <a href="javascript:;">小米商城 </a>
          <a href="javascript:;">MIUI </a>
          <a href="javascript:;">云服务 </a>
          <a href="javascript:;">天星数科 </a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" @click="goLogin" v-if="!username">登陆</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;">消息通知</a>
          <a href="javascript:;" class="my-cart" @click="goToCart()"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <!-- 头部 header -->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="javascript:;"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi 红米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>路由器</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>智能硬件</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>服务</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>社区</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_block">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | cuttency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" >
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'nav-header',
  data(){
    return {
      username:'',
      phoneList: []
    }
  },
  created(){
    this.getProductList()
  },
  filters:{
    cuttency(val){
      if(!val) return '0.00';
      return '$'+val.toFixed(2)+'元起'
    }
  },
  methods:{
    goLogin(){
      this.$router.push('/login')
    },
    // 根据 导航栏标题名称，获取 对应的商品介绍
    //获取 导航栏商品 图片 名称 价格 信息
    getProductList(){
      this.axios.get('/products',{
        params:{
          categoryId: '100012',
          pageSize: 6
        }
      }).then((res) => {
        // Math.max(res.list,6);
        if(res.list != null){
          this.phoneList = res.list
          // if(res.list.length > 6){
          //   .slice(0,6)
          // }
        }
        
      })
    },
    // 跳转到购物车
    goToCart(){
      this.$router.push('/cart')
    }
  }
}
</script>
<style lang="scss" >
@import './../assets/css/base.scss';
@import './../assets/css/mixin.scss';
@import './../assets/css/config.scss';
  .header{
    .nav-topbar{      // 头部 topbar
      height: 39px;
      line-height: 39px;
      background-color: #333333;
      color: #b0b0b0;
      .container{       // 容器
        width: 1277px;
        margin-right: auto;
        margin-left: auto;
        @include flex();
        a{
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        a:hover{
          color: #ffffff;
        }
        .my-cart{     // 购物车
          width: 110px;
          background-color: #FF6600;
          text-align: center;
          color: #ffffff;
          .icon-cart{
            @include bgImg(16px,12px,'../assets/images/icon-cart-checked.png');

            // display: inline-block;
            // width: 16px;
            // height: 12px;
            // background: url('../assets/images/icon-cart-checked.png') no-repeat center;
            // background-size: contain; //填充填满
            margin-right: 4px;
          }
        }
      }
    }
    .nav-header{      // 头部 header
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-logo{             // header 图标
          display: inline-block;
          width: 55px;
          height: 55px;
          background-color: #FF6600;
          a{            // a::before
            display: inline-block;
            width: 55px;
            height: 55px;
            overflow: hidden;
            &:before{   //给 a 标签插入伪类
              content: ' ';  // 占位 为空
              @include bgImg(55px,55px,'../assets/images/mi-logo.png',55px);
              // display: inline-block;
              // width: 55px;
              // height: 55px;
              // background: url('../assets/images/mi-logo.png') no-repeat center;
              // background-size: 55px;
              transition: margin .2s;
            }
            &:after{   //给 a 标签插入伪类
              content: ' ';  // 占位 为空
              @include bgImg(55px,55px,'../assets/images/mi-home.png',55px);
              // display: inline-block;
              // width: 55px;
              // height: 55px;
              // background: url('../assets/images/mi-home.png') no-repeat center;
              // background-size: 55px;
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }
        }
        .header-menu{             // header 导航菜单
          display: inline-block;
          padding-left: 9px;
          width: 700px;
          .item-menu{
            display: inline-block;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            // line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              position: absolute;
              top: 112px;
              left: 0;
              width: 1266px;
              height: 0;
              opacity: 0;
              overflow: hidden;
              border-top: 0px solid #E5E5E5;
              box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);   // 右边的一个阴影
              z-index: 10;
              transition: all .5s;
              background-color: #ffffff;;
              .product{
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                position: relative;
                a{
                  display: inline-block;
                }
                img{
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img{
                  height: 127px;
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price{
                  color: $colorA;
                }
                &:before{
                  content: '';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border: 1px solid $colorF;
                  height: 100px;
                  // width: 1px;
                }
                &:last-child:before{
                  display: none;
                }
              }
            }
          }
        } 
        .header-search{           // header 搜索框
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid orange;
            display: flex;
            align-items: center;
            input{
              border: none;
              box-sizing: border-box;     // 盒子模型，固定住 宽度，不会受 padding-left 影响
              // border: 1px solid red;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a{
              @include bgImg(18px,18px,'../assets/images/icon-search.png');
              // display: inline-block;
              // width: 18px;
              // height: 18px;
              // background: url('../assets/images/icon-search.png') no-repeat center;
              // background-size: contain;   // 背景图片充满
              margin-left: 17px;
            }
          }
        }
      }
    }
   
  }
</style>