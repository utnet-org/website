<script setup lang="ts">
import arrowRight from "@/assets/svgs/arrow.svg";
import ArrowTopRight from "@/assets/images/arrow_top_right.png";
import { ref } from "vue";
const viewableWidth = ref(document.documentElement.clientWidth ?? 0);
const mouseCheckIndex = ref(-1);
import { openNewPage } from "@/utils/request";
const questionList = [
  "learning_center.How_to_use_it",
  "learning_center.Enhance_Utility_Network",
];
const firstCheckQuestionMessage = ref(-1);
const questionMessageList = [
  {
    messageTitle: "learning_center.What_is_Utility",
    messageText: "learning_center.Utility_Network_has_made",
    messageList: [
      {
        id: 1,
        title: "learning_center.What_is_Utility",
        text: "learning_center.Start_from_here",
        link: "/learning/utility_explain",
      },
      {
        id: 2,
        title: "learning_center.What_is_UNC_Token",
        text: "learning_center.Start_UNC_Token_UNC",
        link: "/learning/unc_token",
      },
      {
        id: 3,
        title: "learning_center.What_is_POCI_Consensus",
        text: "learning_center.it_is_a_brand_new",
        link: "/learning/poci_consensus",
      },
    ],
  },
  {
    messageTitle: "learning_center.How_to_use_Utility",
    messageText: "learning_center.Utility_can_be_used_in",
    messageList: [
      {
        id: 4,
        title: "U Wallet",
        text: "learning_center.A_digital_wallet_holds",
        link: "/soloutions/utility_wallet",
      },
      {
        id: 5,
        title: "Purchase U Platform",
        text: "learning_center.the_first_computing_power",
        link: "/get_power",
      },
    ],
  },
  {
    messageTitle: "learning_center.Enhancing_Utility_Network",
    messageText: "learning_center.Building_Utility_Network",
    messageList: [
      {
        id: 6,
        title: "learning_center.Running_Nodes",
        text: "learning_center.Participate_in_running",
        link: "https://wiki.utlab.io/docs/node/introduction",
      },
      {
        id: 7,
        title: "learning_center.Mining_and_Rental_Supply",
        text: "learning_center.Learn_how_to_mining",
        link: "https://wiki.utlab.io/docs/computing-power-supplier/introduce",
      },
      {
        id: 8,
        title: "learning_center.Join_the_Community",
        text: "learning_center.A_home_for_Utility_developers",
        link: "/community",
      },
    ],
  },
];
const secondCheckQuestionMessage = ref(-1);
const thirdCheckQuestionMessage = ref(-1);
</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header_content">
        <div class="header_content_header">
          {{ $t("learning_center.Learning_center") }}
        </div>
        <div class="header_content_text">
          {{ $t("learning_center.A_guide_and_help_center") }}
        </div>
        <div
          class="header_content_button"
          @click="openNewPage('https://utnet.org/pdf/UtilityNetWhitePaper.pdf')"
        >
          <div>White paper</div>
          <arrowRight />
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section_side" v-if="viewableWidth > 834">
        <div class="section_side_opacity"></div>
        <div class="section_side_message">
          <div class="section_side_title">
            {{ $t("learning_center.What_is_Utility") }}？
          </div>
          <div class="text_list">
            <div
              class="section_side_text"
              v-for="(item, index) in questionList"
              :key="index"
              @mouseenter="mouseCheckIndex = index"
              @mouseleave="mouseCheckIndex = -1"
            >
              <div>{{ $t(item) }}</div>
              <img
                v-if="mouseCheckIndex >= 0 && mouseCheckIndex === index"
                :src="ArrowTopRight"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section_right">
        <div
          class="section_right_item"
          v-for="(item, index) in questionMessageList"
          :key="index"
        >
          <div class="section_right_item_title">
            {{ $t(item.messageTitle) }}
          </div>
          <div class="section_right_item_text">{{ $t(item.messageText) }}</div>
          <div class="section_right_item_card">
            <div v-for="(citem, cindex) in item.messageList" :key="cindex">
              <div
                class="section_right_item_card_item"
                @click="openNewPage(citem.link)"
              >
                <div class="section_right_item_card_item_header">
                  <div class="section_right_item_card_item_header_title">
                    {{ $t(citem.title) }}
                  </div>
                  <div class="section_right_item_card_item_header_text">
                    {{ $t(citem.text) }}
                  </div>
                </div>
                <div class="section_right_item_card_item_button">
                  <img
                    v-if="
                      firstCheckQuestionMessage === citem.id ||
                      viewableWidth < 834
                    "
                    src="@/assets/images/learning_center_enter.png"
                    alt=""
                  />
                  <img
                    v-else
                    src="@/assets/images/learning_center_enter_default.png"
                    alt=""
                  />
                  <div
                    @mouseenter="firstCheckQuestionMessage = citem.id"
                    @mouseleave="firstCheckQuestionMessage = -1"
                  >
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.container {
  background-color: #fffefb;

  .header {
    width: 100%;
    background: url("@/assets/images/learning_center_background.png") no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    .header_content {
      height: 310px;
      width: 640px;
      margin: 0 0 94px 140px;
      padding: 0 60px;

      flex-shrink: 0;
      border-radius: 10px;
      background: linear-gradient(
        180deg,
        rgba(244, 248, 248, 0.05) 0.13%,
        rgba(244, 248, 248, 0) 99.87%
      );
      box-shadow: 0px 1px 1px 1px #dfe7e6 inset;
      backdrop-filter: blur(4px);

      display: flex;
      flex-direction: column;
      justify-content: center;

      .header_content_header {
        color: vrgba(21, 28, 26, 0.9);
        font-family: Lantinghei SC;
        font-size: 28px;
        font-weight: 700;
      }

      .header_content_text {
        // width: 398px;
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
        justify-content: space-evenly;
        align-items: center;
        width: 151px;
        height: 42px;
        border-radius: 6px;
        border: 1px solid rgba(21, 28, 26, 0.9);
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        cursor: pointer;

        &:hover {
          border: 1px solid #3edfcf;
          background-color: #3edfcf;
        }
      }
    }
  }

  .section {
    display: flex;

    .section_side {
      width: 346px;
      height: 1353px;
      border-radius: 8px;
      position: relative;

      .section_side_opacity {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        // opacity: 0.4;
        background: linear-gradient(
          177deg,
          #fff -24.77%,
          rgba(255, 255, 255, 0) 97.53%
        );
        box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.5);
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

      .section_side_message {
        position: absolute;
        top: 40px;
        left: 40px;
        z-index: 10;

        .section_side_title {
          color: rgba(21, 28, 26, 0.9);
          font-family: Lantinghei SC;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 9px;
        }

        .text_list {
          margin-left: 20px;

          .section_side_text {
            color: rgba(21, 28, 26, 0.9);
            font-family: Inter;
            font-size: 16px;
            font-weight: 400;
            padding: 7px 0;
            display: flex;
            align-items: center;

            img {
              width: 11px;
              height: 11px;
              margin-left: 4px;
            }

            &:hover {
              color: #3edfcf;
            }
          }
        }
      }
    }

    .section_right {
      padding: 60px 155px 30px 92px;

      .section_right_item {
        margin-bottom: 70px;

        .section_right_item_title {
          color: rgba(21, 28, 26, 0.9);
          font-family: Lantinghei SC;
          font-size: 18px;
          font-weight: 700;
          /* 21px */
        }

        .section_right_item_text {
          color: rgba(21, 28, 26, 0.9);
          font-family: Inter;
          font-size: 16px;
          font-weight: 400;
          line-height: 147%;
          /* 23.52px */
          margin: 12px 0 36px;
        }

        .section_right_item_card {
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          .section_right_item_card_item {
            height: 246px;
            padding: 35px 40px 40px;
            margin-right: 14px;
            border-radius: 8px;
            border: 1px solid rgba(115, 255, 247, 0);
            background: linear-gradient(
              90deg,
              #fffefb 49.96%,
              rgba(62, 223, 207, 0) 302.95%
            );
            box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.5);
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            margin-bottom: 16px;

            &:hover {
              background: url("@/assets/images/learning_center_card_background.png")
                no-repeat;
              background-size: cover;
            }

            .section_right_item_card_item_header {
              .section_right_item_card_item_header_title {
                color: #3edfcf;
                font-family: Lantinghei SC;
                font-size: 16px;
                font-weight: 700;
                line-height: 150%;
                margin-bottom: 10px;

                /* 21px */
              }

              .section_right_item_card_item_header_text {
                color: rgba(21, 28, 26, 0.9);
                font-family: Inter;
                font-size: 14px;
                font-weight: 400;
                line-height: 150%;
                /* 21px */
                opacity: 0.8;
              }
            }

            .section_right_item_card_item_button {
              display: flex;
              cursor: pointer;

              img {
                width: 24px;
                height: 14px;
                margin-right: 8px;
              }

              & > div {
                color: rgba(21, 28, 26, 0.9);
                font-family: Inter;
                font-size: 14px;
                font-weight: 600;
                line-height: 150%;

                &:hover {
                  text-decoration: underline #3edfcf;
                  color: #3edfcf;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media (min-width: 834px) {
  .header {
    height: 558px;
  }
  .section_right_item_card_item {
    width: 369px;
  }
}

@media (max-width: 834px) {
  .container {
    .header {
      height: 457px;
      padding: 0 5%;
      background: url("@/assets/images/phone_learning_center.png") no-repeat;
      justify-content: center;

      .header_content {
        width: 350px;
        width: 100%;
        height: none;
        flex-shrink: 0;
        padding: 0 28px;
        margin: 0;
        margin-bottom: 41px;

        .header_content_text {
          margin: 18px 0 24px;
        }
      }
    }

    .section {
      .section_right {
        width: 100%;
        padding: 0 0;
        padding-bottom: 41px;

        .section_right_item {
          margin: 0;

          .section_right_item_title {
            margin-top: 40px;
            font-size: 20px;
            text-align: center;
          }

          .section_right_item_text {
            padding: 0 20px;
            opacity: 0.8;
            margin: 16px 0 20px;
          }

          .section_right_item_card {
            width: 100%;
            padding: 0 0px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .section_right_item_card_item {
              width: 350px !important;
              height: 206px;
              padding: 30px 20px;
              margin: 0;
              margin-bottom: 16px;

              &:hover {
                background: none;
              }

              .section_right_item_card_item_header {
                .section_right_item_card_item_header_title {
                  font-size: 14px;
                }
              }

              .section_right_item_card_item_button {
                & > div {
                  text-decoration: underline #3edfcf;
                  color: #3edfcf;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
