<script lang="ts" setup name="AppTopnav">
import Logo from "@/assets/images/logo.svg";
import list_caption from "@/assets/images/list_caption.png";
import list_caption_close from "@/assets/images/list_caption_close.png";
import { ref } from "vue";
const isfocus = ref(true);
const viewableWidth = ref(document.documentElement.clientWidth ?? 0);
const selectType = ref(false);
const blockSelect = () => {
  selectType.value = !selectType.value;
  document.addEventListener("wheel", (event) => {
    event.preventDefault();
  });
};
const nav_arr = ref([
  {
    name: "nav.Learning",
    link: "",
    children: [
      {
        icon: new URL("@/assets/gifs/learning_1.gif", import.meta.url).href,
        title: "nav.Learning_center",
        desc: "nav.Learning_center_details",
        link: "/learning/learning_center",
      },
      {
        icon: new URL("@/assets/gifs/learning_2.gif", import.meta.url).href,
        title: "nav.What_is_Utility",
        desc: "nav.What_is_Utility_details",
        link: "/learning/utility_explain",
      },
      {
        icon: new URL("@/assets/gifs/learning_3.gif", import.meta.url).href,
        title: "nav.UNC_Token",
        desc: "nav.UNC_Token_details",
        link: "/learning/unc_token",
      },
      {
        icon: new URL("@/assets/gifs/learning_4.gif", import.meta.url).href,
        title: "nav.POCI_Consensus",
        desc: "nav.POCI_Consensus_details",
        link: "/learning/poci_consensus",
      },
      {
        icon: new URL("@/assets/gifs/learning_5.gif", import.meta.url).href,
        title: "nav.White_Paper",
        desc: "nav.White_Paper_details",
        link: "",
      },
    ],
  },
  {
    name: "nav.Soloutions",
    link: "",
    children: [
      {
        icon: new URL("@/assets/gifs/solot_1.gif", import.meta.url).href,
        title: "nav.Utility_Wallet",
        desc: "nav.Utility_Wallet_details",
        link: "/soloutions/mp_utility_wallet",
      },
      {
        icon: new URL("@/assets/gifs/solot_2.gif", import.meta.url).href,
        title: "nav.Hashing_Power",
        desc: "nav.Hashing_Power_details",
        link: "/soloutions/mp_hashing_power",
      },
      {
        icon: new URL("@/assets/gifs/solot_3.gif", import.meta.url).href,
        title: "nav.Mining_Tool",
        desc: "nav.Mining_Tool_details",
        link: "/soloutions/mp_mining_tool",
      },
      {
        icon: new URL("@/assets/gifs/solot_4.gif", import.meta.url).href,
        title: "nav.AI",
        desc: "nav.AI_details",
        link: "/soloutions/mp_ai_model",
      },
    ],
  },
  {
    name: "nav.Developers",
    link: "",
    children: [
      {
        icon: new URL("@/assets/gifs/deve_1.gif", import.meta.url).href,
        title: "nav.Docs",
        desc: "nav.Docs_details",
        link: "/developers/docs",
      },
      {
        icon: new URL("@/assets/gifs/deve_2.gif", import.meta.url).href,
        title: "nav.Solution_Provider",
        desc: "nav.Solution_Provider_details",
        // link: "/developers/solution_provider",
        link: "",
      },
      {
        icon: new URL("@/assets/gifs/deve_3.svg", import.meta.url).href,
        title: "nav.Discord",
        desc: "nav.Discord_details",
        link: "",
      },
      {
        icon: new URL("@/assets/gifs/deve_4.svg", import.meta.url).href,
        title: "nav.Github",
        desc: "nav.Github_details",
        link: "",
      },
    ],
  },
  {
    name: "nav.Community",
    link: "/community",
    children: [],
  },
  {
    name: "nav.Mining",
    // link: "/mining",
    link: "",
    children: [],
  },
  {
    name: "nav.Language",
    link: "",
    children: [
      {
        icon: new URL("@/assets/images/language_english_icon.png", import.meta.url).href,
        png: new URL("@/assets/gifs/deve_3.svg", import.meta.url).href,
        title: "nav.English",
        desc: "en",
        link: "",
      },
      {
        icon: new URL("@/assets/images/language_chinese_icon.png", import.meta.url).href,
        png: new URL("@/assets/gifs/deve_4.svg", import.meta.url).href,
        title: "nav.Chinese",
        desc: "zh",
        link: "",
      },
    ],
  },
]);
const selectIndex = ref(-1);
const changeSelectIndex = (item: any, index: any) => {
  if (item.link != "") {
    window.location.href = item.link;
    selectIndex.value = -1;
  }
  if (selectIndex.value == index) {
    selectIndex.value = -1;
    return;
  }
  selectIndex.value = index;
};
const routerSubPage = (index: any, citem: any, cindex: any) => {
  if (index == 5) {
    localStorage.setItem("upaclang", citem.desc);
    document
      .querySelector("html")!
      .setAttribute("lang", localStorage.getItem("upaclang") || "en");
  } else if (citem.link == "") {
    return;
  }
  window.location.href = citem.link;
  selectType.value = false;
  selectIndex.value = -1;
};
const width = ref(window.innerWidth);
window.onresize = () => {
  // 监听窗口大小变化
  width.value = window.innerWidth;
};
</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <RouterLink to="/">
        <div class="logo_box" @click="selectType = false">
          <Logo />
          <span class="logo_text">Utility</span>
        </div>
      </RouterLink>
      <UTTOPNAV v-if="width > 834" />
      <div class="right" v-if="width > 834">
        <SEARCH v-model:isfocus="isfocus" />
        <SETLANGUAGE />
      </div>
      <img class="list_caption_image" :src="selectType ? list_caption_close : list_caption" alt="" v-else
        @click="blockSelect" />
      <div v-show="selectType == true" class="list_caption_select">
        <div class="list_caption_select_item" v-for="(item, index) in nav_arr" :key="index">
          <div class="list_caption_select_item_header" @click="changeSelectIndex(item, index)">
            <div>{{ $t(item.name) }}</div>
            <img v-if="index != 3 && index != 4" src="@/assets/images/poci_to_bottom.png" alt=""
              :class="selectIndex == index ? 'active' : ''" />
          </div>
          <div class="list_caption_select_item_option" v-for="(citem, cindex) in item.children" :key="cindex"
            v-show="selectIndex == index" @click="routerSubPage(index, citem, cindex)"
            :style="index == 5 ? 'align-items: center;' : ''">
            <div class="list_caption_select_item_option_image">
              <img :src="citem.icon" alt="" />
            </div>
            <div class="list_caption_select_item_option_text">
              <div class="list_caption_select_item_option_text_title" :style="index == 5 ? 'margin-bottom: 0px;' : ''">
                {{ $t(citem.title) }}
              </div>
              <div class="list_caption_select_item_option_text_desc" v-if="index != 5">
                {{ $t(citem.desc) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="less">
.app-topnav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: #fffefb;
  // box-shadow: 0px 4px 24px 0px #dee7e5;
  backdrop-filter: blur(8px);
  flex-shrink: 0; // 防止被 flex 容器压缩
  height: 69px;
  width: 100vw;

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px 0 100px;

    .logo_box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      img {
        height: 37px;
      }

      .logo_text {
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
        font-family: Hiragino Kaku Gothic ProN;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }

    .right {
      display: flex;
      align-items: center;
    }
  }
}

@media (max-width: 834px) {
  .app-topnav {
    .container {
      padding: 0 5%;

      .list_caption_image {
        width: 32px;
        height: 32px;
      }

      .list_caption_select {
        position: fixed;
        top: 69px;
        left: 0;
        width: 100vw;
        z-index: 999;
        min-height: calc(100vh - 69px);
        padding: 20px 20px 0;
        background-color: #fffefb;
        // opacity: 0.9;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        border-bottom: 1px solid #e5e5e5;

        .list_caption_select_item {
          display: flex;
          flex-direction: column;
          padding-bottom: 20px;

          .list_caption_select_item_header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;

            div {
              color: rgba(21, 28, 26, 0.9);
              font-family: Lantinghei SC;
              font-size: 14px;
              font-weight: 700;
            }

            img {
              width: 20px;
              height: 20px;
            }

            .active {
              // transform: rotateZ(180deg);
              animation: identifier 0.2s linear 1 forwards;
            }

            @keyframes identifier {
              0% {
                transform: rotateZ(0deg);
              }

              100% {
                transform: rotateZ(180deg);
              }
            }
          }

          .list_caption_select_item_option {
            margin-bottom: 20px;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;

            .list_caption_select_item_option_image {
              width: 24px;
              height: 24px;
              margin-right: 10px;
            }

            .list_caption_select_item_option_text {
              .list_caption_select_item_option_text_title {
                color: rgba(21, 28, 26, 0.9);
                font-family: Lantinghei SC;
                font-size: 13px;
                font-weight: 700;
                margin-bottom: 7px;
              }

              .list_caption_select_item_option_text_desc {
                color: rgba(21, 28, 26, 0.9);
                font-family: Inter;
                font-size: 12px;
                font-weight: 400;
                line-height: 16px;
                /* 133.333% */
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
}
</style>
