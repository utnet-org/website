<script setup lang="ts">
import { ref } from "vue";
const activeIndex = ref(1);
const show = ref(false);
import { openNewPage } from "@/utils/request";
import useStore from "@/store";
import { storeToRefs } from "pinia";
const { home } = useStore();
const { theme } = storeToRefs(home);
const nav_arr = ref([
  {
    name: "nav.Learning",
    link: "",
    width: 334,
    height: 510,
    left: 20,
    children: [
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_1.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_1.png",
        show: false,
        title: "nav.Learning_center",
        desc: "nav.Learning_center_details",
        link: "/learning/learning_center",
      },
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_2.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_2.png",
        show: false,
        title: "nav.What_is_Utility",
        desc: "nav.What_is_Utility_details",
        link: "/learning/utility_explain",
      },
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_3.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_3.png",
        show: false,
        title: "nav.UNC_Token",
        desc: "nav.UNC_Token_details",
        link: "/learning/unc_token",
      },
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_4.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_4.png",
        title: "nav.POCI_Consensus",
        show: false,
        desc: "nav.POCI_Consensus_details",
        link: "/learning/poci_consensus",
      },
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_5.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_5.png",
        show: false,
        title: "nav.White_Paper",
        desc: "nav.White_Paper_details",
        link: "http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf",
      },
    ],
  },
  {
    name: "nav.Soloutions",
    link: "",
    width: 334,
    height: 390,
    left: 130,
    children: [
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_1.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_1.png",
        show: false,
        title: "nav.Utility_Wallet",
        desc: "nav.Utility_Wallet_details",
        link: "/soloutions/utility_wallet",
      },
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_2.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_2.png",
        show: false,
        title: "nav.Hashing_Power",
        desc: "nav.Hashing_Power_details",
        link: "/get_power",
        // link: "",
      },
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_3.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_3.png",
        show: false,
        title: "nav.Mining_Tool",
        desc: "nav.Mining_Tool_details",
        link: "/soloutions/mining_tool",
      },
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_4.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_4.png",
        show: false,
        title: "nav.AI",
        desc: "nav.AI_details",
        link: "/soloutions/ai_model",
      },
    ],
  },
  {
    name: "nav.Developers",
    link: "",
    width: 334,
    height: 350,
    left: 280,
    children: [
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_1.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_1.png",
        show: false,
        title: "nav.Docs",
        desc: "nav.Docs_details",
        link: "/developers/docs",
      },
      {
        icon: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_2.gif",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_2.png",
        show: false,
        title: "nav.Solution_Provider",
        desc: "nav.Solution_Provider_details",
        // link: "/developers/solution_provider",
        link: "https://wiki.utlab.io/docs/computing-power-supplier/introduce",
      },
      {
        icon: "",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_3.svg",
        show: false,
        title: "nav.Discord",
        desc: "nav.Discord_details",
        link: "https://discord.com/",
      },
      {
        icon: "",
        png: "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_4.svg",
        show: false,
        title: "nav.Github",
        desc: "nav.Github_details",
        link: "https://github.com/utnet-org",
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
    link: "https://miner.untcoin.io/#/index",
    children: [],
  },
]);

function setXpx(i: number) {
  let w = 0;
  if (i == activeIndex.value) {
    return "0px";
  } else if (i < activeIndex.value) {
    return (activeIndex.value - i) * -140 + "px";
  } else {
    return (i - activeIndex.value) * 160 + "px";
  }
}

function set(i: number, id: number) {
  let one = nav_arr.value[i].children[id].icon;
  nav_arr.value[i].children[id].icon = nav_arr.value[i].children[id].png;
  setTimeout(() => {
    nav_arr.value[i].children[id].icon = one;
  }, 1);
}

function seticon(icon: string, isdark: boolean) {
  const arrpng = icon.split("_"); // 切割后没有下划线
  let arrow: string[] = [];
  if (arrpng.length > 1) {
    arrow = arrpng[1].split(".");
  }
  if (isdark && arrow[1] != "svg" && icon != "") {
    return arrpng[0] + "_" + arrow[0] + "_d." + arrow[1];
  } else {
    return icon;
  }
}
</script>
<template>
  <div role="navigation">
    <div class="nav_menu-item-wrap">
      <!--* 每一项 begin -->
      <div
        :class="[
          'nav_link-wrapper',
          activeIndex == i && show ? 'select_navlink' : '',
        ]"
        v-for="(item, i) in nav_arr"
        :key="i"
        @mouseenter="(activeIndex = i), (show = true)"
        @mouseleave="show = false"
      >
        <div @click="openNewPage(item.link)" class="nav_link text_style_top">
          {{ $t(item.name) }}
        </div>
      </div>
      <!--* 每一项 end -->

      <div
        class="nav_dropdown-wrap"
        :style="{
          border: !show ? 'none' : '1px solid rgba(21, 28, 26, 0.15)',
          transform: `translate3d(${nav_arr[activeIndex].left}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: `preserve-3d`,
          width: show ? `${nav_arr[activeIndex].width}px` : 0,
          height: show ? `${nav_arr[activeIndex].height}px` : 0,
          transition: show
            ? 'all 0.2s cubic-bezier(0.07, 0.69, 0.14, 0.8)'
            : 'all 0.2s cubic-bezier(0.7, 0.08, 0.82, 0.16)',
        }"
        @mouseenter="show = true"
        @mouseleave="show = false"
      >
        <div
          v-for="(item, i) in nav_arr"
          :key="i"
          :style="{
            padding: '16px',
            position: 'absolute',
            transform: `translate3d(${setXpx(
              i
            )}, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transformStyle: `preserve-3d`,
            width: `${i == activeIndex ? nav_arr[i].width : 0}px`,
            height: `${i == activeIndex ? nav_arr[i].height : 0}px`,
            transition: show
              ? 'transform 0.2s cubic-bezier(0.07, 0.69, 0.14, 0.8),opacity 0.12s'
              : 'transform 0.2s cubic-bezier(0.7, 0.08, 0.82, 0.16),opacity 0.12s',
            opacity: i == activeIndex ? 1 : 0,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            overflow: 'hidden',
          }"
        >
          <div
            v-for="(c_item, id) in item.children"
            :key="id"
            @click="show = false"
          >
            <RouterLink
              :to="
                c_item.link.startsWith('http://') ||
                c_item.link.startsWith('https://')
                  ? ''
                  : c_item.link
              "
            >
              <div
                class="popup_content"
                @mouseenter="set(i, id)"
                @click="openNewPage(c_item.link)"
              >
                <div class="left">
                  <img
                    :src="seticon(c_item.icon, theme)"
                    :style="{
                      display: i == activeIndex ? 'block' : 'none',
                      background: 'var(--background-color)',
                    }"
                  />
                  <img
                    :src="seticon(c_item.png, theme)"
                    :style="{
                      display: i == activeIndex ? 'block' : 'none',
                      background: !(i == 2 && id > 1)
                        ? 'var(--background-color)'
                        : '',
                    }"
                    :class="{ animated_svg: i == 2 && id > 1 }"
                  />
                </div>
                <div class="right">
                  <div class="title">
                    {{ $t(c_item.title) }}
                  </div>
                  <div
                    class="desc"
                    v-html="`${$t(c_item.desc).split('>>>br').join('<br>')}`"
                  ></div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.nav_menu-item-wrap {
  position: relative;
  display: flex;
}

.nav_dropdown-wrap {
  max-height: calc(100vh - 69px) !important;
  width: fit-content;
  height: fit-content;
  // background-color: #000;
  // background-color: #fffefb;
  background-color: var(--background-color);
  border-radius: 8px;
  padding-top: 0px;
  position: absolute;
  top: 69px;
  left: -100px;
  overflow: hidden;
  display: flex;
}

.nav_link-wrapper {
  cursor: default;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 69px;
  display: flex;

  &:hover {
    .nav_link {
      position: relative;
      color: #3edfcf;
      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 20px;
        // background: #3edfcf;
        filter: blur(10px);
      }
    }
  }
}

.select_navlink {
  .nav_link {
    position: relative;
    color: #3edfcf;
    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 20px;
      // background: #3edfcf;
      filter: blur(10px);
    }
  }
}

.nav_link {
  opacity: 1;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  text-decoration: none;
  transition: opacity 0.2s, color 0.2s;
  display: flex;
}

.popup_content {
  cursor: pointer;
  border: transparent 1px solid;
  padding: 16px 0;
  border-radius: 6px;
  display: flex;
  box-sizing: border-box;
  transition: all 0.5s;

  .left {
    min-width: 57px;
    display: flex;
    position: relative;

    .animated_svg {
      box-sizing: border-box;
      transition: all 0.5s;
      padding: 2px;
      filter: brightness(100%); // 亮度
      filter: invert(50%); // 反色
      height: 24px;
    }

    img {
      position: absolute;
      top: 0;
      right: 10px;
      height: 24px;
    }
  }

  .title {
    transition: all 0.5s;
    color: var(--text-color);
    font-family: Lantinghei SC;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .desc {
    padding-top: 7px;
    color: var(--text-color);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    /* 133.333% */
  }

  &:hover {
    // background: #f6f9f9;
    // border: #3edfcf 1px solid;
    border-radius: 6px;
    border: 1px solid #3edfcf;
    background: var(
      --,
      linear-gradient(177deg, #fff -24.77%, rgba(255, 255, 255, 0) 97.53%)
    );
    box-shadow: 0px 4px 20px 0px rgba(156, 255, 243, 0.3);
    .title {
      color: #3edfcf;
    }

    .left {
      .animated_svg {
        padding: 0px;
        height: 24px;
        filter: brightness(100%);
      }

      img {
        &:nth-child(1) {
          z-index: 1;
        }
      }
    }
  }
}
</style>
