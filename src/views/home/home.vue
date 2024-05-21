<script setup lang="ts" name="HomeView">
import phaseArrow from '@/assets/images/UtilityNet_PHASE_button_arrow.svg'
import 'swiper/swiper-bundle.css'
import 'swiper/less'
import 'swiper/less/navigation'
import 'swiper/css/pagination'
import { computed, onMounted, onUnmounted, ref, toRef, watch } from 'vue'
import { getStatistics } from '@/api/home'
import { useI18n } from 'vue-i18n'
import { openNewPage } from '@/utils/request'
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules'
import router from '@/router'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import developerAarrow from '@/assets/images/Developer_arrow.svg'

const { home } = useStore()
const { theme } = storeToRefs(home)
const { locale } = useI18n()
const res = ref() //^ 数据 和 圆 Data and circles的数据
const Data_arr = ref() //^ Where to Start的数据
const width = ref(window.innerWidth)
const height = ref(window.innerHeight)
const text_utility_zh = `<span style='font-weight: 500;font-family: Inter;'>助力Utility</span> 开源社区，共建革命性应用型Web3`
const text_utility_en = `<span style='font-weight: 500;font-family: Inter;'>Help Utility</span> open source community to build a revolutionary application Web3`
const updatedWidth = function () {
  width.value = window.innerWidth
  height.value = window.innerHeight
  updateUtilityArr() // 初始设置
}

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

  //^ Utility Chain Scaling Solutions的数据
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
              Utility:
            </div>
            <div
              class="Welcome_text_title"
              :style="{ fontSize: width > 996 ? '34px' : '1rem' }"
            >
              {{ $t('home.Welcome_to_utility') }}
            </div>
          </div>
          <div class="Anapplication">
            {{ $t('home.An_application') }}
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
              @click="openNewPage('/learning/learning_center')"
            >
              <div class="text">
                {{ $t('home.More') }}
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
          height: width > 2150 ? '100vh' : '100%'
        }"
      ></video>
    </div>
    <!-- !视频end -->
    <div class="container" style="overflow: hidden">
      <!-- !大大的图片 begin -->
      <div class="UNCEcosystem">
        <!-- <div class="clipped_rectangle">
          <img src="@/assets/images/UNC_Ecosystem_bg.jpg" alt="" />
        </div> -->
        <div class="Ecosystem">
          <div class="Ecosystem_father">
            <div class="Ecosystem_title">UNC生态系统</div>
            <div class="Ecosystem_text">
              每个人都可以成为UNC持有者，用于购买实用工具并交换UNC代币。
            </div>
          </div>
        </div>
        <div class="Developer Developer1">
          <div class="Developer_title">开发者</div>
          <div class="Developer_bg_father_border">
            <div class="Developer_bg_father">
              <div class="Developer_text">
                将您的项目想法带给多个用户在实用工具生态系统中。
              </div>
              <div class="Developer_button">
                <div class="Developer_arrow">
                  <developerAarrow />
                </div>
                <div class="Developer_button_text">加入生态系统</div>
              </div>
            </div>
          </div>
          <div class="Developer_line1"></div>
          <div class="Developer_line2"></div>
          <div class="Developer_round"></div>
        </div>
        <div class="Developer Developer2">
          <div class="Developer_line1"></div>
          <div class="Developer_line2"></div>
          <div class="Developer_round"></div>
          <div class="Developer_title">代币持有者</div>
          <div class="Developer_bg_father_border">
            <div class="Developer_bg_father">
              <div class="Developer_text">
                <span> 通过挖矿获得UNC </span>
                <span> 通过出售计算能力获得UNC </span>
                <span> 在交易所购买UNC代币 </span>
              </div>
              <div class="Developer_button">
                <div class="Developer_arrow">
                  <developerAarrow />
                </div>
                <div class="Developer_button_text">检查钱包</div>
              </div>
            </div>
          </div>
        </div>
        <div class="Developer Developer3">
          <div class="Developer_line1"></div>
          <div class="Developer_line2"></div>
          <div class="Developer_round"></div>
          <div class="Developer_title">计算能力供应</div>
          <div class="Developer_bg_father_border">
            <div class="Developer_bg_father">
              <div class="Developer_text">
                <span> 提供稳定的计算能力 </span>
                <span> 通过挖矿获得UNC </span>
              </div>
              <div class="Developer_button">
                <div class="Developer_arrow">
                  <developerAarrow />
                </div>
                <div class="Developer_button_text">挖矿</div>
              </div>
            </div>
          </div>
        </div>
        <div class="Developer Developer4">
          <div class="Developer_round"></div>
          <div class="Developer_line1"></div>
          <div class="Developer_line2"></div>
          <div class="Developer_title">计算能力租赁者</div>
          <div class="Developer_bg_father_border">
            <div class="Developer_bg_father">
              <div class="Developer_text">
                从实用工具提供商那里租用高性能计算能力，用于您自己的目的。
              </div>
              <div class="Developer_button">
                <div class="Developer_arrow">
                  <developerAarrow />
                </div>
                <div class="Developer_button_text">租赁</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ! 大大的图片end -->
      <div class="UtilityNet_PHASE">
        <div class="UtilityNet_PHASE_left">
          <div class="UtilityNet_PHASE_title">
            UtilityNet PHASE-1 Testnet is now launched！
          </div>
          <div class="UtilityNet_PHASE_text">
            The current test site is open source, with hundreds of code
            contributors. Together, we are building UtilityNet into a powerful
            distributed computing resource network.You can suggest edits for any
            content on this site, propose outstanding new features, or help us
            troubleshoot errors.
          </div>
          <div class="UtilityNet_PHASE_button_father">
            <div class="Rainbow">
              <div class="UtilityNet_PHASE_button">
                More on Testnet
                <phaseArrow />
              </div>
            </div>
            <div class="Rainbow">
              <div class="UtilityNet_PHASE_button">
                Join Testnet! <phaseArrow />
              </div>
            </div>
          </div>
        </div>
        <div class="UtilityNet_PHASE_right">
          <!-- <img src="@/assets/images/UtilityNet_PHASE_bg.png" alt="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.UNCEcosystem {
  position: relative;
  background: rgb(255, 255, 255);
  background: url('@/assets/images/UNC_Ecosystem_bg.jpg') no-repeat;
  background-size: cover;
  width: 100%;
  height: 962px;
  // .clipped_rectangle {
  //   position: relative;
  // }
  .Ecosystem {
    position: relative;
    top: 40px;
    left: 20px;
    background: url('@/assets/images/Rectangle.png') no-repeat;
    background-size: cover;
    width: 618px;
    height: 139px;
    display: flex;
    justify-content: center;
    align-items: center;
    .Ecosystem_father {
      height: 112px;
      width: 589px;
      flex-shrink: 0;
      background: var(
        --Linear,
        linear-gradient(
          180deg,
          rgba(17, 70, 78, 0.54) 56.03%,
          rgba(2, 16, 17, 0.54) 98.91%
        )
      );
      stroke-width: 2px;
      stroke: #00ecec;
      backdrop-filter: blur(7.5px);
      clip-path: polygon(
        38px 0,
        100% 0,
        100% 35px,
        100% calc(100% - 35px),
        calc(100% - 35px) 100%,
        0 100%,
        0 calc(100% - 35px),
        0px 32px
      );

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding: 0 34px;
      .Ecosystem_title {
        color: var(--Color, #fff);
        text-align: center;
        // font-family: 'Lantinghei SC';
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .Ecosystem_text {
        color: #fff;
        text-align: center;
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
  .Developer {
    position: absolute;

    .Developer_title {
      margin-bottom: 6px;
      display: inline-flex;
      padding: 6px 16px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: var(--Color, #fff);
      font-family: 'PingFang SC';
      font-size: 19px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.76px;
      text-transform: uppercase;
      border: 1px solid #00e6e1;
      background: linear-gradient(92deg, #b400ab 0%, #00b1a9 98.53%);
    }
    .Developer_bg_father_border {
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      .Developer_bg_father {
        flex-shrink: 0;
        background: var(
          --Linear,
          linear-gradient(
            180deg,
            rgba(78, 17, 49, 0.5) 0%,
            rgba(17, 2, 10, 0.5) 104.39%
          )
        );
        backdrop-filter: blur(7.5px);
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;

        .Developer_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          text-transform: uppercase;
        }
      }
      .Developer_button {
        display: flex;
        .Developer_button_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.64px;
          text-transform: uppercase;
          margin-left: 8px;
        }
      }
    }

    .Developer_line1 {
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_line2 {
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_round {
      position: absolute;
      width: 12px;
      height: 12px;
      flex-shrink: 0;
      border-radius: 50%;
      border: 2px solid #00ecec;
    }
  }
  .Developer1 {
    left: 182px;
    top: 300px;

    .Developer_title {
      margin-left: 186px;
    }
    .Developer_bg_father_border {
      height: 114px;
      width: 312px;
      background: url('@/assets/images/Vector1.png') no-repeat;
      background-size: cover;

      .Developer_bg_father {
        height: 110px;
        width: 308px;
        clip-path: polygon(
          0 0,
          calc(100% - 31px) 0px,
          100% 20px,
          100% 100%,
          100% 100%,
          26px 100%,
          0 calc(100% - 25px),
          0px 8px
        );
        padding: 0 36px;
        .Developer_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          text-transform: uppercase;
        }
      }
      .Developer_button {
        display: flex;
        .Developer_button_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.64px;
          text-transform: uppercase;
          margin-left: 8px;
        }
      }
    }

    .Developer_line1 {
      position: relative;
      left: 178px;
      top: 0px;
      width: 2px;
      height: 92.5px;
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_line2 {
      position: relative;
      left: 178px;
      top: 0px;
      width: 118px;
      height: 2px;
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_round {
      position: absolute;
      width: 12px;
      height: 12px;
      left: 296px;
      top: 247px;
      flex-shrink: 0;
      border-radius: 50%;
      border: 2px solid #00ecec;
    }
  }
  .Developer2 {
    left: 312px;
    top: 600px;

    .Developer_title {
      margin-left: 215px;
    }
    .Developer_bg_father_border {
      height: 116px;
      width: 354px;
      background: url('@/assets/images/Vector3.png') no-repeat;
      background-size: cover;

      .Developer_bg_father {
        height: 112px;
        width: 350px;
        clip-path: polygon(
          38px 0,
          100% 0,
          100% 35px,
          100% calc(100% - 23px),
          calc(100% - 31px) 100%,
          0 100%,
          0 calc(100% - 35px),
          0px 26px
        );
        padding: 0 30px;
        .Developer_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          text-transform: uppercase;
        }
      }
      .Developer_button {
        display: flex;
        .Developer_button_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.64px;
          text-transform: uppercase;
          margin-left: 8px;
        }
      }
    }

    .Developer_line1 {
      position: relative;
      left: 195px;
      top: 53px;
      width: 2px;
      height: 79.5px;
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_line2 {
      position: absolute;
      left: 195px;
      top: 53px;
      width: 157px;
      height: 2px;
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_round {
      position: absolute;
      width: 12px;
      height: 12px;
      left: 350px;
      top: 48px;
      flex-shrink: 0;
      border-radius: 50%;
      border: 2px solid #00ecec;
    }
  }
  .Developer3 {
    right: 50px;
    top: 180px;

    .Developer_title {
      margin-left: 35px;
    }
    .Developer_bg_father_border {
      height: 94px;
      width: 336px;
      background: url('@/assets/images/Vector2.png') no-repeat;
      background-size: cover;

      .Developer_bg_father {
        height: 90px;
        width: 332px;
        clip-path: polygon(
          29px 0,
          100% 0,
          100% 0,
          100% calc(100% - 23px),
          calc(100% - 32px) 100%,
          0 100%,
          0 calc(100% - 35px),
          0px 26px
        );
        padding: 0 30px;
        .Developer_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          text-transform: uppercase;
        }
      }
      .Developer_button {
        display: flex;
        .Developer_button_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.64px;
          text-transform: uppercase;
          margin-left: 8px;
        }
      }
    }

    .Developer_line1 {
      position: relative;
      //  旋转180度
      transform: rotate(150deg);
      width: 2px;
      right: 500px;
      top: 185px;
      width: 132px;
      height: 2px;
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_line2 {
      position: relative;
      right: 378px;
      top: 150px;
      width: 132px;
      height: 2px;
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_round {
      position: relative;
      width: 12px;
      height: 12px;
      right: 502px;
      top: 212px;
      border: 2px solid #00ecec;
    }
  }
  .Developer4 {
    right: 50px;
    bottom: 72px;

    .Developer_title {
      margin-left: 3px;
    }
    .Developer_bg_father_border {
      height: 114px;
      width: 348px;
      background: url('@/assets/images/Vector4.png') no-repeat;
      background-size: cover;

      .Developer_bg_father {
        height: 110px;
        width: 344px;
        clip-path: polygon(
          0 0,
          calc(100% - 32px) 0px,
          100% 24px,
          100% 100%,
          100% 100%,
          27px 100%,
          0 calc(100% - 26px),
          0px 28px
        );
        padding: 0 30px;
        .Developer_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 142.857% */
          text-transform: uppercase;
        }
      }
      .Developer_button {
        display: flex;
        .Developer_button_text {
          color: var(--Color, #fff);
          font-family: 'PingFang SC';
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: 0.64px;
          text-transform: uppercase;
          margin-left: 8px;
        }
      }
    }

    .Developer_line1 {
      position: relative;

      width: 2px;
      right: 270px;
      top: 0px;
      width: 2px;
      height: 170px;
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_line2 {
      position: relative;
      right: 270px;
      top: 0px;
      width: 60px;
      height: 2px;
      background: #00ecec;
      flex-shrink: 0;
    }
    .Developer_round {
      position: relative;
      width: 12px;
      height: 12px;
      right: 275px;
      top: 0px;
      border: 2px solid #00ecec;
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
  .button_right_top {
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

  .button_right_top {
    width: 107px;
    height: 42px;
    margin-left: 32px;
  }
}
.home_view {
  // background-color: #22fffb;
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
  }
}
.UtilityNet_PHASE {
  width: 100%;
  height: 649px;
  flex-shrink: 0;
  margin: 0 110px;
  border-radius: 12px;
  background: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 54px;
  .UtilityNet_PHASE_left {
    .UtilityNet_PHASE_title {
      margin-bottom: 20px;
      max-width: 778px;
      color: #fffefb;
      font-family: Gilroy-Bold;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .UtilityNet_PHASE_text {
      margin-bottom: 60px;
      max-width: 759px;
      color: rgba(255, 254, 251, 0.8);
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
        border-radius: 8px;
        padding: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          background: #b0faff;
        }
      }

      .UtilityNet_PHASE_button {
        gap: 5px;
        background: #1b1b1b;
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
        color: #fffefb;
        &:hover {
          color: #000;

          background: linear-gradient(180deg, #00a89e 0%, #00fff5 100%);
          backdrop-filter: blur(4.66006326675415px);
        }
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
@media (max-width: 834px) {
  .home_view {
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
  }
}
</style>
