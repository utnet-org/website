<script setup lang="ts">
import { ref } from 'vue'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { home } = useStore()
const { theme } = storeToRefs(home)
const communityOptionsList = [
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_options1.png',
    title: 'Join Online Community',
    text: 'Join our community to discuss, learn and share with us'
  },
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_options2.png',
    title: 'Contribute to the Project',
    text: 'Interested individuals and teams are welcome to contribute to our projects and realize our vision together.'
  },
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_options3.png',
    title: 'UtilityNet Activities',
    text: 'Provide in-depth understanding and participation'
  }
]
const hoverCheckIndex = ref(-1)
const toggleMenuList = [
  {
    firstTitle: 'community.toggleMenuList[0].firstTitle',
    secondTitle: 'community.toggleMenuList[0].secondTitle',
    text: 'community.toggleMenuList[0].text'
  },
  {
    firstTitle: 'community.toggleMenuList[1].firstTitle',
    secondTitle: 'community.toggleMenuList[1].secondTitle',
    text: 'community.toggleMenuList[1].text'
  },
  {
    firstTitle: 'community.toggleMenuList[2].firstTitle',
    secondTitle: 'community.toggleMenuList[2].secondTitle',
    text: 'community.toggleMenuList[2].text'
  },
  {
    firstTitle: 'community.toggleMenuList[3].firstTitle',
    secondTitle: 'community.toggleMenuList[3].secondTitle',
    text: 'community.toggleMenuList[3].text'
  }
]
const stepsList = [
  {
    time: '2023 10/31 8:00（UTC+8）',
    message: 'PoCI、PIEE 和 CAT 深入分析',
    reason: 'Online Meeting'
  },
  {
    time: '2023 10/29/ 8:00（UTC+8）',
    message: 'In-depth Analysis of PoCI, PIEE & CAT',
    reason: 'Online Meeting'
  }
]
const viewableWidth = ref(document.documentElement.clientWidth ?? 0)
const accordionTitle = 'community.Consensus Chip'
const accordionList = [
  {
    title: 'Initialize Generation',
    messageTitle: 'Strengthen UtilityNet Net',
    messageText:
      'All of us are free from birth, no matter how strong the person who stands in the way of this, whether it is the water of fire, the land of ice, whatever! Surely those who see these things are the freest people in the world!'
  },
  {
    title: 'Data Transmission',
    messageTitle: 'Data Transmission',
    messageText:
      'All of us are free from birth, no matter how strong the person who stands in the way of this, whether it is the water of fire, the land of ice, whatever! Surely those who see these things are the freest people in the world!'
  },
  {
    title: 'Data Validation',
    messageTitle: 'Data Validation',
    messageText:
      'All of us are free from birth, no matter how strong the person who stands in the way of this, whether it is the water of fire, the land of ice, whatever! Surely those who see these things are the freest people in the world!'
  }
]
</script>
<template>
  <div>
    <div class="container">
      <div
        class="header"
        :style="{
          background:
            !theme && viewableWidth > 834
              ? 'url(' +
                'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_background.png' +
                ')' +
                ' no-repeat'
              : '',
          'background-size': !theme ? 'cover' : ''
        }"
      >
        <div class="header_content">
          <div class="header_content_header">{{ $t('community.h1_1') }}</div>
          <div class="header_content_text">{{ $t('community.h1_2') }}</div>
          <div class="header_content_button">
            <div>{{ $t('community.h1_3') }}</div>
            <img
              src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_to_bottom.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="swiper">
        <div class="swiper_side">
          <div class="swiper_side_title">{{ $t('community.h2_1') }}</div>
          <div class="swiper_side_text">
            {{ $t('community.h2_2') }}
          </div>
        </div>
        <div class="swiper_right">
          <div class="swiper_section">
            <div class="lowest_level"></div>
            <div class="middle_level"></div>
            <div class="upper_level"></div>
            <img
              src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/communtity_swiper_images1.png"
              alt=""
            />
          </div>
          <div class="swiper_rightmost">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="community_options">
        <div class="community_options_item">
          <img
            src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_options1.png"
            alt=""
          />
          <div>
            <div class="community_options_item_title">
              {{ $t('community.optionsList1.title') }}
            </div>
            <div class="community_options_item_text">
              {{ $t('community.optionsList1.text') }}
            </div>
          </div>
        </div>
        <div class="community_options_item">
          <img
            src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_options2.png"
            alt=""
          />
          <div>
            <div class="community_options_item_title">
              {{ $t('community.optionsList2.title') }}
            </div>
            <div class="community_options_item_text">
              {{ $t('community.optionsList2.text') }}
            </div>
          </div>
        </div>
        <div class="community_options_item">
          <img
            src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_options3.png"
            alt=""
          />
          <div>
            <div class="community_options_item_title">
              {{ $t('community.optionsList3.title') }}
            </div>
            <div class="community_options_item_text">
              {{ $t('community.optionsList3.text') }}
            </div>
          </div>
        </div>
        <!--                <div class="community_options_item" v-for="(item, index) in communityOptionsList" :key="index">-->
        <!--                    <img :src="item.image" alt="">-->
        <!--                    <div>-->
        <!--                        <div class="community_options_item_title">{{ item.title }}</div>-->
        <!--                        <div class="community_options_item_text">{{ item.text }}</div>-->
        <!--                    </div>-->
        <!--                </div>-->
      </div>
      <div class="toggle_menu">
        <div>
          <div class="toggle_menu_header" v-if="viewableWidth > 834">
            <div class="toggle_menu_header_title">
              {{ $t('community.voice_from_our_partners_title') }}
            </div>
            <div class="toggle_menu_header_icon">
              <div
                class="toggle_menu_header_icon_item"
                @mouseenter="hoverCheckIndex = 1"
                @mouseleave="hoverCheckIndex = -1"
              >
                <img
                  v-if="hoverCheckIndex == 1"
                  src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/previous_check.png"
                  alt=""
                />
                <img
                  v-else
                  src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/previous_default.png"
                  alt=""
                />
              </div>
              <div
                class="toggle_menu_header_icon_item"
                @mouseenter="hoverCheckIndex = 2"
                @mouseleave="hoverCheckIndex = -1"
              >
                <img
                  v-if="hoverCheckIndex == 2"
                  src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/next_check.png"
                  alt=""
                />
                <img
                  v-else
                  src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/next_default.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="toggle_menu_list" v-if="viewableWidth > 834">
            <div
              class="toggle_menu_list_item"
              v-for="(item, index) in toggleMenuList"
              :key="index"
            >
              <div class="item_first_title">{{ $t(item.firstTitle) }}</div>
              <div class="item_second_title">{{ $t(item.secondTitle) }}</div>
              <img
                src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/toggle_menu_icon.png"
                alt=""
              />
              <div class="item_text">{{ $t(item.text) }}</div>
            </div>
          </div>
        </div>
        <Accordion
          :accordionTitle="accordionTitle"
          :fromPage="'community'"
          :accordionList="accordionList"
          v-if="viewableWidth < 834"
        />
        <div class="steps">
          <div class="steps_title">
            {{ $t('community.utility_activities_title') }}
          </div>
          <div class="steps_text">
            <div>
              {{ $t('community.utility_activities_text')
              }}<span>leon@utnet.org</span>
            </div>
            <!-- <div>Community Slack</div> -->
          </div>
          <div
            v-for="(stepsItem, stepsIndex) in stepsList"
            :key="stepsIndex"
            class="steps_item"
          >
            <div class="dots"></div>
            <div class="message_text">
              <div>{{ stepsItem.time }}</div>
              <div>{{ stepsItem.message }}</div>
              <div>{{ stepsItem.reason }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  background-color: var(--background-color);
  padding-top: 70px;

  .header {
    width: 100%;
    height: 558px;
    background: url('https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/community_background.png')
      no-repeat;
    background-position: right;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    .header_content {
      width: 640px;
      height: 310px;
      flex-shrink: 0;
      border-radius: 10px;
      background: linear-gradient(
        180deg,
        rgba(244, 248, 248, 0.05) 0.13%,
        rgba(244, 248, 248, 0) 99.87%
      );
      backdrop-filter: blur(4px);
      margin: 0 0 94px 140px;
      padding-left: 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      box-shadow: var(--unc_token-header-shadow);

      .header_content_header {
        color: var(--text-color);
        font-family: Lantinghei SC;
        font-size: 28px;
        font-weight: 700;
      }

      .header_content_text {
        width: 398px;
        color: var(--text-color);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 145%;
        opacity: 0.8;
        margin: 19px 0 30px;
      }

      .header_content_button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 151px;
        height: 42px;
        border-radius: 6px;
        border: 1px solid var(--text-color);
        color: var(--text-color);
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        cursor: pointer;

        img {
          width: 16px;
          height: 16px;
          margin-left: 8px;
          filter: brightness(var(--learning-center-brightness));
        }

        &:hover {
          border: 1px solid #3edfcf;
          background-color: #3edfcf;
        }
      }
    }
  }

  .swiper {
    display: flex;
    justify-content: center;
    height: 627px;
    padding-top: 140px;
    background: var(--community-swiper-bg);

    .swiper_side {
      width: 512px;
      margin: 70px 180px 0 0;

      .swiper_side_title {
        color: var(--text-color);
        font-family: Lantinghei SC;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 25px;
      }

      .swiper_side_text {
        color: var(--text-color);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 161%;
        /* 22.54px */
        opacity: 0.8;
      }
    }

    .swiper_right {
      display: flex;

      .swiper_section {
        width: 578px;
        height: 379px;
        margin-right: 14px;
        position: relative;

        .lowest_level {
          width: 503.779px;
          height: 341.419px;
          border-radius: 10px;
          background: var(--community-bg);
          position: absolute;
          top: 0;
          left: 36.18px;
          z-index: 2;
          box-shadow: var(--community-swiper-shadow);
        }

        .middle_level {
          width: 541.817px;
          height: 341.389px;
          border-radius: 10px;
          background: var(--community-bg1);
          position: absolute;
          bottom: 19.06px;
          left: 17.63px;
          z-index: 3;
          box-shadow: var(--community-swiper-shadow);
        }

        .upper_level {
          width: 578px;
          height: 342px;
          border-radius: 10px;
          background: var(--community-bg2);
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 4;
          box-shadow: var(--community-swiper-shadow);
        }

        img {
          width: 305px;
          height: 329px;
          position: absolute;
          bottom: 12px;
          left: 142px;
          z-index: 5;
        }
      }

      .swiper_rightmost {
        margin-top: 151px;
        display: flex;
        flex-direction: column;

        div {
          width: 6px;
          height: 6px;
          border-radius: 3px;
          background-color: #3edfcf;
          opacity: 0.3;
          margin-bottom: 10px;
          cursor: pointer;

          &:first-child {
            opacity: 1;
          }
        }
      }
    }
  }

  .community_options {
    padding: 87px 0 80px;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: center;

    .community_options_item {
      width: 425px;
      height: 447px;
      margin: 0 20px;
      border-radius: 12px;
      box-shadow: var(--community-community_options-shadow);
      border: 1px solid transparent;
      cursor: pointer;
      background-color: var(--community-community_options-bg);

      &:hover {
        border: 1px solid #3edfcf;
        box-shadow: var(--community-community_options-shadow1);
      }

      img {
        width: 425px;
        height: 298px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }

      & > div {
        margin: 29px 40px 0 44px;

        .community_options_item_title {
          color: var(--text-color);
          font-family: Lantinghei SC;
          font-size: 15px;
          font-weight: 700;
          line-height: 150%;
          margin-bottom: 8px;
          /* 22.5px */
        }

        .community_options_item_text {
          color: var(--text-color);
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 161%;
          /* 22.54px */
          opacity: 0.6;
        }
      }
    }
  }

  .toggle_menu {
    padding: 105px 188px 132px;

    .toggle_menu_header {
      height: 37px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .toggle_menu_header_title {
        color: var(--text-color);
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 22px;
        font-weight: 700;
      }

      .toggle_menu_header_icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;

        .toggle_menu_header_icon_item {
          width: 36px;
          height: 36px;
          margin-left: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          border: 1px solid var(--where-text);
          cursor: pointer;

          img {
            width: 12px;
            height: 12px;
            filter: brightness(var(--learning-center-brightness));
          }

          &:hover {
            background-color: var(--where-color);
          }
        }
      }
    }

    .toggle_menu_list {
      margin-top: 43px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .toggle_menu_list_item {
        width: 322px;
        height: 358px;
        border-radius: 12px;
        padding: 28px;
        background: var(--community-toggle_menu_list_item-bg);
        box-shadow: var(--community-community_options-shadow);
        border: var(--docs-box-options_item-border);
        transition: transform 0.3s ease;
        /* 平滑过渡效果 */

        &:hover {
          border: var(--unc_token-subtitle-border1);
          box-shadow: var(--community-toggle_menu_list_item-shadow);
          background: var(--community-toggle_menu_list_item-hover);
          transform: translateY(
            var(--community-toggle_menu_list_item-transform)
          );
          /* 向上移动5px */
        }

        .item_first_title {
          color: var(--text-color);
          font-family: Lantinghei SC;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .item_second_title {
          color: var(--text-color);
          font-family: Lantinghei SC;
          font-size: 12px;
          font-weight: 400;
          opacity: 0.8;
        }

        img {
          width: 37px;
          height: 31px;
          margin: 61px 0 20px;
        }

        .item_text {
          color: var(--text-color);
          font-family: Inter;
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          /* 153.846% */
        }
      }
    }

    .steps {
      padding: 100px 92px 0px 100px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .steps_title {
        color: var(--text-color);
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 22px;
        font-weight: 700;
      }

      .steps_text {
        display: flex;
        align-items: center;
        color: var(--text-color);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 161%;
        margin: 22px 0 40px;

        /* 22.54px */
        div {
          span {
            margin-left: 7px;
            color: #3edfcf;
            text-decoration-line: underline;
            cursor: pointer;
          }
        }
      }

      .steps_item {
        width: 100%;
        display: flex;
        padding: 0 0 22px 36px;
        border-left: 1px solid var(--community-steps_item-border);
        position: relative;

        .dots {
          width: 14px;
          height: 14px;
          border-radius: 7px;
          background-color: #3edfcf;
          position: absolute;
          top: 28px;
          left: -7px;
          z-index: 10;
        }

        .message_text {
          flex: 1;
          padding: 0 36px;
          border-radius: 12px;

          background: var(--community-message_text-bg);

          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          div {
            &:first-child {
              color: #3edfcf;
              font-family: Lantinghei SC;
              font-size: 13px;
              font-weight: 400;
              padding: 27px 0 10px;
            }

            &:nth-child(2) {
              color: var(--text-color);
              font-family: Lantinghei SC;
              font-size: 15px;
              font-weight: 700;
            }

            &:last-child {
              color: var(--text-color);
              font-family: Inter;
              font-size: 14px;
              font-weight: 400;
              opacity: 0.8;
              padding: 14px 0 27px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1554px) {
  .container {
    padding: 0 80px !important;
  }
  .toggle_menu {
    padding: 100px 0 !important;
  }
}
@media (max-width: 1110px) {
  .container {
    padding: 0 80px !important;
    .swiper {
      padding: 120px 10px;
      .swiper_side {
        margin-right: 20px;
      }
      .swiper_right {
        .swiper_section {
          width: 478px;
          height: 379px;

          .lowest_level {
            width: 403.779px;
            height: 341.419px;
          }

          .middle_level {
            width: 441.817px;
            height: 341.389px;
          }

          .upper_level {
            width: 478px;
            height: 342px;
          }

          img {
            width: 255px;
            height: 269px;
            bottom: 32px;
            left: 112px;
          }
        }
      }
    }
  }
}
@media (max-width: 910px) {
  .container {
    padding: 0 80px !important;
    .swiper {
      padding: 100px 10px;
      .swiper_side {
        margin-right: 10px;
      }
      .swiper_right {
        .swiper_section {
          width: 378px;
          height: 329px;

          .lowest_level {
            width: 303.779px;
            height: 291.419px;
          }

          .middle_level {
            width: 341.817px;
            height: 291.389px;
          }

          .upper_level {
            width: 378px;
            height: 292px;
          }

          img {
            width: 205px;
            height: 219px;
            bottom: 42px;
            left: 80px;
          }
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .container {
    padding: 0 0px !important;
    .header {
      height: 516px;
      padding: 0 5%;
      background: var(--community-bgc-phone);
      background-size: cover;
      justify-content: center;

      .header_content {
        width: 100%;
        height: max-content;
        flex-shrink: 0;
        padding: 40px 28px;
        margin: 0;
        margin-bottom: 25px;

        box-shadow: var(--unc_token-header_content-shadow);
        backdrop-filter: blur(var(--unc_token-header_content-filter));

        .header_content_text {
          width: 100%;
          margin: 18px 0 24px;
        }

        .header_content_button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 151px;
          height: 42px;
          border-radius: 6px;
          border: 1px solid var(--Utility-title-color) !important;
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          cursor: pointer;

          img {
            width: 16px;
            height: 16px;
            margin-left: 8px;
          }

          &:hover {
            border: 1px solid #3edfcf;
            background-color: #3edfcf;
          }
        }
      }
    }

    .swiper {
      flex-direction: column;
      justify-content: flex-start;
      padding: 44px 1% 58px;
      height: max-content;

      .swiper_side {
        width: 100%;
        margin: 0 0 14px;
        padding: 0 4%;

        .swiper_side_title {
          margin-bottom: 14px;
        }

        .swiper_side_text {
          margin-bottom: 28px;
          color: var(--unc_token-main_text-color) !important;
        }
      }

      .swiper_right {
        justify-content: center;

        .swiper_section {
          width: 336px;
          height: 229px;
          margin-right: 8px;

          .lowest_level {
            width: 275px;
            height: 185px;
            top: 0;
            left: 31px;
          }

          .middle_level {
            width: 307px;
            height: 185px;
            bottom: 30px;
            left: 14px;
          }

          .upper_level {
            width: 336px;
            height: 198px;
          }

          img {
            width: 184.804px;
            height: 195.007px;
            bottom: 2px;
            left: 76px;
          }
        }

        .swiper_rightmost {
          margin-top: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;

          div {
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background-color: #3edfcf;
            opacity: 0.3;
            margin-bottom: 10px;
            cursor: pointer;

            &:first-child {
              opacity: 1;
            }
          }
        }
      }
    }

    .community_options {
      padding: 22px 5% 8px;
      // background-color: #F6F9F9;
      // display: flex;
      // align-items: center;
      // justify-content: center;
      flex-direction: column;

      .community_options_item {
        width: 100%;
        height: max-content;
        margin-bottom: 14px;
        border: var(--community-phone-community_options_item-border);

        &:hover {
          border: 1px solid transparent;
        }

        img {
          width: 100%;
          height: 234px;
        }

        & > div {
          margin: 24px 14px 37px;

          .community_options_item_title {
            margin-bottom: 6px;
          }
        }
      }
    }

    .toggle_menu {
      padding: 0 !important;

      .steps {
        padding: 46px 5% 60px;

        .steps_title {
          color: var(--text-color);
          text-align: center;
          font-family: Lantinghei SC;
          font-size: 22px;
          font-weight: 700;
        }

        .steps_text {
          display: flex;
          align-items: center;
          color: var(--unc_token-main_text-color);
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 161%;
          margin: 16px 0 32px;
        }

        .message_text {
          div {
            &:last-child {
              color: var(--unc_token-main_text-color) !important;
            }
          }
        }
      }
    }
  }
}
</style>
