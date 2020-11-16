<template>
  <div class="index">
    <div class="container">
      <!-- 轮播图 -->
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-warp">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                 <ul v-for="(item,i) in menuList" v-bind:key="i">
                  <li v-for="(sub,j) in item" v-bind:key="j">
                    <a v-bind:href="sub?'/#/product/'+sub.id:''">
                      <!-- <img v-bind:src="sub?sub.img:'../assets/images/item-box-1.png'" alt=""> -->
                      <img src="../assets/images/item-box-1.png" alt="">
                      {{sub?sub.name:'小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
                <a href="javascript:;">电视 盒子</a>
                <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 显示器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">儿童 健康</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音响</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide>
            <img src="../assets/images/slider/slide-1.jpg" alt="" /> 
          </swiper-slide>
          <swiper-slide >
            <img src="../assets/images/slider/slide-2.jpg" alt="" />
            </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/slider/slide-3.jpg" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/slider/slide-4.jpg" alt=""/>
          </swiper-slide>
          <swiper-slide>
            <img src="../assets/images/slider/slide-5.jpg" alt=""/>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box"></div>
      <div class="banner"></div>
      <!-- 商品列表 -->
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServiceBar";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "index",
  data() {
    return {
      // dynamicSwiperName: 'thirdSwiper',
      banners: [
        "../assets/images/slider/slide-1.jpg",
        "../assets/images/slider/slide-2.jpg",
        "../assets/images/slider/slide-3.jpg",
      ],
      // swiperOptions: {
      //   pagination: {
      //     el: '.swiper-pagination'
      //   },
      //   // Some Swiper option/callback...
      // },
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slideList: [
        { id: "21", imgs: "../assets/images/slider/slide-1.jpg" },
        { id: "22", imgs: "../assets/images/slider/slide-2.jpg" },
        { id: "23", imgs: "../assets/images/slider/slide-3.jpg" },
        { id: "24", imgs: "../assets/images/slider/slide-4.jpg" },
        { id: "25", imgs: "../assets/images/slider/slide-5.jpg" },
      ],
       menuList:[
          [
            {
              id:30,
              img:'../assets/images/item-box-1.png',
              name:'小米CC9',
            },{
              id:31,
              img:'../assets/images/item-box-2.png',
              name:'小米8青春版',
            },{
              id:32,
              img:'../assets/images/item-box-3.jpg',
              name:'Redmi K20 Pro',
            },{
              id:33,
              img:'../assets/images/item-box-4.jpg',
              name:'移动4G专区',
            }
          ],
          [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
        ],
    };
  },
  components: {
    ServiceBar,
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // this.mySwiper.slideTo(3, 1000, false)
  },
};
</script>
<style lang="scss" scoped>
@import './../assets/css/config.scss';
@import './../assets/css/mixin.scss';
.index {
  .swiper-box {
    .nav-menu{
      position: absolute;
      width: 234px;
      height: 451px;
      box-sizing: border-box;
      padding: 20px 0;
      background-color: #55585a7a ;
      z-index: 9;
      .menu-warp{
        .menu-item{
          height: 42px;
          line-height: 42px;
          a{
            font-size: 16px;
            color: #ffffff;
            padding-left: 30px;
            position: relative;
            display: block;
            &:after{
              position:absolute;
              right:30px;
              top:17.5px;
              content:' ';
              @include bgImg(10px,15px,'../assets/images/icon-arrow.png');
            }
          }
          &:hover{
            background-color: $colorA;
            .children{
              display:block;
            }
          }
          .children{
            display:none;
            width:992px;
            height:451px;
            background-color:$colorG;
            position:absolute;
            top:0;
            left:234px;
            border:1px solid $colorH;
            ul{
              display:flex;
              justify-content:space-between;
              height:75px;
              li{
                height:75px;
                line-height:75px;
                flex:1;
                padding-left:23px;
              }
              a{
                color:$colorB;
                font-size:14px;
              }
              img{
                width:42px;
                height:35px;
                vertical-align:middle;
                margin-right:15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev{
        margin-left: 244px;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
