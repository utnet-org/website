<script setup lang="ts" name="HomeView">
import { onMounted, onUnmounted, ref, watch } from "vue";

import arrow from "@/assets/svgs/right.svg";
import m_arrow from "@/assets/svgs/m_arrow.svg";
import hover from "@/assets/svgs/hover.svg";
import blue from "@/assets/svgs/blue.svg";
import start from "@/assets/svgs/start.svg";
import stopss from "@/assets/svgs/stop.svg";

import { useI18n } from "vue-i18n";
const { locale } = useI18n();

// & 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import { defineComponent } from "vue";
// & 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import { Swiper, SwiperSlide } from "swiper/vue";

import { openNewPage } from "@/utils/request";
// & 单独导入所需的Swiper模块
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
// & 导入Swiper的样式
import "swiper/swiper-bundle.css";
import "swiper/less";
import "swiper/less/navigation";
import { useRouter } from "vue-router";
import "swiper/css/pagination"; // 轮播图底面的小圆点

import router from "@/router";

// 创建响应式引用，用于存储窗口宽度和高度
const windowWidth = ref(window.innerWidth);

// 更新窗口尺寸的函数
const updateWindowSize = () => {
  windowWidth.value = window.innerWidth;
};

// 当组件挂载时设置监听器，并在卸载时移除
onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});
//! Where to Start的数据
const Where_arr = ref([
  {
    title: "home.Builder",
    text: "home.You_can_try",
    hover: false,
    button: "home.Build_DOC",
    link: "https://wiki.utlab.io/docs/node/introduction",
  },
  {
    title: "home.MINER",
    text: "home.You_can_get_UNC",
    hover: false,
    button: "home.Learn_More",
    link: "https://wiki.utlab.io/docs/computing-power-supplier/introduce",
  },
  {
    title: "home.UNC_WALLET",
    text: "home.The_UNC_Wallet",
    hover: false,
    button: "home.Explore_Wallet",
    link: "/soloutions/utility_wallet",
  },
  {
    title: "home.Computing_Power_users",
    text: "home.You_can_rent",
    hover: false,
    button: "home.Develop",
    link: "/get_power",
  },
]);
//! Where to Start 鼠标移入
function WhereChange(index: number) {
  //当前的为true
  Where_arr.value[index].hover = true;
  //其他的为false
  Where_arr.value.forEach((item, i) => {
    if (i !== index) {
      item.hover = false;
    }
  });
}
//! Where to Start 鼠标移出
function WhereChangeli() {
  //其他的为false
  Where_arr.value.forEach((item, i) => {
    item.hover = false;
  });
}

//* 数据 和 圆 Data and circles的数据
const Data_arr = ref([
  {
    amount:
      windowWidth.value > 834
        ? "<span style='font-size: 26px;'>$</span>1,920.21"
        : "$1,920.21",
    text: "home.UNC_PRICE",
  },
  {
    amount: "122,1120",
    text: "home.NODES",
  },
  {
    amount:
      windowWidth.value > 834
        ? "<span style='font-size: 26px;'>$</span>122,1120"
        : "$122,1120",
    text: "home.Transaction_Today",
  },
  {
    amount:
      windowWidth.value > 834
        ? "1631,122,1120<span style='font-size: 26px;'> tflops</span>"
        : "1631,122,1120 tflops",
    text: "home.Computational_Power_Synthesis",
  },
]);

//^ Utility Chain Scaling Solutions的数据
const Utility_arr = ref([
  {
    title: "home.UNC_Node",
    text: "home.Provides_solutions_for",
    img: new URL("@/assets/svgs/Frame_one.svg", import.meta.url).href,
    isclick: false, //鼠标移入移出
  },
  {
    title: "home.UNC_Mining",
    text: "home.The_computing_power",
    img: new URL("@/assets/svgs/Frame_two.svg", import.meta.url).href,
    isclick: false,
  },
  {
    title: "home.UNC_work",
    text: "home.The_actual_computing",
    img: new URL("@/assets/svgs/Frame_three.svg", import.meta.url).href,
    isclick: false,
  },
  {
    title: "home.unc_Wasm",
    text: "home.Integrated_WebAssembly_virtual",
    img: new URL("@/assets/svgs/Frame_four.svg", import.meta.url).href,
    isclick: false,
  },
  {
    title: "home.UNC_chain_Explorer",
    text: "home.Search_Information_data",
    img: new URL("@/assets/svgs/Frame_five.svg", import.meta.url).href,
    isclick: false,
  },
  {
    title: "home.UNC_wallet",
    text: "home.A_asset_account",
    img: new URL("@/assets/svgs/Frame_six.svg", import.meta.url).href,
    isclick: false,
  },
  {
    title: "home.hashing_power",
    text: "home.The_first_computing",
    img: new URL("@/assets/svgs/Frame_seven.svg", import.meta.url).href,
    isclick: false,
  },
  {
    title: "home.Testnet_Faucet",
    text: "home.Test_the_node",
    img: new URL("@/assets/svgs/Frame_eight.svg", import.meta.url).href,
    isclick: false,
  },
]);
//^ Utility Chain Scaling Solutions 鼠标移入
function UtilityChainChange(index: number) {
  //当前的为true
  Utility_arr.value[index].isclick = true;
  //其他的为false
  Utility_arr.value.forEach((item, i) => {
    if (i !== index) {
      item.isclick = false;
    }
  });
}
//^ Utility Chain Scaling Solutions 鼠标移出
function UtilityChainChangeli() {
  //设置所有的isclick为false
  Utility_arr.value.forEach((item, i) => {
    item.isclick = false;
  });
}

// ~ 走马灯里面的一堆图标数据
const imageSources = [
  new URL("@/assets/svgs/binance.svg", import.meta.url).href,
  new URL("@/assets/svgs/BitForex.svg", import.meta.url).href,
  new URL("@/assets/svgs/MEXC_Global.svg", import.meta.url).href,
  new URL("@/assets/svgs/Bitstamp.svg", import.meta.url).href,
  new URL("@/assets/svgs/OKX.svg", import.meta.url).href,
  new URL("@/assets/svgs/Bitfinex.svg", import.meta.url).href,
];
// ~走马灯  创建一个重复的图片数组，用于无缝轮播
const duplicatedImages = [...imageSources, ...imageSources, ...imageSources];
// ~走马灯  控制轮播方向
const isForward = ref(true);
// ~走马灯  控制轮播是否进行
const isPlaying = ref(false);
//~走马灯 开始轮播的函数
function startCarousel() {
  isPlaying.value = true;
  isForward.value = false;
}
// ~走马灯  停止轮播的函数，并逆向移动到第一张图片
function stopCarousel() {
  isForward.value = true; // 重置轮播方向
}

// & 轮播图数据
const merryGoRound_arr = ref([
  {
    id: 0,
    img: "/src/assets/images/article_bgc_two.png",
    time: "September 21, 2023",
    text: "Calculate demand analysis and the next tuyere",
    isswiperenter: false,
  },
  {
    id: 1,
    img: "/src/assets/images/article_bgc_two.png",
    time: "September 21, 2023",
    text: "Calculate demand analysis and the next tuyere",
    isswiperenter: false,
  },
  {
    id: 2,
    img: "/src/assets/images/article_bgc_three.png",
    time: "September 21, 2023",
    text: "Decentralized computing power equals edge computing",
    isswiperenter: false,
  },
  {
    id: 3,
    img: "/src/assets/images/article_bgc_four.png",
    time: "September 21, 2023",
    text: "An encrypted world without wasted computing power",
    isswiperenter: false,
  },
]);
// & swiper实例
const mySwiper = ref();
// & 当前活动swiper的索引
const indexNum = ref(0);
// & 轮播图 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar];
// & 轮播图 更改当前活动swiper
const onSlideChange = (swiper: { activeIndex: any }) => {
  // & 轮播图 确定当前活动swiper的索引，方便阴影的显示
  indexNum.value = swiper.activeIndex;
};
// & 轮播图 swiper的配置左右的箭头
const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});

const show = ref({
  one: false,
});
const show1 = ref(false);
// 监听show的变化
watch(show, (newVal) => {
  if (newVal.one) {
    show1.value = true;
  }
});
const jumpNews = (id: number) => {
  router.push({
    path: "/news",
    query: {
      msg: id,
    },
  });
};
const showtwo = ref(false);
const videoshow = ref(false);
// 滚动条监听
const scroll = ref(0);
const ant_btn_w = ref(80);
window.addEventListener("scroll", () => {
  scroll.value = document.documentElement.scrollTop;
  if (scroll.value > 1900) {
    if (width.value * 2 > 1548 && scroll.value > 2017 && scroll.value < 2210) {
      ani_btn.value = 175;
    } else if (scroll.value > 2210 && scroll.value < 2960) {
      ani_btn.value = 175 + (scroll.value - 2210) / 3.3;
    } else if (scroll.value > 2960 && scroll.value < 2970) {
      ani_btn.value = 474;
      if (ani_btn_s.value) {
        ani_btn_s.value = 0;
        ant_btn_w.value = 80;
        setTimeout(() => {
          ant_btn_w.value = 300;
        }, 300);
      }
    } else if (scroll.value > 2970) {
      ani_btn.value = 10;
    } else {
      ani_btn.value = -80;
    }
    if (scroll.value > 2415) {
      if (ani_btn_s.value === 0) {
        ant_btn_w.value = 300;
      }
    } else {
      ant_btn_w.value = 80;
    }
  } else {
    ani_btn.value = -80;
  }

  if (scroll.value > 2980 && !videoshow.value && width.value * 2 > 996) {
    // 设置滚动条的位置
    document.documentElement.scrollTop = 2980;
  }

  if (
    timer1.value === undefined &&
    scroll.value > 1030 &&
    scroll.value < 1220
  ) {
    text1.value = !text1.value;
    timer1.value = setInterval(() => {
      text1.value = !text1.value;
    }, 2500);
  } else if (
    timer2.value === undefined &&
    scroll.value > 1230 &&
    scroll.value < 1420
  ) {
    text2.value = !text2.value;
    timer2.value = setInterval(() => {
      text2.value = !text2.value;
    }, 2500);
  } else if (
    timer3.value === undefined &&
    scroll.value > 1320 &&
    scroll.value < 1520
  ) {
    text3.value = !text3.value;
    timer3.value = setInterval(() => {
      text3.value = !text3.value;
    }, 2500);
  } else if (
    timer4.value === undefined &&
    scroll.value > 1520 &&
    scroll.value < 1720
  ) {
    text4.value = !text4.value;
    timer4.value = setInterval(() => {
      text4.value = !text4.value;
    }, 2500);
  } else if (
    timer5.value === undefined &&
    scroll.value > 1630 &&
    scroll.value < 1888
  ) {
    text5.value = !text5.value;
    timer5.value = setInterval(() => {
      text5.value = !text5.value;
    }, 2500);
  } else if (scroll.value < 1030 || scroll.value > 1888) {
    clearInterval(timer1.value);
    timer1.value = undefined;
    text1.value = false;
    clearInterval(timer2.value);
    text2.value = false;
    timer2.value = undefined;
    clearInterval(timer3.value);
    text3.value = false;
    timer3.value = undefined;
    clearInterval(timer4.value);
    text4.value = false;
    timer4.value = undefined;
    clearInterval(timer5.value);
    text5.value = false;
    timer5.value = undefined;
  }
  // console.log("scroll.value:", scroll.value);
});

// 定时器
const text1 = ref(false);
const timer1 = ref();
const text2 = ref(false);
const timer2 = ref();
const text3 = ref(false);
const timer3 = ref();
const text4 = ref(false);
const timer4 = ref();
const text5 = ref(false);
const timer5 = ref();

// 监听窗口宽度
const width = ref(window.innerWidth / 2);
const height = ref(window.innerHeight / 2);
const pyw = ref(0);
if (width.value * 2 < 1548) {
  pyw.value = 1548 - width.value * 2;
}
window.addEventListener("resize", () => {
  width.value = window.innerWidth / 2;
  height.value = window.innerHeight / 2;
  if (width.value * 2 < 1548) {
    pyw.value = 1548 - width.value * 2;
  }
});
const ani_btn = ref(-70);

const video_next = () => {
  videoshow.value = true;
  document.documentElement.scrollTop = 2980 + window.innerHeight;
};

window.addEventListener("wheel", (e) => {
  if (
    e.deltaY < 0 &&
    videoshow.value &&
    scroll.value > 2980 &&
    scroll.value < 2980 + window.innerHeight
  ) {
    videoshow.value = false;
    document.documentElement.scrollTop = 2980;
  }
});

const ani_btn_s = ref(0);
// 监听是否有向上滚动的动作
const onVideoEnded = () => {
  console.log("视频播放完毕");
  ani_btn_s.value = 1;
  ant_btn_w.value = 80;
  setTimeout(() => {
    ant_btn_w.value = 240;
  }, 300);
};
// const onVideoEnded1 = () => {
//   console.log("视频播放完毕");
//   ani_btn_s.value = 2;
//   ant_btn_w.value = 80;
//   setTimeout(() => {
//     ant_btn_w.value = 300;
//   }, 300);
// };
const next222 = () => {
  if (ani_btn_s.value === 1) {
    console.log("视频播放完毕");
    ani_btn_s.value = 2;
    ant_btn_w.value = 80;
    setTimeout(() => {
      ant_btn_w.value = 300;
    }, 300);
  } else {
    video_next();
  }
};
// const openNewPage = (link: string) => {
//   if (link.startsWith("http://") || link.startsWith("https://")) {
//     window.open(link, '_blank');
//
//   } else {
//     route.push(link);
//   }
// }
</script>
<template>
  <div class="home_view">
    <div
      class="animation_box"
      :style="{
        zIndex: !videoshow ? 2 : -1,
        height: width * 2 > 996 ? '4200px' : height * 2 + 'px',
      }"
    >
      <Animation
        v-model:show="show"
        v-model:show1="showtwo"
        v-show="scroll < 2980 || scroll == 0"
      ></Animation>
      <div class="animation_text_box" v-if="width * 2 > 996">
        <div
          :style="{
            top: `${height - 300 + (height * 2) / 5}px`,
            left: `${width + 100 - pyw / 3}px`,
          }"
          :class="[
            'animation_text',
            text1 && scroll > 1030 ? 'animation_text_animation' : '',
            !text1 && scroll > 1030 ? 'animation_text_animationf' : '',
          ]"
        >
          <span>Jenna1</span>
          Instruction signature consensus
          <!--指令签名共识-->
        </div>
        <div
          :style="{
            top: `${height + 300 - (height * 2) / 5}px`,
            left: `${width - 100 + pyw / 3}px`,
          }"
          :class="[
            'animation_text',
            text2 && scroll > 1230 ? 'animation_text_animation' : '',
            !text2 && scroll > 1230 ? 'animation_text_animationf' : '',
          ]"
        >
          <span>Jenna2</span>
          Heterogeneous parallel architecture
          <!--          异构并行架构-->
        </div>
        <div
          :style="{
            top: `${height + 100 - (height * 2) / 5}px`,
            left: `${width - 400 + pyw / 2}px`,
          }"
          :class="[
            'animation_text',
            text3 && scroll > 1320 ? 'animation_text_animation' : '',
            !text3 && scroll > 1320 ? 'animation_text_animationf' : '',
          ]"
        >
          <span>Jenna3</span>
          <!--          Hi! Welcome to Utility{{ pyw }}-->
          Scaling of parallel computing
          <!--          并行计算规模化-->
        </div>
        <div
          :style="{
            top: `${height + 100 - (height * 2) / 5}px`,
            left: `${width + 400 - pyw / 3}px`,
          }"
          :class="[
            'animation_text',
            text4 && scroll > 1520 ? 'animation_text_animation' : '',
            !text4 && scroll > 1520 ? 'animation_text_animationf' : '',
          ]"
        >
          <span>Jenna4</span>
          Proof of Trusted Computing Power
          <!--          可信算力证明-->
        </div>
        <div
          :style="{
            top: `${height - 200 + (height * 2) / 5}px`,
            left: `${width - 500 + pyw / 2}px`,
          }"
          :class="[
            'animation_text',
            text5 && scroll > 1630 ? 'animation_text_animation' : '',
            !text5 && scroll > 1630 ? 'animation_text_animationf' : '',
          ]"
        >
          <span>Jenna5</span>
          Chip based blockchain network
          <!--          基于芯片的区块链网络-->
        </div>
      </div>
      <div class="animatino_video" v-if="scroll > 2960 && width * 2 > 996">
        <video
          v-if="ani_btn_s == 0 || ani_btn_s == 1"
          src="http://oss2.xuanwoo.com/unc/441_1701512030.mp4"
          autoplay
          muted
          @ended="onVideoEnded"
        ></video>
        <video
          v-if="ani_btn_s == 2"
          src="@/assets/mv/55_1701258800.mp4"
          autoplay
          muted
        ></video>
      </div>
      <div
        class="animation_button"
        :style="{ bottom: `${ani_btn}px`, width: `${ant_btn_w}px` }"
        v-if="width * 2 > 996"
      >
        <div v-if="ant_btn_w != 80" class="animation_button_text">
          <span v-if="ani_btn_s == 0 || ani_btn_s == 2">
            Skip the description
          </span>
          <span v-else> Chip Consensus </span>
        </div>
        <div style="min-width: 66px" @click="next222">
          <blue v-if="ani_btn !== 10"></blue>
          <stopss v-if="ani_btn == 10 && (ani_btn_s == 0 || ani_btn_s == 2)" />
          <start v-if="ani_btn == 10 && ani_btn_s == 1"></start>
        </div>
      </div>
    </div>
    <div class="container">
      <!--! 大大的背景图和图上的welcome -->
      <!-- <img src="@/assets/images/bgc_white.png" alt="" /> -->
      <div class="bg" v-if="width * 2 > 996">
        <div
          :class="[
            'Welcome',
            { WelcomeAnimation: show.one },
            { WelcomeAnimationf: !show.one && show1 },
          ]"
        >
          <div class="Language">
            <div class="point"></div>
            <div class="lang">
              {{ locale === "en" ? "English" : "中文简体" }}
            </div>
          </div>
          <div class="Utility">
            <div :class="['Utility_text']">Utility:</div>
            <div class="Welcome_text_title">
              {{ $t("home.Welcome_to_utility") }}
            </div>
          </div>
          <div class="Anapplication">
            {{ $t("home.An_application") }}
          </div>
          <div class="button_father">
            <div class="button">
              <div
                class="text"
                @click="
                  openNewPage('https://utnet.org/pdf/UtilityNetWhitePaper.pdf')
                "
              >
                {{ $t("home.White_Paper") }}
              </div>
              <arrow />
            </div>
            <div class="button_right">
              <div
                class="text"
                @click="openNewPage('/learning/learning_center')"
              >
                {{ $t("home.More") }}
              </div>
              <arrow />
            </div>
          </div>
        </div>
      </div>

      <!--! 一张背景图 -->
      <!--      <div class="get_the_app">-->
      <!--        <img src="/src/assets/images/get_the_app.png" alt="" />-->
      <!--      </div>-->
      <div v-if="windowWidth < 834">
              <video
                  src="http://oss2.xuanwoo.com/unc/441_1701512030.mp4"
                  autoplay
              ></video>
      </div>


      <!--! Where to Start -->
      <div class="Where_to_Start">
        <div class="title">
          {{ $t("home.Where_to_Start") }}
        </div>
        <div v-if="windowWidth < 834" class="Four_boxes">
          <div class="box" v-for="(item, index) in Where_arr" :key="index" style="">
            <div  class="box"  @click="openNewPage(item.link)">
              <div>
                <div class="box_title">
                  {{ $t(item.title) }}
                </div>
                <div class="box_text">
                  {{ $t(item.text) }}
                </div>
              </div>
              <div>
                <el-button class="box_button">
                  {{ $t(item.button) }}</el-button
                >
              </div>
            </div>
          </div>
        </div>
        <div v-else class="Four_boxes">
          <div
             @click="openNewPage(item.link)"
            @mouseover="WhereChange(index)"
            @mouseleave="WhereChangeli"
            class="box"
            :style="{
              border: item.hover ? '1px solid #3edfcf' : '1px solid #fff',
            }"
            v-for="(item, index) in Where_arr"
            :key="index"
          >
            <div>
              <div class="box_title">
                {{ $t(item.title) }}
              </div>
              <div class="box_text">
                {{ $t(item.text) }}
              </div>
            </div>
            <div>
              <el-button class="box_button" @click="openNewPage(item.link)">
                {{ $t(item.button) }}</el-button>
            </div>
          </div>
        </div>
      </div>

      <!--!数据 和 圆 Data and circles -->
      <div class="Data_and_circles">
        <div class="circles">
          <div class="point point_one">
            <img v-if="windowWidth < 834" src="/src/assets/svgs/m_round.svg" />
            <img v-else src="/src/assets/svgs/Group_1.svg" alt="" />
            <div class="point_text">Utility</div>
          </div>
          <div class="round_one">
            <div class="point point_two">
              <div class="thisAPoint"></div>
              <div class="point_text">BDC Chips</div>
            </div>
            <div class="round_two">
              <div class="point point_three">
                <div class="thisAPoint"></div>
                <div class="point_text">Computation Capacity</div>
              </div>
              <div class="round_three">
                <div class="point point_four">
                  <div class="thisAPoint"></div>
                  <div class="point_text">Wallet</div>
                </div>
                <div class="round_four">
                  <div class="point point_five">
                    <div class="thisAPoint"></div>
                    <div class="point_text">Explorer</div>
                  </div>
                  <div class="round_five">
                    <div class="point point_six">
                      <div class="thisAPoint"></div>
                      <div class="point_text">Mining</div>
                    </div>
                    <div class="round_six">
                      <div class="point point_seven">
                        <div class="thisAPoint"></div>
                        <div class="point_text">Node</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Data">
          <div class="value_father">
            <div
              class="data_value"
              v-for="(item, index) in Data_arr"
              :key="index"
            >
              <div class="amount" v-html="item.amount"></div>
              <div class="data_text">
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--! Utility Chain Scaling Solutions  -->
      <div class="Utility_Chain">
        <div class="title">
          {{ $t("home.Utility_Chain_Scaling_Solutions") }}
        </div>
        <div class="Utility_Chain_box">
          <div v-for="(item, index) in Utility_arr" :key="index">
            <div
              class="box_item"
              @mouseover="UtilityChainChange(index)"
              @mouseleave="UtilityChainChangeli"
            >
              <div class="item_img">
                <hover
                  :style="{
                    opacity: item.isclick ? 1 : 0,
                  }"
                  class="hover"
                />
                <img
                  class="item_img_img"
                  :src="item.img"
                  :style="{
                    filter: item.isclick
                      ? 'brightness(0%)'
                      : 'brightness(100%)',
                  }"
                  alt=""
                />
              </div>

              <div class="Utility_Chain_box_item_button">
                {{ $t("home.Testnet") }}
              </div>
              <div
                class="item_title"
                :style="{ color: item.isclick ? '#3EDFCF' : '#151c1a' }"
              >
                {{ $t(item.title) }}
              </div>
              <div class="item_text">
                {{ $t(item.text) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ! 走马灯里面有 一堆图标 -->
    <!--    <div class="icons">-->
    <!--      &lt;!&ndash;@mouseenter="startCarousel"-->
    <!--        @mouseleave="stopCarousel" &ndash;&gt;-->
    <!--      <div class="carousel-container">-->
    <!--        &lt;!&ndash; 轮播内容，绑定动态样式以实现移动效果 &ndash;&gt;-->
    <!--        <div-->
    <!--            class="carousel-content"-->
    <!--            :class="{-->
    <!--            forward: isPlaying && isForward,-->
    <!--            backward: isPlaying && !isForward,-->
    <!--          }"-->
    <!--        >-->
    <!--          &lt;!&ndash; 遍历所有图片资源，为每张图片创建一个轮播项 &ndash;&gt;-->
    <!--          <div-->
    <!--              v-for="(imgSrc, index) in duplicatedImages"-->
    <!--              :key="index"-->
    <!--              class="carousel-item"-->
    <!--          >-->
    <!--            &lt;!&ndash; 显示图片 &ndash;&gt;-->
    <!--            <img :src="imgSrc" alt="" />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!-- !另一个 container -->
    <div class="container">
      <!-- !轮播图 -->
      <div v-if="windowWidth < 834" class="merry_go_round">
        <div class="title">
          {{ $t("home.What_is_New") }}
        </div>

        <swiper
          :ref="mySwiper"
          :slidesPerView="1"
          :spaceBetween="16"
          :modules="modules"
          :loop="false"
          :pagination="{ clickable: true }"
          class="swiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in merryGoRound_arr"
            :key="index"
            class="swiper-slide"
            @mouseenter="item.isswiperenter = true"
            @mouseleave="item.isswiperenter = false"
            @click="jumpNews(item.id)"
          >
            <div v-if="item.isswiperenter && windowWidth > 834" class="icon">
              <img src="/src/assets/svgs/Arrow_Up.svg" alt="" />
            </div>
            <img class="swiper_img" :src="item.img" alt="" />
            <div class="time">
              {{ item.time }}
            </div>
            <div class="text">
              {{ $t(item.text) }}
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div v-else class="merry_go_round">
        <div class="title">
          {{ $t("home.What_is_New") }}
        </div>

        <div class="swiper-button-prev"></div>
        <swiper
          :ref="mySwiper"
          :slidesPerView="windowWidth > 1000 ? 3.5 : 2.5"
          :spaceBetween="16"
          :modules="modules"
          :loop="false"
          :navigation="navigation"
          class="swiper"
          @slideChange="onSlideChange"
        >
          <div v-if="indexNum" class="shadow_left"></div>
          <div v-if="!indexNum" class="shadow_right"></div>
          <swiper-slide
            v-for="(item, index) in merryGoRound_arr"
            :key="index"
            class="swiper-slide"
            @mouseenter="item.isswiperenter = true"
            @mouseleave="item.isswiperenter = false"
            @click="jumpNews(item.id)"
          >
            <div v-if="item.isswiperenter" class="icon">
              <img src="/src/assets/svgs/Arrow_Up.svg" alt="" />
            </div>
            <img class="swiper_img" :src="item.img" alt="" />
            <div class="time">
              {{ item.time }}
            </div>
            <div class="text">
              {{ $t(item.text) }}
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
      </div>

      <!-- ! square Contribute to Utility together -->
      <div class="Contribute_to_Utility">
        <div class="Contribute_to_Utility_bg">
          <!--          <img-->
          <!--              v-if="windowWidth < 834"-->
          <!--              class="Utility_img"-->
          <!--              src="/src/assets/images/m_Objects.png"-->
          <!--              alt=""-->
          <!--          />-->
          <!-- <img
          v-else
          class="Utility_img"
          src="/src/assets/images/square.png"
          alt=""
        /> -->
          <div v-if="windowWidth > 834" class="square"></div>
          <div class="Create_a_lighter">
            <div class="title_one">
              {{ $t("home.Help_Utility_open") }}
            </div>

            <div class="text">
              {{ $t("home.Utility_is_a_revolutionary") }}
            </div>
            <div class="button_father">
              <div class="button_left" @click="openNewPage('/community')">
                <div class="button_text">
                  {{ $t("home.Join_us") }}
                </div>
                <!--                <arrow />-->
              </div>
              <div
                class="button_right"
                @click="openNewPage('https://github.com/utnet-org')"
              >
                <div class="button_text">
                  {{ $t("footer.Github") }}
                </div>
                <!--                <arrow />-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.animation_box {
  position: relative;
  background: #000;
  z-index: 2;

  .animation_button {
    position: fixed;
    overflow: hidden;
    // bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    // width: 80px;
    height: 80px;
    border-radius: 40px;
    background: rgba(255, 255, 255, 0.105);
    backdrop-filter: blur(9px);
    border-radius: 40px;
    transition: 0.3s;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 7px;
    .animation_button_text {
      flex: 1;
      color: #fffefb;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 24px */
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
    }
  }

  .animatino_video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .animation_text_box {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    @keyframes identifier22 {
      0% {
        opacity: 0;
        transform: scale(0);
        transform-origin: top left;
      }

      50% {
        opacity: 1;
        transform: scale(1.1);
        transform-origin: top left;
      }

      100% {
        opacity: 1;
        transform: scale(1);
        transform-origin: top left;
      }
    }

    @keyframes identifier22f {
      0% {
        opacity: 1;
        transform: scale(1);
        transform-origin: top left;
      }

      50% {
        opacity: 1;
        transform: scale(1);
        transform-origin: top left;
      }

      100% {
        opacity: 0;
        transform: scale(0);
        transform-origin: top left;
      }
    }

    .animation_text_animation {
      animation: identifier22 0.5s ease-in forwards;
    }

    .animation_text_animationf {
      animation: identifier22f 0.5s ease-in forwards;
    }

    .animation_text {
      position: absolute;
      opacity: 0;
      // 动画 3秒循环一次
      // top: 50%;
      // left: 50%;
      z-index: 1;
      // transform: translate(-50%, -50%);
      color: #22fffb;
      font-size: 20px;
      padding: 20px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.105);
      backdrop-filter: blur(9px);

      span {
        position: absolute;
        top: -30px;
        font-size: 18px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 10px;

        &::before {
          content: "";
          display: block;
          border-radius: 5px;
          width: 10px;
          height: 10px;
          background: #22fffb;
        }
      }

      // &:nth-child(1) {
      //   top: var(50% - 150px);
      //   left: var(50% - 50px);
      // }
      // &:nth-child(2) {
      //   top: var(50% - 50px);
      //   left: var(50% - 50px);
      // }
      // &:nth-child(3) {
      //   top: var(50% - 50px);
      //   left: var(50% - 50px);
      // }
      // &:nth-child(4) {
      //   top: var(50% - 50px);
      //   left: var(50% - 50px);
      // }
      // &:nth-child(5) {
      //   top: var(50% - 50px);
      //   left: var(50% - 50px);
      // }
    }
  }
}

.home_view {
  background-color: #fffefb;
  .bg {
    // height: 1100px;
    width: 100%;
    position: fixed;
    z-index: 3;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    // max-width: 1500px;
    // margin: 0 20px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @keyframes identifier {
      0% {
        transform: translateY(0);
      }

      100% {
        transform: translateY(290px);
      }
    }

    @keyframes identifierf {
      0% {
        transform: translateY(290px);
      }

      100% {
        transform: translateY(0);
      }
    }

    .WelcomeAnimation {
      animation: identifier 0.3s ease-in forwards;
    }

    .WelcomeAnimationf {
      animation: identifierf 0.3s ease-in forwards;
    }

    .Welcome {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 290px;
      align-items: center;
      // border-radius: 10px;
      background: linear-gradient(180deg,
          rgba(244, 248, 248, 0.035) 0.13%,
          rgba(244, 248, 248, 0.043) 99.87%);
      // box-shadow: 0px 1px 1px 1px rgba(229, 248, 246, 0.311) inset,
      //   0px 4px 50px 0px #dde3e153;
      backdrop-filter: blur(9px);
      position: absolute;
      left: 0;
      bottom: 0;

      .Utility {
        display: flex;
        align-items: center;

        .Utility_text {
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          // font-family: Lantinghei SC;
          font-size: 38px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.76px;
        }

        .Welcome_text_title {
          font-size: 34px;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          font-family: Lantinghei SC;
        }
      }

      .Language {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 33px;
        margin-bottom: 18px;

        .point {
          width: 9px;
          height: 9px;
          background-color: rgba(62, 223, 207, 1);
          border-radius: 50%;
          margin-right: 5px;
        }

        .lang {
          color: var(--Light-dark, rgba(255, 255, 255, 0.9));
          text-align: center;
          font-family: JejuGothic;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.2px;
        }
      }

      .Anapplication {
        max-width: 1149px;
        font-size: 14px;
        font-weight: 300;
        color: rgba(255, 255, 255, 0.9);

        text-align: center;
        line-height: 20px;
        margin-top: 15px;
        margin-bottom: 28px;
      }

      .button_father {
        display: flex;
        justify-content: center;
      }

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 141px;
        height: 42px;
        border-radius: 6px;
        border: 1px solid #3edfcf;

        &:hover {
          // background: linear-gradient(
          //   177deg,
          //   #ffffff48 -24.77%,
          //   rgba(255, 255, 255, 0) 97.53%
          // );
          box-shadow: 0px 0px 12px 0px #8dfff425, 0px 0px 12px 0px #8dfff41a;
        }

        .text {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin-right: 8px;
        }

        img {
          width: 17px;
          height: 16px;
        }
      }

      .button_right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 107px;
        height: 42px;
        border-radius: 6px;
        border: 1px solid #3edfcf;
        margin-left: 32px;

        &:hover {
          // background: linear-gradient(
          //   177deg,
          //   #ffffff48 -24.77%,
          //   rgba(255, 255, 255, 0) 97.53%
          // );
          /* shadow for navbar hover */
          box-shadow: 0px 0px 12px 0px #8dfff425, 0px 0px 12px 0px #8dfff41a;
        }

        .text {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin-right: 8px;
        }

        img {
          width: 17px;
          height: 16px;
        }
      }
    }
    .get_the_app {
      height: 1095px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .icons {
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f7f7f4;
    margin-top: 60px;
    margin-bottom: 20px;
    // 正向滚动动画
    @keyframes scrollBackward {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-1700px);
      }
    }
    /* 逆向滚动动画 */
    @keyframes scrollForward {
      0% {
        transform: translateX(-1700px);
      }
      100% {
        transform: translateX(0);
      }
    }
    //  鼠标移出
    .carousel-content.forward {
      animation: scrollForward 5s linear forwards; /* 调整时间以匹配您的需求 */
    }
    // 鼠标移入
    .carousel-content.backward {
      animation: scrollBackward 5s linear forwards; /* 调整时间以匹配您的需求 */
    }
    .carousel-container {
      overflow: hidden;
      position: relative;
      width: 100%;
      height: 110px;
    }

    .carousel-content {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      will-change: transform; /* 提升性能 */
    }

    .carousel-item {
      transition: all 0.5s; /* 设置动画 */
      margin: 0 42px;
      img {
        max-width: none;
        max-height: none;
      }
    }
  }
}
@media (min-width: 835px) {
  .home_view {
    .Welcome {
      .Utility {
        .Utility_text {
          font-size: 38px;
          letter-spacing: 0.76px;
        }
      }
    }
    .Language {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 33px;
      margin-bottom: 18px;

      .point {
        width: 9px;
        height: 9px;
        background-color: rgba(62, 223, 207, 1);
        border-radius: 50%;
        margin-right: 5px;
      }
      .lang {
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
        text-align: center;
        font-family: JejuGothic;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.2px;
      }
    }
    .Anapplication {
      max-width: 1119px;
      line-height: 20px;
      margin-top: 15px;
      margin-bottom: 28px;
    }
    .button {
      &:hover {
        background: linear-gradient(
          177deg,
          #fff -24.77%,
          rgba(255, 255, 255, 0) 97.53%
        );
        /* shadow for navbar hover */
        box-shadow: 0px 4px 20px 0px rgba(156, 255, 243, 0.3);
      }
    }
    .button_right {
      &:hover {
        background: linear-gradient(
          177deg,
          #fff -24.77%,
          rgba(255, 255, 255, 0) 97.53%
        );
        box-shadow: 0px 4px 20px 0px rgba(156, 255, 243, 0.3);
      }
    }
    .Where_to_Start {
      width: 100%;
      padding: 72px 0px 24px 0px;

      .title {
        font-size: 22px;

        padding-left: 140px;
        margin-bottom: 20px;
      }
    }
    .Where_to_Start {
      width: 100%;
      padding: 72px 0px 24px 0px;

      .title {
        font-family: Lantinghei SC;
        color: rgba(21, 28, 26, 0.9);
        font-size: 22px;
        font-weight: 400;
        padding-left: 140px;
        margin-bottom: 20px;
      }
      .Four_boxes {
        display: flex;
        //多行对齐
        flex-wrap: wrap;
        justify-content: center;

        .box {
          width: 716px;
          border-radius: 12px;
          height: 394px;
          margin: 0px 8px 16px 8px;
          border-radius: 12px;
          background: linear-gradient(
            177deg,
            #fff -24.77%,
            rgba(255, 255, 255, 0) 97.53%
          );
          opacity: 0.8;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 12px;
          box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.5);
          padding: 50px 0 43px 50px;
          transition: all 0.5s;
          &:hover {
            //过渡
            transition: all 0.5s;
            box-shadow: none;
          }

          .box_title {
            font-size: 14px;
            font-weight: 400;
            color: #3edfcf;
          }
          .box_text {
            max-width: 420px;
            margin-top: 14px;
            margin-bottom: 26px;
            line-height: 30px;
            color: rgba(23, 25, 24, 0.9);
            font-size: 23px;
            font-style: normal;
            font-weight: 400;
          }
          .box_button {
            height: 45px;
            padding: 12px 16px; /* 添加适当的内边距 */
            background: #fffefb;
            border-radius: 6px;
            border: 1px solid #3edfcf;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            color: rgba(21, 28, 26, 0.9);
            &:hover {
              box-shadow: 0px 5px 20px 0px rgba(156, 255, 243, 0.5);
              background: linear-gradient(
                177deg,
                #fff -s4.77%,
                rgba(255, 255, 255, 0) 97.53%
              );
            }
          }
        }
      }
    }
    .Data_and_circles {
      width: 100%;
      padding-top: 78px;
      padding-bottom: 68px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      //多行对齐
      flex-wrap: wrap;
      .Data {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        .value_father {
          width: 836px;
          display: flex;
          //多行对齐
          flex-wrap: wrap;
          justify-content: start;
          .data_value {
            margin-left: 98px;
            margin-bottom: 40px;

            .amount {
              color: var(--Light-dark, rgba(21, 28, 26, 0.9));
              font-family: Lantinghei SC;
              font-size: 44px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              padding-bottom: 10px;
              margin-bottom: 18px;
              border-bottom: 1.5px solid rgba(21, 28, 26, 0.2);
              padding-right: 11px;
            }
            .data_text {
              color: var(--Light-dark, rgba(21, 28, 26, 0.9));
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
          }
        }
      }
      .circles {
        position: relative;

        .point {
          display: flex;
          align-items: center;
        }
        .point_one {
          z-index: 100;
          position: absolute;
          right: 44px;
          top: 68px;
          .point_text {
            margin-left: 8px;
          }
        }
        .thisAPoint {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          background-color: #3edfcf;
          border-radius: 50%;
          margin-right: 5px;
          border: 2px solid #fff;
        }
        .round_one {
          width: 614px;
          height: 614px;
          background-color: #fffefb;
          border-radius: 50%;
          border: 1px solid rgba(21, 28, 26, 0.1);
          // display: flex;
          // justify-content: center;
          position: relative;
          left: 0;
          top: 0;
          //旋转100deg
          transform: rotate(85deg);
          .point_two {
            z-index: 100;
            //旋转100deg
            transform: rotate(-85deg);
            position: absolute;
            right: 468px;
            top: 480px;
          }
        }
        .round_two {
          width: 542px;
          height: 542px;
          background-color: rgba(247, 247, 244, 1);
          border-radius: 50%;
          border: 1px solid rgba(21, 28, 26, 0.1);

          position: absolute;
          left: 9.2px;
          top: 10px;
          .point_three {
            z-index: 100;
            //旋转100deg
            transform: rotate(-85deg);
            position: absolute;
            right: 110px;
            top: 448px;
          }
        }
        .round_three {
          width: 468px;
          height: 468px;
          background-color: rgba(255, 254, 251, 1);
          border-radius: 50%;
          border: 1px solid rgba(21, 28, 26, 0.1);
          position: absolute;
          left: 9.6px;
          top: 10px;
          .point_four {
            z-index: 100;
            //旋转100deg
            transform: rotate(-85deg);
            position: absolute;
            right: -20px;
            top: 274px;
          }
        }
        .round_four {
          width: 388px;
          height: 388px;
          background-color: rgba(247, 247, 244, 1);
          border-radius: 50%;
          border: 1px solid rgba(21, 28, 26, 0.1);
          position: absolute;
          left: 12px;
          top: 10px;
          .point_five {
            z-index: 100;
            //旋转100deg
            transform: rotate(-85deg);
            position: absolute;
            right: 160px;
            top: 348px;
          }
        }
        .round_five {
          width: 310px;
          height: 310px;
          background-color: rgba(255, 254, 251, 1);
          border-radius: 50%;
          border: 1px solid rgba(21, 28, 26, 0.1);
          position: absolute;
          left: 11px;
          top: 10px;
          .point_six {
            z-index: 100;
            //旋转100deg
            transform: rotate(-85deg);
            position: absolute;
            right: 0px;
            top: 220px;
          }
        }
        .round_six {
          width: 226px;
          height: 226px;
          background-color: rgba(247, 247, 244, 1);
          border-radius: 50%;
          border: 1px solid rgba(21, 28, 26, 0.1);
          position: absolute;
          left: 13px;
          top: 10px;
          .point_seven {
            z-index: 100;
            //旋转100deg
            transform: rotate(-85deg);
            position: absolute;
            left: 96px;
            top: 196px;
          }
        }
      }
    }
    .Utility_Chain {
      width: 100%;
      padding: 59px 140px 0 140px;
      display: flex;

      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title {
        color: rgba(21, 28, 26, 0.9);
        margin-bottom: 90px;
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 24px;
        font-weight: 400;
      }
      .Utility_Chain_box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .box_item {
          padding: 0px 0 0 20px;
          margin-bottom: 62px;
          border-radius: 12px;
          border-radius: 8px;
          width: 340px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          .item_title {
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            //过渡
            transition: all 0.3s;
          }
          .item_text {
            color: rgba(21, 28, 26, 0.7);
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            max-width: 300px;
            margin-top: 6px;
          }
          .item_img {
            width: 60px;
            height: 60px;
            margin-bottom: 9px;
            position: relative;

            background: linear-gradient(
              97deg,
              #f1f7f6 40%,
              rgba(164, 229, 221, 0.2) 100.1%
            );
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 70%;
              height: 70%;
              //过渡
              transition: all 0.5s;
            }

            .hover {
              position: absolute;
              right: -4px;
              top: -4px;
              z-index: 1;
              //过渡
              transition: all 0.3s;
            }
          }
          .Utility_Chain_box_item_button {
            width: 59px;
            height: 22px;
            border-radius: 4px;
            border: 1px solid #3edfcf;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 14px;
            background-color: #fff;
            color: #3edfcf;
          }
        }
      }
    }

    .merry_go_round {
      width: 100%;
      height: 672px;
      padding: 0 110px;

      .title {
        color: #3edfcf;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        margin-left: 30px;
        margin-top: 123px;
        margin-bottom: 23px;
      }

      .swiper {
        width: 93%;
        height: 394px;
        position: relative;

        .swiper-slide {
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer; ///鼠标移上去变成手指
          .swiper_img {
            border-radius: 8px;
          }
          .icon {
            position: absolute;
            top: 18px;
            right: 18px;
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            border-radius: 50%;
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .time {
            color: #151c1a;
            font-family: Jaldi;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 21px; /* 21.825px */
            letter-spacing: 0.3px;
            margin-top: 11px;
          }
          .text {
            color: #151c1a;
            font-family: Inter;
            font-size: 17px;
            font-weight: 600;
            line-height: 24.055px; /* 24.055px */
          }
        }

        // *这将在滑动器的左侧创建模糊效果
        .shadow_left {
          transform: rotate(180deg);
          width: 202px;
          height: 404px;
          position: absolute;
          left: -50px;
          top: -50px;
          bottom: 0;
          background: linear-gradient(
            -90deg,
            #fff 43.44%,
            rgba(255, 255, 255, 0) 90%
          );
          z-index: 2; /* 确保阴影在内容之上 */
        }
        // *这将在滑动器的右侧创建模糊效果
        .shadow_right {
          // 旋转100deg;
          transform: rotate(180deg);
          width: 262px;
          height: 404px;
          position: absolute;
          right: -100px;
          top: -10px;
          bottom: 0;
          background: linear-gradient(
            90deg,
            #fff 43.44%,
            rgba(255, 255, 255, 0) 90%
          );
          //模糊
          z-index: 2; /* 确保阴影在内容之上 */
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        position: absolute;
        top: 22%;
        width: 40px;
        height: 40px;
        z-index: 100;
        border-radius: 50%;
        cursor: pointer; ///鼠标移上去变成手指

        background-color: rgba(21, 28, 26, 0.9) !important;
        color: #fff !important;
      }
      .swiper-button-prev.swiper-button-disabled,
      .swiper-button-next.swiper-button-disabled {
        background-color: #fff !important;
        border: 1px solid #000 !important;
        color: #000 !important;
        opacity: 1 !important; /* 可以设置不透明度来表示禁用状态 */
        pointer-events: auto;
        cursor: not-allowed !important;
      }

      .swiper-button-prev {
        left: 80px;
      }
      .swiper-button-next {
        right: 80px;
      }
      .swiper-button-prev::after,
      .swiper-button-next::after {
        font-size: 20px !important;
      }
    }

    .Contribute_to_Utility {
      //超出隐藏
      overflow: hidden;

      margin-top: 50px;
      width: 100%;
      height: 633px;

      background: linear-gradient(275deg, #f6f9f9 1.38%, #fffefb 97.15%);

      .Contribute_to_Utility_bg {
        width: 100%;
        height: 100%;
        background: url("/src/assets/images/Contribute_to_Utility.png")
          no-repeat center;
        background-size: cover;
        position: relative;
        display: flex;
        justify-content: end;
      }
      .Create_a_lighter {
        width: 657px;
        height: 394px;
        flex-shrink: 0;
        border-radius: 10px;
        background: linear-gradient(
          180deg,
          rgba(244, 248, 248, 0.05) 0.13%,
          rgba(244, 248, 248, 0) 99.87%
        );
        box-shadow: 0px 1px 1px 1px #dfe7e6 inset;
        backdrop-filter: blur(4px);
        position: absolute;
        left: 20%;
        top: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 64px;
        .title_one {
          color: var(--Dark, #151c1a);
          font-family: Inter;
          font-size: 30px;
          font-weight: 600;
          max-width: 570px;
        }
        .text {
          margin-top: 24px;
          max-width: 454px;
          color: rgba(21, 28, 26, 0.9);
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }
        .button_father {
          display: flex;

          margin-top: 50px;

          .button_left,
          .button_right {
            width: 133px;
            height: 42px;
            border-radius: 6px;
            border: 1px solid #3edfcf;
            display: flex;
            justify-content: center;
            align-items: center;
            .button_text {
              font-size: 14px;
              font-weight: 500;
              color: rgba(21, 28, 26, 0.9);
              margin-right: 8px;
              margin-left: 12px;
            }
          }
          .button_left {
            margin-right: 60px;
            &:hover {
              box-shadow: 0px 4px 20px 0px rgba(156, 255, 243, 0.4);
              background: linear-gradient(
                177deg,
                #fff -24.77%,
                rgba(255, 255, 255, 0) 97.53%
              );
            }
          }
          .button_right {
            &:hover {
              box-shadow: 0px 4px 20px 0px rgba(156, 255, 243, 0.4);
              background: linear-gradient(
                177deg,
                #fff -24.77%,
                rgba(255, 255, 255, 0) 97.53%
              );
            }
          }
        }
      }
      .square {
        display: flex;
        justify-content: center;
        width: 912px;
        height: 608px;
        background: var(
          --light-small,
          linear-gradient(362deg, #c8fcf7 1%, rgba(115, 255, 247, 0) 37.57%)
        );
        filter: blur(40px);

        opacity: 0.7;
      }
      .Utility_img {
        width: 630px;
        height: 582px;
        position: absolute;
        top: 29px;
        right: 84px;
      }
    }
  }
}
@media (max-width: 834px) {
  .Contribute_to_Utility_bg {
    width: 100%;
    height: 100%;
    background: url("/src/assets/images/Contribute_to_Utility.png") no-repeat
      center;
    background-size: cover;
    position: relative;
    display: flex;
    justify-content: end;
  }
  .home_view {
    .container {
      .Welcome {
        padding-top: 24px;

        .Utility {
          max-width: 306px;
          .Utility_text {
            font-size: 24px;
            line-height: 36px; /* 36.12px */
            letter-spacing: 0.48px;
          }
          .Welcome_text_title {
            font-size: 21px;
            font-style: normal;
            line-height: 150.5%;
          }
        }

        .Anapplication {
          margin-top: 10px;
          margin-bottom: 22px;
          max-width: 259px;
          font-family: Inter;
          font-size: 10px;
          font-style: normal;
          line-height: 15px; /* 15.5px */
        }
      }
      .get_the_app {
        height: 422px;
        width: 100%;
        background-color: #cfcfcf;
      }
      .Where_to_Start {
        padding-top: 30px;
        .title {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-left: 20px;
        }
        .Four_boxes {
          .box {
            width: 350px;
            border-radius: 8px;
            min-height: 189px;
            margin: 12px 0px 10px 0px;
            border-radius: 8px;
            background: linear-gradient(
              177deg,
              #fff -24.77%,
              rgba(255, 255, 255, 0) 97.53%
            );
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 12px;
            box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.5);
            padding: 14px;
            transition: all 0.5s;

            .box_title {
              color: #3edfcf;
              font-family: Lantinghei SC;
              font-size: 14px;
              font-weight: 400;
              text-transform: uppercase;
            }
            .box_text {
              max-width: 322px;
              margin-top: 14px;
              margin-bottom: 26px;
              color: rgba(21, 28, 26, 0.9);
              font-family: Lantinghei SC;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 21px;
              letter-spacing: 0.42px;
            }
            .box_button {
              height: 33px;
              padding: 6px 10px; /* 添加适当的内边距 */
              background: #fffefb;
              border-radius: 8px;
              border: 1px solid #3edfcf;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 14px;
              font-weight: 500;
              color: rgba(21, 28, 26, 0.9);
            }
          }
        }
      }
      .Data_and_circles {
        width: 100%;
        display: flex;
        padding: 60px 20px 26px 20px;
        //更改主轴的方向
        flex-direction: column;
        align-items: center;
        .Data {
          width: 100%;
          margin-top: 28px;
          display: flex;
          justify-content: center;
          align-items: center;

          .value_father {
            width: 100%;
            display: flex;
            //多行对齐
            flex-wrap: wrap;
            justify-content: start;

            .data_value {
              width: 100%;
              margin-bottom: 30px;
              margin-left: 0px;
              .amount {
                width: 100%;
                padding-bottom: 4px;
                margin-bottom: 4px;
                border-bottom: 1px solid rgba(21, 28, 26, 0.2);
                color: rgba(28, 23, 21, 0.9);
                font-family: Lantinghei SC;
                font-size: 20px;
                font-weight: 400;
              }
              .data_text {
                color: #b9bbba;
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              }
            }
          }
        }
        .circles {
          position: relative;

          .point {
            display: flex;
            color: rgba(21, 28, 26, 0.9);
            font-family: Lantinghei SC;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          .point_one {
            z-index: 100;
            position: absolute;
            right: 10px;
            top: 46px;
            .point_text {
              margin-left: 4px;
            }
          }
          .thisAPoint {
            width: 8px;
            height: 8px;
            flex-shrink: 0;
            background-color: #3edfcf;
            border-radius: 50%;
            margin-right: 4px;
            border: 1px solid #fff;
          }
          .round_one {
            width: 350px;
            height: 350px;
            background-color: #fffefb;
            border-radius: 50%;
            border: 1px solid rgba(21, 28, 26, 0.1);
            position: relative;
            left: 0;
            top: 0;

            .point_two {
              z-index: 100;
              position: absolute;
              left: 34px;
              top: 62px;
              .point_text {
                width: 20px;
              }
            }
          }
          .round_two {
            width: 308px;
            height: 308px;
            background-color: rgba(247, 247, 244, 1);
            border-radius: 50%;

            border: 1px solid rgba(21, 28, 26, 0.1);
            position: absolute;
            right: 4.5px;
            top: 6px;
            .point_three {
              width: 100px;
              z-index: 100;
              position: absolute;
              left: -2px;
              top: 180px;
            }
          }
          .round_three {
            width: 266px;
            height: 266px;
            background-color: rgba(255, 254, 251, 1);
            border-radius: 50%;
            border: 1px solid rgba(21, 28, 26, 0.1);
            position: absolute;
            right: 5px;
            top: 6px;
            .point_four {
              z-index: 100;
              position: absolute;
              left: 63px;
              top: 242px;
            }
          }
          .round_four {
            width: 222px;
            height: 222px;
            background-color: rgba(247, 247, 244, 1);
            border-radius: 50%;
            border: 1px solid rgba(21, 28, 26, 0.1);
            position: absolute;
            right: 5px;
            top: 6px;
            .point_five {
              z-index: 100;
              position: absolute;
              left: -4px;
              top: 118px;
            }
          }
          .round_five {
            width: 176px;
            height: 176px;
            background-color: rgba(255, 254, 251, 1);
            border-radius: 50%;
            border: 1px solid rgba(21, 28, 26, 0.1);
            position: absolute;
            right: 5px;
            top: 6px;
            .point_six {
              z-index: 100;
              position: absolute;
              left: 45px;
              top: 162px;
            }
          }
          .round_six {
            width: 130px;
            height: 130px;
            background-color: rgba(247, 247, 244, 1);
            border-radius: 50%;
            border: 1px solid rgba(21, 28, 26, 0.1);
            position: absolute;
            right: 5px;
            top: 6px;
            .point_seven {
              z-index: 100;
              position: absolute;
              left: -4px;
              top: 62px;
            }
          }
        }
      }
      .Utility_Chain {
        width: 100%;
        display: flex;
        padding: 0 20px;
        flex-direction: column;

        .title {
          margin-bottom: 32px;
          color: rgba(21, 28, 26, 0.9);
          color: var(--Light-dark, rgba(21, 28, 26, 0.9));
          font-family: Lantinghei SC;
          font-size: 18px;
          font-weight: 400;
        }
        .Utility_Chain_box {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .box_item {
            width: 160px;
            border-radius: 12px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            margin-bottom: 26px;
            .item_title {
              color: #151c1a;
              font-family: Inter;
              font-size: 12px;
              font-weight: 600;
              text-transform: uppercase;
              //过渡
              transition: all 0.3s;
            }
            .item_text {
              color: #151c1a;
              font-family: Inter;
              font-size: 8px;
              font-style: normal;
              font-weight: 400;
              line-height: 11px; /* 11.92px */
              max-width: 160px;
              margin-top: 2px;
            }
            .item_img {
              width: 60px;
              height: 60px;
              margin-bottom: 9px;
              position: relative;

              background: linear-gradient(
                97deg,
                #f1f7f6 40%,
                rgba(164, 229, 221, 0.2) 100.1%
              );
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 70%;
                height: 70%;
                //过渡
                transition: all 0.5s;
              }

              .hover {
                position: absolute;
                right: -4px;
                top: -4px;
                z-index: 1;
                //过渡
                transition: all 0.3s;
              }
            }
            .Utility_Chain_box_item_button {
              width: 48px;
              height: 19px;
              border-radius: 2px;
              border: 1px solid #3edfcf;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 12px;
              font-weight: 400;
              margin-bottom: 10px;
              background-color: #fff;
              color: #3edfcf;
            }
          }
        }
      }

      .merry_go_round {
        width: 100%;
        padding-top: 36px;
        padding: 36px 20px 0 20px;

        .title {
          color: #3edfcf;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;

          margin-bottom: 23px;
        }

        .swiper {
          width: 100%;
          height: 394px;
          display: flex;
          justify-content: center;

          position: relative;
          .swiper-slide {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            cursor: pointer; ///鼠标移上去变成手指
            .swiper_img {
              border-radius: 8px;
              width: 350px;
              height: 286px;
            }
            .icon {
              position: absolute;
              top: 18px;
              right: 18px;
              width: 34px;
              height: 34px;
              flex-shrink: 0;
              border-radius: 50%;
              background-color: #000;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .time {
              color: #151c1a;
              margin-top: 11px;
              font-family: Jaldi;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 20px; /* 20.37px */
              letter-spacing: 0.28px;
              opacity: 0.8;
            }
            .text {
              color: #151c1a;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 22px; /* 22.64px */
            }
          }
          /* 设置未激活状态下的圆点颜色 */
          :deep(.swiper-pagination .swiper-pagination-bullet) {
            width: 8px;
            height: 8px;
            background: #a5a5a5;
            border-radius: 8px;
          }

          /* 设置激活（当前选中）状态下的圆点颜色 */
          :deep(.swiper-pagination .swiper-pagination-bullet-active) {
            width: 8px;
            height: 8px;
            background: rgba(106, 209, 197, 1);
            border-radius: 8px;
          }
        }
      }

      .Contribute_to_Utility {
        width: 100%;
        height: 402px;
        display: flex;
        justify-content: center;
        background: linear-gradient(283deg, #f6f9f9 29.38%, #fffefb 93.23%);
        position: relative;
        //margin-bottom: 53px;
        .Create_a_lighter {
          width: 350px;
          height: 161px;
          flex-shrink: 0;
          border-radius: 10px;
          position: absolute;
          left: 25%;
          bottom: 27px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 17px;

          background: linear-gradient(
            180deg,
            rgba(244, 248, 248, 0.05) 0.13%,
            rgba(244, 248, 248, 0) 99.87%
          );
          box-shadow: 0px 1px 1px 1px #dfe7e6 inset;
          .title_one {
            color: #151c1a;
            font-family: Inter;
            font-size: 13px;
            font-style: normal;
            font-weight: 600;
            line-height: 18px; /* 18.187px */
            max-width: 295px;
          }
          .text {
            margin-top: 8px;
            max-width: 297px;
            height: 62px;
            color: rgba(21, 28, 26, 0.9);
            font-family: Inter;
            font-size: 8px;
            font-style: normal;
            font-weight: 400;
            line-height: 12px; /* 11.6px */
          }
          .button_father {
            display: flex;
            justify-content: start;
            width: 100%;
            padding-left: 34px;
            .button_left,
            .button_right {
              height: 24px;
              border-radius: 6px;
              border: 1px solid #3edfcf;
              display: flex;
              justify-content: center;
              align-items: center;
              .button_text {
                color: rgba(21, 28, 26, 0.9);
                text-align: center;
                font-family: Inter;
                font-size: 8px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 12px */
                margin-right: 3px;
              }
            }
            .button_left {
              width: 62px;
              margin-right: 9px;
            }
            .button_right {
              width: 59px;
            }
          }
        }

        .Utility_img {
          height: 227.263px;
          flex-shrink: 0;
          margin-top: 36px;
        }
      }
    }
    .icons {
      width: 100%;
      height: 87px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f7f7f4;
      margin-top: 18px;
      // 正向滚动动画
      @keyframes scrollBackward {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-1766px);
        }
      }
      /* 逆向滚动动画 */
      @keyframes scrollForward {
        0% {
          transform: translateX(-1766px);
        }
        100% {
          transform: translateX(0);
        }
      }
      //  鼠标移出
      .carousel-content.forward {
        animation: scrollForward 5s linear forwards; /* 调整时间以匹配您的需求 */
      }
      // 鼠标移入
      .carousel-content.backward {
        animation: scrollBackward 5s linear forwards; /* 调整时间以匹配您的需求 */
      }
      .carousel-container {
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
      }

      .carousel-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        will-change: transform; /* 提升性能 */
      }

      .carousel-item {
        transition: all 0.5s; /* 设置动画 */
        margin: 0 16px;
        img {
          max-width: none;
          max-height: none;
        }
      }
    }
  }
}
@media (max-width: 1323px) {
  .Create_a_lighter {
    left: 18% !important;
  }
}

@media (max-width: 432px) {
  .Create_a_lighter {
    left: 2% !important;
    width: 320px !important;
  }
}
</style>
