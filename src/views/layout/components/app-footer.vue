<script lang="ts" setup name="AppFooter">
import { ref } from 'vue'
import { openNewPage } from '@/utils/request'

const viewableWidth = ref(document.documentElement.clientWidth ?? 0)

import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { home } = useStore()
const { theme } = storeToRefs(home)
const mp_left = [
  {
    title: 'footer.Resources',
    children: [
      {
        text: 'footer.White_Paper',
        isOut: true,
        link: 'http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf'
      },
      {
        text: 'footer.Green_Paper',
        isOut: true,
        link: 'http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf'
      }
    ]
  },
  {
    title: 'footer.Learning',
    children: [
      {
        text: 'footer.Learning_Center',
        isOut: false,
        link: '/learning/learning_center'
      },
      {
        text: 'footer.What_is_Utility',
        isOut: false,
        link: '/learning/utility_explain'
      },
      {
        text: 'footer.What_is_UNC_Token',
        isOut: false,
        link: '/learning/unc_token'
      },
      {
        text: 'footer.What_is_POCI_Consensus',
        isOut: false,
        link: '/learning/poci_consensus'
      }
    ]
  },
  {
    title: 'footer.Developers',
    children: [
      {
        text: 'footer.Developer_Hub',
        isOut: false,
        link: 'https://wiki.utlab.io/'
      },
      { text: 'footer.Discord', isOut: true, link: 'https://discord.com/' },
      {
        text: 'footer.Github',
        isOut: true,
        link: 'https://github.com/utnet-org'
      },
      { text: 'footer.Forum', isOut: true, link: '' }
    ]
  },
  {
    title: 'footer.About',
    children: [
      {
        text: 'footer.Privacy_policy',
        isOut: false,
        link: 'https://wiki.utlab.io/'
      },
      {
        text: 'footer.Terms_of_use',
        isOut: false,
        link: 'https://wiki.utlab.io/'
      },
      { text: 'footer.Contact_us', isOut: false, link: '' }
    ]
  }
]
const mp_right = [
  {
    title: 'footer.Use_Utility',
    children: [
      {
        text: 'footer.Utility_Wallet',
        isOut: false,
        link: '/soloutions/mp_utility_wallet'
      },
      {
        text: 'footer.Blockchain_Explorer',
        isOut: true,
        link: 'https://uncscan.com/'
      },
      { text: 'footer.Faucet', isOut: true, link: 'https://faucet.utlab.io/' },
      {
        text: 'footer.Ecosystem_dApps',
        isOut: true,
        link: 'https://wiki.utlab.io/docs/dapp/start'
      },
      {
        text: 'footer.Mining_Management_Tool',
        isOut: false,
        link: '/soloutions/mp_mining_tool'
      },
      {
        text: 'footer.GetPower',
        isOut: false,
        link: '/soloutions/mp_hashing_power'
      },
      {
        text: 'footer.AI_Model',
        isOut: false,
        link: '/soloutions/mp_ai_model'
      }
    ]
  },
  {
    title: 'footer.Community',
    children: [
      { text: 'footer.Community_Hub', isOut: false, link: '/community' },
      { text: 'footer.Online_Community', isOut: true, link: '/community' },
      { text: 'footer.Utility_Foundation', isOut: false, link: '' },
      { text: 'footer.Activity', isOut: false, link: '/community' }
    ]
  },
  {
    title: 'footer.Provider',
    children: [{ text: 'footer.Chips', isOut: false, link: '' }]
  }
]
const top_right = [
  {
    children: [
      {
        title: 'footer.Use_Utility',
        children: [
          {
            text: 'footer.Utility_Wallet',
            isOut: false,
            link: '/soloutions/utility_wallet'
          },
          {
            text: 'footer.Blockchain_Explorer',
            isOut: false,
            link: 'https://uncscan.com/'
          },
          {
            text: 'footer.Faucet',
            isOut: true,
            link: 'https://faucet.utlab.io/'
          },
          {
            text: 'footer.Ecosystem_dApps',
            isOut: false,
            link: 'https://wiki.utlab.io/docs/dapp/start'
          },
          {
            text: 'footer.Mining_Management_Tool',
            isOut: false,
            link: '/soloutions/mining_tool'
          },
          { text: 'footer.GetPower', isOut: false, link: '/get_power' },
          {
            text: 'footer.AI_Model',
            isOut: false,
            link: '/soloutions/ai_model'
          }
        ]
      },
      {
        title: 'footer.Developers',
        children: [
          {
            text: 'footer.Developer_Hub',
            isOut: true,
            link: 'https://wiki.utlab.io/'
          },
          { text: 'footer.Discord', isOut: true, link: 'https://discord.com/' },
          {
            text: 'footer.Github',
            isOut: true,
            link: 'https://github.com/utnet-org'
          }
        ]
      }
    ]
  },
  {
    children: [
      {
        title: 'footer.Community',
        children: [
          { text: 'footer.Community_Hub', isOut: false, link: '/community' },
          { text: 'footer.Online_Community', isOut: true, link: '/community' },
          { text: 'footer.Utility_Foundation', isOut: false, link: '' },
          { text: 'footer.Activity', isOut: false, link: '/community' }
        ]
      },
      {
        title: 'footer.Learning',
        children: [
          {
            text: 'footer.Learning_Center',
            isOut: false,
            link: '/learning/learning_center'
          },
          {
            text: 'footer.What_is_Utility',
            isOut: false,
            link: '/learning/utility_explain'
          },
          {
            text: 'footer.What_is_UNC_Token',
            isOut: false,
            link: '/learning/unc_token'
          },
          {
            text: 'footer.What_is_POCI_Consensus',
            isOut: false,
            link: '/learning/poci_consensus'
          }
        ]
      }
    ]
  },

  {
    children: [
      {
        title: 'footer.Provider',
        children: [{ text: 'footer.Chips', isOut: false, link: '' }]
      },
      {
        title: 'footer.About',
        children: [
          {
            text: 'footer.Privacy_policy',
            isOut: false,
            link: 'https://wiki.utlab.io/'
          },
          {
            text: 'footer.Terms_of_use',
            isOut: false,
            link: 'https://wiki.utlab.io/'
          },
          {
            text: 'footer.Contact_us',
            isOut: false,
            link: 'https://wiki.utlab.io/'
          }
        ]
      },
      {
        title: 'footer.Resources',
        children: [
          {
            text: 'footer.White_Paper',
            isOut: true,
            link: 'http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf'
          },
          {
            text: 'footer.Green_Paper',
            isOut: true,
            link: 'http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf'
          }
        ]
      }
    ]
  }
]
// 打印窗口宽度
const printWidth = () => {
  console.log(window.innerWidth)
}
</script>
<template>
  <footer class="app_footer" v-if="viewableWidth > 834">
    <div class="container">
      <div class="top">
        <div class="left">
          <div class="logo">
            <img
              src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/logo.svg"
              class="logo_img"
              v-if="viewableWidth > 834"
            />
            <img
              src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/logoP.svg"
              v-else
            />
            <img
              src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityB.svg"
              v-if="!theme"
            />
            <img
              src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/utility_white.svg"
              v-if="theme"
            />

            <!-- <div class="logo_text">Utility</div> -->
          </div>
          <div class="social">
            <div
              class="icon"
              @click="openNewPage('https://twitter.com/UtilityNet_')"
            >
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_Twitter.svg"
              />
            </div>
            <div class="icon">
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_discord.svg"
              />
            </div>
            <div class="icon">
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_telegram.svg"
              />
            </div>
            <div
              class="icon"
              @click="openNewPage('https://github.com/utnet-org')"
            >
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_Github.svg"
              />
            </div>
            <div class="icon">
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_Youtube.svg"
              />
            </div>
            <div class="icon">
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_medium.svg"
              />
            </div>
          </div>
        </div>
        <div class="right">
          <div class="father" v-for="(itemf, i) in top_right" :key="i">
            <div
              class="right_item"
              v-for="(item, i) in itemf.children"
              :key="i"
            >
              <div class="title_text">
                {{ $t(item.title) }}
              </div>
              <div
                :class="[
                  'item',
                  'right_text',
                  c_item.isOut ? 'item_hover' : ''
                ]"
                v-for="(c_item, id) in item.children"
                :key="id"
              >
                <RouterLink
                  :to="
                    c_item.link.startsWith('http://') ||
                    c_item.link.startsWith('https://')
                      ? ''
                      : c_item.link
                  "
                >
                  <span class="item_span" @click="openNewPage(c_item.link)">
                    {{ $t(c_item.text) }}
                    <div class="arrow">
                      <img
                        :src="
                          !theme
                            ? 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/svgs/footer_arrow.svg'
                            : 'https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/footer_arrow1.png'
                        "
                        alt=""
                        srcset=""
                      />
                    </div>
                  </span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Copyright_UtilityNet">
      Copyright © UtilityNet. All rights reserved.
    </div>
  </footer>
  <footer class="app_footer" v-else>
    <div class="container">
      <div class="container_top">
        <img
          src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/logo.svg"
          class="logo_img"
          v-if="viewableWidth > 834"
        />
        <img
          src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/logoP.svg"
          v-else
        />
        <img
          src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityB.svg"
          v-if="!theme"
          class="Utility_BB"
        />
        <img
          src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/utility_white.svg"
          v-if="theme"
          class="Utility_BB"
        />
        <!-- <div class="container_top_title">Utility</div> -->
      </div>
      <div class="container_icon">
        <div
          class="container_icon_tw"
          @click="openNewPage('https://twitter.com/UtilityNet_')"
        >
          <img
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_Twitter.svg"
          />
        </div>
        <div class="container_icon_tw">
          <img
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_discord.svg"
          />
        </div>
        <div class="container_icon_tw">
          <img
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_telegram.svg"
          />
        </div>
        <div
          class="container_icon_tw"
          @click="openNewPage('https://github.com/utnet-org')"
        >
          <img
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_Github.svg"
          />
        </div>
        <div class="container_icon_tw">
          <img
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_Youtube.svg"
          />
        </div>
        <div class="container_icon_tw">
          <img
            src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/F_medium.svg"
          />
        </div>
      </div>

      <div class="container_box">
        <div class="container_left">
          <div
            class="resources_box"
            v-for="(item, index) in mp_left"
            :key="index"
          >
            <div class="resources_title">{{ $t(item.title) }}</div>
            <div
              class="resources_text"
              v-for="(item2, index) in item.children"
              :key="index"
              @click="openNewPage(item2.link)"
            >
              {{ $t(item2.text) }}
            </div>
          </div>
        </div>

        <div class="container_right">
          <div
            class="resources_box"
            v-for="(item, index) in mp_right"
            :key="index"
          >
            <div class="resources_title">{{ $t(item.title) }}</div>
            <div
              class="resources_text"
              v-for="(item2, index) in item.children"
              :key="index"
              @click="openNewPage(item2.link)"
            >
              {{ $t(item2.text) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="less">
.app_footer {
  min-height: 516px;
  width: 100%;
  // padding: 0 9.25vw;
  background-color: var(--app-footer-bgc);
  overflow: hidden;

  .container {
    height: 100%;
    max-width: 1408px;
    // width: 100%;

    hr {
      opacity: 0.1;
      background: rgba(21, 28, 26, 0.9);
      margin: 0 !important;
    }

    .top {
      padding-top: 62px;
      display: flex;
      // flex-direction: column;
      justify-content: center;
      gap: 155px;
      .left {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        // align-items: center;
        gap: 32px;
        padding-bottom: 0px;

        .logo {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 13px;
          color: rgba(21, 28, 26, 0.9);
          font-family: Hiragino Kaku Gothic ProN;
          font-size: 17px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .social {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          max-width: 150px;

          .icon {
            cursor: pointer;
            filter: var(--app-footer-social-brightness);
            opacity: var(--app-footer-social-opacity);

            &:hover {
              // filter: brightness(100%);
              opacity: 1;
            }
          }
        }
      }

      .right {
        display: flex;
        justify-content: space-between;
        gap: 150px;
        .father {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .right_item {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .item {
          height: 16px;
          flex-shrink: 0;
          transition: opacity 0.2s;

          a {
            .item_span {
              position: relative;

              .arrow {
                position: absolute;
                right: -16px;
                bottom: -4px;
                display: none;
              }

              &::after {
                content: '';
                display: block;
                width: 0;
                height: 1px;
                background: var(--app-footer-underline);
                position: absolute;
                bottom: 0;
                left: 0;
                transition: width 0.2s;
              }
            }

            &:hover {
              text-shadow: 0.2px 0 var(--app-footer-right_text-hover),
                -0.2px 0 var(--app-footer-right_text-hover);
              opacity: 0.8;
            }
          }
        }

        .item_hover {
          &:hover {
            a {
              .item_span {
                &::after {
                  width: 100%;
                }

                .arrow {
                  // filter: brightness(0%);
                  display: block;
                  animation: identifier 0.3s linear 1 forwards;
                }
              }
            }
          }
        }
      }
    }

    .btm {
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: start;
    }

    .title_text {
      cursor: pointer;
      color: #3edfcf;
      font-family: Lantinghei SC;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      white-space: nowrap;
    }

    .right_text {
      a {
        cursor: pointer;
        color: var(--app-footer-right_text);
        font-family: Inter;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        opacity: 0.6;
        letter-spacing: 0.2px;
        white-space: nowrap;
      }
    }
  }
}

@media (max-width: 834px) {
  .app_footer {
    width: 100%;
    padding: 28px;
    min-height: 640px;

    .container_top {
      display: flex;
      //border: 1px solid red;
      justify-content: center;
      align-items: center;
      .Utility_BB {
        margin-left: 10px;
        width: 100px;
      }

      .container_top_title {
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
        font-family: Hiragino Kaku Gothic ProN;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        margin-left: 15px;
      }
    }

    .container_icon {
      display: flex;
      //border: 1px solid black;
      justify-content: space-around;
      padding: 23px 30px;
      //箭头变成小手
      .container_icon_tw:hover {
        cursor: pointer;
      }
      .container_icon_tw {
        width: 29px;
        height: 29px;
        flex-shrink: 0;
      }
    }

    .container_box {
      display: flex;

      .container_left {
        flex: 1;

        .resources_box {
          text-align: center;
          //border: 1px solid red;
          //margin-left: 20px;
          margin-top: 10px;

          .resources_title {
            color: #3edfcf;
            font-family: Lantinghei SC;
            font-size: 12px;
            font-style: normal;
            font-weight: bolder;
            line-height: normal;
            margin-bottom: 8px;
          }

          .resources_text {
            color: var(--app-footer-right_text);
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 300;
            line-height: 22px;
            opacity: 0.6;
          }
        }
      }
    }

    .container_right {
      flex: 1;

      .resources_box {
        text-align: center;

        //border: 1px solid red;
        //margin-left: 20px;
        margin-top: 10px;

        .resources_title {
          color: #3edfcf;
          font-family: Lantinghei SC;
          font-size: 12px;
          font-style: normal;
          font-weight: bolder;
          line-height: normal;
          margin-bottom: 8px;
        }

        .resources_text {
          color: var(--app-footer-right_text);
          font-family: Inter;
          font-size: 12px;
          font-style: normal;
          font-weight: 300;
          line-height: 22px;
          opacity: 0.6;
        }
      }
    }
  }
}

@keyframes identifier {
  0% {
    transform: translateX(-2px) translateY(2px);
  }

  100% {
    transform: translateX(0px) translateY(0px);
  }
}
</style>
