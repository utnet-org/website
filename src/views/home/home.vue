<script setup lang="ts" name="HomeView">
// 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import { defineComponent } from 'vue'
// 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import { Swiper, SwiperSlide } from 'swiper/vue'
// 单独导入所需的Swiper模块
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules'
// 导入Swiper的样式
import 'swiper/swiper-bundle.css'
import 'swiper/less'
import 'swiper/css/pagination' // 轮播图底面的小圆点
// 引入Pagination模块
import SwiperCore from 'swiper'
SwiperCore.use([Pagination])
import 'swiper/less/navigation'
import 'swiper/css/pagination'
import { computed, onMounted, onUnmounted, ref, toRef, watch } from 'vue'
import { getStatistics } from '@/api/home'
import { useI18n } from 'vue-i18n'
import { openNewPage } from '@/utils/request'
import router from '@/router'
import useStore from '@/store'
import { storeToRefs } from 'pinia'

const { home } = useStore()
const { theme } = storeToRefs(home)
const { locale } = useI18n()
const res = ref() //^ 数据 和 圆 Data and circles的数据
const Data_arr = ref() //^ Where to Start的数据
const width = ref(window.innerWidth)
const height = ref(window.innerHeight)
const text_utility_zh = `<span style='font-weight: 500;font-family: Inter;'>助力UtilityNet</span> 开源社区，共建革命性应用型Web3`
const text_utility_en = `<span style='font-weight: 500;font-family: Inter;'>Help UtilityNet</span> open source community to build a revolutionary application Web3`
const updatedWidth = function () {
  width.value = window.innerWidth
  height.value = window.innerHeight
  updateUtilityArr() // 初始设置
}
const phaseArrowb = ref(false)
const phaseArrowb1 = ref(false)

onMounted(async () => {
  updateUtilityArr() // 初始设置
  const { data } = await getStatistics()
  res.value = data
  window.addEventListener('resize', updatedWidth)
  Data_arr.value = [
    {
      amount:
        width.value > 834
          ? `<span style='font-size: 26px;'>$</span>${res.value?.aiPower.toLocaleString()}`
          : `<span style='font-size: 16px;'>$</span>${res.value?.aiPower.toLocaleString()}`,
      text: 'home.UNC_PRICE'
    },
    {
      amount: `${res.value?.totalMiners?.toLocaleString()}K`,
      text: 'home.NODES'
    },
    {
      amount:
        width.value > 834
          ? "<span style='font-size: 26px;'>$</span>1,221,120K"
          : "<span style='font-size: 16px;'>$</span>1,221,120K",
      text: 'home.Transaction_Today'
    },

    {
      amount:
        width.value > 834
          ? `${res.value?.activeMiners.toLocaleString()}M <span style='font-size: 26px;'> tflops</span>`
          : `${res.value?.activeMiners.toLocaleString()}M <span style='font-size: 16px;'>tflops</span>`,
      text: 'home.Computational_Power_Synthesis'
    }
  ]
  const scrollingImage = document.getElementById(
    'scrollingImage'
  ) as HTMLImageElement | null
  const scrollingImageBottom = document.getElementById(
    'scrollingImageBottom'
  ) as HTMLImageElement | null
  if (scrollingImage) {
    let isPaused = false

    scrollingImage.addEventListener('click', () => {
      if (isPaused) {
        scrollingImage.classList.remove('paused')
      } else {
        scrollingImage.classList.add('paused')
      }
      isPaused = !isPaused
    })
  } else {
    console.error('Element with ID "scrollingImage" not found.')
  }
  if (scrollingImageBottom) {
    let isPaused = false

    scrollingImageBottom.addEventListener('click', () => {
      if (isPaused) {
        scrollingImageBottom.classList.remove('paused')
      } else {
        scrollingImageBottom.classList.add('paused')
      }
      isPaused = !isPaused
    })
  } else {
    console.error('Element with ID "scrollingImage" not found.')
  }
})

//! Where to Start 鼠标移入
function WhereChange(index: number) {
  //当前的为true
  Where_arr.value[index].hover = true
  //其他的为false
  Where_arr.value.forEach((item, i) => {
    if (i !== index) {
      item.hover = false
    }
  })
}
//! Where to Start 鼠标移出
function WhereChangeli() {
  //其他的为false
  Where_arr.value.forEach((item, i) => {
    item.hover = false
  })
}

interface UtilityItem {
  title: string
  text: string
  img: string
  isclick: boolean
}

const Utility_arr = ref<UtilityItem[]>([]) // 显式指定数组元素类型

const updateUtilityArr = () => {
  Utility_arr.value =
    width.value > 834
      ? [
          {
            title: 'home.UNC_Node',
            text: 'home.Provides_solutions_for',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_one.svg',

            isclick: false //鼠标移入移出
          },
          {
            title: 'home.UNC_Mining',
            text: 'home.The_computing_power',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_two.svg',
            isclick: false
          },
          {
            title: 'home.UNC_work',
            text: 'home.The_actual_computing',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_three.svg',
            isclick: false
          },
          {
            title: 'home.unc_Wasm',
            text: 'home.Integrated_WebAssembly_virtual',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_four.svg',
            isclick: false
          },
          {
            title: 'home.UNC_chain_Explorer',
            text: 'home.Search_Information_data',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_five.svg',
            isclick: false
          },
          {
            title: 'home.UNC_wallet',
            text: 'home.A_asset_account',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_six.svg',

            isclick: false
          },
          {
            title: 'home.hashing_power',
            text: 'home.The_first_computing',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_seven.svg',
            isclick: false
          },
          {
            title: 'home.Testnet_Faucet',
            text: 'home.Test_the_node',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_eight.svg',
            isclick: false
          }
        ]
      : [
          {
            title: 'home.UNC_Node',
            text: 'home.Provides_solutions_for',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_one_phone.svg',
            isclick: false //鼠标移入移出
          },
          {
            title: 'home.UNC_Mining',
            text: 'home.The_computing_power',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_two_phone.svg',
            isclick: false
          },
          {
            title: 'home.UNC_work',
            text: 'home.The_actual_computing',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_three_phone.svg',
            isclick: false
          },
          {
            title: 'home.unc_Wasm',
            text: 'home.Integrated_WebAssembly_virtual',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_four_phone.svg',
            isclick: false
          },

          {
            title: 'home.hashing_power',
            text: 'home.The_first_computing',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_five_phone.svg',
            isclick: false
          },
          {
            title: 'home.Testnet_Faucet',
            text: 'home.Test_the_node',
            img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/Frame_six_phone.svg',
            isclick: false
          }
        ]
}

//^ Utility Chain Scaling Solutions 鼠标移入
function UtilityChainChange(index: number) {
  //当前的为true
  Utility_arr.value[index].isclick = true
  //其他的为false
  Utility_arr.value.forEach((item, i) => {
    if (i !== index) {
      item.isclick = false
    }
  })
}
//^ Utility Chain Scaling Solutions 鼠标移出
function UtilityChainChangeli() {
  //设置所有的isclick为false
  Utility_arr.value.forEach((item, i) => {
    item.isclick = false
  })
}

// ~ 走马灯里面的一堆图标数据

// ~走马灯  创建一个重复的图片数组，用于无缝轮播
// const duplicatedImages = [...imageSources, ...imageSources, ...imageSources];
// ~走马灯  控制轮播方向
const isForward = ref(true)
// ~走马灯  控制轮播是否进行
const isPlaying = ref(false)
//~走马灯 开始轮播的函数
function startCarousel() {
  isPlaying.value = true
  isForward.value = false
}
// ~走马灯  停止轮播的函数，并逆向移动到第一张图片
function stopCarousel() {
  isForward.value = true // 重置轮播方向
}

// & 轮播图数据
const merryGoRound_arr = ref([
  {
    id: 0,
    img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/F9iRJn8bwAAPRhl.jpeg',
    time: 'September 21, 2023',
    text: 'Calculate demand analysis and the next tuyere',
    isswiperenter: false
  },
  {
    id: 1,
    img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/article_bgc_two.png',
    time: 'September 21, 2023',
    text: 'Calculate demand analysis and the next tuyere',
    isswiperenter: false
  },
  {
    id: 2,
    img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/article_bgc_three.png',
    time: 'September 21, 2023',
    text: 'Decentralized computing power equals edge computing',
    isswiperenter: false
  },
  {
    id: 3,
    img: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/article_bgc_four.png',
    time: 'September 21, 2023',
    text: 'An encrypted world without wasted computing power',
    isswiperenter: false
  }
])
// & swiper实例
const mySwiper = ref()
// & 当前活动swiper的索引
const indexNum = ref(0)
// & 轮播图 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar]
// & 轮播图 更改当前活动swiper
const onSlideChange = (swiper: { activeIndex: any }) => {
  // & 轮播图 确定当前活动swiper的索引，方便阴影的显示
  indexNum.value = swiper.activeIndex
}
// & 轮播图 swiper的配置左右的箭头
const navigation = ref({
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
})

const jumpNews = (id: number) => {
  router.push({
    path: '/news',
    query: {
      msg: id
    }
  })
}

const ani_btn_s = ref(0)

onUnmounted(() => {
  window.removeEventListener('resize', updatedWidth)
})

const setVedio = () => {
  const video = document.getElementById('video11') as HTMLVideoElement
  video.play()
}

//! Where to Start的数据
const Where_arr = ref([
  {
    title: 'home.Builder',
    text: 'home.You_can_try',
    hover: false,
    button: 'home.Build_DOC',
    link: 'https://wiki.utlab.io/docs/node/introduction'
  },
  {
    title: 'home.MINER',
    text: 'home.You_can_get_UNC',
    hover: false,
    button: 'home.Learn_More',
    link: 'https://wiki.utlab.io/docs/computing-power-supplier/introduce'
  },
  {
    title: 'home.UNC_WALLET',
    text: 'home.The_UNC_Wallet',
    hover: false,
    button: 'home.Explore_Wallet',
    link:
      width.value > 834
        ? '/soloutions/utility_wallet'
        : '/soloutions/mp_utility_wallet'
  },
  {
    title: 'home.Computing_Power_users',
    text: 'home.You_can_rent',
    hover: false,
    button: 'home.Develop',
    link: width.value > 834 ? '/get_power' : '/soloutions/mp_hashing_power'
  }
])

const fourdata = [
  {
    title: 'home.Developers',
    text: ['home.Developers_text1'],
    button: 'home.Join_Ecosystem'
  },
  {
    title: 'home.Computing_power_supply',
    text: [
      'home.Computing_power_supply_text1',
      'home.Computing_power_supply_text2'
    ],
    button: 'home.Mining'
  },
  {
    title: 'home.Token_holder',
    text: [
      'home.Computing_power_supply_text2',
      'home.Token_holder_text1',
      'home.Token_holder_text2'
    ],
    button: 'home.Check_Wallet'
  },
  {
    title: 'home.Computing_power_renter',
    text: ['home.Computing_power_renter_text1'],
    button: 'home.Rent'
  }
]
const Recent_Highlights_data = ref<RecentHighlights[]>([
  {
    item: [
      {
        id: 0,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights2.png',
        title: 'Calculate demand analysis and the next tuyere1',
        time: 'September 21, 2023'
      },
      {
        id: 1,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights3.png',
        title: 'Calculate demand analysis and the next tuyere2',
        time: 'September 21, 2023'
      },
      {
        id: 2,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights1.png',
        title: 'Calculate demand analysis and the next tuyere3',
        time: 'September 21, 2023'
      },
      {
        id: 3,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights2.png',
        title: 'Calculate demand analysis and the next tuyere4',
        time: 'September 21, 2023'
      },
      {
        id: 4,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights3.png',
        title: 'Calculate demand analysis and the next tuyere5',
        time: 'September 21, 2023'
      },
      {
        id: 5,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights1.png',
        title: 'Calculate demand analysis and the next tuyere6',
        time: 'September 21, 2023'
      }
    ]
  },
  {
    item: [
      {
        id: 6,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights2.png',
        title: 'Calculate demand analysis and the next tuyere1',
        time: 'September 21, 2023'
      },
      {
        id: 7,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights3.png',
        title: 'Calculate demand analysis and the next tuyere2',
        time: 'September 21, 2023'
      },
      {
        id: 8,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights1.png',
        title: 'Calculate demand analysis and the next tuyere3',
        time: 'September 21, 2023'
      },
      {
        id: 9,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights2.png',
        title: 'Calculate demand analysis and the next tuyere4',
        time: 'September 21, 2023'
      },
      {
        id: 10,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights3.png',
        title: 'Calculate demand analysis and the next tuyere5',
        time: 'September 21, 2023'
      },
      {
        id: 11,
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights1.png',
        title: 'Calculate demand analysis and the next tuyere6',
        time: 'September 21, 2023'
      }
    ]
  }
])
const Recent_Highlights_data1 = ref([
  {
    id: 0,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights2.png',
    title: 'Calculate demand analysis and the next tuyere1',
    time: 'September 21, 2023'
  },
  {
    id: 1,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights3.png',
    title: 'Calculate demand analysis and the next tuyere2',
    time: 'September 21, 2023'
  },
  {
    id: 2,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights1.png',
    title: 'Calculate demand analysis and the next tuyere3',
    time: 'September 21, 2023'
  },
  {
    id: 3,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights2.png',
    title: 'Calculate demand analysis and the next tuyere4',
    time: 'September 21, 2023'
  },
  {
    id: 4,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights3.png',
    title: 'Calculate demand analysis and the next tuyere5',
    time: 'September 21, 2023'
  },
  {
    id: 5,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights1.png',
    title: 'Calculate demand analysis and the next tuyere6',
    time: 'September 21, 2023'
  },

  {
    id: 6,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights2.png',
    title: 'Calculate demand analysis and the next tuyere1',
    time: 'September 21, 2023'
  },
  {
    id: 7,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights3.png',
    title: 'Calculate demand analysis and the next tuyere2',
    time: 'September 21, 2023'
  },
  {
    id: 8,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights1.png',
    title: 'Calculate demand analysis and the next tuyere3',
    time: 'September 21, 2023'
  },
  {
    id: 9,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights2.png',
    title: 'Calculate demand analysis and the next tuyere4',
    time: 'September 21, 2023'
  },
  {
    id: 10,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights3.png',
    title: 'Calculate demand analysis and the next tuyere5',
    time: 'September 21, 2023'
  },
  {
    id: 11,
    img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights1.png',
    title: 'Calculate demand analysis and the next tuyere6',
    time: 'September 21, 2023'
  }
])
export interface RecentHighlights {
  item: Array<{ id: number; img: string; title: string; time: string }>
}
const UtilityNet_Basic_box_data = ref([
  {
    title: 'UtilityNetwork',
    text: 'A high-performance distributed computing resource network.',
    name: 'UtilityNet_Basic_box_imparity1'
  },
  {
    title: 'UNC SCAN',
    text: 'Block explorer for analyzing and querying computing power orders and transaction tools.',
    name: 'UtilityNet_Basic_box_imparity2'
  },
  {
    title: 'UtilityNet Wallet',
    text: 'Convenient asset management tools available as browser extensions, desktop, and mobile versions.',
    name: 'UtilityNet_Basic_box_imparity1'
  },
  {
    title: 'Container Cloud',
    text: 'A distributed cloud computing service platform based on the UtilityNet ecosystem.',
    name: 'UtilityNet_Basic_box_imparity3'
  },
  {
    title: 'Core Galaxy',
    text: 'A decentralized ecosystem credit scoring system.',
    name: 'UtilityNet_Basic_box_imparity2'
  },
  {
    title: 'Mining Tools',
    text: 'Efficient mining utilities, including setup, monitoring, and strategy optimization.',
    name: 'UtilityNet_Basic_box_imparity1'
  },
  {
    title: 'AI Model',
    text: 'A series of pre-trained and customizable AI models supported by UtilityNet.',
    name: 'UtilityNet_Basic_box_imparity2'
  },
  {
    title: 'SDK/DApps',
    text: 'Comprehensive SDKs and decentralized application development environment.',
    name: 'UtilityNet_Basic_box_imparity4'
  }
])
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
              {{ locale === 'en' ? 'English' : '中文简体' }}
            </div>
          </div>
          <div class="Utility">
            <div
              :class="['Utility_text']"
              :style="{ fontSize: width > 996 ? '34px' : '1rem' }"
            >
              UtilityNet:
            </div>
            <div
              class="Welcome_text_title"
              :style="{ fontSize: width > 996 ? '34px' : '1rem' }"
            >
              <!-- {{ $t('home.Welcome_to_utility') }} -->
              Decentralized Digital Chip Network.
            </div>
          </div>
          <div class="Anapplication">
            <!-- {{ $t('home.An_application') }} -->
            Providing chip resources for next-generation edge computing and
            artificial intelligence infrastructure.
          </div>
          <div class="button_father">
            <div
              class="button"
              @click="
                openNewPage('http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf')
              "
            >
              <div class="text">
                {{ $t('home.White_Paper') }}
              </div>
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/right.svg"
                alt=""
                srcset=""
              />
            </div>
            <div
              class="button_right_top"
              @click="openNewPage('/learning/unc_token')"
            >
              <div class="text">
                <!-- {{ $t('home.More') }} -->
                Gets UNC
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
    <!-- <div class="animatino_video">
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
          height: width > 2150 ? '100vh' : '100%'
        }"
      ></video>
    </div> -->
    <!-- !视频end -->

    <div class="container" style="overflow: hidden">
      <div class="Software_Defined_Hardware">
        <div
          class="Software_Defined_Hardware_title"
          :style="{
            background: theme
              ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
              : '',
            'background-clip': theme ? 'text' : '',
            '-webkit-background-clip': theme ? 'text' : '',
            '-webkit-text-fill-color': theme ? 'transparent' : ''
          }"
        >
          Software-Defined Hardware
        </div>
        <div class="Software_Defined_Hardware_text">
          Developers can flexibly program hardware with software to create
          personalized and efficient solutions. The value starting point of
          UtilityNet is its token (UNC) and protocol (POCI), which defines the
          software from the demand side, then shapes the SDK and drivers,
          ultimately influencing the design of the chip – something that has
          never happened before in the history of blockchain!
        </div>
        <div class="Software_Defined_Hardware_box">
          <img
            v-if="width > 834"
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Software_Defined_Hardware_box.png"
            alt=""
          />
          <img
            class="scrolling-image"
            v-else
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/carouseltop.png"
            alt=""
            id="scrollingImage"
          />
          <!-- <div class="S_D_H_box_item_one">
            <div class="S_D_H_box_item_one_btn">Ldentify: value needs</div>
            <div class="S_D_H_box_item_one_btn">Protocol(POCI)</div>
            <div class="S_D_H_box_item_one_btn">Token(UNC)</div>
          </div>
          <SoftwareDH1 style="margin: 0 20px" />
          <div class="S_D_H_box_item_two">
            <div class="S_D_H_box_item_two_top">Software</div>
            <div class="S_D_H_box_item_two_bottom">
              <div class="two_bottom_item">
                <Network />
                <div class="two_bottom_item_btn">Network</div>
              </div>
              <div class="two_bottom_item">
                <Storage />
                <div class="two_bottom_item_btn">Storage</div>
              </div>
              <div class="two_bottom_item">
                <Computing />
                <div class="two_bottom_item_btn">Computing</div>
              </div>
              <div class="two_bottom_item_point">
                <div
                  class="two_bottom_item_point_i"
                  v-for="item in 3"
                  :key="item"
                ></div>
              </div>
            </div>
          </div>
          <SoftwareDH1 style="margin: 0 20px" />
          <div class="S_D_H_box_item_three">
            <div class="S_D_H_box_item_three_i">
              <div class="SDHbtn">SDK</div>
              <div class="SDHbtn">Driver</div>
            </div>
            <div class="Colored_arrow_father">
              <div class="Colored_arrow">
                <div class="colored"></div>
              </div>
            </div>
            <div class="Microkernel">Microkernel</div>
          </div>

          <div class="S_D_H_box_item_four">
            <div class="S_D_H_box_item_four_item_F">
              <div class="S_D_H_box_item_four_item"></div>
              <div class="S_D_H_box_item_four_item1"></div>
              <div class="S_D_H_box_item_four_item1"></div>
              <div class="S_D_H_box_item_four_item"></div>
            </div>
            <div class="S_D_H_box_item_four_item_T">Open Modules</div>
          </div>
          <div class="S_D_H_box_item_five">
            <div class="Hardware">Hardware</div>
            <div class="Chip_Design">
              <div class="Chip_Design_title">Chip Design / Manufacturing</div>
              <div class="Chip_Design_btn_f">
                <div class="Chip_Design_btn">CPU</div>
                <div class="Chip_Design_btn">TPU</div>
                <div class="Chip_Design_btn">GPU</div>
              </div>
              <div class="Chip_Design_point">
                <div
                  class="Chip_Design_point_i"
                  v-for="item in 3"
                  :key="item"
                ></div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
      <div class="POCI_Validation_Logic">
        <div
          class="POCI_Validation_Logic_title"
          :style="{
            background: theme
              ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
              : '',
            'background-clip': theme ? 'text' : '',
            '-webkit-background-clip': theme ? 'text' : '',
            '-webkit-text-fill-color': theme ? 'transparent' : ''
          }"
        >
          POCI Validation Logic
        </div>
        <div class="POCI_Validation_Logic_text">
          Developers can flexibly program hardware with software to create
          personalized and efficient solutions. The value starting point of
          UtilityNet is its token (UNC) and protocol (POCI), which defines the
          software from the demand side, then shapes the SDK and drivers,
          ultimately influencing the design of the chip – something that has
          never happened before in the history of blockchain!
        </div>
        <div class="POCI_Validation_Logic_bg">
          <img
            v-if="width > 834"
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/POCI_Validation_Logic_bg.png"
            alt=""
          />
          <img
            class="scrolling-image"
            v-else
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/carouselbottom.png"
            alt=""
            id="scrollingImageBottom"
          />
        </div>
      </div>
      <div class="UtilityNet_PHASE">
        <div
          v-if="width < 834"
          class="UtilityNet_PHASE_title"
          :style="{
            background: theme
              ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
              : '',
            'background-clip': theme ? 'text' : '',
            '-webkit-background-clip': theme ? 'text' : '',
            '-webkit-text-fill-color': theme ? 'transparent' : ''
          }"
        >
          UtilityNet PHASE-1 Testnet is now launched！
        </div>
        <div style="display: flex; justify-content: space-between; width: 100%">
          <div class="UtilityNet_PHASE_left">
            <div v-if="width > 834" class="UtilityNet_PHASE_title">
              UtilityNet PHASE-1 Testnet is now launched！
            </div>
            <div class="UtilityNet_PHASE_text">
              The current test site is open source, with hundreds of code
              contributors. Together, we are building UtilityNet into a powerful
              distributed computing resource network.You can suggest edits for
              any content on this site, propose outstanding new features, or
              help us troubleshoot errors.
            </div>
            <div class="UtilityNet_PHASE_button_father">
              <div
                class="Rainbow"
                @mouseenter="phaseArrowb = true"
                @mouseleave="phaseArrowb = false"
              >
                <div class="UtilityNet_PHASE_button">
                  More on Testnet
                  <img
                    :style="{
                      filter: !theme
                        ? phaseArrowb
                          ? 'brightness(0%)'
                          : 'brightness(0%)'
                        : phaseArrowb
                        ? 'brightness(100%)'
                        : 'brightness(0%)'
                    }"
                    src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityNet_PHASE_button_arrow.svg"
                    alt=""
                  />
                </div>
              </div>
              <div
                class="Rainbow"
                @mouseenter="phaseArrowb1 = true"
                @mouseleave="phaseArrowb1 = false"
              >
                <div class="UtilityNet_PHASE_button">
                  Join Testnet!
                  <img
                    :style="{
                      filter: !theme
                        ? phaseArrowb1
                          ? 'brightness(0%)'
                          : 'brightness(0%)'
                        : phaseArrowb1
                        ? 'brightness(100%)'
                        : 'brightness(0%)'
                    }"
                    src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityNet_PHASE_button_arrow.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="UtilityNet_PHASE_right">
            <img src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityNet_PHASE_bg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="Key_Players_In">
      <div
        class="Key_Players_In_title"
        :style="{
          background: theme
            ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
            : '',
          'background-clip': theme ? 'text' : '',
          '-webkit-background-clip': theme ? 'text' : '',
          '-webkit-text-fill-color': theme ? 'transparent' : ''
        }"
      >
        Key Players In The Utilitynet Ecosystem
      </div>
      <div class="Key_Players_In_text">
        In the UtilityNet ecosystem, UNC tokens, as the core value vehicle
        within the ecosystem, are key to connecting and incentivizing all
        participants.
      </div>
      <div class="Key_Players_In_Gear_wheel_father">
        <div class="Key_Players_In_Gear_wheel">
          <img
            class="Gear_wheel_bg"
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Key_Players_In_Gear_wheel_bg.png"
            alt=""
          />
          <div
            class="background_Rainbow Key_Players_In_Gear_wheel_Rainbow wheel_Rainbow_position"
          >
            <div class="Key_Players_In_Gear">
              <div class="base_layer">BASE LAYER</div>
              <div class="Key_Players_In_Gear_wheel_button_father">
                <div class="background_Rainbow">
                  <div class="Key_Players_In_Gear_wheel_button">Miners</div>
                </div>
                <div class="background_Rainbow">
                  <div class="Key_Players_In_Gear_wheel_button">Miners</div>
                </div>
              </div>
            </div>
          </div>
          <div class="point_AND_line_father">
            <div class="Gear_wheel_point Gear_wheel_point_left"></div>
            <div class="Gear_wheel_line Gear_wheel_line_long"></div>
            <div class="Gear_wheel_point Gear_wheel_point_right"></div>
            <div class="Gear_wheel_line1 Gear_wheel_line_short"></div>
          </div>
          <div
            class="background_Rainbow Key_Players_In_Gear_wheel_Rainbow wheel_Rainbow_position1"
          >
            <div class="Key_Players_In_Gear">
              <div class="base_layer">BASE LAYER</div>
              <div class="Key_Players_In_Gear_wheel_button_father">
                <div class="background_Rainbow">
                  <div class="Key_Players_In_Gear_wheel_button">Miners</div>
                </div>
                <div class="background_Rainbow">
                  <div class="Key_Players_In_Gear_wheel_button">Miners</div>
                </div>
              </div>
            </div>
          </div>
          <div class="point_AND_line_father1">
            <div class="Gear_wheel_point Gear_wheel_point_left"></div>
            <div class="Gear_wheel_line Gear_wheel_line_long"></div>
            <div class="Gear_wheel_point Gear_wheel_point_right"></div>
            <div class="Gear_wheel_line1 Gear_wheel_line_short"></div>
          </div>
          <div
            class="background_Rainbow Key_Players_In_Gear_wheel_Rainbow wheel_Rainbow_position2"
          >
            <div class="Key_Players_In_Gear">
              <div class="base_layer">BASE LAYER</div>
              <div class="Key_Players_In_Gear_wheel_button_father">
                <div class="background_Rainbow">
                  <div class="Key_Players_In_Gear_wheel_button">Miners</div>
                </div>
                <div class="background_Rainbow">
                  <div class="Key_Players_In_Gear_wheel_button">Miners</div>
                </div>
              </div>
            </div>
          </div>
          <div class="point_AND_line_father2">
            <div class="Gear_wheel_point Gear_wheel_point_left"></div>
            <div class="Gear_wheel_line Gear_wheel_line_long"></div>
            <div class="Gear_wheel_point Gear_wheel_point_right"></div>
            <div class="Gear_wheel_line1 Gear_wheel_line_short"></div>
          </div>
          <div
            class="background_Rainbow Key_Players_In_Gear_wheel_Rainbow wheel_Rainbow_position3"
          >
            <div class="Key_Players_In_Gear">
              <div class="base_layer">BASE LAYER</div>
              <div class="Key_Players_In_Gear_wheel_button_father">
                <div class="background_Rainbow">
                  <div class="Key_Players_In_Gear_wheel_button">Miners</div>
                </div>
                <div class="background_Rainbow">
                  <div class="Key_Players_In_Gear_wheel_button">Miners</div>
                </div>
              </div>
            </div>
          </div>
          <div class="point_AND_line_father3">
            <div class="Gear_wheel_point Gear_wheel_point_left"></div>
            <div class="Gear_wheel_line Gear_wheel_line_long"></div>
            <div class="Gear_wheel_point Gear_wheel_point_right"></div>
            <div class="Gear_wheel_line1 Gear_wheel_line_short"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" style="overflow: hidden">
      <div class="UtilityNet_Basic_Functions">
        <div
          class="UtilityNet_Basic_Functions_title"
          :style="{
            background: theme
              ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
              : '',
            'background-clip': theme ? 'text' : '',
            '-webkit-background-clip': theme ? 'text' : '',
            '-webkit-text-fill-color': theme ? 'transparent' : ''
          }"
        >
          UtilityNet Basic Functions
        </div>
        <div class="UtilityNet_Basic_box_father_F">
          <div
            v-for="(item, index) in UtilityNet_Basic_box_data"
            :key="index"
            class="UtilityNet_Basic_box_father"
            :class="item.name"
          >
            <div class="UtilityNet_Basic_box">
              <div class="f">
                <div class="UtilityNet_Basic_box_title">{{ item.title }}</div>
                <div class="UtilityNet_Basic_box_text">
                  {{ item.text }}
                </div>
              </div>
              <div class="UtilityNet_Basic_box_button_father">
                <div class="UtilityNet_Basic_box_button">
                  <img
                    src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityNet_Basic_Functions_arrow.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="Recent_Highlights">
        <div
          class="Recent_Highlights_title"
          :style="{
            background: theme
              ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
              : '',
            'background-clip': theme ? 'text' : '',
            '-webkit-background-clip': theme ? 'text' : '',
            '-webkit-text-fill-color': theme ? 'transparent' : ''
          }"
        >
          RECENT HIGHLIGHTS
        </div>
        <div class="Recent_Highlights_map">
          <!-- ! 两个按钮 -->
          <div class="swiper_button">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
          <!-- ! 轮播图 -->
          <swiper
            v-if="width > 834"
            :ref="mySwiper"
            :slidesPerView="1"
            :spaceBetween="0"
            :modules="modules"
            :loop="false"
            :navigation="navigation"
            class="swiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="(item, index) in Recent_Highlights_data"
              :key="index"
              class="swiper-slide"
            >
              <div v-for="i in item.item" :key="i.id" class="swiper_item">
                <img class="swiper_img" :src="i.img" alt="" />
                <div class="swiper_title">
                  {{ i.title }}
                </div>
                <div class="swiper_time">
                  {{ i.time }}
                </div>
              </div>
            </swiper-slide>
          </swiper>
          <swiper
            v-if="width < 834"
            :ref="mySwiper"
            :slidesPerView="1"
            :spaceBetween="0"
            :modules="modules"
            :loop="false"
            :navigation="navigation"
            class="swiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="(item, index) in Recent_Highlights_data1"
              :key="index"
              class="swiper-slide"
            >
              <img class="swiper_img" :src="item.img" alt="" />
              <div class="swiper_title">
                {{ item.title }}
              </div>
              <div class="swiper_time">
                {{ item.time }}
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="Join_the_UtilityNet">
        <div class="Join_the_UtilityNet_left">
          <div
            class="Join_the_UtilityNet_title"
            :style="{
              background: theme
                ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
                : '',
              'background-clip': theme ? 'text' : '',
              '-webkit-background-clip': theme ? 'text' : '',
              '-webkit-text-fill-color': theme ? 'transparent' : ''
            }"
          >
            Join the UtilityNet open source community to accelerate building the
            future!
          </div>
          <div class="Join_the_UtilityNet_button_father">
            <div
              class="Join_the_UtilityNet_button"
              @click="openNewPage('/community')"
            >
              Join Us
              <img
                :style="{
                  filter: theme ? 'brightness(100%)' : 'brightness(0%)'
                }"
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityNet_PHASE_button_arrow.svg"
                alt=""
                class="phone_arrow"
              />
            </div>
            <div
              class="Join_the_UtilityNet_button"
              @click="openNewPage('https://github.com/utnet-org')"
            >
              Github
              <img
                class="phone_arrow"
                :style="{
                  filter: theme ? 'brightness(100%)' : 'brightness(0%)'
                }"
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityNet_PHASE_button_arrow.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="Join_the_UtilityNet_right">
          <img src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Join_the_UtilityNet_bg.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
// .background_Rainbow {
//   // background: conic-gradient(
//   //   from var(--radius),
//   //   #00f7e4 0deg,
//   //   #fa00ff 60deg 100deg,
//   //   #ffffff 120deg,
//   //   #ca00c1 158deg 190deg,
//   //   #ffffff 294deg 299deg,
//   //   #fa00ff 320deg,
//   //   #00f7e4 350.5deg 360deg
//   // );
// }
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
      color: var(--home-title-color);
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
          content: '';
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
  .button_right_top {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 141px;
    height: 42px;
    border-radius: 6px;
    border: 1px solid #3edfcf;
    cursor: pointer;
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

  .button_right_top {
    width: 107px;
    height: 42px;
    margin-left: 32px;
  }
}
.home_view {
  background-color: var(--home-background-color);

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
    padding: 0 110px;
  }
}
.Software_Defined_Hardware {
  margin-top: 100px;
  padding: 50px 28px 75px 28px;
  width: 100%;
  border-radius: 12px;
  background: var(--home-background-color-child);
  .Software_Defined_Hardware_title {
    color: var(--home-title-color);
    font-family: Gilroy-Bold;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .Software_Defined_Hardware_text {
    color: var(--home-text-color);
    font-family: Gilroy-Medium;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 155%; /* 31px */
    margin-top: 12px;
    margin-bottom: 70px;
  }
  .Software_Defined_Hardware_box {
    display: flex;
    align-items: center;
    //换行
    // flex-wrap: wrap;
    justify-content: center;
    padding: 50px;
    border-radius: 8px;
    background: #202022;
    box-shadow: 0px 251px 70px 0px rgba(0, 0, 0, 0),
      0px 161px 64px 0px rgba(0, 0, 0, 0.01),
      0px 90px 54px 0px rgba(0, 0, 0, 0.05),
      0px 40px 40px 0px rgba(0, 0, 0, 0.09),
      0px 10px 22px 0px rgba(0, 0, 0, 0.1);
    .S_D_H_box_item_one {
      width: 212.707px;
      height: 291.713px;
      flex-shrink: 0;
      border-radius: 12.155px;
      border: 0.466px solid #2a3433;
      background: linear-gradient(180deg, #24272e 0%, #2b3735 100%);
      box-shadow: 0px 0px 23.6px 0px rgba(234, 105, 255, 0.58);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 18px;
      .S_D_H_box_item_one_btn {
        width: 176.243px;
        height: 72.928px;
        flex-shrink: 0;
        border-radius: 7.293px;
        border: 1.215px solid #000;
        background: #00fff5;
        display: flex;

        justify-content: center;
        align-items: center;

        color: #1e1e1e;
        text-align: center;
        font-family: 'PingFang SC';
        font-size: 15.873px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
    .S_D_H_box_item_two {
      width: 212.707px;
      height: 291.713px;
      flex-shrink: 0;
      border-radius: 12.155px;
      border: 1.215px solid #00fff5;
      .S_D_H_box_item_two_top {
        width: 100%;
        height: 42.541px;
        flex-shrink: 0;
        background: #00fff5;
        color: #1e1e1e;
        text-align: center;
        font-family: 'PingFang SC';
        font-size: 15.873px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .S_D_H_box_item_two_bottom {
        display: flex;
        padding-top: 16px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 22px;
        .two_bottom_item {
          display: flex;
          gap: 21px;
          .two_bottom_item_btn {
            width: 122.155px;
            height: 43.149px;
            flex-shrink: 0;
            border-radius: 2.431px;
            border: 0.608px solid #00fff5;
            background: linear-gradient(
              180deg,
              rgba(0, 255, 245, 0.2) 0%,
              rgba(0, 153, 147, 0.2) 100%
            );

            color: #00fff5;
            text-align: center;
            font-family: 'PingFang SC';
            font-size: 15.873px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            display: flex;

            justify-content: center;
            align-items: center;
          }
        }
        .two_bottom_item_point {
          display: flex;
          margin-left: 50px;
          gap: 5px;
          .two_bottom_item_point_i {
            background: #00fff5;
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
        }
      }
    }
    .S_D_H_box_item_three {
      width: 339.116px;
      height: 291.713px;
      flex-shrink: 0;
      border-radius: 12.155px;
      border: 1.215px dashed #00fff5;

      display: flex;
      justify-content: center;
      align-items: center;

      .S_D_H_box_item_three_i {
        display: flex;
        flex-direction: column;
        gap: 28px;
        .SDHbtn {
          width: 122.155px;
          height: 43.149px;
          flex-shrink: 0;
          border-radius: 7.293px;
          background: #ff00fd;

          color: #1e1e1e;
          text-align: center;
          font-family: 'PingFang SC';
          font-size: 15.873px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .Colored_arrow_father {
        // background: #fff;
        .Colored_arrow {
          width: 58px;
          height: 70px;
          background: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Connector_ine.svg') no-repeat bottom
            right;
          background-size: contain;
          .colored {
            width: 55%;
            height: 50%;
            background: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Connector_ine1.svg');
          }
        }
      }
      .Microkernel {
        width: 102.099px;
        height: 102.099px;
        flex-shrink: 0;
        border-radius: 50%;
        background: linear-gradient(
          180deg,
          rgba(0, 255, 245, 0.2) 0%,
          rgba(0, 153, 147, 0.2) 100%
        );
        border: #00fff5 1px solid;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #00fff5;
        text-align: center;
        font-family: 'PingFang SC';
        font-size: 15.801px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
    .S_D_H_box_item_four {
      background: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/S_D_H_2.svg') no-repeat center;
      background-size: contain;
      width: 238.23px;
      height: 148.21px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 5px;
      .S_D_H_box_item_four_item_F {
        width: 148.876px;
        height: 142.21px;
        flex-shrink: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .S_D_H_box_item_four_item_T {
        color: #00fff5;
        text-align: center;
        font-family: 'PingFang SC';
        font-size: 18.232px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      .S_D_H_box_item_four_item {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        background: rgba(0, 255, 245);
        filter: drop-shadow(0px 0px 10px rgba(0, 255, 245, 0.58));
        border-radius: 4px;
      }
      .S_D_H_box_item_four_item1 {
        width: 60px;
        height: 60px;
        flex-shrink: 0;
        background: #1e1e1e;
        filter: drop-shadow(0px 0px 10px rgba(0, 255, 245, 0.58));
        border-radius: 4px;
        border: 1px solid #00fff5;
      }
    }
    .S_D_H_box_item_five {
      width: 292.32px;
      height: 291.713px;
      flex-shrink: 0;
      border-radius: 12.155px;
      border: 1.215px solid #00fff5;
      .Hardware {
        width: 100%;
        height: 42.541px;
        flex-shrink: 0;
        background: #00fff5;
        color: #1e1e1e;
        text-align: center;
        font-family: 'PingFang SC';
        font-size: 15.873px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;

        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
      }
      .Chip_Design {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 58px;
        gap: 24px;
        .Chip_Design_title {
          color: #00fff5;
          text-align: center;
          font-family: 'PingFang SC';
          font-size: 15.873px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
        .Chip_Design_btn_f {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          .Chip_Design_btn {
            width: 79.613px;
            height: 43.149px;
            flex-shrink: 0;
            border-radius: 7.293px;
            background: #00fff5;
            display: flex;
            justify-content: center;
            align-items: center;

            color: #1e1e1e;
            text-align: center;
            font-family: 'PingFang SC';
            font-size: 15.873px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
        }
        .Chip_Design_point {
          display: flex;
          margin-top: 20px;

          gap: 5px;
          .Chip_Design_point_i {
            background: #00fff5;
            width: 8px;
            height: 8px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
.POCI_Validation_Logic {
  margin-top: 100px;
  width: 100%;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--home-background-color-child);
  padding: 50px 40px 70px 40px;
  .POCI_Validation_Logic_title {
    color: var(--home-title-color);
    font-family: Gilroy-Bold;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .POCI_Validation_Logic_text {
    color: var(--home-text-color);
    font-family: Gilroy-Medium;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 155%; /* 31px */
    margin-bottom: 70px;
  }
  .POCI_Validation_Logic_bg {
    width: 100%;
    height: 509px;
    flex-shrink: 0;
    padding: 60px 30px;
    border-radius: 8px;
    background: #202022;
    box-shadow: 0px 251px 70px 0px rgba(0, 0, 0, 0),
      0px 161px 64px 0px rgba(0, 0, 0, 0.01),
      0px 90px 54px 0px rgba(0, 0, 0, 0.05),
      0px 40px 40px 0px rgba(0, 0, 0, 0.09),
      0px 10px 22px 0px rgba(0, 0, 0, 0.1);
  }
}
.UtilityNet_PHASE {
  width: 100%;
  height: 100%;
  padding: 60px 54px;
  flex-shrink: 0;
  margin: 100px 0;
  border-radius: 12px;
  background: var(--home-background-color-child);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .UtilityNet_PHASE_title {
    margin-bottom: 20px;
    max-width: 778px;
    color: var(--home-title-color);
    font-family: Gilroy-Bold;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .UtilityNet_PHASE_left {
    .UtilityNet_PHASE_text {
      margin-bottom: 60px;
      max-width: 759px;
      color: var(--home-text-color);
      font-family: Gilroy-Medium;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 155%; /* 31px */
    }
    .UtilityNet_PHASE_button_father {
      display: flex;
      gap: 16px;
      .Rainbow {
        border-radius: 8px;
        flex-shrink: 0;
        padding: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #b0faff;
        cursor: pointer;
        &:hover {
          background: conic-gradient(
            from var(--radius),
            #00f7e4 0deg,
            #fa00ff 60deg 100deg,
            #ffffff 120deg,
            #ca00c1 158deg 190deg,
            #ffffff 294deg 299deg,
            #fa00ff 320deg,
            #00f7e4 350.5deg 360deg
          );
        }
      }

      .UtilityNet_PHASE_button {
        gap: 5px;
        background: linear-gradient(180deg, #00a89e 0%, #00fff5 100%);
        // width: 189px;
        border-radius: 8px;
        height: 42px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 16px;
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
        backdrop-filter: blur(4.66006326675415px);
        color: #000;
        &:hover {
          color: var(--home-title-color);
          background: var(--home-background-color-child);
        }
      }
    }
  }
  .UtilityNet_PHASE_right {
    width: 527.401px;
    height: 522.517px;
    flex-shrink: 0;
    margin-right: 48px;
  }
}
.Key_Players_In {
  width: 100%;
  height: 1088px;
  flex-shrink: 0;
  margin-bottom: 100px;
  background: var(--home-Key_Players_In_bg);
  padding: 122px 148px 0px 148px;
  .Key_Players_In_title {
    color: var(--home-title-color);
    font-family: Gilroy-Bold;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 18px;
  }

  .Key_Players_In_text {
    margin-left: 18px;
    color: var(--home-text-color);
    font-family: Gilroy-Medium;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 155%; /* 31px */
    max-width: 1149px;
    margin-bottom: 110px;
  }
  .Key_Players_In_Gear_wheel_father {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .Key_Players_In_Gear_wheel {
      position: relative;
      // max-width: 1728px;
      display: flex;
      justify-content: center;
      .Gear_wheel_bg {
        width: 204.356px;
        height: 203.641px;
        flex-shrink: 0;
        //平移
        transform: translate(0, 80%);
      }
      .Key_Players_In_Gear_wheel_Rainbow {
        position: absolute;
        border-radius: 12px;
        background: rgba(0, 0, 0, 0);
        border: gray 1px solid;
        padding: 1px;
        flex-shrink: 0;
        .Key_Players_In_Gear {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          border-radius: 12px;
          // background: rgba(0, 0, 0);
          width: 483.355px;
          height: 221.614px;
          .base_layer {
            color: var(--home-Key_Players_In_Gear_wheel_button);
            font-family: Gilroy-Bold;
            font-size: 18.24px;
            font-style: normal;
            font-weight: 400;
            line-height: 155%; /* 28.272px */
          }
          .Key_Players_In_Gear_wheel_button_father {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            .Key_Players_In_Gear_wheel_button {
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--home-Key_Players_In_Gear_wheel_button);
              text-align: center;
              font-family: Gilroy-Medium;
              font-size: 16.416px;
              font-style: normal;
              font-weight: 400;
              line-height: 155%; /* 25.445px */
              width: 269.949px;
              height: 45.599px;
              flex-shrink: 0;
              border-radius: 8px;
              border: 0.912px solid gray;
            }
          }
        }
      }
      .Gear_wheel_point {
        position: absolute;
        width: 11.856px;
        height: 11.856px;
        flex-shrink: 0;
        background: #00fffe;
        border-radius: 50%;
      }

      .Gear_wheel_line {
        position: absolute;
        width: 90.374px;
        height: 1.5px;
        flex-shrink: 0;
        stroke-width: 0.912px;
        stroke: #fff;
        //旋转
        background: linear-gradient(
          to right,
          #ffffff,
          #ca00c1,
          #00f7e4,
          #00f7e4
        );
      }
      .Gear_wheel_line1 {
        position: absolute;
        width: 40px;
        height: 1.5px;
        flex-shrink: 0;
        stroke-width: 0.912px;
        stroke: #fff;
        background: linear-gradient(to left, #ffffff, #ca00c1, #ca00c1);
      }
      .point_AND_line_father {
        .Gear_wheel_point_left {
          left: -38%;
          top: 52%;
        }
        .Gear_wheel_point_right {
          left: -13%;
          top: 53%;
        }
        .Gear_wheel_line_long {
          transform: rotate(45deg);
          left: -14%;
          top: 73%;
        }
        .Gear_wheel_line_short {
          left: -32%;
          top: 55%;
        }
      }

      .point_AND_line_father1 {
        .Gear_wheel_point_left {
          left: -38.6%;
          top: 200%;
        }
        .Gear_wheel_point_right {
          left: -14%;
          top: 200%;
        }
        .Gear_wheel_line_long {
          transform: rotate(-45deg);
          left: -17%;
          top: 186%;
        }
        .Gear_wheel_line_short {
          left: -33%;
          top: 203%;
        }
      }
      .point_AND_line_father2 {
        .Gear_wheel_point_left {
          right: -37.6%;
          top: 50%;
        }
        .Gear_wheel_point_right {
          right: -13%;
          top: 51%;
        }
        .Gear_wheel_line_long {
          transform: rotate(135deg);
          right: -15%;
          top: 71%;
        }
        .Gear_wheel_line_short {
          transform: rotate(180deg);
          right: -32%;
          top: 53.5%;
        }
      }
      .point_AND_line_father3 {
        .Gear_wheel_point_left {
          right: -39.6%;
          top: 202%;
        }
        .Gear_wheel_point_right {
          right: -15%;
          top: 202%;
        }
        .Gear_wheel_line_long {
          transform: rotate(45deg);
          right: -17%;
          top: 187%;
        }
        .Gear_wheel_line_short {
          transform: rotate(180deg);

          right: -34.5%;
          top: 205%;
        }
      }

      .wheel_Rainbow_position {
        position: absolute;
        left: -273%;
        top: 4%;
      }
      .wheel_Rainbow_position1 {
        position: absolute;
        left: -274%;
        bottom: -160%;
      }
      .wheel_Rainbow_position2 {
        position: absolute;
        right: -274%;
        top: 4%;
        .Key_Players_In_Gear {
          flex-direction: row-reverse;
        }
      }
      .wheel_Rainbow_position3 {
        position: absolute;
        right: -276%;
        bottom: -160%;
        .Key_Players_In_Gear {
          flex-direction: row-reverse;
        }
      }
    }
  }
}
.UtilityNet_Basic_Functions {
  border-radius: 12px;
  background: var(--home-background-color-child);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-shrink: 0;
  padding: 30px;
  margin-bottom: 100px;
  .UtilityNet_Basic_Functions_title {
    margin-top: 10px;
    margin-left: 16px;
    color: var(--home-title-color);
    text-align: center;
    font-family: Gilroy-Bold;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 60px;
  }
  .UtilityNet_Basic_box_father_F {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    row-gap: 30px;
    .UtilityNet_Basic_box_father {
      .UtilityNet_Basic_box {
        padding: 107px 26px 26px 26px;
        width: 335px;
        height: 406px;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        //鼠标变小手
        cursor: pointer;

        .UtilityNet_Basic_box_title {
          width: 262px;
          height: 55px;
          flex-shrink: 0;
          border-radius: 8px;

          font-family: Gilroy-Bold;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 155%; /* 46.5px */
          padding-left: 14px;
          display: flex;
          align-items: center;
          margin-bottom: 22px;
        }
        .UtilityNet_Basic_box_text {
          font-family: Gilroy-Medium;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .UtilityNet_Basic_box_button_father {
          display: flex;

          .UtilityNet_Basic_box_button {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    .UtilityNet_Basic_box_imparity1 {
      .UtilityNet_Basic_box {
        background: linear-gradient(180deg, #00a89e 0%, #00fff5 100%);
        box-shadow: 0px 0px 13.6px 0px rgba(0, 255, 245, 0.58);
        border-radius: 10px 150px 10px 10px;
      }
      .UtilityNet_Basic_box_title {
        background: #003733;
        color: #fff;
      }
      .UtilityNet_Basic_box_text {
        color: rgba(0, 0, 0, 0.6);
      }
      .UtilityNet_Basic_box_button_father {
        justify-content: end;
      }
      .UtilityNet_Basic_box_button {
        img {
          filter: brightness(1);
        }
        background-color: #000;
      }
    }
    .UtilityNet_Basic_box_imparity2 {
      .UtilityNet_Basic_box {
        background: linear-gradient(180deg, #24272e 0%, #2b3735 100%);
        box-shadow: 0px 0px 13.6px 0px rgba(234, 105, 255, 0.58);
        border-radius: 10px 10px 150px 10px;
      }
      .UtilityNet_Basic_box_title {
        background: #00fffe;
        color: #000;
      }
      .UtilityNet_Basic_box_text {
        color: rgba(255, 255, 255, 0.6);
      }
      .UtilityNet_Basic_box_button_father {
        justify-content: start;
      }
      .UtilityNet_Basic_box_button {
        img {
          filter: brightness(0);
        }
        background-color: #00fffe;
      }
    }
    .UtilityNet_Basic_box_imparity3 {
      .UtilityNet_Basic_box {
        background: linear-gradient(180deg, #24272e 0%, #2b3735 100%);
        box-shadow: 0px 0px 13.6px 0px rgba(234, 105, 255, 0.58);
        border-radius: 10px 150px 10px 10px;
      }
      .UtilityNet_Basic_box_title {
        background: #00fffe;
        color: #000;
      }
      .UtilityNet_Basic_box_text {
        color: rgba(255, 255, 255, 0.6);
      }
      .UtilityNet_Basic_box_button_father {
        justify-content: end;
      }
      .UtilityNet_Basic_box_button {
        img {
          filter: brightness(0);
        }
        background-color: #00fffe;
      }
    }
    .UtilityNet_Basic_box_imparity4 {
      .UtilityNet_Basic_box {
        background: linear-gradient(180deg, #00a89e 0%, #00fff5 100%);
        box-shadow: 0px 0px 13.6px 0px rgba(0, 255, 245, 0.58);
        border-radius: 10px 10px 10px 10px;
      }
      .UtilityNet_Basic_box_title {
        background: #003733;
        color: #fff;
      }
      .UtilityNet_Basic_box_text {
        color: rgba(0, 0, 0, 0.6);
      }
      .UtilityNet_Basic_box_button_father {
        justify-content: end;
      }
      .UtilityNet_Basic_box_button {
        img {
          filter: brightness(1);
        }
        background-color: #000;
      }
    }
  }
}
.Recent_Highlights {
  width: 100%;
  flex-shrink: 0;
  padding: 50px 0px 150px 0px;
  border-radius: 12px;
  background: var(--home-background-color-child);
  .Recent_Highlights_title {
    margin-left: 56px;
    color: var(--home-title-color);
    font-family: Gilroy-Bold;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 60px;
  }
  .Recent_Highlights_map {
    position: relative;
    width: 100%;

    .swiper {
      width: 100%;
      .swiper-slide {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .swiper_item {
          border-radius: 12px;
          margin: 15px;
          width: 457px;
          height: 348px;
          background: #202022;
          flex-shrink: 0;
        }
        .swiper_time {
          color: rgba(255, 255, 255, 0.6);
          font-family: Gilroy-Medium;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-left: 20px;
        }

        .swiper_title {
          color: #fff;
          font-family: Gilroy-Bold;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 155%; /* 27.9px */
          margin-left: 20px;
          margin: 18px 0 18px 20px;
        }
        .swiper_img {
          width: 457px;
          height: 247px;
          flex-shrink: 0;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }
      }
    }

    .swiper_button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      width: 130px;
      bottom: -20px;
      right: 30px;

      .swiper-button-prev,
      .swiper-button-next {
        width: 48px;
        height: 48px;
        z-index: 100;
        border-radius: 50%;
        margin: 0;
        cursor: pointer; ///鼠标移上去变成手指
        background-color: #202022 !important;
        color: var(--swiper-prev-new-disabled-bg) !important;
        font-size: 17px !important;
        opacity: 1 !important; /* 可以设置不透明度来表示禁用状态 */
        border: 1px solid #515151 !important;
      }

      .swiper-button-prev.swiper-button-disabled,
      .swiper-button-next.swiper-button-disabled {
        pointer-events: auto;
        border: var(--home-swiper-button-disabled-border) !important;
        color: var(--swiper-prev-new-border) !important;
        cursor: not-allowed !important;
        background-color: var(--home-swiper-button-disabled) !important;
      }

      .swiper-button-prev::after,
      .swiper-button-next::after {
        font-size: 17px !important;
      }
      .swiper-button-prev::after {
        content: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights_left.svg'); /* 使用 SVG 图标作为箭头 */
      }

      .swiper-button-next::after {
        content: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights_right.svg'); /* 使用 SVG 图标作为箭头 */
      }
    }
  }
}
.Join_the_UtilityNet {
  margin: 100px 0;
  width: 100%;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--home-background-color-child);
  padding: 70px 0px 70px 70px;
  display: flex;
  // justify-content: center;
  align-items: center;
  .Join_the_UtilityNet_left {
    .Join_the_UtilityNet_title {
      color: var(--home-title-color);
      font-family: Gilroy-Bold;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 78px;
    }
    .Join_the_UtilityNet_button_father {
      display: flex;
      gap: 32px;
      .Join_the_UtilityNet_button {
        width: 141px;
        height: 42px;
        flex-shrink: 0;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        gap: 18px;
        border: 0.608px solid var(--home-Join_the_UtilityNet_button-border);
        background: var(--home-Join_the_UtilityNet_button-background);

        //阴影
        color: var(--home-title-color);
        text-align: center;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 21px */
        &:hover {
          box-shadow: 0px 4px 20px 0px rgba(0, 255, 245, 0.3);
        }
      }
    }
  }
  .Join_the_UtilityNet_right {
    width: 55%;
    // height: 290px;
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
    .button_right_top {
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
  }
}
@media (max-width: 1338px) {
  .container {
    padding: 0 80px !important;
  }
  .home_view {
    .Key_Players_In {
      height: 908px !important;
    }
    .UtilityNet_PHASE {
      .UtilityNet_PHASE_left {
        .UtilityNet_PHASE_title {
          font-size: 42px;
        }
      }
      .UtilityNet_PHASE_right {
        width: 427.401px;
        height: 427.517px;
        flex-shrink: 0;
        margin-right: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .Join_the_UtilityNet {
      .Join_the_UtilityNet_left {
        .Join_the_UtilityNet_title {
          font-size: 40px;
        }
      }
    }
    .Key_Players_In {
      width: 100%;
      height: 1088px;
      flex-shrink: 0;
      margin-bottom: 100px;
      background: var(--home-Key_Players_In_bg);
      padding: 100px 88px 0px 88px;
      .Key_Players_In_title {
        color: var(--home-title-color);
        font-family: Gilroy-Bold;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: 0px;
      }

      .Key_Players_In_text {
        margin-left: 0px;
        color: var(--home-text-color);
        font-family: Gilroy-Medium;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 155%; /* 31px */
        max-width: 1149px;
        margin-bottom: 110px;
      }
      .Key_Players_In_Gear_wheel_father {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .Key_Players_In_Gear_wheel {
          position: relative;
          // max-width: 1728px;
          display: flex;
          justify-content: center;
          .Gear_wheel_bg {
            width: 174.356px;
            height: 174.641px;
            flex-shrink: 0;
            //平移
            transform: translate(0, 80%);
          }
          .Key_Players_In_Gear_wheel_Rainbow {
            position: absolute;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0);
            border: gray 1px solid;
            padding: 0px;
            flex-shrink: 0;
            .Key_Players_In_Gear {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              border-radius: 12px;
              // background: rgba(0, 0, 0);
              width: 343.355px;
              height: 150.614px;
              .base_layer {
                color: var(--home-Key_Players_In_Gear_wheel_button);
                font-family: Gilroy-Bold;
                font-size: 18.24px;
                font-style: normal;
                font-weight: 400;
                line-height: 155%; /* 28.272px */
              }
              .Key_Players_In_Gear_wheel_button_father {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                .Key_Players_In_Gear_wheel_button {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: var(--home-Key_Players_In_Gear_wheel_button);
                  text-align: center;
                  font-family: Gilroy-Medium;
                  font-size: 14.416px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 155%; /* 25.445px */
                  width: 160.949px;
                  height: 40.599px;
                  flex-shrink: 0;
                  border-radius: 8px;
                  border: 0.912px solid gray;
                }
              }
            }
          }
          .Gear_wheel_point {
            position: absolute;
            width: 8.856px;
            height: 8.856px;
            flex-shrink: 0;
            background: #00fffe;
            border-radius: 50%;
          }

          .Gear_wheel_line {
            position: absolute;
            width: 76.374px;
            height: 1.5px;
            flex-shrink: 0;
            stroke-width: 0.912px;
            stroke: #fff;
            //旋转
            background: linear-gradient(
              to right,
              #ffffff,
              #ca00c1,
              #00f7e4,
              #00f7e4
            );
          }
          .Gear_wheel_line1 {
            position: absolute;
            width: 25px;
            height: 1.5px;
            flex-shrink: 0;
            stroke-width: 0.912px;
            stroke: #fff;
            background: linear-gradient(to left, #ffffff, #ca00c1, #ca00c1);
          }
          .point_AND_line_father {
            .Gear_wheel_point_left {
              left: -30.8%;
              top: 53%;
            }
            .Gear_wheel_point_right {
              left: -12%;
              top: 53%;
            }
            .Gear_wheel_line_long {
              transform: rotate(45deg);
              left: -14%;
              top: 73%;
            }
            .Gear_wheel_line_short {
              left: -26%;
              top: 55%;
            }
          }

          .point_AND_line_father1 {
            .Gear_wheel_point_left {
              left: -30.8%;
              top: 200%;
            }
            .Gear_wheel_point_right {
              left: -12%;
              top: 200%;
            }
            .Gear_wheel_line_long {
              transform: rotate(-45deg);
              left: -14%;
              top: 186%;
            }
            .Gear_wheel_line_short {
              left: -26%;
              top: 203%;
            }
          }
          .point_AND_line_father2 {
            .Gear_wheel_point_left {
              right: -31.6%;
              top: 51%;
            }
            .Gear_wheel_point_right {
              right: -12%;
              top: 51%;
            }
            .Gear_wheel_line_long {
              transform: rotate(135deg);
              right: -14%;
              top: 71%;
            }
            .Gear_wheel_line_short {
              transform: rotate(180deg);
              right: -26%;
              top: 53.5%;
            }
          }
          .point_AND_line_father3 {
            .Gear_wheel_point_left {
              right: -31.6%;
              top: 202%;
            }
            .Gear_wheel_point_right {
              right: -12%;
              top: 202%;
            }
            .Gear_wheel_line_long {
              transform: rotate(45deg);
              right: -14%;
              top: 187%;
            }
            .Gear_wheel_line_short {
              transform: rotate(180deg);

              right: -26%;
              top: 205%;
            }
          }

          .wheel_Rainbow_position {
            position: absolute;
            left: -226%;
            top: 12%;
          }
          .wheel_Rainbow_position1 {
            position: absolute;
            left: -226%;
            bottom: -148%;
          }
          .wheel_Rainbow_position2 {
            position: absolute;
            right: -226.5%;
            top: 12%;
            .Key_Players_In_Gear {
              flex-direction: row-reverse;
            }
          }
          .wheel_Rainbow_position3 {
            position: absolute;
            right: -226.5%;
            bottom: -148%;
            .Key_Players_In_Gear {
              flex-direction: row-reverse;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 968px) {
  .home_view {
    .Key_Players_In {
      width: 100%;
      height: 868px;
      flex-shrink: 0;
      margin-bottom: 100px;
      background: var(--home-Key_Players_In_bg);
      padding: 60px 58px 0px 58px;
      .Key_Players_In_title {
        color: var(--home-title-color);
        font-family: Gilroy-Bold;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-left: 0px;
      }

      .Key_Players_In_text {
        margin-left: 0px;
        color: var(--home-text-color);
        font-family: Gilroy-Medium;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 155%; /* 31px */
        max-width: 1149px;
        margin-bottom: 60px;
      }
      .Key_Players_In_Gear_wheel_father {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .Key_Players_In_Gear_wheel {
          position: relative;
          // max-width: 1728px;
          display: flex;
          justify-content: center;
          .Gear_wheel_bg {
            width: 147.356px;
            height: 147.641px;
            flex-shrink: 0;
            //平移
            transform: translate(0, 80%);
          }
          .Key_Players_In_Gear_wheel_Rainbow {
            position: absolute;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0);
            border: gray 1px solid;
            padding: 0px;
            flex-shrink: 0;
            .Key_Players_In_Gear {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              border-radius: 12px;
              // background: rgba(0, 0, 0);
              width: 290.355px;
              height: 120.614px;
              .base_layer {
                color: var(--home-Key_Players_In_Gear_wheel_button);
                font-family: Gilroy-Bold;
                font-size: 16.24px;
                font-style: normal;
                font-weight: 400;
                line-height: 155%; /* 28.272px */
              }
              .Key_Players_In_Gear_wheel_button_father {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                .Key_Players_In_Gear_wheel_button {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: var(--home-Key_Players_In_Gear_wheel_button);
                  text-align: center;
                  font-family: Gilroy-Medium;
                  font-size: 14.416px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 155%; /* 25.445px */
                  width: 130.949px;
                  height: 30.599px;
                  flex-shrink: 0;
                  border-radius: 8px;
                  border: 0.912px solid gray;
                }
              }
            }
          }
          .Gear_wheel_point {
            position: absolute;
            width: 8.856px;
            height: 8.856px;
            flex-shrink: 0;
            background: #00fffe;
            border-radius: 50%;
          }

          .Gear_wheel_line {
            position: absolute;
            width: 64.374px;
            height: 1.5px;
            flex-shrink: 0;
            stroke-width: 0.912px;
            stroke: #fff;
            //旋转
            background: linear-gradient(
              to right,
              #ffffff,
              #ca00c1,
              #00f7e4,
              #00f7e4
            );
          }
          .Gear_wheel_line1 {
            position: absolute;
            width: 20px;
            height: 1.5px;
            flex-shrink: 0;
            stroke-width: 0.912px;
            stroke: #fff;
            background: linear-gradient(to left, #ffffff, #ca00c1, #ca00c1);
          }
          .point_AND_line_father {
            .Gear_wheel_point_left {
              left: -30.8%;
              top: 53%;
            }
            .Gear_wheel_point_right {
              left: -12%;
              top: 53%;
            }
            .Gear_wheel_line_long {
              transform: rotate(45deg);
              left: -14%;
              top: 73%;
            }
            .Gear_wheel_line_short {
              left: -26%;
              top: 55%;
            }
          }

          .point_AND_line_father1 {
            .Gear_wheel_point_left {
              left: -30.8%;
              top: 200%;
            }
            .Gear_wheel_point_right {
              left: -12%;
              top: 200%;
            }
            .Gear_wheel_line_long {
              transform: rotate(-45deg);
              left: -14%;
              top: 186%;
            }
            .Gear_wheel_line_short {
              left: -26%;
              top: 203%;
            }
          }
          .point_AND_line_father2 {
            .Gear_wheel_point_left {
              right: -31.6%;
              top: 51%;
            }
            .Gear_wheel_point_right {
              right: -12%;
              top: 51%;
            }
            .Gear_wheel_line_long {
              transform: rotate(135deg);
              right: -14%;
              top: 71%;
            }
            .Gear_wheel_line_short {
              transform: rotate(180deg);
              right: -26%;
              top: 53.5%;
            }
          }
          .point_AND_line_father3 {
            .Gear_wheel_point_left {
              right: -31.6%;
              top: 202%;
            }
            .Gear_wheel_point_right {
              right: -12%;
              top: 202%;
            }
            .Gear_wheel_line_long {
              transform: rotate(45deg);
              right: -14%;
              top: 187%;
            }
            .Gear_wheel_line_short {
              transform: rotate(180deg);

              right: -26%;
              top: 205%;
            }
          }

          .wheel_Rainbow_position {
            position: absolute;
            left: -226%;
            top: 12%;
          }
          .wheel_Rainbow_position1 {
            position: absolute;
            left: -226%;
            bottom: -148%;
          }
          .wheel_Rainbow_position2 {
            position: absolute;
            right: -226.5%;
            top: 12%;
            .Key_Players_In_Gear {
              flex-direction: row-reverse;
            }
          }
          .wheel_Rainbow_position3 {
            position: absolute;
            right: -226.5%;
            bottom: -148%;
            .Key_Players_In_Gear {
              flex-direction: row-reverse;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .home_view {
    .container {
      padding: 0 12px;
    }
    .Welcome {
      // padding-top: 24px;

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
    .Software_Defined_Hardware {
      margin-top: 30px;
      padding: 20px 10px 25px 10px;

      border-radius: 10px;
      .Software_Defined_Hardware_title {
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
      }
      .Software_Defined_Hardware_text {
        font-size: 12px;
        margin-top: 10px;
        margin-bottom: 20px;
      }
      .Software_Defined_Hardware_box {
        display: flex;
        align-items: center;
        //换行
        // flex-wrap: wrap;
        justify-content: center;
        padding: 10px;
        border-radius: 8px;
        background: #202022;
        box-shadow: 0px 251px 70px 0px rgba(0, 0, 0, 0),
          0px 161px 64px 0px rgba(0, 0, 0, 0.01),
          0px 90px 54px 0px rgba(0, 0, 0, 0.05),
          0px 40px 40px 0px rgba(0, 0, 0, 0.09),
          0px 10px 22px 0px rgba(0, 0, 0, 0.1);

        width: 324px; /* 设置容器的宽度 */
        height: 200px; /* 设置容器的高度 */
        overflow: hidden; /* 隐藏溢出的部分 */
        position: relative;
        margin: 0 auto;

        .scrolling-image {
          max-width: none;
          width: 730px; /* 设置长图片的宽度（要大于容器宽度） */
          height: 100%; /* 图片高度与容器高度一致 */
          position: absolute;
          animation: scroll 4s linear infinite; /* 动画持续时间10秒，线性滚动，循环播放 */
          animation-direction: alternate;
        }
        @keyframes scroll {
          0% {
            left: 20px;
          }
          100% {
            left: -430px;
          }
        }
        .paused {
          animation-play-state: paused;
        }
      }
    }
    .POCI_Validation_Logic {
      margin-top: 30px;
      width: 100%;
      flex-shrink: 0;
      border-radius: 12px;
      padding: 20px 10px 20px 10px;
      .POCI_Validation_Logic_title {
        font-size: 18px;
        font-weight: 600;
      }
      .POCI_Validation_Logic_text {
        font-size: 12px;

        letter-spacing: 0.24px;
        margin-bottom: 20px;
      }
      .POCI_Validation_Logic_bg {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        padding: 20px 30px;
        border-radius: 8px;
        background: #202022;
        box-shadow: 0px 251px 70px 0px rgba(0, 0, 0, 0),
          0px 161px 64px 0px rgba(0, 0, 0, 0.01),
          0px 90px 54px 0px rgba(0, 0, 0, 0.05),
          0px 40px 40px 0px rgba(0, 0, 0, 0.09),
          0px 10px 22px 0px rgba(0, 0, 0, 0.1);

        width: 324px; /* 设置容器的宽度 */
        height: 200px; /* 设置容器的高度 */
        overflow: hidden; /* 隐藏溢出的部分 */
        position: relative;
        margin: 0 auto;

        .scrolling-image {
          max-width: none;
          width: 730px; /* 设置长图片的宽度（要大于容器宽度） */
          height: 100%; /* 图片高度与容器高度一致 */
          position: absolute;
          animation: scroll 4s linear infinite; /* 动画持续时间10秒，线性滚动，循环播放 */
          animation-direction: alternate;
        }
        @keyframes scroll {
          0% {
            left: 20px;
          }
          100% {
            left: -430px;
          }
        }
        .paused {
          animation-play-state: paused;
        }
      }
    }

    .UtilityNet_PHASE {
      width: 100%;
      height: 100%;
      padding: 20px 10px;
      flex-shrink: 0;
      margin: 30px 0;
      align-items: start;
      flex-direction: column;
      .UtilityNet_PHASE_title {
        margin-bottom: 16px;
        max-width: 100%;
        font-size: 18px;
        font-weight: 600;
      }
      .UtilityNet_PHASE_left {
        .UtilityNet_PHASE_text {
          margin-bottom: 20px;
          max-width: 100%;
          color: var(--home-text-color);
          font-family: Gilroy-Medium;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 155%; /* 31px */
        }
        .UtilityNet_PHASE_button_father {
          display: flex;
          gap: 10px;
          .Rainbow {
            border-radius: 4px;
          }

          .UtilityNet_PHASE_button {
            gap: 5px;
            // width: 189px;
            border-radius: 4px;
            height: 30px;
            flex-shrink: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px;
            text-align: center;
            font-family: Inter;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 21px */
            backdrop-filter: blur(4.66006326675415px);
            color: #000;
          }
        }
      }
      .UtilityNet_PHASE_right {
        max-width: 38%;
        height: 100%;
        flex-shrink: 0;
        margin-right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .Key_Players_In {
      width: 100%;
      height: 300px;
      flex-shrink: 0;
      margin-bottom: 30px;
      background: var(--home-Key_Players_In_bg) no-repeat;
      background-size: cover;

      padding: 20px 10px 20px 10px;
      .Key_Players_In_title {
        font-size: 18px;
        font-weight: 600;
        margin-left: 10px;
      }

      .Key_Players_In_text {
        margin-left: 10px;
        font-size: 12px;

        max-width: 100%;
        margin-bottom: 20px;
      }
      .Key_Players_In_Gear_wheel_father {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .Key_Players_In_Gear_wheel {
          position: relative;
          // max-width: 1728px;
          display: flex;
          justify-content: center;
          .Gear_wheel_bg {
            width: 60px;
            height: 60px;
            flex-shrink: 0;
            //平移
            transform: translate(0, 80%);
          }
          .Key_Players_In_Gear_wheel_Rainbow {
            position: absolute;
            border-radius: 4px;
            background: rgba(0, 0, 0, 0);
            border: gray 1px solid;
            padding: 1px;
            flex-shrink: 0;
            .Key_Players_In_Gear {
              display: flex;
              justify-content: space-evenly;
              align-items: center;
              border-radius: 4px;
              // background: rgba(0, 0, 0);
              width: 124px;
              height: 60px;
              .base_layer {
                color: var(--home-Key_Players_In_Gear_wheel_button);
                font-family: Gilroy-Bold;
                font-size: 8.24px;
                font-style: normal;
                font-weight: 400;
                line-height: 155%; /* 28.272px */
              }
              .Key_Players_In_Gear_wheel_button_father {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                .Key_Players_In_Gear_wheel_button {
                  font-size: 8px;
                  width: 58px;
                  height: 14px;
                  border-radius: 2px;
                }
              }
            }
          }
          .wheel_Rainbow_position {
            position: absolute;
            left: -208%;
            top: 4%;
          }
          .wheel_Rainbow_position1 {
            position: absolute;
            left: -206%;
            bottom: -159%;
          }
          .wheel_Rainbow_position2 {
            position: absolute;
            right: -208%;
            top: 4%;
            .Key_Players_In_Gear {
              flex-direction: row-reverse;
            }
          }
          .wheel_Rainbow_position3 {
            position: absolute;
            right: -204%;
            bottom: -159%;
            .Key_Players_In_Gear {
              flex-direction: row-reverse;
            }
          }
          .Gear_wheel_point {
            display: none;
          }

          .Gear_wheel_line {
            display: none;
          }
          .Gear_wheel_line1 {
            display: none;
          }
        }
      }
    }
    .UtilityNet_Basic_Functions {
      border-radius: 6px;
      background: var(--home-background-color-child);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      flex-shrink: 0;
      padding: 20px 10px;
      margin-bottom: 30px;
      .UtilityNet_Basic_Functions_title {
        margin-top: 6px;
        margin-left: 0px;
        font-size: 18px;
        font-weight: 600;
      }
      .UtilityNet_Basic_box_father_F {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        row-gap: 15px;
        gap: 15px;
        .UtilityNet_Basic_box_father {
          .UtilityNet_Basic_box {
            padding: 20px 8px 12px 10px;
            width: 152px;
            height: 204px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            //鼠标变小手
            cursor: pointer;

            .UtilityNet_Basic_box_title {
              width: 114px;
              height: 32px;
              flex-shrink: 0;
              border-radius: 4px;

              font-family: Gilroy-Bold;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 155%; /* 46.5px */
              padding-left: 0px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 22px;
            }
            .UtilityNet_Basic_box_text {
              font-family: Gilroy-Medium;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
            .UtilityNet_Basic_box_button_father {
              display: flex;

              .UtilityNet_Basic_box_button {
                width: 24px;
                height: 24px;
                flex-shrink: 0;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
        .UtilityNet_Basic_box_imparity1 {
          .UtilityNet_Basic_box {
            background: linear-gradient(180deg, #00a89e 0%, #00fff5 100%);
            box-shadow: 0px 0px 10.6px 0px rgba(0, 255, 245, 0.58);
            border-radius: 6px 60px 6px 6px;
          }
          .UtilityNet_Basic_box_title {
            background: #003733;
            color: #fff;
          }
          .UtilityNet_Basic_box_text {
            color: rgba(0, 0, 0, 0.6);
          }
          .UtilityNet_Basic_box_button_father {
            justify-content: end;
          }
          .UtilityNet_Basic_box_button {
            img {
              filter: brightness(1);
            }
            background-color: #000;
          }
        }
        .UtilityNet_Basic_box_imparity2 {
          .UtilityNet_Basic_box {
            background: linear-gradient(180deg, #24272e 0%, #2b3735 100%);
            box-shadow: 0px 0px 10.6px 0px rgba(234, 105, 255, 0.58);
            border-radius: 6px 6px 60px 6px;
          }
          .UtilityNet_Basic_box_title {
            background: #00fffe;
            color: #000;
          }
          .UtilityNet_Basic_box_text {
            color: rgba(255, 255, 255, 0.6);
          }
          .UtilityNet_Basic_box_button_father {
            justify-content: start;
          }
          .UtilityNet_Basic_box_button {
            img {
              filter: brightness(0);
            }
            background-color: #00fffe;
          }
        }
        .UtilityNet_Basic_box_imparity3 {
          .UtilityNet_Basic_box {
            background: linear-gradient(180deg, #24272e 0%, #2b3735 100%);
            box-shadow: 0px 0px 10.6px 0px rgba(234, 105, 255, 0.58);
            border-radius: 6px 60px 6px 6px;
          }
          .UtilityNet_Basic_box_title {
            background: #00fffe;
            color: #000;
          }
          .UtilityNet_Basic_box_text {
            color: rgba(255, 255, 255, 0.6);
          }
          .UtilityNet_Basic_box_button_father {
            justify-content: end;
          }
          .UtilityNet_Basic_box_button {
            img {
              filter: brightness(0);
            }
            background-color: #00fffe;
          }
        }
        .UtilityNet_Basic_box_imparity4 {
          .UtilityNet_Basic_box {
            background: linear-gradient(180deg, #00a89e 0%, #00fff5 100%);
            box-shadow: 0px 0px 10.6px 0px rgba(0, 255, 245, 0.58);
            border-radius: 6px 6px 6px 6px;
          }
          .UtilityNet_Basic_box_title {
            background: #003733;
            color: #fff;
          }
          .UtilityNet_Basic_box_text {
            color: rgba(0, 0, 0, 0.6);
          }
          .UtilityNet_Basic_box_button_father {
            justify-content: end;
          }
          .UtilityNet_Basic_box_button {
            img {
              filter: brightness(1);
            }
            background-color: #000;
          }
        }
      }
    }
    .Recent_Highlights {
      padding: 20px 10px 70px 10px;
      border-radius: 6px;
      .Recent_Highlights_title {
        margin-left: 0px;
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .Recent_Highlights_map {
        position: relative;
        width: 100%;

        .swiper {
          width: 100%;
          .swiper-slide {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 6px;

            .swiper_time {
              color: var(--Utility-text-color1);
              font-size: 10px;
              margin-left: 8px;
            }

            .swiper_title {
              color: var(--home-text-color);
              font-size: 12px;
              margin-left: 8px;
              margin: 10px 0 10px 8px;
            }
            .swiper_img {
              width: 304px;
              height: 160px;
              flex-shrink: 0;
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
            }
          }
        }

        .swiper_button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          width: 80px;
          bottom: -20px;
          right: 30px;

          .swiper-button-prev,
          .swiper-button-next {
            width: 24px;
            height: 24px;
            z-index: 100;
            border-radius: 50%;
            margin: 0;
            cursor: pointer; ///鼠标移上去变成手指
            background-color: #202022 !important;
            color: var(--swiper-prev-new-disabled-bg) !important;
            font-size: 17px !important;
            opacity: 1 !important; /* 可以设置不透明度来表示禁用状态 */
            border: 1px solid #515151 !important;
          }

          .swiper-button-prev.swiper-button-disabled,
          .swiper-button-next.swiper-button-disabled {
            pointer-events: auto;
            border: var(--home-swiper-button-disabled-border) !important;
            color: var(--swiper-prev-new-border) !important;
            cursor: not-allowed !important;
            background-color: var(--home-swiper-button-disabled) !important;
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 17px !important;
          }
          .swiper-button-prev::after {
            transform: scale(50%);
            content: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights_left.svg'); /* 使用 SVG 图标作为箭头 */
          }

          .swiper-button-next::after {
            //缩放

            transform: scale(50%);
            content: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/Recent_Highlights_right.svg'); /* 使用 SVG 图标作为箭头 */
          }
        }
      }
    }
    .Join_the_UtilityNet {
      margin: 30px 0;
      width: 100%;
      flex-shrink: 0;
      border-radius: 6px;
      background: var(--home-background-color-child);
      padding: 10px 0px 10px 10px;
      display: flex;
      // justify-content: center;
      align-items: center;
      .Join_the_UtilityNet_left {
        .Join_the_UtilityNet_title {
          color: var(--home-title-color);
          font-family: Gilroy-Bold;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 28px;
        }
        .Join_the_UtilityNet_button_father {
          display: flex;
          gap: 12px;
          .Join_the_UtilityNet_button {
            width: 70px;
            height: 22px;
            flex-shrink: 0;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            gap: 4px;
            border: 0.608px solid var(--home-Join_the_UtilityNet_button-border);
            background: var(--home-Join_the_UtilityNet_button-background);

            //阴影
            color: var(--home-title-color);
            text-align: center;
            font-family: Inter;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 21px */
            .phone_arrow {
              //缩放

              transform: scale(60%);
            }
          }
        }
      }
      .Join_the_UtilityNet_right {
        width: 100%;
        // height: 290px;
      }
    }
  }
}
</style>
