<script setup lang="ts">
import { openNewPage } from '@/utils/request'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { home } = useStore()
const { theme } = storeToRefs(home)
import { getStatistics } from '@/api/home'
import phaseArrow from '@/assets/images/UtilityNet_PHASE_button_arrow.svg'
import greenAarrow from '@/assets/images/green_arrow.svg'
const unc_price = ref(0)
onMounted(async () => {
  const { data } = await getStatistics()
  unc_price.value = data.aiPower
  window.addEventListener('scroll', handleScroll)
})
const optionsList = [
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/unc_token_options_item1.png',
    title: 'Pancakeswap',
    text: 'utilityNetwork.decentralized_exchange',
    link: 'https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x35da89a339de2c78f8fb1c5e1a9a9c6539e2fa8a'
  },
  {
    image: '/src/assets/images/unc_token_options_item2.svg',
    title: 'Hotcoin Global',
    text: 'utilityNetwork.digital_asset_trading',
    link: 'https://www.hotcoin.com/'
  },
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/unc_token_options_item3.png',
    title: 'CoinW',
    text: 'utilityNetwork.multifacetedc_ryptocurrency_platform',
    link: 'https://www.coinw.com/frontSpot/spottrade?symbol=1382'
  }
]
const viewableWidth = ref(document.documentElement.clientWidth ?? 0)

// 初始化 orderNum 数组，用于显示数字和逗号
const orderNum = ref<string[]>([
  '1',
  '0',
  ',',
  '0',
  '0',
  '0',
  ',',
  '0',
  '0',
  '0',
  ',',
  '0',
  '0',
  '0'
])

// 定义当前数字和目标数字
const currentNumber = ref<number>(10000000000) // 当前数字
const targetNumber = ref<number>(500000000) // 目标数字

// 动画持续时间
const duration = ref<number>(30000)
let startTime: number | null = null

// 格式化数字
const formatNumber = (num: number) => {
  return num.toLocaleString('en-US')
}

// 更新 orderNum 显示的函数
const updateNumberDisplay = (num: number) => {
  // 格式化数字，并去除前导零
  const formattedNum = formatNumber(num).replace(/^0+/, '')
  // 更新 orderNum 数组，包含逗号的位置
  orderNum.value = formattedNum.split('')
}

// 动画函数
const animate = () => {
  const step = (timestamp: number) => {
    // 初始化开始时间
    if (!startTime) startTime = timestamp
    // 计算动画进度
    const progress = timestamp - startTime
    // 如果动画完成
    if (progress >= duration.value) {
      currentNumber.value = targetNumber.value
      updateNumberDisplay(currentNumber.value)
    } else {
      // 计算当前数字
      currentNumber.value = Math.floor(
        currentNumber.value -
          ((currentNumber.value - targetNumber.value) * progress) /
            duration.value
      )
      // 更新显示
      updateNumberDisplay(currentNumber.value)
      // 继续动画
      requestAnimationFrame(step)
    }
  }
  // 开始动画
  requestAnimationFrame(step)
}
const distributionBox = ref<HTMLElement | null>(null)

// 监听滚动事件
const handleScroll = () => {
  console.log('distributionBox', distributionBox.value)

  if (!distributionBox.value) return
  const rect = distributionBox.value.getBoundingClientRect()
  // 获取 UNC_Token_Distribution 盒子的顶部位置
  const top = rect.top + window.scrollY - 200
  // 如果滚动条滚动到了 UNC_Token_Distribution 盒子的顶部位置，触发数字变化函数
  if (window.scrollY >= top) {
    animate()
    // 只触发一次后移除监听器，如果需要连续监听滚动，可以注释掉下面这行
    window.removeEventListener('scroll', handleScroll)
  }
}

// 组件销毁时移除滚动事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <div class="unc_token_view">
    <div class="container">
      <div class="header">
        <div class="header_content">
          <div class="header_content_header">
            {{ $t('learning_center.What_is_UNC') }}
          </div>
          <div class="header_content_text">
            <!-- {{ $t('learning_center.How_to_understand') }} -->
            UNCs are the only value-anchored carrier credentials in the
            UtilityNet ecosystem, and users can earn UNC rewards for providing
            computing resources, driving the rapid expansion of the distributed
            arithmetic network.
          </div>
          <div class="header_content_box">
            <div class="CURRENT_UNC_PRICe">CURRENT UNC PRICE (USD)</div>
            <div class="money">$0.1</div>
            <div class="LAST_24_HQURS">
              <div class="green">18.62%</div>
              <greenAarrow />
              <div class="white">(LAST 24 HQURS)</div>
            </div>
          </div>
          <div class="header_content_button">
            Gets UNC
            <img
              :style="{
                filter: theme ? 'brightness(100%)' : 'brightness(0%)'
              }"
              src="/src/assets/images/UtilityNet_PHASE_button_arrow.svg"
              alt=""
            />
          </div>
        </div>
        <div class="unc_token_header_bg">
          <img src="@/assets/images/unc_token_header_bg.png" alt="" />
        </div>
      </div>
      <div class="message">
        <!-- <div class="main_title_message">
        <div class="main_title">
          {{ $t('utilityNetwork.learn_about_unc_token_title') }}
        </div>
        <div class="main_text">
          {{ $t('utilityNetwork.learn_about_unc_token_text') }}
        </div>
      </div> -->
        <div class="subtitle">
          <div class="subtitle_options" v-if="viewableWidth > 834">
            <div class="subtitle_options_item">
              <img src="@/assets/images/subtitle_options_item_bg.png" alt="" />
              <div>
                <div class="subtitle_options_item_title">About UNC</div>
                <div class="subtitle_options_item_text">
                  <!-- {{ $t('utilityNetwork.fundamentals_of_blockchain_text') }} -->
                  UtilityNet is currently in the testnet stage. At this stage,
                  you can also understand that UNC is a value certificate for
                  early users of UtilityNet. After the mainnet is launched, we
                  will carry out 1:1 same-proportion mapping. At this stage, the
                  value of UNC is largely Undervalued, the value of UNC will
                  gradually be recognized with the development of UtilityNet
                  distributed chip computing power ecosystem and the
                  verification of market demand, thereby achieving ideal value
                  growth!
                </div>
              </div>
            </div>
          </div>
          <div class="subtitle_options" v-else>
            <div class="subtitle_options_item">
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/unc_token_options1.png"
                alt=""
              />
              <div>
                <div class="subtitle_options_item_title">
                  {{ $t('utilityNetwork.fundamentals_of_blockchain_title') }}
                </div>
                <div class="subtitle_options_item_text">
                  {{ $t('utilityNetwork.fundamentals_of_blockchain_text') }}
                </div>
              </div>
            </div>
            <div class="subtitle_options_item">
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/unc_token_options2.png"
                alt=""
              />
              <div>
                <div class="subtitle_options_item_title">
                  {{
                    $t(
                      'utilityNetwork.superb_application_of_smart_contracts_title'
                    )
                  }}
                </div>
                <div class="subtitle_options_item_text">
                  {{
                    $t(
                      'utilityNetwork.superb_application_of_smart_contracts_text'
                    )
                  }}
                </div>
              </div>
            </div>
            <div class="subtitle_options_item">
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/unc_token_options3.png"
                alt=""
              />
              <div>
                <div class="subtitle_options_item_title">
                  {{
                    $t(
                      'utilityNetwork.incentive_mechanism_for_innovation_title'
                    )
                  }}
                </div>
                <div class="subtitle_options_item_text">
                  {{
                    $t('utilityNetwork.incentive_mechanism_for_innovation_text')
                  }}
                </div>
              </div>
            </div>
            <div class="subtitle_options_item">
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/unc_token_options4.png"
                alt=""
              />
              <div>
                <div class="subtitle_options_item_title">
                  {{
                    $t(
                      'utilityNetwork.digital_interpretation_of_blockchain_governance_title'
                    )
                  }}
                </div>
                <div class="subtitle_options_item_text">
                  {{
                    $t(
                      'utilityNetwork.digital_interpretation_of_blockchain_governance_text'
                    )
                  }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="UNC_Token_Distribution" ref="distributionBox">
          <div>
            <div class="UNC_Token_Distribution_title">
              $UNC Token Distribution
            </div>
            <div class="UNC_Token_Distribution_text">
              The total number of UNCs will eventually reach 500 million through
              the halving deflation mechanism and the burning mechanism,
              creating a circular circulation.
            </div>
          </div>

          <div class="UNC_Token_Distribution_figure">
            <div class="figure_round">
              <div class="figure_round_number">
                <div class="box-item">
                  <li
                    :class="{
                      'number-item': !isNaN(Number(item)),
                      'mark-item': isNaN(Number(item))
                    }"
                    v-for="(item, index) in orderNum"
                    :key="index"
                  >
                    <span v-if="!isNaN(Number(item))">
                      <i
                        ref="numberItem"
                        :style="{
                          transform: 'translateY(-' + Number(item) * 10 + '%)'
                        }"
                      >
                        0123456789
                      </i>
                    </span>
                    <span class="comma" v-else>{{ item }}</span>
                  </li>
                </div>
              </div>
            </div>
            <div class="Arithmetic_Incentive line_and_border">
              <div class="UNC_Token_Distribution_border">
                <div class="UNC_Token_Distribution_border_title">97%</div>
                <div class="UNC_Token_Distribution_border_text">
                  Arithmetic Incentive (Miner)
                </div>
              </div>
              <div class="UNC_Token_Distribution_line"></div>
              <div class="UNC_Token_Distribution_line1"></div>
            </div>
            <div class="Arithmetic_Incentive1 line_and_border">
              <div class="UNC_Token_Distribution_border">
                <div class="UNC_Token_Distribution_border_title">97%</div>
                <div class="UNC_Token_Distribution_border_text">
                  Technology Node Management Fund
                </div>
              </div>
              <div class="UNC_Token_Distribution_line"></div>
              <div class="UNC_Token_Distribution_line1"></div>
            </div>
            <div class="Arithmetic_Incentive2 line_and_border">
              <div class="UNC_Token_Distribution_border">
                <div class="UNC_Token_Distribution_border_title">97%</div>
                <div class="UNC_Token_Distribution_border_text">
                  DAO organization management distribution
                </div>
              </div>
              <div class="UNC_Token_Distribution_line"></div>
              <div class="UNC_Token_Distribution_line1"></div>
            </div>
            <div class="Arithmetic_Incentive3 line_and_border">
              <div class="UNC_Token_Distribution_border">
                <div class="UNC_Token_Distribution_border_title">97%</div>
                <div class="UNC_Token_Distribution_border_text">
                  Initial mining of fossil fuel
                </div>
              </div>
              <div class="UNC_Token_Distribution_line"></div>
              <div class="UNC_Token_Distribution_line1"></div>
            </div>
          </div>
          <div class="UNC_Token_Distribution_img">
            <img
              :src="
                !theme
                  ? '/src/assets/images/UNC_Token_Distribution_img_white.png'
                  : '/src/assets/images/UNC_Token_Distribution_img.png'
              "
              alt=""
            />
          </div>
        </div>
        <div class="options_list_father">
          <div class="options_list_header">Where to get UNC?</div>
          <div class="options_list_header_text">
            You can get UNC from decentralized exchanges or centralized
            exchanges that are currently live.
          </div>
          <div class="options_list">
            <div v-for="(item, index) in optionsList" :key="index">
              <div class="options_item" @click="openNewPage(item.link)">
                <img :src="item.image" alt="" />
                <div class="options_item_header">
                  <div class="options_item_header_title">{{ item.title }}</div>
                  <div class="options_item_header_text">
                    {{ $t(item.text) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Join_the_UtilityNet">
          <div class="Join_the_UtilityNet_left">
            <div class="Join_the_UtilityNet_title">
              What is unique about UNC?
            </div>
            <div class="Join_the_UtilityNet_text">
              There are many cryptocurrencies on the market today, but there are
              some things that only UNC can do, and UNC's value set is based on
              the worldwide demand for distributed chip arithmetic resources and
              our innovative POCI protocol.
            </div>
          </div>
          <div class="Join_the_UtilityNet_right">
            <img src="@/assets/images/Join_the_UtilityNet_bg.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
li {
  list-style: none !important; /* 移除列表项默认的点 */
}
.unc_token_view {
  background-color: var(--home-background-color);
}
.container {
  width: 100%;
  padding: 0 110px;

  .header {
    margin-top: 92px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 110px 38px 100px 0px;

    .header_content {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 30px;
      .header_content_header {
        color: var(--home-title-color);
        font-family: Gilroy-Bold;
        font-size: 60px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .header_content_text {
        color: var(--home-title-color);
        font-family: Gilroy-Medium;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 155%; /* 31px */
        max-width: 825px;
      }
      .header_content_box {
        width: 451px;
        height: 156px;
        flex-shrink: 0;
        border-radius: 12px;
        border: 0.466px solid var(--unc-tkoen-header_content_box-border);
        background: var(--unc-tkoen-header_content_box-background);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        .CURRENT_UNC_PRICe {
          color: var(--home-text-color);
          font-family: Gilroy-Medium;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 155%; /* 31px */
        }
        .money {
          color: var(--home-title-color);
          text-align: center;
          font-family: Gilroy-Bold;
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .LAST_24_HQURS {
          display: flex;
          align-items: center;
          .green {
            color: #37a17a;
            font-family: Gilroy-Medium;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 155%; /* 31px */
            margin-right: 2px;
          }
          .white {
            margin-left: 15px;
            color: var(--home-text-color);
            font-family: Gilroy-Medium;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 155%; /* 31px */
          }
        }
      }

      .header_content_button {
        width: 141px;
        height: 42px;
        flex-shrink: 0;
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
        cursor: pointer;
        &:hover {
          box-shadow: 0px 4px 20px 0px rgba(0, 255, 245, 0.3);
        }
      }
    }
    .unc_token_header_bg {
      width: 467.401px;
      height: 502.517px;
      flex-shrink: 0;
    }
  }

  .message {
    .subtitle {
      .subtitle_options {
        margin-bottom: 100px;
        display: flex;
        // flex-direction: column;
        align-items: center;
        justify-content: center;

        .subtitle_options_item {
          width: 100%;

          flex-shrink: 0;
          border-radius: 12px;
          background: var(--home-background-color-child);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 54px 13px 80px !important;
          // gap: 50px;

          img {
            width: 407.025px;
            height: 405.129px;
            flex-shrink: 0;
          }

          .subtitle_options_item_title {
            color: var(--home-title-color);
            font-family: Gilroy-Bold;
            font-size: 50px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }

          .subtitle_options_item_text {
            color: var(--home-text-color);
            font-family: Gilroy-Medium;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 155%; /* 31px */
            max-width: 760px;
          }
        }
      }
    }
    .UNC_Token_Distribution {
      padding: 50px 60px 0 52px;
      width: 100%;
      border-radius: 12px;
      background: var(--home-background-color-child);
      margin-bottom: 90px;
      min-height: 830.981px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .UNC_Token_Distribution_title {
        color: var(--home-title-color);
        font-family: Gilroy-Bold;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .UNC_Token_Distribution_text {
        color: var(--home-text-color);
        font-family: Gilroy-Medium;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 155%; /* 31px */
        margin-bottom: 60px;
      }
      .UNC_Token_Distribution_figure {
        position: relative;

        .figure_round {
          width: 409.828px;
          height: 409.829px;
          flex-shrink: 0;
          position: absolute;
          top: -178px;
          left: 33.5%;
          background: url('@/assets/images/UNC_Token_Distribution_round.png')
            no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
          .figure_round_number {
            color: var(--unc-figure_round_number);
            font-family: Gilroy-Bold;
            font-size: 34.09px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-transform: uppercase;

            .box-item {
              position: relative;
              writing-mode: vertical-lr;
              text-orientation: upright;
              -moz-user-select: none;
              -webkit-user-select: none;
              -ms-user-select: none;
              -khtml-user-select: none;
              user-select: none;
            }

            .mark-item {
              width: 10px;
              height: 30px;
              margin-right: 5px;
              line-height: 10px;
              font-size: 34px;
              position: relative;
              & > span {
                position: absolute;
                width: 100%;
                bottom: 0;
                writing-mode: vertical-rl;
                text-orientation: upright;
              }
            }

            .number-item {
              width: 18px;
              height: 30px;
              list-style: none;
              display: flex;
              justify-content: center;
              align-items: center;
              & > span {
                position: relative;
                display: flex;
                // justify-content: center;
                // align-items: center;
                width: 100%;
                height: 100%;
                writing-mode: tb-rl; // writing-mode 改变文字排列方向
                text-orientation: upright; // 文字方向
                overflow: hidden;
                & > i {
                  width: 18px;

                  font-style: normal;
                  position: absolute;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  transform: translateX(-50%);
                  transition: transform 0.1s linear;
                  letter-spacing: 10px; // 字符间距
                }
              }
            }
            .number-item:last-child {
              margin-right: 0;
            }
          }
        }
        .line_and_border {
          .UNC_Token_Distribution_line {
            position: absolute;

            height: 1px;
            background: #00fff5;
          }
          .UNC_Token_Distribution_line1 {
            position: absolute;
            width: 24px;
            height: 1px;
            background: #00fff5;
          }
          .UNC_Token_Distribution_border {
            position: absolute;
            width: 386.675px;
            height: 78.251px;
            flex-shrink: 0;
            background: url('@/assets/images/UNC_Token_Distribution_border.png')
              no-repeat;
            background-size: contain;
            // background: #00fff5;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 9px;
            .UNC_Token_Distribution_border_title {
              color: #00fff5;
              font-family: Gilroy-Bold;
              font-size: 32.205px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
            .UNC_Token_Distribution_border_text {
              color: var(--home-title-color);
              font-family: Gilroy-SemiBold;
              font-size: 17.892px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              max-width: 264px;
            }
          }
        }
        .Arithmetic_Incentive {
          .UNC_Token_Distribution_line {
            width: 130px;
            rotate: 31deg;
            left: 31.4%;
            top: 110px;
          }
          .UNC_Token_Distribution_line1 {
            left: 30.36%;
            top: 76px;
          }
          .UNC_Token_Distribution_border {
            left: 2.7%;
            top: 1.8px;
          }
        }
        .Arithmetic_Incentive1 {
          .UNC_Token_Distribution_line {
            width: 140px;
            rotate: 124deg;
            right: 32.55%;
            top: -65px;
          }
          .UNC_Token_Distribution_line1 {
            right: 33.1%;
            top: -122.6px;
          }
          .UNC_Token_Distribution_border {
            right: 5.5%;
            top: -196.3px;
          }
        }
        .Arithmetic_Incentive2 {
          .UNC_Token_Distribution_line {
            width: 84px;
            rotate: 18deg;
            right: 34.5%;
            top: 55.5px;
          }
          .UNC_Token_Distribution_line1 {
            right: 32.9%;
            top: 68px;
          }
          .UNC_Token_Distribution_border {
            right: 5.3%;
            top: -5.8px;
          }
        }
        .Arithmetic_Incentive3 {
          .UNC_Token_Distribution_line {
            width: 140px;
            rotate: 56deg;
            right: 32.8%;
            top: 119px;
          }
          .UNC_Token_Distribution_line1 {
            right: 33.3%;
            top: 177px;
          }
          .UNC_Token_Distribution_border {
            right: 5.7%;
            top: 177.6px;
          }
        }
      }
    }
    .options_list_father {
      width: 100%;
      flex-shrink: 0;
      border-radius: 12px;
      background: var(--home-background-color-child);
      padding: 50px 40px 90px 52px;
      .options_list_header {
        color: var(--home-title-color);
        font-family: Gilroy-Bold;
        font-size: 50px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 12px;
      }
      .options_list_header_text {
        color: var(--home-text-color);
        font-family: Gilroy-Medium;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 155%; /* 31px */
        margin-bottom: 80px;
      }

      .options_list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        // justify-content: flex-start;
        justify-content: space-around;
        width: 100%;
        gap: 15px;
        .options_item {
          // height: 105px;
          width: 360px;
          padding: 35px 0px;
          border-radius: 8px;
          background: var(--home-background-color-child);
          box-shadow: 0px 251px 70px 0px rgba(0, 0, 0, 0),
            0px 161px 64px 0px rgba(0, 0, 0, 0.01),
            0px 90px 54px 0px rgba(0, 0, 0, 0.05),
            0px 40px 40px 0px rgba(0, 0, 0, 0.09),
            0px 10px 22px 0px rgba(0, 0, 0, 0.1);
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin-right: 16px;
            background-color: #151c1a;
          }

          .options_item_header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;

            .options_item_header_title {
              color: var(--where-text);
              font-family: Inter;
              font-size: 16px;
              font-weight: 600;
              line-height: 150%;
              /* 24px */
              margin-bottom: 6px;
            }

            .options_item_header_text {
              color: var(--where-text);
              font-family: Inter;
              font-size: 14px;
              font-weight: 400;
              line-height: 150%;
              /* 21px */
              opacity: 0.8;
            }
          }

          &:hover {
            background: var(--unc_token-options_item-bgc-hover);
            // border: var(--unc_token-header-border);
            background-size: cover;
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
      padding: 0px 8px 0px 40px;
      display: flex;
      justify-content: space-between;
      .Join_the_UtilityNet_left {
        margin-top: 97px;
        .Join_the_UtilityNet_title {
          color: var(--home-title-color);
          font-family: Gilroy-Bold;
          font-size: 50px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          margin-bottom: 36px;
        }
        .Join_the_UtilityNet_text {
          max-width: 760px;
          color: var(--home-text-color);
          font-family: Gilroy-Medium;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 155%; /* 31px */
        }
      }
      .Join_the_UtilityNet_right {
        width: 37%;
        // width: 302px;
        // height: 290px;
        // flex-shrink: 0;
      }
    }
  }
}

@media (max-width: 834px) {
  .container {
    .header {
      height: 480px;
      padding: 0 5%;
      background: var(--unc-token-bgc-phone);
      background-size: cover;
      justify-content: center;

      .header_content {
        width: 100%;
        height: 206px;
        flex-shrink: 0;
        padding: 28px 18px;
        margin: 0;
        margin-bottom: 95px;

        box-shadow: var(--unc_token-header_content-shadow);
        backdrop-filter: blur(var(--unc_token-header_content-filter));

        .header_content_header {
          .header_content_header_title {
            font-size: 12px;
          }
        }

        .header_content_header_title_div {
          .dots {
            background-color: var(
              --unc_token-header_title_div-color
            ) !important;
          }
          .time_text {
            color: var(--unc_token-header_title_div-color) !important;
          }
        }

        .header_content_acount {
          font-size: 24px;
          margin-bottom: 24px;
        }

        .header_content_line_chart {
          width: 100%;
          height: 104px;
          margin: 22px 0 32px;
        }

        .header_content_button {
          width: 100%;
          height: 32px;
          font-size: 12px;
          padding: 0 14px;
          background-color: #96ebe3;
        }
      }
    }

    .message {
      padding: 32px 5% 37px;

      .main_title_message {
        .main_title {
          font-size: 20px;
          margin-bottom: 16px;
        }

        .main_text {
          margin-bottom: 28px;
          color: var(--unc_token-main_text-color) !important;
        }
      }

      .subtitle {
        .subtitle_options {
          margin-bottom: 16px;

          .subtitle_options_item {
            width: 100%;
            height: 600px;
            margin-bottom: 0px;
            border-radius: 12px;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;

            &:first-child {
              background: var(--unc_token-subtitle_options_item-bg);
              padding: 0 24px;

              img {
                width: 130px;
                height: 248px;
                margin: 38px 0 24px;
              }
            }

            &:nth-child(2) {
              background: var(--unc_token-subtitle_options_item-bg);

              padding: 0 24px;

              img {
                width: 234px;
                height: 227px;
                margin: 40px 0 43px;
              }
            }

            &:nth-child(3) {
              background: var(--unc_token-subtitle_options_item-bg);

              padding: 0 24px;

              img {
                width: 151px;
                height: 198px;
                margin: 46px 0 49px;
              }
            }

            &:last-child {
              background: var(--unc_token-subtitle_options_item-bg);

              padding: 0 24px;

              img {
                width: 116px;
                height: 247px;
                margin: 8px 0 38px;
              }
            }

            .subtitle_options_item_text {
              max-width: 100%;
            }
          }
        }
      }

      .options_list_header {
        // color: rgba(21, 28, 26, 0.9);
        font-family: Lantinghei SC;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 24px;
        text-align: center;
      }

      .options_list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
        grid-column-gap: 12px;
        /* 项目之间的水平间距 */
        grid-row-gap: 12px;

        .options_item {
          min-width: 90%;
          height: max-content;
          margin-right: 0px;
          margin-bottom: 0px;

          background: var(--unc_token-options_item-background);
          border: none;
          img {
            margin-right: 20px;
          }

          .options_item_header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          }

          &:hover {
            background: none;
          }
        }
      }
    }
  }
}
</style>
