<script setup lang="ts">
import { number } from "echarts";
import { title } from "process";
import { ref } from "vue";
import useStore from "@/store";
import { storeToRefs } from "pinia";
const { home } = useStore();
const { theme } = storeToRefs(home);
const width = ref(window.innerWidth);
const optionsList = [
  {
    title: "poci_consensus.The_use_of_high_performance",
    text: "poci_consensus.POCI_uses_high_performance",
  },
  {
    title: "poci_consensus.Computing_power_ownership",
    text: "poci_consensus.POCI_abandons_the",
  },
  {
    title: "poci_consensus.On_chain_random_number",
    text: "poci_consensus.POCI_selects_appropriate",
  },
];
const accordionTitle = "Consensus Chip";
const accordionList = [
  {
    title: "SPACC（Security Protocol Accelerator）",
    messageTitle: "Strengthen Utility Net",
    messageText: "poci_consensus.The_SPACC_module_is",
  },
  {
    title: "PKA（Public Key Accelerator）",
    messageTitle: "Data Transmission",
    messageText: "poci_consensus.The_PKA_module_is_responsible",
  },
  {
    title: "Efuse Storage area",
    messageTitle: "Data Validation",
    messageText: "poci_consensus.The_Efuse_storage_area",
  },
];
const questionList = [
  {
    id: "01",
    question: "poci_consensus.How_is_POCI_different",
    answer: "poci_consensus.Unlike_PoW_which",
  },
  {
    id: "02",
    question: "poci_consensus.How_does_POCI_ensure",
    answer: "poci_consensus.POCI_ensures_the_security",
  },
  {
    id: "03",
    question: "poci_consensus.How_does_POCI_contribute",
    answer: "poci_consensus.POCI_contributes_to",
  },
  {
    id: "04",
    question: "poci_consensus.How_does_POCI_support",
    answer: "poci_consensus.POCI_supports_decentralized",
  },
  {
    id: "05",
    question: "poci_consensus.What_role_does_POCI",
    answer: "poci_consensus.As_an_efficient_and_environmentally",
  },
];
const checkQuestionIndex = ref(-1);
const changeCheckIndex = (index: any) => {
  if (checkQuestionIndex.value == index) {
    checkQuestionIndex.value = -1;
    return;
  }
  checkQuestionIndex.value = index;
};
</script>
<template>
  <div>
    <div class="container">
      <div
        class="header"
        :style="{
          // background: !theme
          //   ? 'url(' +
          //     'https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/poci_consensus_background.png' +
          //     ')' +
          //     ' no-repeat'
          //   : '',
          // 'background-size': !theme ? 'cover' : '',
        }"
      >
        <div class="header_content">
          <div class="header_content_header">POCI Consensus</div>
          <div class="header_content_text">
            {{ $t("poci_consensus.poci_or_Proof") }}
          </div>
          <div class="header_content_button">
            <div>Read More</div>
            <img
              src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/community_to_bottom.png"
              alt=""
              style="filter: brightness(var(--learning-center-brightness))"
            />
          </div>
        </div>
      </div>
      <div class="options">
        <div class="options_side">
          <div class="options_side_title">Strengthen Utility Network</div>
          <div class="options_side_text">
            {{ $t("poci_consensus.the_introduction_of") }}
          </div>
          <div class="options_side_text">
            {{ $t("poci_consensus.POCI_not_only") }}
          </div>
        </div>
        <div class="options_list">
          <div
            class="options_item"
            v-for="(item, index) in optionsList"
            :key="index"
          >
            <div class="options_item_header">
              <div class="options_item_header_index">{{ index + 1 }}</div>
              <div class="options_item_header_title">{{ $t(item.title) }}</div>
            </div>
            <div class="options_item_text">{{ $t(item.text) }}</div>
          </div>
        </div>
      </div>
      <Accordion
        :accordionTitle="accordionTitle"
        :accordionList="accordionList"
      />
      <div class="faq">
        <div class="faq_title">FAQ</div>
        <div class="faq_question_list">
          <div
            class="faq_item_question"
            v-for="(citem, cindex) in questionList"
            :key="cindex"
            :class="checkQuestionIndex == cindex ? 'active' : ''"
          >
            <div
              class="faq_item_question_title"
              @click="changeCheckIndex(cindex)"
            >
              <div class="faq_item_question_title_side">
                <div
                  class="faq_item_question_title_side_index"
                  :style="{
                    background:
                      checkQuestionIndex == cindex && width > 834
                        ? 'var(--poci_faq-bg1)'
                        : 'var(--poci_faq-bg)',

                    color:
                      checkQuestionIndex == cindex && width > 834
                        ? 'var(--poci_faq-color)'
                        : 'var(--where-text)',
                  }"
                >
                  {{ citem.id }}/
                </div>
                <div
                  class="item_question_text"
                  :style="{ opacity: checkQuestionIndex == cindex ? 1 : 0.5 }"
                >
                  {{ $t(citem.question) }}
                </div>
              </div>
              <img src="@/assets/images/Arrow_Right.png" alt="" />
            </div>
            <div
              v-if="checkQuestionIndex == cindex"
              class="faq_item_question_answer"
            >
              {{ $t(citem.answer) }}
            </div>
          </div>
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
    height: 578px;
    background: var(--poci_consensus-bgc);
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
      box-shadow: var(--unc_token-header-shadow);
      backdrop-filter: blur(4px);
      margin: 0 0 94px 140px;
      padding: 0 60px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      // border: var(--unc_token-header-border);

      .header_content_header {
        color: var(--where-text);
        font-family: Lantinghei SC;
        font-size: 28px;
        font-weight: 700;
      }

      .header_content_text {
        color: var(--where-text);
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
        border: 1px solid var(--Utility-title-color);
        color: var(--Light-dark, var(--where-text));
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

  .options {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 78px 200px;

    .options_side {
      width: 512px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .options_side_title {
        color: var(--where-text);
        font-family: Lantinghei SC;
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 25px;
      }

      .options_side_text {
        color: var(--unc_token-main_text-color) !important;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 161%;
        /* 22.54px */
        margin-bottom: 15px;
      }
    }

    .options_list {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .options_item {
        width: 696px;
        height: 126px;
        padding: 0 44px;
        border-radius: 10px;
        background: url("https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/poci_consensus_options_default.png")
          no-repeat;

        background-size: cover;
        margin-bottom: 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-shadow: var(--learning-center-what-shadow);
        border: var(--docs-box-options_item-border);

        &:hover {
          background: var(--poci_consensus-options_list-bg);
          background-size: cover;

          border: var(--unc_token-subtitle-border1);
          box-shadow: var(--unc_token-subtitle-shadow);
        }

        .options_item_header {
          display: flex;
          align-items: center;
          margin-bottom: 13px;

          .options_item_header_index {
            width: 26px;
            height: 26px;
            line-height: 26px;
            border-radius: 50%;
            background-color: #3edfcf;
            color: #fff;
            text-align: center;
            font-family: Montserrat;
            font-size: 14px;
            font-weight: 600;
            /* 21px */
            margin-right: 12px;
            flex-shrink: 0;
          }

          .options_item_header_title {
            color: var(--where-text);
            font-family: Lantinghei SC;
            font-size: 16px;
            font-weight: 700;
          }
        }

        .options_item_text {
          color: var(--where-text);
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          line-height: 157%;
          /* 21.98px */
        }
      }
    }
  }

  .faq {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 12% 110px;

    .faq_title {
      color: var(--where-text);
      font-family: Lantinghei SC;
      font-size: 22px;
      font-weight: 700;
    }

    .faq_question_list {
      width: 100%;
      display: flex;
      flex-direction: column;

      .faq_item_question {
        border-bottom: 2px solid var(--poci_consensus-color);

        &:last-child {
          border-bottom: none;
        }

        .faq_item_question_title {
          padding: 28px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;

          .faq_item_question_title_side {
            display: flex;
            align-items: center;

            .faq_item_question_title_side_index {
              padding: 4px 11px;
              border-radius: 20px;
              border: 1px solid var(--where-text);
              margin-right: 10px;
            }

            .item_question_text {
              color: var(--where-text);
              font-family: Lantinghei SC;
              font-size: 16px;
              font-weight: 700;
              line-height: 150%;
              /* 24px */
              opacity: 0.5;
            }
          }

          img {
            width: 24px;
            height: 24px;
            // transform: rotateZ(180deg);
          }
        }

        .faq_item_question_answer {
          padding: 0 5% 28px;
          color: var(--where-text);
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 161%;
          /* 22.54px */
          opacity: 0.8;
        }
      }

      .active {
        .faq_item_question_title {
          .faq_item_question_title_side {
            margin-left: 20px;
          }

          img {
            animation: identifier 0.2s linear 1 forwards;
          }
        }
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
  }
}

@media (max-width: 834px) {
  .container {
    .header {
      height: 484px;
      padding: 0 5%;
      background: var(--poci_consensus-bgc-phone);

      background-size: cover;
      justify-content: center;

      .header_content {
        // width: 350px;
        width: 100%;
        height: 410px;
        flex-shrink: 0;
        padding: 10px 28px;
        margin: 0;
        margin-bottom: 32px;
        box-shadow: var(--unc_token-header_content-shadow);
        backdrop-filter: blur(var(--unc_token-header_content-filter));

        .header_content_text {
          margin: 18px 0 24px;
        }
        .header_content_button {
          border: 1px solid var(--Utility-title-color) !important;
        }
      }
    }

    .options {
      padding: 36px 5% 13px;

      .options_side {
        width: 100%;

        .options_side_title {
          width: 100%;
          text-align: center;
          line-height: 34px;
          margin-bottom: 14px;
        }

        .options_side_text {
          opacity: 0.8;
          margin-bottom: 12px;
        }
      }

      .options_list {
        margin-top: 8px;

        .options_item {
          width: 100%;
          height: 100%;
          padding: 31px 20px 39px 24px;
          border-radius: 18px !important;
          margin-bottom: 12px;
          background-color: var(--poci-bgc);
          border: none;

          &:hover {
            background: url("https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/poci_consensus_options_default.png")
              no-repeat;
            background-color: var(--poci-bgc);
            background-size: cover;
            border: none;
            box-shadow: none;
          }

          .options_item_header {
            width: 100%;
            display: flex;

            .options_item_header_index {
              width: 26px;
              height: 26px;
              border-radius: 50%;
            }
          }
        }
      }
    }

    .faq {
      padding: 44px 5% 14px;
    }
  }
}
</style>
