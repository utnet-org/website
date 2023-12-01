<script lang="ts" setup name="AppFooter">
import LogoSvg from "@/assets/images/footer_logo.svg";
import LogoSvg02 from "@/assets/images/logo02.svg";

import Twitter02 from "@/assets/images/Twitter.svg";
import Github02 from "@/assets/images/Github.svg";
import Youtube02 from "@/assets/images/Youtube.svg";
import Wechat02 from "@/assets/images/Wechat.svg";
import Twitter from "@/assets/svgs/twitter.svg";
import Github from "@/assets/svgs/github.svg";
import Youtube from "@/assets/svgs/youtube.svg";
import Wechat from "@/assets/svgs/wechat.svg";
import Arrow from "@/assets/svgs/footer_arrow.svg";
import { ref } from "vue";

const viewableWidth = ref(Number(localStorage.getItem('viewableWidth') ?? 0));
const mp_left = [
  {
    title: "footer.Resources",
    children: [
      { text: "footer.White_Paper", isOut: true, link: "" },
      { text: "footer.Green_Paper", isOut: true, link: "" },
    ],
  },
  {
    title: "footer.Learning",
    children: [
      { text: "footer.Learning_Center", isOut: false, link: "/learning/learning_center" },
      { text: "footer.What_is_Utility", isOut: false, link: "/learning/utility_explain" },
      { text: "footer.What_is_UNC_Token", isOut: false, link: "/learning/unc_token" },
      { text: "footer.What_is_POCI_Consensus", isOut: false, link: "/learning/poci_consensus" },
    ],
  },
  {
    title: "footer.Developers",
    children: [
      { text: "footer.Developer_Hub", isOut: false, link: "" },
      { text: "footer.Discord", isOut: true, link: "" },
      { text: "footer.Github", isOut: true, link: "" },
      { text: "footer.Forum", isOut: true, link: "" },
    ],
  },
  {
    title: "footer.About",
    children: [
      { text: "footer.Privacy_policy", isOut: false, link: "" },
      { text: "footer.Terms_of_use", isOut: false, link: "" },
      { text: "footer.Contact_us", isOut: false, link: "" },
    ],
  },
];
const mp_right = [
  {
    title: "footer.Use_Utility",
    children: [
      { text: "footer.Utility_Wallet", isOut: false, link: "/soloutions/utility_wallet" },
      { text: "footer.Blockchain_Explorer", isOut: false, link: "" },
      { text: "footer.Faucet", isOut: true, link: "" },
      { text: "footer.Ecosystem_dApps", isOut: false, link: "" },
      { text: "footer.Mining_Management_Tool", isOut: false, link: "/soloutions/mining_tool" },
      { text: "footer.GetPower", isOut: false, link: "/get_power" },
      { text: "footer.AI_Model", isOut: false, link: "/soloutions/ai_model" },
    ],
  },
  {
    title: "footer.Community",
    children: [
      { text: "footer.Community_Hub", isOut: false, link: "" },
      { text: "footer.Online_Community", isOut: true, link: "" },
      { text: "footer.Utility_Foundation", isOut: false, link: "" },
      { text: "footer.Activity", isOut: false, link: "" },
    ],
  },
  {
    title: "footer.Activity",
    children: [{ text: "footer.Chips", isOut: false, link: "" }],
  },
];
const top_right = [
  {
    title: "footer.Resources",
    children: [
      { text: "footer.White_Paper", isOut: true, link: "" },
      { text: "footer.Green_Paper", isOut: true, link: "" },
    ],
  },
  {
    title: "footer.Use_Utility",
    children: [
      { text: "footer.Utility_Wallet", isOut: false, link: "/soloutions/utility_wallet" },
      { text: "footer.Blockchain_Explorer", isOut: false, link: "" },
      { text: "footer.Faucet", isOut: true, link: "" },
      { text: "footer.Ecosystem_dApps", isOut: false, link: "" },
      { text: "footer.Mining_Management_Tool", isOut: false, link: "/soloutions/mining_tool" },
      { text: "footer.GetPower", isOut: false, link: "/get_power" },
      { text: "footer.AI_Model", isOut: false, link: "/soloutions/ai_model" },
    ],
  },
  {
    title: "footer.Learning",
    children: [
      { text: "footer.Learning_Center", isOut: false, link: "/learning/learning_center" },
      { text: "footer.What_is_Utility", isOut: false, link: "/learning/utility_explain" },
      { text: "footer.What_is_UNC_Token", isOut: false, link: "/learning/unc_token" },
      { text: "footer.What_is_POCI_Consensus", isOut: false, link: "/learning/poci_consensus" },
    ],
  },
  {
    title: "footer.Developers",
    children: [
      { text: "footer.Developer_Hub", isOut: false, link: "" },
      { text: "footer.Discord", isOut: true, link: "" },
      { text: "footer.Github", isOut: true, link: "" },
      { text: "footer.Forum", isOut: true, link: "" },
    ],
  },
  {
    title: "footer.Community",
    children: [
      { text: "footer.Community_Hub", isOut: false, link: "" },
      { text: "footer.Online_Community", isOut: true, link: "" },
      { text: "footer.Utility_Foundation", isOut: false, link: "" },
      { text: "footer.Activity", isOut: false, link: "" },
    ],
  },
  {
    title: "footer.Activity",
    children: [{ text: "footer.Provider", isOut: false, link: "" }],
  },
  {
    title: "footer.About",
    children: [
      { text: "footer.Privacy_policy", isOut: false, link: "" },
      { text: "footer.Terms_of_use", isOut: false, link: "" },
      { text: "footer.Contact_us", isOut: false, link: "" },
    ],
  },
];
// 打印窗口宽度
const printWidth = () => {
  console.log(window.innerWidth);
};
</script>
<template>
  <footer class="app_footer" v-if="viewableWidth > 834">
    <div class="container">
      <div class="top">
        <div class="left">
          <div class="logo">
            <LogoSvg />
            <div class="logo_text">Utility</div>
          </div>
          <div class="social">
            <div class="icon">
              <Twitter style="color;: black" />
            </div>
            <div class="icon">
              <Github />
            </div>
            <div class="icon">
              <Youtube />
            </div>
            <div class="icon">
              <Wechat />
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right_item" v-for="(item, i) in top_right" :key="i">
            <div class="title_text">
              {{ $t(item.title) }}
            </div>
            <div :class="['item', 'right_text', c_item.isOut ? 'item_hover' : '']" v-for="(c_item, id) in item.children"
              :key="id">
              <RouterLink :to="c_item.link">
                <span class="item_span">
                  {{ $t(c_item.text) }}
                  <div class="arrow">
                    <Arrow />
                  </div>
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <footer class="app_footer" v-else>
    <div class="container">
      <div class="container_top">
        <LogoSvg02 />
        <div class="container_top_title">Utility</div>
      </div>
      <div class="container_icon">
        <div class="container_icon_tw">
          <Twitter02 />
        </div>
        <div class="container_icon_tw">
          <Github02 />
        </div>
        <div class="container_icon_tw">
          <Youtube02 />
        </div>
        <div class="container_icon_tw">
          <Wechat02 />
        </div>
      </div>
      <div class="container_box">
        <div class="container_left">
          <div class="resources_box" v-for="(item, index) in mp_left" :key="index">
            <div class="resources_title">{{ $t(item.title) }}</div>
            <div class="resources_text" v-for="(item2, index) in item.children" :key="index">
              {{ $t(item2.text) }}
            </div>
          </div>
        </div>

        <div class="container_right">
          <div class="resources_box" v-for="(item, index) in mp_right" :key="index">
            <div class="resources_title">{{ $t(item.title) }}</div>
            <div class="resources_text" v-for="(item2, index) in item.children" :key="index">
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
  padding: 0 9.25vw;
  background-color: #f6f9f9;
  overflow: hidden;

  .container {
    height: 100%;
    max-width: 1408px;

    hr {
      opacity: 0.1;
      background: rgba(21, 28, 26, 0.9);
      margin: 0 !important;
    }

    .top {
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: start;

      .left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 60px;

        .logo {
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 13px;
          color: var(--Light-dark, rgba(21, 28, 26, 0.9));
          font-family: Hiragino Kaku Gothic ProN;
          font-size: 17px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .social {
          display: flex;
          gap: 24px;

          .icon {
            cursor: pointer;
            filter: brightness(0%);
            opacity: 0.17;

            &:hover {
              filter: brightness(100%);
              opacity: 1;
            }
          }
        }
      }

      .right {
        display: flex;
        justify-content: space-between;

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
                content: "";
                display: block;
                width: 0;
                height: 1px;
                background: var(--Light-dark, rgba(21, 28, 26, 0.9));
                position: absolute;
                bottom: 0;
                left: 0;
                transition: width 0.2s;
              }
            }

            &:hover {

              text-shadow: 0.2px 0 var(--Light-dark, rgba(21, 28, 26, 0.9)),
                -0.2px 0 var(--Light-dark, rgba(21, 28, 26, 0.9));
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
                  filter: brightness(0%);
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
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
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
    min-height: 720px;

    .container_top {
      display: flex;
      //border: 1px solid red;
      justify-content: center;
      align-items: center;

      .container_top_title {
        color: var(--Light-dark, rgba(21, 28, 26, 0.90));
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
            color: #3EDFCF;
            font-family: Lantinghei SC;
            font-size: 12px;
            font-style: normal;
            font-weight: bolder;
            line-height: normal;
            margin-bottom: 8px;
          }

          .resources_text {
            color: rgba(21, 28, 26, 0.90);
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
          color: #3EDFCF;
          font-family: Lantinghei SC;
          font-size: 12px;
          font-style: normal;
          font-weight: bolder;
          line-height: normal;
          margin-bottom: 8px;
        }

        .resources_text {
          color: rgba(21, 28, 26, 0.90);
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
}</style>
