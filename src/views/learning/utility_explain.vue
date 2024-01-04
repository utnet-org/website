<script setup lang="ts">
import { title } from "process";
import { ref } from "vue";
import { openNewPage } from "@/utils/request";
import useStore from "@/store";
import { storeToRefs } from "pinia";
const { home } = useStore();
const { theme } = storeToRefs(home);
const messageCardList = [
  {
    title: "utilityNetwork.decentralized_computing_service_platform",
    text: "utilityNetwork.decentralized_computing_service_platform_text",
  },
  {
    title: "utilityNetwork.computing_resources_and_data_management",
    text: "utilityNetwork.computing_resources_and_data_management_text",
  },
  {
    title: "utilityNetwork.blockchain_technology",
    text: "utilityNetwork.blockchain_technology_text",
  },
  {
    title: "utilityNetwork.economic_model",
    text: "utilityNetwork.economic_model_text",
  },
];
const definingChipsWithBlockchainTextList = [
  "utilityNetwork.defining_chips_with_blockchain_text1",
  "utilityNetwork.defining_chips_with_blockchain_text2",
  "utilityNetwork.defining_chips_with_blockchain_text3",
];
const optionsList = [
  {
    image:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options1.png",
    title: "utilityNetwork.poci_consensus_title",
    text: "utilityNetwork.poci_consensus_text",
  },
  {
    image:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options2.png",
    title: "utilityNetwork.power_scheduling_title",
    text: "utilityNetwork.power_scheduling_text",
  },
  {
    image:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options3.png",
    title:
      "utilityNetwork.virtualization_and_isolation_execution_environment_title",
    text: "utilityNetwork.virtualization_and_isolation_execution_environment_text",
  },
  {
    image:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options4.png",
    title: "utilityNetwork.multiple_execution_virtual_machines_support_title",
    text: "utilityNetwork.multiple_execution_virtual_machines_support_text",
  },
  {
    image:
      "https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain_options5.png",
    title: "utilityNetwork.complete_economic_system_model_title",
    text: "utilityNetwork.complete_economic_system_model_text",
  },
];
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
        background: !theme
          ? 'url(' +
            'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/utility_explain.png' +
            ')' +
            ' no-repeat'
          : '',
        'background-size': !theme ? 'cover' : '',
      }"
    >
      <div class="header_content">
        <div class="header_content_header">
          {{ $t("utilityNetwork.header_title") }}
        </div>
        <div class="header_content_text">
          {{ $t("utilityNetwork.header_message") }}
        </div>
        <div
          class="header_content_button"
          @click="
            openNewPage('http://oss2.xuanwoo.com/UtilityNetWhitePaper.pdf')
          "
        >
          <div>{{ $t("utilityNetwork.read_more") }}</div>
          <img
            src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_to_bottom.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="message">
      <div class="first_level_title">
        <div class="title">{{ $t("utilityNetwork.header_title") }}</div>
        <div class="text">{{ $t("utilityNetwork.title_text") }}</div>
      </div>
      <div class="message_card_list">
        <div
          class="message_card_list_item"
          v-for="(item, index) in messageCardList"
          :key="index"
        >
          <div class="message_card_list_item_title">
            <div class="message_card_list_item_title_line"></div>
            <div>{{ $t(item.title) }}</div>
          </div>
          <div class="message_card_list_item_text">{{ $t(item.text) }}</div>
        </div>
      </div>
      <div class="options_header">
        <div class="options_header_title">
          {{ $t("utilityNetwork.defining_chips_with_blockchain") }}
        </div>
        <div class="options_header_subtitle">
          {{ $t("utilityNetwork.defining_chips_with_blockchain_subtitle") }}
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
    height: 558px;
    background: url("@/assets/images/utility_explain.png") no-repeat;
    background-size: 100% 100%;
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
      box-shadow: 0px 1px 1px 1px #dfe7e6 inset;
      backdrop-filter: blur(4px);
      margin: 0 0 94px 140px;
      padding: 0 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .header_content_header {
        color: rgba(21, 28, 26, 0.9);
        font-family: Lantinghei SC;
        font-size: 28px;
        font-weight: 700;
      }

      .header_content_text {
        color: rgba(21, 28, 26, 0.9);
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
        border: 1px solid rgba(21, 28, 26, 0.9);
        color: rgba(21, 28, 26, 0.9);
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
        background: linear-gradient(
          90deg,
          rgba(207, 238, 235, 0) 25%,
          rgba(179, 236, 229, 0.17) 50%,
          var(--utility_explain-bgc) 25%
        );
        background-size: 200% 100%;
        transition: background-position 0.5s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &:hover {
          background-position: 100%;
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
        border: 1px solid #d9d9d5;
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
        }

        &:hover {
          border: 1px solid #3edfcf;

          .options_item_header {
            .options_item_header_title {
              color: #3edfcf;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 834px) {
  .container {
    .header {
      height: 457px;
      padding: 0 5%;
      background: url("https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/phone_utility_explain.png")
        no-repeat;
      background-size: cover;
      justify-content: center;

      .header_content {
        // width: 350px;
        width: 100%;
        height: max-content;
        flex-shrink: 0;
        padding: 40px 28px 44px;
        margin: 0;
        margin-bottom: 41px;

        .header_content_text {
          margin: 18px 0 24px;
        }
      }
    }

    .message {
      padding: 32px 5% 28px;

      .first_level_title {
        .title {
          margin-bottom: 16px;
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
          min-height: 257px;
          padding: 0 14px;
          background: linear-gradient(
            260deg,
            rgba(149, 235, 227, 0.17) 1.02%,
            rgba(149, 235, 227, 0) 38.87%
          );
          background-size: 100%;
          justify-content: start;
          padding-top: 20px;
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
        }

        .options_header_title_text {
          margin-bottom: 14px;
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
