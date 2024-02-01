<script setup lang="ts" name="HomeView">
import arrow from "@/assets/images/arrow.svg";
import arrow1 from "@/assets/images/arrow1.svg";
import homerightdian from "@/assets/images/homerightdian.svg";
import homeleftdian from "@/assets/images/homeleftdian.svg";
import homecenteryun from "@/assets/images/homecenteryun.svg";
import "swiper/swiper-bundle.css";
import "swiper/less";
import "swiper/less/navigation";
import "swiper/css/pagination";
import { computed, onMounted, onUnmounted, ref, toRef, watch } from "vue";
import { getStatistics } from "@/api/home";
import { useI18n } from "vue-i18n";
import { Swiper, SwiperSlide } from "swiper/vue";
import { openNewPage } from "@/utils/request";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
import router from "@/router";
import useStore from "@/store";
import { storeToRefs } from "pinia";

import star from "@/assets/images/star.svg";
import star1 from "@/assets/images/star1.svg";
import star2 from "@/assets/images/star2.svg";

import starphone from "@/assets/images/star_phone.svg";
import starphone1 from "@/assets/images/star_phone1.svg";
import starphone2 from "@/assets/images/star_phone2.svg";
const { home } = useStore();
const { theme } = storeToRefs(home);
const { locale } = useI18n();
const res = ref(); //^ 数据 和 圆 Data and circles的数据
const Data_arr = ref(); //^ Where to Start的数据
onMounted(async () => {
  const { data } = await getStatistics();
  res.value = data;
  window.addEventListener("resize", updatedWidth);
  Data_arr.value = [
    {
      amount:
        width.value > 834
          ? `<span style='font-size: 26px;'>$</span>${res.value?.aiPower.toLocaleString()}`
          : `<span style='font-size: 18px;'>$</span>${res.value?.aiPower.toLocaleString()}`,
      text: "home.UNC_PRICE",
    },
    // {
    //   amount: `${res.value?.totalMiners?.toLocaleString()}`,
    //   text: "home.NODES",
    // },
    {
      amount:
        width.value > 834
          ? "<span style='font-size: 26px;'>$</span>122,1120"
          : "<span style='font-size: 18px;'>$</span>122,1120",
      text: "home.Transaction_Today",
    },
    {
      amount:
        width.value > 834
          ? `${res.value?.activeMiners.toLocaleString()}<span style='font-size: 26px;'> tflops</span>`
          : `${res.value?.activeMiners.toLocaleString()} <span style='font-size: 18px;'> tflops</span>`,
      text: "home.Computational_Power_Synthesis",
    },
    {
      amount:
        width.value > 834
          ? `${res.value?.activeMiners.toLocaleString()}<span style='font-size: 26px;'> tflops</span>`
          : `${res.value?.activeMiners.toLocaleString()} <span style='font-size: 18px;'> tflops</span>`,
      text: "home.Computational_Power_Synthesis",
    },
  ];
});

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

//^ Utility Chain Scaling Solutions的数据
const Utility_arr = ref([
  {
    title: "home.UNC_Node",
    text: "home.Provides_solutions_for",
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_one.svg",
    isclick: false, //鼠标移入移出
  },
  {
    title: "home.UNC_Mining",
    text: "home.The_computing_power",
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_two.svg",
    isclick: false,
  },
  {
    title: "home.UNC_work",
    text: "home.The_actual_computing",
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_three.svg",
    isclick: false,
  },
  {
    title: "home.unc_Wasm",
    text: "home.Integrated_WebAssembly_virtual",
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_four.svg",
    isclick: false,
  },
  {
    title: "home.UNC_chain_Explorer",
    text: "home.Search_Information_data",
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_five.svg",
    isclick: false,
  },
  {
    title: "home.UNC_wallet",
    text: "home.A_asset_account",
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_six.svg",
    isclick: false,
  },
  {
    title: "home.hashing_power",
    text: "home.The_first_computing",
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_seven.svg",
    isclick: false,
  },
  {
    title: "home.Testnet_Faucet",
    text: "home.Test_the_node",
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_eight.svg",
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

// ~走马灯  创建一个重复的图片数组，用于无缝轮播
// const duplicatedImages = [...imageSources, ...imageSources, ...imageSources];
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
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/F9iRJn8bwAAPRhl.jpeg",
    time: "September 21, 2023",
    text: "Calculate demand analysis and the next tuyere",
    isswiperenter: false,
  },
  {
    id: 1,
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/article_bgc_two.png",
    time: "September 21, 2023",
    text: "Calculate demand analysis and the next tuyere",
    isswiperenter: false,
  },
  {
    id: 2,
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/article_bgc_three.png",
    time: "September 21, 2023",
    text: "Decentralized computing power equals edge computing",
    isswiperenter: false,
  },
  {
    id: 3,
    img: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/article_bgc_four.png",
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

const jumpNews = (id: number) => {
  router.push({
    path: "/news",
    query: {
      msg: id,
    },
  });
};
const width = ref(window.innerWidth);
const height = ref(window.innerHeight);
const updatedWidth = function () {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
};

const ani_btn_s = ref(0);

onUnmounted(() => {
  window.removeEventListener("resize", updatedWidth);
});

const setVedio = () => {
  const video = document.getElementById("video11") as HTMLVideoElement;
  video.play();
};

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
    link:
      width.value > 834
        ? "/soloutions/utility_wallet"
        : "/soloutions/mp_utility_wallet",
  },
  {
    title: "home.Computing_Power_users",
    text: "home.You_can_rent",
    hover: false,
    button: "home.Develop",
    link: width.value > 834 ? "/get_power" : "/soloutions/mp_hashing_power",
  },
]);

const fourdata = [
  {
    title: "Developers",
    text: ["Bring your project idea to multiple users on Utility Ecosystem."],
    button: "Join Ecosystem",
  },
  {
    title: "Computing power supply",
    text: ["-Provide stable computing power", "-Gain UNC by mining"],
    button: "Mining",
  },
  {
    title: "Token holder",
    text: [
      "-Gain UNC by mining",
      "-Receive UNC by selling computer power",
      "-Purchase UNC token on exchanges",
    ],
    button: "Check Wallet",
  },
  {
    title: "Computing power renter",
    text: [
      "Rent high-performance computing power from utility providers for your own purpose.",
    ],
    button: "Rent",
  },
];

// 计算属性，根据主题和屏幕宽度决定图片路径
const computedImagePath = computed(() => {
  // 假设屏幕宽度小于834px时为小屏
  if (width.value < 834) {
    return theme.value
      ? "/src/assets/images/Objects1.png"
      : "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/Contribute_to_Utility.png";
  } else {
    return theme.value
      ? "/src/assets/images/Objects.png"
      : "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/Contribute_to_Utility.png";
  }
});
</script>
<template>
  <div class="home_view">
    <!-- !动画begin -->
    <div class="animation_box">
      <!-- !画布动画begin -->
      <Animation v-if="width > 996"></Animation>
      <!-- !画布动画end -->
      <img
        class="imgone"
        v-else
        src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/5621701541165_.pic.jpg"
        style="width: 100vw; object-fit: cover; margin-top: 70px"
      />
      <!-- 第一屏文案 -->
      <div class="bg">
        <div class="Welcome">
          <div class="Language">
            <div class="point"></div>
            <div class="lang">
              {{ locale === "en" ? "English" : "中文简体" }}
            </div>
          </div>
          <div class="Utility">
            <div
              :class="['Utility_text']"
              :style="{ fontSize: width > 996 ? '34px' : '1rem' }"
            >
              Utility:
            </div>
            <div
              class="Welcome_text_title"
              :style="{ fontSize: width > 996 ? '34px' : '1rem' }"
            >
              {{ $t("home.Welcome_to_utility") }}
            </div>
          </div>
          <div class="Anapplication">
            {{ $t("home.An_application") }}
          </div>
          <div class="button_father">
            <div
              class="button"
              @click="
                openNewPage('http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf')
              "
            >
              <div class="text">
                {{ $t("home.White_Paper") }}
              </div>
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/right.svg"
                alt=""
                srcset=""
              />
            </div>
            <div
              class="button_right"
              @click="openNewPage('/learning/learning_center')"
            >
              <div class="text">
                {{ $t("home.More") }}
              </div>
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/right.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- 第一屏文案 -->
    </div>
    <!-- !视频begin -->
    <div class="animatino_video">
      <video
        id="video11"
        :src="
          width < 834
            ? 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/502_1701518503.mp4'
            : 'https://utilityoss.s3.ap-northeast-1.amazonaws.com/TOTAL+VIDEO+LOGO+2.mp4'
        "
        autoplay
        muted
        @ended="setVedio"
        :style="{
          objectFit: width > 2150 ? 'cover' : 'contain',
          height: width > 2150 ? '100vh' : '100%',
        }"
      ></video>
    </div>
    <!-- !视频end -->
    <div class="container" style="overflow: hidden">
      <div class="ellipse_dev">
        <div
          style="
            width: 100%;
            display: flex;
            height: 100px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
          "
        >
          <text
            style="
              color: var(--text-color);
              text-align: center;
              font-size: 22px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
            "
            selectable="false"
            space="false"
            decode="false"
          >
            Utility Ecosystem
          </text>
          <div
            style="
              color: var(--text-color);
              text-align: center;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            "
          >
            Everyone can be UNC holder to purchase utility and exchange UNC
            token.
          </div>
        </div>
        <div style="display: flex; gap: 20px; flex-wrap: wrap; padding: 0 20px">
          <div
            class="ellipse_dev_card"
            v-for="(item, index) in fourdata"
            :key="index"
          >
            <div class="title">{{ item.title }}</div>
            <div class="text_class" v-for="(i, ind) in item.text" :key="ind">
              {{ i }}
            </div>
            <div class="btn">
              <span>{{ item.button }}</span>
            </div>
          </div>
        </div>
        <div class="top">
          <div class="round one"></div>
        </div>
        <div class="top">
          <img
            v-if="!theme"
            style="left: 220px; top: 180px"
            src="@/assets/images/homecenteryun.png"
            alt=""
            srcset=""
          />
          <img
            v-else
            style="left: 0px; top: 120px"
            src="@/assets/images/homecenteryun_d.png"
            alt=""
            srcset=""
          />
          <img
            style="top: 276px; left: 414px"
            src="@/assets/images/Utility_Holder.png"
            alt=""
            srcset=""
            class="Utility_Holder"
          />
          <img
            style="top: 276px; right: 644px"
            src="@/assets/images/Utility_Miner.png"
            alt=""
            srcset=""
            class="Utility_Miner"
          />
          <img
            style="top: 416px; left: 614px"
            src="@/assets/images/AI_developer.png"
            alt=""
            srcset=""
            class="AI_developer"
          />
          <img
            style="top: 466px; right: 514px"
            src="@/assets/images/Git_Power.png"
            alt=""
            srcset=""
            class="Git_Power"
          />
          <img
            style="top: 250px; right: 864px; transform: rotateZ(100deg)"
            src="@/assets/images/UNC.png"
            alt=""
            srcset=""
            class="UNC"
          />
          <img
            style="top: 420px; left: 414px"
            src="@/assets/images/UNC.png"
            alt=""
            srcset=""
            class="UNC1"
          />
          <img
            style="top: 400px; right: 614px; transform: rotateZ(100deg)"
            src="@/assets/images/UNC.png"
            alt=""
            srcset=""
            class="UNC2"
          />
          <img
            style="top: 310px; left: 224px"
            src="@/assets/images/vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc"
          />
          <img
            style="top: 510px; left: 144px"
            src="@/assets/images/1vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc1"
          />
          <img
            style="top: 590px; left: 204px"
            src="@/assets/images/2vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc2"
          />
          <img
            style="top: 500px; left: 264px"
            src="@/assets/images/3vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc3"
          />
          <img
            style="top: 600px; left: 324px"
            src="@/assets/images/4vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc4"
          />
          <img
            style="top: 600px; right: 404px"
            src="@/assets/images/5vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc5"
          />
          <img
            style="top: 600px; right: 784px"
            src="@/assets/images/6vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc6"
          />
          <img
            style="top: 350px; right: 424px"
            src="@/assets/images/7vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc7"
          />
          <img
            style="top: 250px; right: 384px"
            src="@/assets/images/8vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc8"
          />
          <img
            style="top: 500px; right: 244px"
            src="@/assets/images/9vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc9"
          />
          <img
            style="top: 600px; right: 244px"
            src="@/assets/images/0vuvietduc.com.png"
            alt=""
            srcset=""
            class="vuvietduc0"
          />
          <img
            style="top: 642px; left: 607px"
            src="@/assets/images/SingulardtvSngls.png"
            alt=""
            srcset=""
            class="SingulardtvSngls"
          />

          <homerightdian style="position: absolute; right: 400px; top: 250px" />
          <homeleftdian style="position: absolute; left: 200px; top: 250px" />
          <div class="round two"></div>
        </div>
        <div class="top">
          <div class="round three"></div>
        </div>
        <div class="top">
          <div class="round four"></div>
        </div>
        <div class="top">
          <div class="round five"></div>
        </div>
        <div class="top">
          <div class="round six"></div>
        </div>
        <div class="top">
          <div class="round seven"></div>
        </div>
      </div>
      <!--! Where to Start -->
      <!-- <div class="Where_to_Start">
        <div class="title">
          {{ $t("home.Where_to_Start") }}
        </div>
        <div v-if="width < 834" class="Four_boxes">
          <div
            class="box"
            v-for="(item, index) in Where_arr"
            :key="index"
            style=""
            @click="openNewPage(item.link)"
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
              <el-button class="box_button"> {{ $t(item.button) }}</el-button>
            </div>
          </div>
        </div>
        <div v-else class="Four_boxes">
          <div
            @click="openNewPage(item.link)"
            @mouseover="WhereChange(index)"
            @mouseleave="WhereChangeli"
            class="box"
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
                {{ $t(item.button) }}</el-button
              >
            </div>
          </div>
        </div>
      </div> -->
      <!-- !圆环begin -->
      <div class="Data_and_circles">
        <div class="Star_six">
          <div class="star_bg">
            <star2 v-if="width > 1145" />
            <starphone2 v-else />
          </div>
          <div class="Star_text">FAUCET</div>
          <div class="Star_line"></div>

          <div class="star_bg1">
            <star1 v-if="width > 1145" />
            <starphone1 v-else />
          </div>
          <div class="Star_line1"></div>
          <div class="Star_text1">Miner</div>

          <div class="star_bg2">
            <star v-if="width > 1145" />
            <starphone v-else />
          </div>
          <div class="Star_line2"></div>
          <div class="Star_text2">UTILITY</div>

          <div class="star_bg3">
            <star1 v-if="width > 1145" />
            <starphone1 v-else />
          </div>
          <div class="Star_line3"></div>
          <div class="Star_text3">EXPLORER</div>

          <div class="star_bg4">
            <star1 v-if="width > 1145" />
            <starphone1 v-else />
          </div>
          <div class="Star_line4"></div>
          <div class="Star_text4">NODE</div>

          <div class="star_bg5">
            <star2 v-if="width > 1145" />
            <starphone2 v-else />
          </div>
          <div class="Star_text5">WALLET</div>
        </div>

        <div class="Data">
          <div class="value_father">
            <div
              class="data_value"
              v-for="(item, index) in Data_arr"
              :key="index"
            >
              <div class="data_text">
                {{ $t(item.text) }}
              </div>
              <div class="amount" v-html="item.amount"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- !圆环end -->
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
              <div
                class="item_img"
                :style="{
                  boxShadow:
                    item.isclick && theme
                      ? ' 0 0 20px rgba(0, 255, 255, 0.7)'
                      : 'none',
                }"
              >
                <img
                  v-if="!theme"
                  :style="{
                    opacity: item.isclick ? 1 : 0,
                  }"
                  class="hover"
                  src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Hover.svg"
                  alt=""
                  srcset=""
                />
                <img
                  class="item_img_img"
                  :src="item.img"
                  :style="{
                    filter:
                      item.isclick && !theme
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
                :style="{
                  color: item.isclick ? '#3EDFCF' : 'var(--Utility-text-color)',
                }"
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
    <!-- <div class="icons">-->
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
    <!--    </div> -->
    <!-- !另一个 container -->
    <div class="container">
      <!-- !轮播图 -->
      <div v-if="width < 834" class="merry_go_round">
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
            @click="jumpNews(item.id)"
          >
            <div class="icon">
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Arrow_Up.svg"
                alt=""
              />
            </div>
            <img class="swiper_img" :src="item.img" style="" alt="" />
            <div
              class="time"
              :style="{
                color:
                  item.isswiperenter && theme
                    ? 'var(--swiper-text-color)'
                    : 'var(--swiper-text-color1)',
              }"
            >
              {{ item.time }}
            </div>
            <div
              class="text"
              :style="{
                color:
                  item.isswiperenter && theme
                    ? 'var(--swiper-text-color)'
                    : 'var(--swiper-text-color1)',
              }"
            >
              {{ item.text }}
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
          :slidesPerView="width > 1000 ? 3.5 : 2.5"
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
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Arrow_Up.svg"
                alt=""
              />
            </div>
            <img
              :style="{
                boxShadow:
                  item.isswiperenter && theme
                    ? '-1px -1px 15px 0px rgba(0, 255, 255, 1)'
                    : 'none',
              }"
              class="swiper_img"
              :src="item.img"
              alt=""
            />
            <div
              class="time"
              :style="{
                color:
                  item.isswiperenter && theme
                    ? 'var(--swiper-text-color)'
                    : 'var(--swiper-text-color1)',
              }"
            >
              {{ item.time }}
            </div>
            <div
              class="text"
              :style="{
                color:
                  item.isswiperenter && theme
                    ? 'var(--swiper-text-color)'
                    : 'var(--swiper-text-color1)',
              }"
            >
              {{ item.text }}
            </div>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next"></div>
      </div>

      <!-- ! square Contribute to Utility together -->
      <div class="Contribute_to_Utility">
        <div class="Contribute_to_Utility_bg">
          <img
            class="Contribute_to_Utility_bg_img"
            :src="computedImagePath"
            alt=""
          />
        </div>

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
              <arrow
                v-if="width > 834"
                :style="{ filter: theme ? 'brightness(100)' : 'brightness(1)' }"
              />
              <arrow1
                v-else
                :style="{ filter: theme ? 'brightness(100)' : 'brightness(1)' }"
              />
            </div>
            <div
              class="button_right"
              @click="openNewPage('https://github.com/utnet-org')"
            >
              <div class="button_text">
                {{ $t("footer.Github") }}
              </div>
              <arrow
                v-if="width > 834"
                :style="{ filter: theme ? 'brightness(100)' : 'brightness(1)' }"
              />
              <arrow1
                v-else
                :style="{ filter: theme ? 'brightness(100)' : 'brightness(1)' }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.ellipse_dev {
  // background: #000;
  height: 80vh;
  // width: 1728px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .ellipse_dev_card {
    width: 331px;
    height: 253px;
    border-radius: 20px;
    border-radius: 20px;
    background: var(--home-card-bgc);
    box-shadow: var(--home-card-bgc-show);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 24px 32px;

    &:hover {
      background: var(--home-card-bgc-hover);
    }

    .title {
      color: #3edfcf;
      font-family: "Lantinghei SC";
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-transform: uppercase;
      padding-bottom: 10px;
    }
    .text_class {
      color: var(--text-color);
      font-family: Inter;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 18.2px */
      letter-spacing: 0.39px;
    }
    .btn {
      margin-top: auto;
      padding-bottom: 10px;
      span {
        color: var(--text-color);
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid #3edfcf;
        // background: #f6f9f9;
        cursor: pointer;
      }
    }
  }

  .top {
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    img {
      object-fit: cover;
      position: absolute;
      z-index: 1;
    }
    .round {
      border: #3edfcf8b 2px solid;
      box-sizing: border-box;
      border-radius: 50%;
      transform-style: preserve-3d;
      position: relative;
    }
    .one {
      width: 125vh;
      height: 80vh;
      top: 60%;
    }
    .two {
      width: 83vh;
      height: 65vh;
      top: 30%;
      transform: rotateZ(40deg);
    }
    .three {
      width: 90%;
      height: 80vh;
      top: 78%;
    }
    .four {
      width: 60%;
      height: 65vh;
      top: 40%;
      transform: rotateZ(60deg);
      right: -200px;
    }
    .five {
      width: 60%;
      height: 65vh;
      top: 40%;
      transform: rotateZ(10deg);
      right: 120px;
    }
    .six {
      width: 70%;
      height: 75vh;
      top: 30%;
      transform: rotateZ(10deg);
      right: 100px;
    }
    .seven {
      width: 80%;
      height: 80vh;
      top: 50%;
      right: -20px;
    }
  }
}

.animation_box {
  position: relative;
  background: #000;
  z-index: 2;
  .imgone {
    transform: translateY(-120px);
  }

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
      line-height: 150%;
      font-weight: 500;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
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
.animatino_video {
  // position: fixed;
  // top: 0;
  // left: 0;
  // width: 100%;
  // height: 100%;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
}

.Welcome {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 290px;
  align-items: center;
  // border-radius: 10px;
  background: linear-gradient(
    180deg,
    rgba(244, 248, 248, 0.035) 0.13%,
    rgba(244, 248, 248, 0.043) 99.87%
  );
  // box-shadow: 0px 1px 1px 1px rgba(229, 248, 246, 0.311) inset,
  //   0px 4px 50px 0px #dde3e153;
  backdrop-filter: blur(9px);
  position: absolute;
  left: 0;
  bottom: 0;

  .Utility {
    display: flex;
    align-items: start;

    .Utility_text {
      color: rgba(255, 255, 255, 0.9);
      text-align: center;
      // font-family: Lantinghei SC;
      font-size: 38px;
      font-style: normal;
      font-weight: 400;
      letter-spacing: 0.76px;
      display: flex;
      align-items: start;
    }

    .Welcome_text_title {
      // font-size: 34px;
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

  .button,
  .button_right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 141px;
    height: 42px;
    border-radius: 6px;
    border: 1px solid #3edfcf;

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
    width: 107px;
    height: 42px;
    margin-left: 32px;
  }
}

.home_view {
  // background-color: #fffefb;
  .bg {
    // height: 1100px;
    width: 100%;
    position: absolute;
    z-index: 121;
    bottom: 0px;
    // max-width: 1500px;
    // margin: 0 20px;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .get_the_app {
      height: 1095px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .Where_to_Start {
      width: 100%;
      .title {
        font-family: Lantinghei SC;
        color: var(--where-color);
      }
      .Four_boxes {
        display: flex;
        //多行对齐
        flex-wrap: wrap;
        justify-content: center;

        .box {
          background: linear-gradient(
            177deg,
            var(--background-start) -24.77%,
            var(--background-end) 97.53%
          );
          opacity: 0.8;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: var(--box-shadow-light);
          transition: box-shadow 0.5s;
          border: 1px solid var(--where-border);
          &:hover {
            border: 1px solid #3edfcf;
          }
          .box_title {
            font-family: Lantinghei SC;
            color: #3edfcf;
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
          }
          .box_text {
            margin-top: 14px;
            margin-bottom: 26px;
            color: var(--where-text);
            font-family: Lantinghei SC;
            font-style: normal;
            font-weight: 400;
          }
          .box_button {
            background: var(--where-button);
            border: 1px solid #3edfcf;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: 500;
            color: var(--where-button-color);
          }
        }
      }
    }
    .Data_and_circles {
      margin-top: 100px;
      .Data {
        display: flex;
        justify-content: center;
        align-items: center;
        .value_father {
          display: flex;
          //多行对齐
          flex-wrap: wrap;
          justify-content: start;
          .amount {
            color: var(--data-amount-color);
            font-family: Lantinghei SC;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
          .data_text {
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
    .Utility_Chain {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title {
        color: var(--Utility-title-color);
        font-family: Lantinghei SC;
        font-weight: 400;
      }
      .Utility_Chain_box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .item_title {
          font-family: Inter;
          text-transform: uppercase;
        }
        .item_img {
          width: 60px;
          height: 60px;
          margin-bottom: 9px;
          position: relative;

          background: var(--Utility-item-img);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          border: var(--Utility-item-border);

          img {
            width: 70%;
            height: 70%;
            //过渡
            transition: all 0.5s;
          }

          .hover {
            position: absolute;
            width: 20px;
            right: -4px;
            top: -4px;
            z-index: 1;
            //过渡
            transition: all 0.3s;
          }
        }
        .Utility_Chain_box_item_button {
          border: 1px solid #3edfcf;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: 400;
          background: var(--background-color-button);
          color: #3edfcf;
        }
      }
    }
    .merry_go_round {
      width: 100%;
      .title {
        color: #3edfcf;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 23px;
      }
      .swiper {
        height: 394px;
        // width: 100%;
        position: relative;
        .swiper-slide {
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer; ///鼠标移上去变成手指
          .swiper_img {
            border-radius: 8px;
            flex-shrink: 0;
          }
          .icon {
            position: absolute;
            top: 18px;
            right: 18px;
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            border-radius: 50%;
            background-color: var(--swiper-icon-color);
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .time {
            color: var(--swiper-time-color);
            font-family: Jaldi;
            font-style: normal;
            font-weight: 400;
            margin-top: 11px;
            opacity: 0.8;
          }
          .text {
            color: var(--swiper-time-color);
            font-family: Inter;
            font-weight: 600;
          }
        }
      }
    }
    .Contribute_to_Utility {
      .Create_a_lighter {
        flex-shrink: 0;
        background: linear-gradient(
          180deg,
          rgba(244, 248, 248, 0.05) 0.13%,
          rgba(244, 248, 248, 0) 99.87%
        );
        box-shadow: var(--Contribute-lighter-box-shadow);
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 100;

        .title_one {
          font-weight: 600;
          color: var(--Utility-text-color);
          font-family: Inter;
        }
        .text {
          color: var(--Utility-text-color);
          font-family: Inter;
          font-weight: 400;
        }
        .button_left,
        .button_right {
          border-radius: 6px;
          border: 1px solid #3edfcf;
          display: flex;
          justify-content: center;
          align-items: center;

          .button_text {
            color: var(--where-text);
          }
        }
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

    .Anapplication {
      max-width: 1119px;
      line-height: 20px;
      margin-top: 15px;
      margin-bottom: 28px;
    }
    .button,
    .button_right {
      &:hover {
        // background: linear-gradient(
        //   177deg,
        //   #fff -24.77%,
        //   rgba(255, 255, 255, 0) 97.53%
        // );
        /* shadow for navbar hover */
        box-shadow: 0px 4px 20px 0px rgba(156, 255, 243, 0.3);
      }
    }

    .Where_to_Start {
      padding: 72px 0px 24px 0px;

      .title {
        font-size: 22px;
        font-weight: 400;
        padding-left: 140px;
        margin-bottom: 20px;
      }
      .Four_boxes {
        .box {
          width: 716px;
          border-radius: 12px;
          height: 394px;
          margin: 0px 8px 16px 8px;

          padding: 50px 0 43px 50px;
          &:hover {
            //过渡
            transition: box-shadow 0.5s;
            box-shadow: none;
            background: var(--where-bg);
          }

          .box_text {
            max-width: 420px;
            line-height: 30px;
            font-size: 23px;
          }
          .box_button {
            height: 45px;
            padding: 12px 16px; /* 添加适当的内边距 */
            border-radius: 8px;
            &:hover {
              box-shadow: 0px 4px 20px 0px var(--where-button-shadow);
              background: linear-gradient(
                177deg,
                var(--where-button-hover) -4.77%,
                var(--where-button-hover-end) 97.53%
              );

              border: 1px solid var(--where-button-border);
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
      background: var(--home-star-bg);
      background-size: cover;
      .Data {
        margin-top: 30px;
        flex: 1;
        .value_father {
          .data_value {
            margin-left: 48px;
            margin-bottom: 40px;
            background: var(--second-home-data_value-bg);
            box-shadow: var(--second-home-data_value-shadow);
            filter: var(--second-home-data_value-filter);
            backdrop-filter: blur(2px);
            padding: 26px 55px 47px 26px;
            border-radius: 20px 40px 20px 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-width: 304px;

            .amount {
              font-size: 40px;
              margin-top: 40px;
            }
            .data_text {
              color: var(--data-data_text-color);
            }
          }
        }
      }
      .Star_six {
        flex: 1;
        position: relative;

        .star_bg {
          width: 0px;
          height: 0px;
          box-shadow: 14px 14px 20px 13px rgba(86, 255, 239, 0.2); /* 阴影效果 */
          border-radius: 50%;
          position: absolute;
          left: 8px;
          top: -151px;
        }
        .star_bg1 {
          width: 0px;
          height: 0px;
          box-shadow: 20px 20px 25px 15px rgba(86, 255, 239, 0.4); /* 阴影效果 */
          border-radius: 50%; /* 可选的圆角效果，如果需要的话 */

          position: absolute;
          left: 112px;
          top: -40px;
        }

        .star_bg2 {
          width: 0px;
          height: 0px;
          box-shadow: 24px 24px 28px 15px rgba(86, 255, 239, 0.4); /* 阴影效果 */
          border-radius: 50%; /* 可选的圆角效果，如果需要的话 */

          position: absolute;
          left: 255px;
          top: 22px;
        }
        .star_bg3 {
          width: 0px;
          height: 0px;
          box-shadow: 20px 20px 25px 15px rgba(86, 255, 239, 0.4); /* 阴影效果 */
          border-radius: 50%; /* 可选的圆角效果，如果需要的话 */

          position: absolute;
          left: 427px;
          top: 9px;
        }
        .star_bg4 {
          width: 0px;
          height: 0px;
          box-shadow: 20px 20px 25px 15px rgba(86, 255, 239, 0.4); /* 阴影效果 */
          border-radius: 50%; /* 可选的圆角效果，如果需要的话 */

          position: absolute;
          left: 398px;
          top: -79px;
        }

        .star_bg5 {
          width: 0px;
          height: 0px;
          box-shadow: 14px 14px 20px 13px rgba(86, 255, 239, 0.2); /* 阴影效果 */
          border-radius: 50%;
          position: absolute;
          left: 520px;
          top: -96px;
        }

        .Star_line,
        .Star_line1,
        .Star_line2,
        .Star_line3,
        .Star_line4,
        .Star_line5 {
          width: 162.161px;
          height: 1.3px;
          background: var(--second-home-Star_line-background);

          position: absolute;
        }
        .Star_line {
          left: -10px;
          top: -84px;
          transform: rotate(47deg);
        }

        .Star_line1 {
          left: 128px;
          top: 14px;
          transform: rotate(24deg);
        }
        .Star_line2 {
          left: 290px;
          top: 36px;
          transform: rotate(175deg);
        }
        .Star_line3 {
          left: 264px;
          top: -6px;
          transform: rotate(142deg);
        }
        .Star_line4 {
          left: 400px;
          top: -71px;
          transform: rotate(170deg);
        }

        .Star_text,
        .Star_text1,
        .Star_text2,
        .Star_text3,
        .Star_text4,
        .Star_text5 {
          color: var(--second-home-Star_text-color);
          font-family: "Kumbh Sans";
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          position: absolute;
        }
        .Star_text {
          left: 51px;
          top: -153px;
        }
        .Star_text1 {
          left: 140px;
          top: -61px;
        }
        .Star_text2 {
          left: 248px;
          top: 75px;
          font-size: 18px;
        }
        .Star_text3 {
          left: 468px;
          top: 17px;
        }
        .Star_text4 {
          left: 355px;
          top: -96px;
        }
        .Star_text5 {
          left: 498px;
          top: -123px;
        }
      }
    }
    .Utility_Chain {
      padding: 59px 140px 0 140px;

      .title {
        margin-bottom: 90px;
        text-align: center;
        font-size: 24px;
      }
      .Utility_Chain_box {
        .box_item {
          padding: 0px 0 0 20px;
          margin-bottom: 62px;
          border-radius: 12px;
          width: 340px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          .item_title {
            font-size: 16px;
            font-weight: 700;
            //过渡
            transition: all 0.3s;
          }
          .item_text {
            color: var(--Utility-item-text);
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            max-width: 300px;
            margin-top: 6px;
          }

          .Utility_Chain_box_item_button {
            width: 59px;
            height: 22px;
            border-radius: 4px;
            margin-bottom: 14px;
          }
        }
      }
    }

    .merry_go_round {
      // height: 672px;
      padding: 0 110px;

      .title {
        margin-left: 30px;
        margin-top: 123px;
      }

      .swiper {
        width: 93%;

        .swiper-slide {
          .time {
            font-size: 15px;
            line-height: 21px; /* 21.825px */
            letter-spacing: 0.3px;
          }
          .text {
            font-size: 17px;
            line-height: 24.055px; /* 24.055px */
          }
        }

        // *这将在滑动器的左侧创建模糊效果
        .shadow_left {
          transform: rotate(180deg);
          width: 232px;
          height: 404px;
          position: absolute;
          left: -50px;
          top: -50px;
          bottom: 0;
          background: linear-gradient(
            -90deg,
            var(--swiper-shadow-left) 43.44%,
            var(--swiper-shadow-left1) 90%
          );
          z-index: 2; /* 确保阴影在内容之上 */
        }
        // *这将在滑动器的右侧创建模糊效果
        .shadow_right {
          // 旋转100deg;
          transform: rotate(180deg);
          width: 280px;
          height: 404px;
          position: absolute;
          right: -100px;
          top: -10px;
          bottom: 0;
          background: linear-gradient(
            90deg,
            var(--swiper-shadow-left) 43.44%,
            var(--swiper-shadow-left1) 90%
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

        background-color: var(--swiper-prev-bg) !important;
        color: #fff !important;
      }
      .swiper-button-prev.swiper-button-disabled,
      .swiper-button-next.swiper-button-disabled {
        background-color: var(--swiper-prev-disabled-bg) !important;
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
      position: relative;
      // background: linear-gradient(275deg, #f6f9f9 1.38%, #fffefb 97.15%);

      .Contribute_to_Utility_bg {
        width: 100%;
        height: 100%;
        display: flex;
        top: 0;
        z-index: 1;
        justify-content: end;
        position: absolute;
        right: 10px;
      }
      .Create_a_lighter {
        width: 657px;
        height: 394px;

        border-radius: 10px;
        backdrop-filter: blur(7px);
        position: absolute;
        left: 20%;
        top: 20%;
        padding-top: 64px;
        .title_one {
          font-size: 30px;
          max-width: 570px;
        }
        .text {
          margin-top: 24px;
          max-width: 454px;
          font-size: 14px;
          line-height: 20px;
        }
        .button_father {
          display: flex;

          margin-top: 50px;

          .button_left,
          .button_right {
            width: 133px;
            height: 42px;

            .button_text {
              font-size: 14px;
              font-weight: 500;
              color: var(--where-text);
              margin-right: 8px;
              margin-left: 12px;
            }
          }
          .button_left,
          .button_right {
            margin-right: 60px;

            &:hover {
              background: var(--Contribute-button_left-bg);
              border: var(--Contribute-button_left-border);
              box-shadow: 0px 4px 20px 0px rgba(156, 255, 243, 0.3);
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
        position: absolute;
        right: 0;
        top: 0;
        z-index: 2;
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
@media (max-width: 1145px) {
  .home_view {
    .container {
      .Data_and_circles {
        width: 100%;
        height: 1000px;
        display: flex;
        padding: 60px 0px 30px 0px;
        margin-bottom: 30px;
        //更改主轴的方向
        flex-direction: column;
        align-items: center;
        background: var(--second-phone-home-data_value-bg);
        background-size: cover;

        .Data {
          width: 100%;
          margin-top: 28px;
          padding: 0 20px;

          .value_father {
            width: 100%;

            .data_value {
              width: 100%;
              // height: 118px;
              padding: 26px 100px;
              background: var(--second-home-data_value-bg);
              box-shadow: var(--second-home-data_value-shadow);
              filter: var(--second-home-data_value-filter);
              backdrop-filter: blur(2px);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              border-radius: 12px;
              margin-bottom: 10px;
              .amount {
                padding-bottom: 4px;
                margin-bottom: 4px;
                font-size: 28px;
                font-weight: 400;
              }
              .data_text {
                color: var(--data-data_text-color);
              }
            }
          }
        }
        .Star_six {
          width: 355px;
          // background: #000;
          height: 210px;
          position: relative;

          .star_bg {
            width: 0px;
            height: 0px;
            box-shadow: 10px 10px 10px 11px rgba(86, 255, 239, 0.2); /* 阴影效果 */
            border-radius: 50%;
            position: absolute;
            left: 10px;
            top: 0px;
          }
          .star_bg1 {
            width: 0px;
            height: 0px;
            box-shadow: 10px 10px 11px 10px rgba(86, 255, 239, 0.4); /* 阴影效果 */
            border-radius: 50%; /* 可选的圆角效果，如果需要的话 */

            position: absolute;
            left: 54px;
            top: 106px;
          }

          .star_bg2 {
            width: 0px;
            height: 0px;
            box-shadow: 17px 17px 15px 14px rgba(86, 255, 239, 0.4); /* 阴影效果 */
            border-radius: 50%; /* 可选的圆角效果，如果需要的话 */

            position: absolute;
            left: 160px;
            top: 148px;
          }
          .star_bg3 {
            width: 0px;
            height: 0px;
            box-shadow: 10px 10px 11px 10px rgba(86, 255, 239, 0.4); /* 阴影效果 */
            border-radius: 50%; /* 可选的圆角效果，如果需要的话 */

            position: absolute;
            left: 290px;
            top: 120px;
          }
          .star_bg4 {
            width: 0px;
            height: 0px;
            box-shadow: 10px 10px 11px 10px rgba(86, 255, 239, 0.4); /* 阴影效果 */
            border-radius: 50%; /* 可选的圆角效果，如果需要的话 */

            position: absolute;
            left: 237px;
            top: 69px;
          }

          .star_bg5 {
            width: 0px;
            height: 0px;
            box-shadow: 10px 10px 10px 11px rgba(86, 255, 239, 0.2); /* 阴影效果 */
            border-radius: 50%;
            position: absolute;
            left: 314px;
            top: 46px;
          }

          .Star_line,
          .Star_line1,
          .Star_line2,
          .Star_line3,
          .Star_line4,
          .Star_line5 {
            width: 105px;
            height: 1.3px;
            background: var(--second-home-Star_line-background);
            position: absolute;
          }
          .Star_line {
            left: -8px;
            top: 69px;
            transform: rotate(67deg);
          }

          .Star_line1 {
            left: 66px;
            top: 141px;
            transform: rotate(24deg);
          }
          .Star_line2 {
            left: 192px;
            top: 148px;
            transform: rotate(165deg);
          }
          .Star_line3 {
            left: 154px;
            top: 130px;
            transform: rotate(128deg);
          }
          .Star_line4 {
            left: 230px;
            top: 66px;
            transform: rotate(162deg);
          }

          .Star_text,
          .Star_text1,
          .Star_text2,
          .Star_text3,
          .Star_text4,
          .Star_text5 {
            color: var(--second-home-Star_text-color);
            font-family: "Kumbh Sans";
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: uppercase;
            position: absolute;
            font-size: 13px;
            letter-spacing: 0.39px;
          }
          .Star_text {
            left: 34px;
            top: -2px;
          }
          .Star_text1 {
            left: 78px;
            top: 97px;
          }
          .Star_text2 {
            left: 152px;
            top: 187px;
            font-size: 14px;
          }
          .Star_text3 {
            left: 270px;
            top: 148px;
          }
          .Star_text4 {
            left: 198px;
            top: 54px;
          }
          .Star_text5 {
            left: 293px;
            top: 24px;
          }
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .home_view {
    .container {
      .Welcome {
        padding-top: 24px;

        .Utility {
          max-width: 306px;
          .Utility_text {
            font-size: 24px;
            // line-height: 36px; /* 36.12px */
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
          font-weight: 400;
          line-height: normal;
          margin-left: 20px;
          margin-bottom: 12px;
        }
        .Four_boxes {
          .box {
            width: 350px;
            border-radius: 8px;
            min-height: 189px;
            margin: 0px 4px 10px 4px;
            border-radius: 8px;
            opacity: 0.8;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 14px;

            .box_text {
              max-width: 322px;
              font-size: 14px;
              line-height: 21px;
              letter-spacing: 0.42px;
            }
            .box_button {
              height: 33px;
              padding: 6px 10px; /* 添加适当的内边距 */
              border-radius: 6px;
            }
          }
        }
      }
      .Utility_Chain {
        width: 100%;
        padding: 0 20px;

        .title {
          margin-bottom: 32px;
          font-size: 18px;
        }
        .Utility_Chain_box {
          .box_item {
            width: 160px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            margin-bottom: 26px;
            .item_title {
              font-size: 12px;
              font-weight: 600;
            }
            .item_text {
              color: var(--Utility-item-text);
              font-family: Inter;
              font-size: 8px;
              font-style: normal;
              font-weight: 400;
              line-height: 11px; /* 11.92px */
              max-width: 160px;
              margin-top: 2px;
            }

            .Utility_Chain_box_item_button {
              width: 48px;
              height: 19px;
              border-radius: 2px;
              margin-bottom: 10px;
            }
          }
        }
      }

      .merry_go_round {
        padding: 36px 20px 30px 20px;

        .swiper {
          width: 100%;
          height: 100% !important;
          justify-content: center;
          .swiper-slide {
            align-items: left;
            .swiper_img {
              width: 100% !important;
              height: 100% !important;
            }

            .time {
              font-size: 14px;
              line-height: 20px; /* 20.37px */
              letter-spacing: 0.28px;
            }
            .text {
              font-size: 16px;
              font-style: normal;
              line-height: 22px; /* 22.64px */
              margin-bottom: 50px;
              color: var(--swiper-text-color) !important;
            }
          }
          /* 设置未激活状态下的圆点颜色 */
          :deep(.swiper-pagination .swiper-pagination-bullet) {
            width: 8px;
            height: 8px;
            background: #a5a5a5;
            border-radius: 8px;
          }

          // /* 设置激活（当前选中）状态下的圆点颜色 */
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
        // background: linear-gradient(283deg, #f6f9f9 29.38%, #fffefb 93.23%);
        position: relative;
        overflow: hidden;
        //margin-bottom: 53px;
        padding: 30px 0;

        .Contribute_to_Utility_bg {
          position: absolute;
          justify-content: center;
          right: 0;
          top: 30px;
        }

        .Create_a_lighter {
          width: 350px;
          height: 161px;
          position: absolute;
          bottom: 28px;
          left: 50;
          padding-top: 17px;
          border-radius: 10px;

          box-shadow: var(--Contribute-lighter-box-shadow1);
          backdrop-filter: blur(var(--Contribute-lighter-box-filter));

          .title_one {
            font-size: 13px;
            font-style: normal;
            line-height: 18px; /* 18.187px */
            max-width: 295px;
          }
          .text {
            margin-top: 8px;
            max-width: 297px;
            height: 62px;
            font-size: 8px;
            font-style: normal;
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

              align-items: center;
              .button_text {
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

@media (max-width: 432px) {
  .Create_a_lighter {
    width: 320px !important;
  }
}
@media (max-width: 1450px) {
  .ellipse_dev_card {
    flex: 40%;
  }
  .ellipse_dev {
    height: 90vh;
    .top {
      width: 1424px;
      height: 50%;
    }
  }
}
@media (max-width: 865px) {
  .ellipse_dev_card {
    flex: 100%;
  }
  .ellipse_dev {
    height: 1696px;
    .top {
      width: 1424px;
      height: 610px;
    }
  }
}
@media (max-width: 1052px) {
  .top {
    .vuvietduc {
      left: 384px !important;
      top: 200px !important;
      height: 20px;
    }
    .vuvietduc0 {
      right: 374px !important;
      top: 380px !important;
      height: 12px;
    }
    .vuvietduc1 {
      left: 314px !important;
      top: 280px !important;
      height: 12px;
    }
    .vuvietduc2 {
      left: 354px !important;
      top: 340px !important;
      height: 12px;
    }
    .vuvietduc3 {
      left: 414px !important;
      top: 290px !important;
      height: 12px;
    }
    .vuvietduc4 {
      left: 534px !important;
      top: 350px !important;
      height: 13px;
    }
    .vuvietduc5 {
      right: 514px !important;
      top: 300px !important;
    }
    .vuvietduc6 {
      right: 454px !important;
      top: 320px !important;
      height: 13px;
    }

    .vuvietduc7 {
      right: 494px !important;
      top: 260px !important;
      height: 11px;
    }
    .vuvietduc8 {
      right: 354px !important;
      top: 230px !important;
      height: 11px;
    }
    .vuvietduc9 {
      right: 354px !important;
      top: 300px !important;
    }
    .Utility_Holder {
      left: 504px !important;
      top: 200px !important;
    }

    .Utility_Miner {
      right: 504px !important;
      top: 200px !important;
    }
    .AI_developer {
      left: 704px !important;
      top: 360px !important;
    }
    .Git_Power {
      right: 464px !important;
      top: 420px !important;
    }
    .UNC {
      left: 704px !important;
      top: 160px !important;
    }
    .UNC1 {
      left: 504px !important;
      top: 360px !important;
    }
    .UNC2 {
      right: 504px !important;
      top: 360px !important;
    }
    .SingulardtvSngls {
      right: 504px !important;
      top: 160px !important;
    }
  }
}

@media (max-width: 723px) {
  .ellipse_dev {
    height: 1661.2px;
    .top {
      width: 1352.8px;
      height: 579.5px;
      .vuvietduc {
        left: 484px !important;
        top: 200px !important;
        height: 20px;
      }
      .vuvietduc0 {
        right: 474px !important;
        top: 380px !important;
        height: 12px;
      }
      .vuvietduc1 {
        left: 314px !important;
        top: 280px !important;
        height: 12px;
      }
      .vuvietduc2 {
        left: 354px !important;
        top: 340px !important;
        height: 12px;
      }
      .vuvietduc3 {
        left: 414px !important;
        top: 290px !important;
        height: 12px;
      }
      .vuvietduc4 {
        left: 534px !important;
        top: 350px !important;
        height: 13px;
      }
      .vuvietduc5 {
        right: 514px !important;
        top: 300px !important;
      }
      .vuvietduc6 {
        right: 454px !important;
        top: 320px !important;
        height: 13px;
      }

      .vuvietduc7 {
        right: 494px !important;
        top: 260px !important;
        height: 11px;
      }
      .vuvietduc8 {
        right: 354px !important;
        top: 230px !important;
        height: 11px;
      }
      .vuvietduc9 {
        right: 354px !important;
        top: 300px !important;
      }
      .Utility_Holder {
        left: 544px !important;
        top: 200px !important;
      }

      .Utility_Miner {
        right: 544px !important;
        top: 200px !important;
      }
      .AI_developer {
        left: 664px !important;
        top: 330px !important;
      }
      .Git_Power {
        right: 564px !important;
        top: 420px !important;
      }
      .UNC {
        left: 654px !important;
        top: 160px !important;
      }
      .UNC1 {
        left: 554px !important;
        top: 320px !important;
      }
      .UNC2 {
        right: 504px !important;
        top: 310px !important;
      }
      .SingulardtvSngls {
        right: 504px !important;
        top: 160px !important;
      }
    }
  }
}
</style>
