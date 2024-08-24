<script setup lang="ts">
import { title } from 'process'
import { ref } from 'vue'
import { openNewPage } from '@/utils/request'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { home } = useStore()
const { theme } = storeToRefs(home)
const messageCardList = [
  {
    title: 'utilityNetwork.decentralized_computing_service_platform',
    text: 'utilityNetwork.decentralized_computing_service_platform_text'
  },
  {
    title: 'utilityNetwork.computing_resources_and_data_management',
    text: 'utilityNetwork.computing_resources_and_data_management_text'
  },
  {
    title: 'utilityNetwork.blockchain_technology',
    text: 'utilityNetwork.blockchain_technology_text'
  },
  {
    title: 'utilityNetwork.economic_model',
    text: 'utilityNetwork.economic_model_text'
  }
]
const definingChipsWithBlockchainTextList = [
  'utilityNetwork.defining_chips_with_blockchain_text1',
  'utilityNetwork.defining_chips_with_blockchain_text2',
  'utilityNetwork.defining_chips_with_blockchain_text3'
]
const optionsList = [
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options1.png',
    title: 'utilityNetwork.poci_consensus_title',
    text: 'utilityNetwork.poci_consensus_text'
  },
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options2.png',
    title: 'utilityNetwork.power_scheduling_title',
    text: 'utilityNetwork.power_scheduling_text'
  },
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options3.png',
    title:
      'utilityNetwork.virtualization_and_isolation_execution_environment_title',
    text: 'utilityNetwork.virtualization_and_isolation_execution_environment_text'
  },
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options4.png',
    title: 'utilityNetwork.multiple_execution_virtual_machines_support_title',
    text: 'utilityNetwork.multiple_execution_virtual_machines_support_text'
  },
  {
    image:
      'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options5.png',
    title: 'utilityNetwork.complete_economic_system_model_title',
    text: 'utilityNetwork.complete_economic_system_model_text'
  }
]
</script>
<template>
  <div class="container">
    <div
      v-if="theme"
      style="
        position: absolute;
        background-color: black;
        height: 558px;
        width: 100%;
        z-index: -1;
      "
    ></div>
    <div
      class="header"
      :style="{
        // background: !theme
        //   ? 'url(' +
        //     'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain.png' +
        //     ')' +
        //     ' no-repeat'
        //   : '',
        // 'background-size': !theme ? 'cover' : '',
        background: !theme ? '   #e3f3ef' : '#151c1a'
      }"
    >
      <div class="header_content">
        <div
          class="header_content_text_top"
          :style="{
            background: theme
              ? 'linear-gradient(90deg, #737efb 0%, #73fbf0 100%)'
              : '',
            'background-clip': theme ? 'text' : '',
            '-webkit-background-clip': theme ? 'text' : '',
            '-webkit-text-fill-color': theme ? 'transparent' : ''
          }"
        >
          {{ $t('utilityNetwork.header_message') }}
        </div>
        <div class="header_content_header">
          {{ $t('utilityNetwork.header_title') }}
        </div>
        <div class="header_content_text">
          {{ $t('utilityNetwork.header_message') }}
        </div>
        <div
          class="header_content_button"
          @click="
            openNewPage('http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf')
          "
        >
          <div>{{ $t('utilityNetwork.read_more') }}</div>
          <img
            class="img_sf"
            src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_to_bottom.png"
            alt=""
            style="filter: brightness(var(--learning-center-brightness))"
          />
        </div>
      </div>
      <div class="header_content_bg">
        <img
          src="https://unc-oss.s3.us-west-1.amazonaws.com/v2/images/learning_center_item1.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="message">
      <div class="first_level_title">
        <div class="title">{{ $t('utilityNetwork.header_title') }}</div>
        <div class="text">{{ $t('utilityNetwork.title_text') }}</div>
      </div>
      <div class="message_card_list">
        <div
          class="message_card_list_item"
          v-for="(item, index) in messageCardList"
          :key="index"
        >
          <div class="message_card_list_item_title">
            <div class="message_card_list_item_title_line"></div>
            <div class="message_card_list_item_title1">
              {{ $t(item.title) }}
            </div>
          </div>
          <div class="message_card_list_item_text">{{ $t(item.text) }}</div>
        </div>
      </div>
      <div class="options_header">
        <div class="options_header_title">
          {{ $t('utilityNetwork.defining_chips_with_blockchain') }}
        </div>
        <div class="options_header_subtitle">
          {{ $t('utilityNetwork.defining_chips_with_blockchain_subtitle') }}
        </div>
        <div
          class="options_header_title_text"
          v-for="(item, index) in definingChipsWithBlockchainTextList"
          :key="index"
        >
          <div class="options_header_title_text_underline"></div>
          <div>{{ $t(item) }}</div>
        </div>
      </div>
      <div class="options_list">
        <div
          class="options_item"
          v-for="(item, index) in optionsList"
          :key="index"
        >
          <div class="options_item_header">
            <div class="options_item_header_icon">
              <img :src="item.image" alt="" />
            </div>
            <div class="options_item_header_title">{{ $t(item.title) }}</div>
          </div>
          <div class="options_item_message">{{ $t(item.text) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  // background-color: #fffefb;
  padding-top: 70px;
  .header {
    width: 100%;
    // height: 972px;
    // background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    padding: 155px 109px;
    align-items: center;
    // align-items: flex-end;
    // justify-content: flex-start;
    .header_content_bg {
      width: 559px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header_content {
      width: 805px;
      // height: 310px;
      // flex-shrink: 0;
      // border-radius: 10px;
      // background: linear-gradient(
      //   180deg,
      //   rgba(244, 248, 248, 0.05) 0.13%,
      //   rgba(244, 248, 248, 0) 99.87%
      // );
      // box-shadow: var(--unc_token-header-shadow);

      // backdrop-filter: blur(4px);
      // margin: 0 0 94px 140px;
      // padding: 0 60px;
      // display: flex;
      // flex-direction: column;
      // justify-content: center;

      .header_content_header {
        color: var(--where-text);
        font-family: 'Lantinghei SC';
        font-size: 45px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .header_content_text_top {
        color: var(--where-text);

        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 145%; /* 29px */
        margin-bottom: 20px;
      }

      .header_content_text {
        color: var(--where-text);
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 145%; /* 37.7px */
        margin: 19px 0 30px;
      }

      .header_content_button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 151px;
        height: 42px;
        border-radius: 6px;
        border: 1px solid var(--Utility-title-color);
        background: var(--background-header_content_button);
        color: var(--where-text);
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        cursor: pointer; // 鼠标移上去变成小手

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

  .message {
    padding: 99px 11.5% 74px;

    .first_level_title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 32px;

      .title {
        color: var(--where-text);
        font-family: Lantinghei SC;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 28px;
      }

      .text {
        color: var(--where-text);
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 154%;
        /* 24.64px */
      }
    }

    .message_card_list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(640px, 1fr));
      grid-column-gap: 48px;
      grid-row-gap: 20px;

      margin-bottom: 138px;

      .message_card_list_item {
        width: 640px;
        height: 226px;
        margin: auto;
        padding: 0 50px;
        border-radius: 12px;
        background: var(--utility_explain-message-bgc);
        background-size: 200% 100%;
        transition: background-position 0.5s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;

        border: var(--unc_token-message_card_list-border);

        &:hover {
          background: var(--utility_explain-message-bgc1);
          background-size: 200% 100%; /* 确保背景大小不变 */
          background-position: var(--utility_explain-message-position);
          box-shadow: var(--unc_token-subtitle-shadow);
        }

        .message_card_list_item_title {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: flex-start;

          .message_card_list_item_title_line {
            width: 4px;
            height: 16px;
            background: #3edfcf;
            margin-right: 8px;
          }

          div {
            color: var(--where-text);
            font-family: Lantinghei SC;
            font-size: 16px;
            font-weight: 700;
          }
        }

        .message_card_list_item_text {
          color: var(--where-text);
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 161%;
          /* 22.54px */
          opacity: 0.8;
        }
      }
    }

    .options_header {
      display: flex;
      flex-direction: column;
      margin-bottom: 90px;
      // align-items: center;

      .options_header_title {
        color: var(--where-text);
        font-family: Lantinghei SC;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 26px;
        text-align: center;
      }

      .options_header_subtitle {
        color: var(--where-text);
        font-family: Lantinghei SC;
        font-size: 14px;
        font-weight: 400;
        line-height: 25.76px;
        margin-bottom: 14px;
        /* 25.76px */
      }

      .options_header_title_text {
        opacity: 0.8;
        color: var(--where-text);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 161%;
        margin-bottom: 10px;
        position: relative;

        .options_header_title_text_underline {
          width: 205px;
          height: 3px;
          background: linear-gradient(
            104deg,
            #3edfcf 13.06%,
            rgba(168, 249, 241, 0) 93.47%
          );
          position: absolute;
          top: 18px;
        }
      }
    }

    .options_list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
      grid-column-gap: 34px;
      /* 项目之间的水平间距 */
      grid-row-gap: 73px;

      .options_item {
        width: 420px;
        height: 313px;
        padding: 0 35px;
        margin: auto;
        border-radius: 12px;
        border: var(--utility_explain-options_item-border);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;

        .options_item_header {
          .options_item_header_icon {
            width: 70px;
            height: 70px;
            border-radius: 35px;
            margin-right: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              132deg,
              #535856 0%,
              #333937 53.27%,
              #616563 100%
            );
            position: absolute;
            top: -35px;
            left: 185px;
            z-index: 2;
          }

          .options_item_header_title {
            color: var(--Utility-text-color);
            font-family: Inter;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 20px;
            transition: color 0.5s ease;
          }
        }

        .options_item_message {
          color: var(--Utility-text-color);
          font-family: Inter;
          font-size: 13px;
          font-weight: 400;
          line-height: 156%;
          /* 17.88px */
          opacity: 0.9;
          transition: border 0.5s ease;
        }

        &:hover {
          border: var(--utility_explain-options_item-border1);

          .options_item_header {
            .options_item_header_icon {
              box-shadow: var(
                --utility_explain-options_item_header_icon-shadow
              );
            }
            .options_item_header_title {
              color: #3edfcf;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1494px) {
  .container {
    .header {
      padding: 105px 90px;
      .header_content_bg {
        width: 449px !important;
        height: 621px;
      }
      .header_content {
        width: 605px !important;
      }
    }
  }
}
@media (max-width: 1234px) {
  .container {
    .header {
      padding: 80px 50px;
      .header_content_bg {
        width: 409px !important;
      }
      .header_content {
        width: 500px !important;
        .header_content_header {
          font-size: 40px;
        }
        .header_content_text_top {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 145%; /* 29px */
          margin-bottom: 20px;
        }

        .header_content_text {
          font-size: 20px;
        }
      }
    }
  }
}
@media (max-width: 1010px) {
  .container {
    .header {
      padding: 80px 40px;
      .header_content_bg {
        width: 300px !important;
      }
      .header_content {
        width: 400px !important;
        .header_content_header {
          font-size: 40px;
        }
        .header_content_text_top {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 145%; /* 29px */
          margin-bottom: 20px;
        }

        .header_content_text {
          font-size: 20px;
        }
      }
    }
  }
}
@media (max-width: 834px) {
  .container {
    padding-top: 0px;
    .header {
      height: 377px;
      width: 100%;
      padding: 0px 10px !important;
      justify-content: space-between;
      // utility_explain-dark
      background-size: cover;

      justify-content: space-between;
      align-items: center;

      .header_content_bg {
        width: 100px !important;
        height: 160px !important;
      }
      .header_content {
        // width: 350px;
        width: 200px !important;
        height: max-content;
        flex-shrink: 0;
        margin: 0;
        margin-bottom: 0px;

        box-shadow: none;
        backdrop-filter: none;
        .header_content_header {
          color: var(--where-text);
          font-family: 'PingFang SC';
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
        }
        .header_content_text_top {
          color: var(--where-text);
          /* 15 粗 */
          font-family: 'PingFang SC';
          font-size: 15px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          margin-bottom: 10px;
          // background: linear-gradient(90deg, #737efb 0%, #73fbf0 100%);
          background-clip: text;
          -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
        }

        .header_content_text {
          color: var(--where-text);
          margin: 18px 0 24px;

          /* 10中 */
          font-family: 'PingFang SC';
          font-size: 10px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin: 6px 0 10px;
        }

        .header_content_button {
          width: 75px;
          height: 26px;
          border: 1px solid var(--Utility-title-color) !important;

          /* 10 常规 */
          font-family: 'PingFang SC';
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          .img_sf {
            //缩放
            margin-left: 0px;
            transform: scale(0.6);
          }
        }
      }
    }

    .message {
      padding: 3px 10px 10px 10px;

      .first_level_title {
        .title {
          margin-bottom: 16px;
        }
        .text {
          color: var(--unc_token-main_text-color) !important;
        }
      }

      .message_card_list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
        grid-column-gap: 12px;
        grid-row-gap: 12px;
        margin-bottom: 14px;

        .message_card_list_item {
          width: 100%;
          max-height: 190px;
          padding: 0 14px;
          background: linear-gradient(
            260deg,
            rgba(149, 235, 227, 0.17) 1.02%,
            rgba(149, 235, 227, 0) 38.87%
          );
          border-radius: 10px;
          border: 1px solid var(--Main, #3edfcf);
          display: flex;
          justify-content: center;

          background: var(--, rgba(46, 54, 62, 0.7));
          background-size: 100%;
          justify-content: start;
          padding: 10px;
        }
        .message_card_list_item_title1 {
          background: var(--utility_explain-message_card_list_item_title1);

          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .message_card_list_item_text {
          color: var(--unc_token-main_text-color) !important;
        }
      }

      .options_header {
        margin-bottom: 0;
        padding-bottom: 48px;

        .options_header_title {
          margin-bottom: 16px;
        }

        .options_header_subtitle {
          margin-bottom: 18px;

          color: var(--unc_token-main_text-color) !important;
        }

        .options_header_title_text {
          margin-bottom: 14px;
          color: var(--unc_token-main_text-color) !important;
        }
      }

      .options_list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
        grid-column-gap: 12px;
        /* 项目之间的水平间距 */
        grid-row-gap: 56px;

        .options_item {
          width: 100%;
          height: 280px;
          justify-content: start;

          border: var(--utility_explain-options_item-options_list-border);

          .options_item_header {
            .options_item_header_icon {
              width: 56px;
              height: 56px;
              top: -28px;
              left: calc(50% - 28px);
            }

            .options_item_header_title {
              margin-top: 62px;
              margin-bottom: 16px;
            }
          }
          .options_item_message {
            color: var(--unc_token-main_text-color) !important;
          }

          &:hover {
            border: 1px solid #535856;

            .options_item_header {
              .options_item_header_title {
                color: var(--Utility-text-color);
              }
            }
          }
        }
      }
    }
  }
}
</style>
