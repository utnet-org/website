<script lang="ts" setup name="AppTopnav">
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  toggleTheme,
  saveThemePreference,
  loadThemePreference
} from '@/utils/set_theme'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { home } = useStore()
const { theme } = storeToRefs(home)
const { locale } = useI18n()
const isfocus = ref(true)
const viewableWidth = ref(document.documentElement.clientWidth ?? 0)
const selectType = ref(false)

const blockSelect = () => {
  selectType.value = !selectType.value
  document.addEventListener('wheel', event => {
    event.preventDefault()
  })
  // 禁止滚动
  if (document.body.style.overflow != 'hidden') {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}
const nav_arr = ref([
  {
    name: 'nav.Learning',
    link: '',
    show: true,
    children: [
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_1.gif',
        title: 'nav.Learning_center',
        desc: 'nav.Learning_center_details',
        link: '/learning/learning_center'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_2.gif',
        title: 'nav.What_is_Utility',
        desc: 'nav.What_is_Utility_details',
        link: '/learning/utility_explain'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_3.gif',
        title: 'nav.UNC_Token',
        desc: 'nav.UNC_Token_details',
        link: '/learning/unc_token'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_4.gif',
        title: 'nav.POCI_Consensus',
        desc: 'nav.POCI_Consensus_details',
        link: '/learning/poci_consensus'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/learning_5.gif',
        title: 'nav.White_Paper',
        desc: 'nav.White_Paper_details',
        link: 'http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf'
      }
    ]
  },
  {
    name: 'nav.Soloutions',
    link: '',
    show: true,
    children: [
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_1.gif',
        title: 'nav.Utility_Wallet',
        desc: 'nav.Utility_Wallet_details',
        link: '/soloutions/mp_utility_wallet'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_2.gif',
        title: 'nav.Hashing_Power',
        desc: 'nav.Hashing_Power_details',
        link: '/soloutions/mp_hashing_power'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_3.gif',
        title: 'nav.Mining_Tool',
        desc: 'nav.Mining_Tool_details',
        link: '/soloutions/mp_mining_tool'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/solot_4.gif',
        title: 'nav.AI',
        desc: 'nav.AI_details',
        link: '/soloutions/mp_ai_model'
      }
    ]
  },
  {
    name: 'nav.Developers',
    link: '',
    show: true,
    children: [
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_1.gif',
        title: 'nav.Docs',
        desc: 'nav.Docs_details',
        link: '/developers/docs'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_2.gif',
        title: 'nav.Solution_Provider',
        desc: 'nav.Solution_Provider_details',
        // link: "/developers/solution_provider",
        link: 'https://discord.com/'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_3.svg',
        title: 'nav.Discord',
        desc: 'nav.Discord_details',
        link: 'https://discord.com/'
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/gifs/deve_4.svg',
        title: 'nav.Github',
        desc: 'nav.Github_details',
        link: 'https://github.com/utnet-org'
      }
    ]
  },
  {
    name: 'nav.Community',
    link: '/community',
    children: []
  },
  {
    name: 'nav.Mining',
    // link: "/mining",
    link: 'https://miner.utnet.org/#/index',
    children: []
  },
  {
    name: 'nav.Language',
    link: '',
    show: true,
    children: [
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/language_english_icon.png',
        title: 'nav.English',
        desc: 'en',
        link: ''
      },
      {
        icon: 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/language_chinese_icon.png',
        title: 'nav.Chinese',
        desc: 'zh',
        link: ''
      }
    ]
  }
])
const selectIndex = ref(-1)
const changeSelectIndex = (item: any, index: any) => {
  if (item.link != '') {
    window.location.href = item.link
    selectIndex.value = -1
  }
  if (selectIndex.value == index) {
    selectIndex.value = -1
    return
  }
  item.show = !item.show
  // selectIndex.value = index;
}
const routerSubPage = (index: any, citem: any, cindex: any) => {
  console.log('====>', index, citem, cindex)
  if (index == 5) {
    localStorage.setItem('upaclang', citem.desc)
    document
      .querySelector('html')!
      .setAttribute('lang', localStorage.getItem('upaclang') || 'en')
  } else if (citem.link == '') {
    return
  }
  if (citem.link.startsWith('http://') || citem.link.startsWith('https://')) {
    window.open(citem.link, '_blank')
  } else {
    selectType.value = false
    selectIndex.value = -1
    setTimeout(() => {
      window.location.href = citem.link
    }, 300)
  }
}
const width = ref(window.innerWidth)
window.onresize = () => {
  // 监听窗口大小变化
  width.value = window.innerWidth
}
onMounted(() => {
  loadThemePreference()
})
const setTheme = () => {
  selectType.value = false
  toggleTheme()
  saveThemePreference()
}
function seticon(icon: string, isdark: boolean) {
  const arrpng = icon.split('_') // 切割后没有下划线
  let arrow: string[] = []
  if (arrpng.length > 1) {
    arrow = arrpng[1].split('.')
  }
  if (isdark && arrow[1] != 'svg' && icon != '' && arrpng.length <= 2) {
    return arrpng[0] + '_' + arrow[0] + '_d.' + arrow[1]
  } else {
    return icon
  }
}
</script>
<template>
  <nav class="app-topnav">
    <div class="app_topnav_f">
      <div class="container">
        <div class="container_left">
          <RouterLink to="/">
            <div class="logo_box" @click="selectType = false">
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
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/utility_white.svg"
                class="logo_img_U"
                v-if="theme && viewableWidth > 834"
              />
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityWP.svg"
                v-if="theme && viewableWidth < 834"
              />
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityB.svg"
                class="logo_img_U"
                v-if="!theme && viewableWidth > 834"
              />
              <img
                src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/UtilityBP.svg"
                v-if="!theme && viewableWidth < 834"
              />
              <!-- <span class="logo_text">Utility</span> -->
            </div>
          </RouterLink>
          <UTTOPNAV v-if="width > 834" />
        </div>
        <div class="right" v-if="width > 834">
          <SEARCH v-model:isfocus="isfocus" />
          <div
            @click="setTheme"
            class="theme"
            :style="{ background: theme ? '' : '' }"
          >
            <img
              src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/sun.svg"
              v-if="!theme"
              style="width: 24px; height: 24px"
            />
            <img
              src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/dark.svg"
              v-else
              style="width: 24px; height: 24px"
            />
          </div>
          <SETLANGUAGE />
        </div>
        <div v-else class="mobile_theme_icon">
          <div @click="setTheme" style="width: 24px; height: 24px">
            <img
              src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/sun.svg"
              v-if="!theme"
              style="width: 24px; height: 24px"
            />
            <img
              src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/dark.svg"
              v-else
              style="width: 24px; height: 24px"
            />
          </div>
        </div>
        <img
          class="list_caption_image"
          :src="
            selectType
              ? 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/list_caption_close.png'
              : 'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/list_caption.png'
          "
          alt=""
          v-if="width < 834 && !theme"
          @click="blockSelect"
        />
        <img
          v-if="width < 834 && theme && selectType"
          class="list_caption_image"
          src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/apptop.png"
          alt=""
          @click="blockSelect"
        />
        <img
          v-if="width < 834 && theme && !selectType"
          class="list_caption_image"
          src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/apptopc.png"
          alt=""
          @click="blockSelect"
        />
      </div>
    </div>
  </nav>
  <div
    v-if="width < 834"
    :style="{ right: selectType ? '0px' : '-80vh' }"
    class="list_caption_select"
  >
    <div style="position: relative">
      <!-- <div
        style="
          background: white;
          width: 80vw;
          height: 100vh;
          position: absolute;
          left: 0;


          z-index: -1;
        "
      ></div> -->
      <div
        class="list_caption_select_item"
        v-for="(item, index) in nav_arr"
        :key="index"
      >
        <!-- :style="{
          height: item.show
            ? index == 0
              ? locale == 'en'
                ? '505.69px'
                : '435.69px'
              : index == 1
              ? '382.75px'
              : index == 2
              ? '351.75px'
              : index == 5
              ? '168px'
              : ''
            : 0
        }" -->
        <div
          class="list_caption_select_item_header"
          @click="changeSelectIndex(item, index)"
        >
          <div>{{ $t(item.name) }}</div>
          <img
            v-if="index != 3 && index != 4"
            src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/poci_to_bottom.png"
            alt=""
            :class="selectIndex == index ? 'active' : ''"
          />
        </div>
        <div
          class="list_caption_select_item_option"
          v-for="(citem, cindex) in item.children"
          :key="cindex"
          :style="index == 5 ? 'align-items: center;' : ''"
          @click="routerSubPage(index, citem, cindex)"
        >
          <div class="list_caption_select_item_option_image">
            <img
              :src="seticon(citem.icon, theme)"
              alt=""
              :style="{
                background: 'var(--background-color)'
              }"
            />
          </div>
          <div class="list_caption_select_item_option_text">
            <div
              class="list_caption_select_item_option_text_title"
              :style="index == 5 ? 'margin-bottom: 0px;' : ''"
            >
              {{ $t(citem.title) }}
            </div>
            <div
              class="list_caption_select_item_option_text_desc"
              v-if="index != 5"
              v-html="`${$t(citem.desc).split('>>>br').join('<br>')}`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-show="selectType"
    :style="{ background: selectType ? 'rgba(0, 0, 0, 0.3)' : '#000' }"
    class="poop"
    @click="blockSelect"
  ></div>
</template>

<style scoped lang="less">
.theme {
  margin-right: 20px;
  cursor: pointer;
  width: 24px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.mobile_theme_icon {
  margin-right: 15px;
  height: 55px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.poop {
  position: fixed;
  transition: all 0.3s ease-in-out;
  z-index: 299;
  height: 100vh;
  width: 100vw;
  // background-color: rgba(0, 0, 0, 0.116);
  top: 0;
  left: 0;
}

.app-topnav {
  position: fixed;
  top: 26px;
  left: 0;
  z-index: 999;
  // background: var(--background-color);
  // box-shadow: var(--box-shadow-light);
  flex-shrink: 0; // 防止被 flex 容器压缩
  height: 69px;
  width: 100vw;
  .app_topnav_f {
    margin: 0 20px;
    background: var(--topnav-background-color);
    border-radius: 20px;
  }
  .container {
    height: 100%;
    max-width: 2000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px 0 60px;
    .container_left {
      display: flex;
      align-items: center;
    }
    .logo_box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-right: 20px;
    }

    .right {
      display: flex;
      align-items: center;
    }
  }
}

@media (max-width: 1172px) {
  .app-topnav {
    position: fixed;
    top: 20px;
    left: 0;
    z-index: 999;
    // background: var(--background-color);
    // box-shadow: var(--box-shadow-light);
    flex-shrink: 0; // 防止被 flex 容器压缩
    height: 66px;
    width: 100vw;
    .app_topnav_f {
      margin: 0 10px;
      background: var(--topnav-background-color);
      border-radius: 18px;
    }
    .container {
      padding: 0 20px 0 20px;
    }
  }
}
@media (max-width: 1074px) {
  .app-topnav {
    position: fixed;
    top: 20px;

    height: 64px;

    .app_topnav_f {
      margin: 0 10px;
      border-radius: 16px;
    }
    .container {
      padding: 0 20px 0 20px;
      .container_left {
        display: flex;
        align-items: center;
      }
      .logo_box {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-right: 0px;
        .logo_img {
          //缩放
          transform: scale(0.9);
        }

        .logo_img_U {
          // transform: scale(0.9);
          width: 100px;
          height: 30px !important;
        }
      }

      .right {
        display: flex;
        align-items: center;
      }
    }
  }
}
@media (max-width: 992px) {
  .theme {
    margin-right: 6px;
    cursor: pointer;
    width: 24px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
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
    }
  }

  .list_caption_select {
    transition: all 0.3s ease-in-out;
    position: fixed;
    top: 89px;
    right: 0;
    width: 80vw;
    height: 100vh;
    overflow-y: scroll;
    z-index: 300;
    min-height: calc(100vh - 69px);
    background-color: var(--background-color);
    padding-bottom: 200px;
    // padding-left: 20vw;
    // opacity: 0.9;
    // border-bottom-left-radius: 15px;
    // border-bottom-right-radius: 15px;
    // border-bottom: 1px solid #e5e5e5;

    .list_caption_select_item {
      padding: 0 20px;
      padding-top: 20px;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      display: flex;
      flex-direction: column;

      .list_caption_select_item_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        div {
          color: var(--text-color);
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
        overflow: hidden;

        .list_caption_select_item_option_image {
          width: 24px;
          height: 24px;
          margin-right: 10px;
        }

        .list_caption_select_item_option_text {
          .list_caption_select_item_option_text_title {
            color: var(--text-color);
            font-family: Lantinghei SC;
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 7px;
          }

          .list_caption_select_item_option_text_desc {
            color: var(--text-color);
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
    .list_caption_select_item:nth-child(4),
    .list_caption_select_item:nth-child(5),
    .list_caption_select_item:nth-child(6) {
      padding-top: 10px;
    }
    .list_caption_select_item:nth-child(5) {
      padding-bottom: 0;
    }
  }
}
</style>
