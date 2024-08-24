<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
const viewableWidth = ref(document.documentElement.clientWidth ?? 0)
const mouseCheckIndex = ref(-1)
import { openNewPage } from '@/utils/request'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import { log } from 'console'
const { home } = useStore()
const { theme } = storeToRefs(home)

const firstCheckQuestionMessage = ref(-1)

const questionList = ref([
  {
    text: 'learning_center.What_is_UtilityNet',
    istext: false,
    children: [
      'learning_center.What_is_UtilityNet',
      'learning_center.What_is_UNC',
      'learning_center.What_is_DePIN',
      'learning_center.What_is_POCI_consensus'
    ]
  },
  {
    text: 'learning_center.How_to_use_it',
    istext: false,
    children: [
      'learning_center.Utility_digital_wallet',
      'learning_center.core_system',
      'learning_center.Utility_container_cloud',
      'learning_center.Utility_AI_tools',
      'learning_center.Utility_block_explorer',
      'learning_center.Utility_Development_Kit'
    ]
  },
  {
    text: 'learning_center.Enhance_Utility_Network',
    istext: false,
    children: [
      'learning_center.Running_node',
      'learning_center.Mining_and_Lease_Supply',
      'learning_center.Join_the_community'
    ]
  }
])

const questionMessageList = [
  {
    id: 'section_right_item1',
    messageTitle: 'learning_center.What_is_UtilityNet',
    messageText: 'learning_center.Utility_Network_has_made',
    elementRef: ref<HTMLElement | null>(null), // 为每个 section 指定 ref
    messageList: [
      {
        id: 1,
        title: 'learning_center.What_is_UtilityNet',
        text: 'learning_center.If_you_are_new_start',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item1.jpg',
        link: '/learning/utility_explain'
      },
      {
        id: 2,
        title: 'learning_center.What_is_UNC',
        text: 'learning_center.UNC_is_the_only_value',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item2.png',
        link: '/learning/unc_token'
      },
      {
        id: 3,
        title: 'learning_center.What_is_DePIN',
        text: 'learning_center.DePIN_is_the_abbreviation',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item4.png',
        link: '/learning/poci_consensus'
      },
      {
        id: 9,
        title: 'learning_center.What_is_POCI_consensus',
        text: 'learning_center.POCI_stands_for_Proof',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item3.png',
        link: '/learning/poci_consensus'
      }
    ]
  },
  {
    id: 'section_right_item2',

    messageTitle: 'learning_center.How_to_use_UtilityNet',
    messageText: 'learning_center.using_UtilityNet',
    elementRef: ref<HTMLElement | null>(null), // 为每个 section 指定 ref
    messageList: [
      {
        id: 4,
        title: 'learning_center.Utility_digital_wallet',
        text: 'learning_center.The_Utility_digital_wallet',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item5.png',
        link: '/soloutions/utility_wallet'
      },
      {
        id: 5,
        title: 'learning_center.core_system',
        text: 'learning_center.The_credit_scoring_platform',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item6.png',
        link: '/get_power'
      },
      {
        id: 10,
        title: 'learning_center.Utility_container_cloud',
        text: 'learning_center.computing_power_cloud_service_platform',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item7.png',
        link: '/get_power'
      },
      {
        id: 11,
        title: 'learning_center.Utility_AI_tools',
        text: 'learning_center.Combined_with_artificial',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item8.png',
        link: '/get_power'
      },
      {
        id: 12,
        title: 'learning_center.Utility_block_explorer',
        text: 'learning_center.Providing_users_with_an_intuitive',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item11.png',
        link: '/get_power'
      },
      {
        id: 13,
        title: 'learning_center.Utility_Development_Kit',
        text: 'learning_center.Enables_developers_to_easily',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item9.png',
        link: '/get_power'
      }
    ]
  },
  {
    id: 'section_right_item3',
    messageTitle: 'learning_center.Strengthening_UtilityNet_Network',
    messageText: 'learning_center.You_can_help_secure_Ethereum',
    elementRef: ref<HTMLElement | null>(null), // 为每个 section 指定 ref
    messageList: [
      {
        id: 6,
        title: 'learning_center.Running_node',
        text: 'learning_center.Participate_in_running_nodes',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item10.png',
        link: 'https://wiki.utlab.io/docs/node/introduction'
      },
      {
        id: 7,
        title: 'learning_center.Mining_and_Lease_Supply',
        text: 'learning_center.Learn_how_to_mine_and',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item7.png',
        link: 'https://wiki.utlab.io/docs/computing-power-supplier/introduce'
      },
      {
        id: 8,
        title: 'learning_center.Join_the_community',
        text: 'learning_center.Home_for_Utility_developers',
        img: 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item13.png',
        link: '/community'
      }
    ]
  }
]

let sectionRightElement: any = ref([])
const sectionRight = ref<HTMLElement | null>(null)

// sectionRight
function scrollToPosition(i: string) {
  const element = document.getElementById(i) // 替换成您要获取距离的元素的id
  const rect1 = element!.getBoundingClientRect()
  const distanceToTop = rect1.top + window.pageYOffset

  console.log('距离页面顶部的距离：', distanceToTop)
  window.scrollTo({
    top: distanceToTop - 100 - 50, // 设置滚动条位置为顶部
    behavior: 'smooth' // 平滑滚动
  })

  // for (let index = 0; index < questionList.value.length; index++) {
  //   if (i === `section_right_item${index + 1}`) {
  //     questionList.value[index].istext = true
  //   } else {
  //     questionList.value[index].istext = false
  //   }
  // }
}

// 挂载时获取盒子元素的引用并计算初始高度
onMounted(() => {
  sectionRightElement.value = document.querySelectorAll('.section_right_item') // 替换为您的盒子的类名或选择器
  console.log('  sectionRightElement.value ', sectionRightElement)

  if (sectionRightElement.value) {
    calculateBoxTopDistance()
    window.addEventListener('scroll', handleScroll)
  }
})

// 卸载时清除监听器
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// 计算盒子距离顶部的高度
const calculateBoxTopDistance = () => {
  // 初始化所有项的 istext 为 false
  questionList.value.forEach(item => {
    item.istext = false
  })
  // 判断元素是否在视图中的函数
  function isElementInViewport(el: { getBoundingClientRect: () => any }) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
  const y = window.scrollY // 获取当前滚动条距离顶部的距离
  for (let index = 0; index < sectionRightElement.value.length; index++) {
    const rect1 = sectionRightElement.value[index].getBoundingClientRect() // 获取当前盒子的位置信息

    // questionList.value[index].istext = true
    if (y > rect1.top + (window.pageYOffset - 110 - 50 - 100)) {
      // 更新滚动位置后再遍历一次，将不在视图中的项的 istext 属性设置为 false
      for (let i = 0; i < sectionRightElement.value.length; i++) {
        if (!isElementInViewport(sectionRightElement.value[i])) {
          questionList.value[i].istext = false
        }
        questionList.value[index].istext = true
      }
    }
  }
}

// 处理滚动事件
const handleScroll = () => {
  calculateBoxTopDistance()
}
</script>
<template>
  <div class="home_view">
    <div class="homeHandDiv" v-if="viewableWidth > 834">
      <div class="homeHandBgc"></div>
      <div class="homeHand"></div>
    </div>
    <div class="container">
      <div class="header">
        <div class="header_content">
          <div class="header_content_header">
            {{ $t('learning_center.Learning_center') }}
          </div>
          <div class="header_content_text">
            {{ $t('learning_center.A_guide_and_help_center') }}
          </div>
          <div
            class="header_content_button"
            @click="
              openNewPage('http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf')
            "
          >
            <div>White paper</div>
            <img
              v-if="viewableWidth > 834"
              src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/arrow.svg"
              alt=""
              srcset=""
              style="filter: brightness(100)"
            />
            <img
              v-if="viewableWidth < 834"
              src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/arrow.svg"
              alt=""
              style="
                transform: scale(0.6);
                filter: brightness(100);
                margin-top: 1px;
              "
            />
            <!-- style="filter: brightness(var(--learning-center-brightness))" -->
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section_side">
          <div class="section_side_opacity"></div>
          <div class="section_side_message">
            <div class="text_list">
              <div
                v-for="(item, index) in questionList"
                :key="index"
                @click="scrollToPosition(questionMessageList[index].id)"
              >
                <div
                  class="section_side_text"
                  :class="[item.istext ? 'highlight' : '']"
                >
                  {{ $t(item.text) }}
                </div>
                <div
                  class="section_side_text_c"
                  v-for="(i, index) in item.children"
                  :key="index"
                >
                  {{ $t(i) }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section_right" ref="sectionRight">
          <div
            :id="item.id"
            ref="sectionRightElement"
            class="section_right_item"
            v-for="(item, index) in questionMessageList"
            :key="index"
          >
            <div
              class="section_right_item_title"
              :style="{
                background: theme
                  ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
                  : '',
                'background-clip': theme ? 'text' : '',
                '-webkit-background-clip': theme ? 'text' : '',
                '-webkit-text-fill-color': theme ? 'transparent' : ''
              }"
            >
              {{ $t(item.messageTitle) }}
            </div>
            <div class="section_right_item_text">
              {{ $t(item.messageText) }}
            </div>
            <div class="section_right_item_card">
              <div v-for="(citem, cindex) in item.messageList" :key="cindex">
                <AnimationBox class="section_right_item_card_item_border">
                  <div
                    class="section_right_item_card_item"
                    @click="openNewPage(citem.link)"
                  >
                    <div class="section_right_item_card_item_header">
                      <div class="section_right_item_card_item_header_title">
                        {{ $t(citem.title) }}
                      </div>
                      <div
                        :style="{
                          height: viewableWidth > 834 ? '65px' : '30px'
                        }"
                      >
                        <div class="section_right_item_card_item_header_text">
                          {{ $t(citem.text) }}
                        </div>
                      </div>
                      <div class="section_right_item_card_item_header_img">
                        <img :src="citem.img" alt="" />
                      </div>
                    </div>
                    <div class="section_right_item_card_item_button">
                      <img
                        v-if="
                          viewableWidth < 834 ||
                          firstCheckQuestionMessage === citem.id
                        "
                        src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/learning_center_enter.png"
                        alt=""
                        class="section_right_item_card_item_button_arrow1"
                      />
                      <img
                        v-else
                        src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/learning_center_enter_default.png"
                        alt=""
                        class="section_right_item_card_item_button_arrow"
                      />

                      <div
                        @mouseenter="firstCheckQuestionMessage = citem.id"
                        @mouseleave="firstCheckQuestionMessage = -1"
                      >
                        Learn More
                      </div>
                    </div>
                  </div>
                </AnimationBox>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.homeHandDiv {
  width: 100%;
  height: 900px;
  position: absolute;

  .homeHandBgc {
    width: 100%;
    height: 900px;
    background: #0b0b11;
    background: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center.jpg') no-repeat center
      center / cover;
    position: absolute;
    z-index: -1;
    // 模糊效果
    filter: blur(25px);
  }

  .homeHand {
    position: absolute;
    background: #0b0b11;
    background: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center.jpg') no-repeat center
      center / cover;
    max-width: 1728px;
    width: 90%;
    height: 900px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: -1;
    /* 添加内阴影 */
    box-shadow: inset 100px 0 100px -50px rgba(0, 0, 0, 0.8),
      inset -100px 0 100px -50px rgba(0, 0, 0, 0.8);

    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   bottom: 0;
    //   left: 0;
    //   right: 0;
    //   background: linear-gradient(
    //     to right,
    //     rgba(11, 11, 17, 1) 0%,
    //     rgba(11, 11, 17, 0) 8%,
    //     rgba(11, 11, 17, 0) 92%,
    //     rgba(11, 11, 17, 1) 100%
    //   );
    //   z-index: 1;
    //   pointer-events: none;
    // }
  }

  &::before {
    content: '';
    width: 100%;
    height: 900px;

    // background: linear-gradient(79deg, #d57a99 3.81%, #f6c1b9 100%);
    mix-blend-mode: multiply;
    position: absolute;
  }
}
.container {
  // background-color: #fffefb;
  padding-top: 70px;

  .header {
    width: 100%;
    height: 830px;
    // background: var(--learning_center-header-bg) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .header_content {
      height: 310px;
      width: 534px;
      margin: 0 0 94px 140px;
      padding: 0 60px;

      flex-shrink: 0;
      border-radius: 10px;
      // background: var(--learning_center-header-bg-color);
      background: rgba(0, 0, 0, 0.7);
      // box-shadow: var(--unc_token-header-shadow);
      box-shadow: 0px 1px 4px 0px rgba(255, 255, 255, 0.2) inset;
      backdrop-filter: blur(4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      .header_content_header {
        color: var(--where-text);
        color: #fff;
        font-family: Lantinghei SC;
        font-size: 28px;
        font-weight: 700;
      }

      .header_content_text {
        // width: 398px;
        color: var(--where-text);
        color: #fff;

        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 145%;
        opacity: 0.8;
        margin: 19px 0 30px;
      }

      .header_content_button {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 151px;
        height: 42px;
        border-radius: 6px;
        border: 1px solid var(--Utility-title-color);
        border: 1px solid #fff;
        color: var(--where-text);
        color: #fff;
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        cursor: pointer;
        background: var(--background-header_content_button);
        &:hover {
          border: 1px solid #3edfcf;
          background-color: #3edfcf;
        }
      }
    }
  }

  .section {
    display: flex;
    width: 100%;
    .section_side {
      width: 346px;
      height: 628px;
      border-radius: 8px;
      position: relative;
      position: -webkit-sticky;
      position: sticky;
      top: 70px;
      flex-shrink: 0;

      .section_side_opacity {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        box-shadow: var(--box-shadow-light);
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        background: var(--section_side_opacity-bgc);
      }

      .section_side_message {
        position: absolute;
        top: 40px;
        left: 40px;
        z-index: 10;

        .section_side_title {
          color: var(--where-text);
          font-family: Lantinghei SC;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 9px;
        }

        .text_list {
          .highlight {
            color: #3edfcf !important;
          }
          .section_side_text_c {
            color: var(--where-text-c);
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            //间距5
            // gap: 10px;
            margin: 15px 0;
            margin-left: 20px;
          }
          .section_side_text {
            color: var(--where-text);
            font-family: Lantinghei SC;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 9px;
            padding: 7px 0;
            //箭头变小手
            cursor: pointer;

            img {
              width: 11px;
              height: 11px;
              margin-left: 4px;
            }
          }
        }
      }
    }

    .section_right {
      padding: 60px 88px 0px 92px;

      .section_right_item {
        margin-bottom: 70px;

        .section_right_item_title {
          color: var(--where-text);
          font-family: Lantinghei SC;
          font-size: 18px;
          font-weight: 700;
          /* 21px */
        }

        .section_right_item_text {
          color: var(--where-text);
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 147%;
          /* 23.52px */
          margin: 12px 0 36px;
        }

        .section_right_item_card {
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          .section_right_item_card_item {
            padding: 35px 40px 10px 40px;

            // border-radius: 8px;
            // border: 1px solid rgba(115, 255, 247, 0);
            // background: linear-gradient(
            //   90deg,
            //   var(--learning-center-what-bg) 49.96%,
            //   var(--learning-center-what-bg1) 302.95%
            // );
            // box-shadow: 0px 4px 24px 0px var(--learning-center-what-shadow);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            // margin-bottom: 16px;
            // background: #fff;
            width: 100%;
            height: 100%;

            // &:hover {
            //   background: var(--learning-center-section_right-bg);
            //   border: var(--learning-center-section_right-border);
            //   box-shadow: var(--unc_token-subtitle-shadow);
            // }

            .section_right_item_card_item_header {
              .section_right_item_card_item_header_title {
                color: #3edfcf;
                font-family: Lantinghei SC;
                font-size: 16px;
                font-weight: 700;
                line-height: 150%;
                margin-bottom: 10px;

                /* 21px */
              }
              .section_right_item_card_item_header_img {
                margin-top: 10px;
                // width: 250px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                  width: 75%;
                }
              }
              .section_right_item_card_item_header_text {
                color: var(--where-text);
                font-family: Inter;
                font-size: 14px;
                font-weight: 400;
                line-height: 150%;
                /* 21px */
                //显示省略号
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;

                &:hover {
                  // background: rgba(55, 216, 195, 0.648);
                  overflow: visible;
                  -webkit-line-clamp: 10;
                  opacity: 0.99999;
                }
              }
            }

            .section_right_item_card_item_button {
              height: 30px;
              display: flex;
              cursor: pointer;
              display: flex;
              justify-content: center;

              img {
                width: 24px;
                height: 14px;
                margin-right: 8px;
              }

              & > div {
                color: var(--where-text);
                font-family: Inter;
                font-size: 14px;
                font-weight: 600;
                line-height: 150%;

                &:hover {
                  text-decoration: underline #3edfcf;
                  color: #3edfcf;
                }
              }

              .section_right_item_card_item_button_arrow {
                filter: brightness(var(--learning-center-brightness));
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 834px) {
  .header {
    height: 558px;
  }

  .section_right_item_card_item {
    width: 368px;
  }
  .section_right_item_card_item_border {
    // 鼠标变小手
    cursor: pointer;
    width: 370px;
    height: 480px;

    margin-right: 24px;
    margin-bottom: 24px;
  }
}

@media (max-width: 834px) {
  .homeHandDiv {
    height: 574px !important;

    .homeHandBgc {
      height: 574px !important;
    }

    .homeHand {
      height: 574px !important;
    }

    &::before {
      height: 574px !important;
    }
  }
  .section_right_item_card_item_border {
    width: 82px !important;
    height: 100px;
    padding: 0px 0px;
    border-radius: 4px;
    margin-bottom: 16px;
  }
  .container {
    padding-top: 0;
    .header {
      width: 100%;
      height: 457px;
      padding: 0 5%;
      // background: var(--learning_center-bgc-phone);
      background: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center.jpg') no-repeat center;
      background-size: cover;
      justify-content: left;

      .header_content {
        width: 150px;
        // width: 100%;
        height: 120px;
        flex-shrink: 0;
        padding: 10px 10px;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        // margin-bottom: 41px;
        // box-shadow: var(--unc_token-header_content-shadow);
        // backdrop-filter: blur(var(--unc_token-header_content-filter));

        .header_content_header {
          font-family: 'PingFang SC';
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
        .header_content_text {
          margin: 4px 0 4px;
          font-family: 'PingFang SC';
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: 120%; /* 12px */
        }
        .header_content_button {
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--Utility-title-color) !important;
          width: 87px;
          height: 20px;
          flex-shrink: 0;
          font-family: 'PingFang SC';
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }

    .section {
      .section_side {
        width: 105px;
        // height: 297px;
        flex-shrink: 0;

        // filter: drop-shadow(0px 4px 24px rgba(228, 233, 232, 0.021));
        .section_side_opacity {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          box-shadow: var(--box-shadow-light);
          opacity: 0.4;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          background: var(--section_side_opacity-bgc);
        }

        .section_side_message {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 10;

          .text_list {
            .highlight {
              color: #3edfcf !important;
            }
            .section_side_text_c {
              color: var(--where-text-c);

              font-size: 8px;
              // transform: scale(0.8333);
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              margin: 10px 0;
              margin-left: 6px;
            }
            .section_side_text {
              color: var(--where-text);
              font-family: Lantinghei SC;
              font-size: 10px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              margin-bottom: 4px;
              padding: 0px 0;
              //箭头变小手
              cursor: pointer;

              // img {
              //   width: 11px;
              //   height: 11px;
              //   margin-left: 4px;
              // }
            }
          }
        }
      }
      .section_right {
        width: 100%;
        padding: 0 0;

        padding: 0px 0px 0px 16px;
        padding-bottom: 26px;

        .section_right_item {
          margin-bottom: 20px;
          .section_right_item_title {
            margin-top: 25px;
            font-size: 13px;
            font-style: normal;
            font-weight: 600;
          }

          .section_right_item_text {
            padding: 0 0px;
            opacity: 0.8;
            margin: 10px 0;
            color: var(--unc_token-main_text-color) !important;
            font-family: 'PingFang SC';
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .section_right_item_card {
            width: 100%;
            padding: 0 px;
            display: flex;
            gap: 4px;
            align-items: center;

            .section_right_item_card_item {
              // &:hover {
              //   background: none;
              // }
              padding: 6px 0px;
              // background: #0b0b0b;
              .section_right_item_card_item_header {
                .section_right_item_card_item_header_title {
                  font-size: 8px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  text-align: center;

                  margin-bottom: 0px;
                }
                .section_right_item_card_item_header_img {
                  margin-top: 0px;
                  // width: 250px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 35%;
                  }
                }
                .section_right_item_card_item_header_text {
                  font-size: 6px;

                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                }
              }

              .section_right_item_card_item_button {
                display: flex;
                justify-content: center;
                align-items: center;
                .section_right_item_card_item_button_arrow1 {
                  //缩放
                  transform: scale(0.5333);
                  margin-right: 0px;
                }

                & > div {
                  text-decoration: underline #3edfcf;
                  color: #3edfcf;
                  font-size: 6px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
