<script  setup lang="ts">
import arrowRight from "@/assets/svgs/arrow.svg";
import ArrowTopRight from "@/assets/images/arrow_top_right.png";
import { ref } from "vue";
const viewableWidth = ref(Number(localStorage.getItem('viewableWidth') ?? 0));
const mouseCheckIndex = ref(-1);
const questionList = [
    'How to use it?',
    'Enhance Utility Network'
]
const firstCheckQuestionMessage = ref(-1);
const questionMessageList = [
    {
        messageTitle: 'What is Utility',
        messageText: 'Utility Network has made many innovations based on traditional blockchain. It defines chip in a different way and computing power can be used effectively. Learn more and get started:',
        messageList: [
            {
                id: 1,
                title: 'What is Utility',
                text: 'Start from here as a beginner',
            },
            {
                id: 2,
                title: 'What is UNC Token',
                text: 'Start UNC Token (UNC) is the currency of the Utility network and its ecosystem',
            },
            {
                id: 3,
                title: 'What is POCI Consensus',
                text: 'It is a brand-new proof mechanism, which indirectly proves computing power through the possession of trusted computing power.',
            }
        ]
    },
    {
        messageTitle: 'How to use Utility',
        messageText: 'Utility can be used in a variety of scenarios, such as payment and trainning language models by computing resources.',
        messageList: [
            {
                id: 4,
                title: 'U Wallet',
                text: 'A digital wallet holds the credentials you need to prove your identity and access your important places.',
            },
            {
                id: 5,
                title: 'Purchase U Platform',
                text: 'The first computing power rental platform issued by the Utility.',
            }
        ]
    },
    {
        messageTitle: 'Enhancing Utility Network',
        messageText: 'Building Utility Network and receiving reward (UNC) by blockchain and computing resources rental.',
        messageList: [
            {
                id: 6,
                title: 'Running Nodes',
                text: 'Participate in running nodes and make important contributions.',
            },
            {
                id: 7,
                title: 'Mining and Rental Supply',
                text: 'Learn how to mining and rental in the Utility network.',
            },
            {
                id: 8,
                title: 'Join the Community',
                text: 'A home for Utility developers, technical experts, designers, users and cryptocurrency enthusiasts.',
            }
        ]
    }
]
const secondCheckQuestionMessage = ref(-1);
const thirdCheckQuestionMessage = ref(-1);
</script>
<template>
    <div class="container">
        <div class="header">
            <div class="header_content">
                <div class="header_content_header">Learn about Utility </div>
                <div class="header_content_text">A guide for you to enter the world of Utility.
                    Know about how Utility works so you can connect to it.
                    This page includes technical articles, guides, and resources.</div>
                <div class="header_content_button">
                    <div>White paper</div>
                    <arrowRight />
                </div>
            </div>
        </div>
        <div class="section">
            <div class="section_side" v-if="viewableWidth > 834">
                <div class="section_side_opacity">
                </div>
                <div class="section_side_message">
                    <div class="section_side_title">What is Utility？</div>
                    <div class="text_list">
                        <div class="section_side_text" v-for="(item, index) in questionList" :key="index"
                            @mouseenter="mouseCheckIndex = index" @mouseleave="mouseCheckIndex = -1">
                            <div>{{ item }}</div>
                            <img v-if="mouseCheckIndex >= 0 && mouseCheckIndex === index" :src="ArrowTopRight" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="section_right">
                <div class="section_right_item" v-for="(item, index) in questionMessageList" :key="index">
                    <div class="section_right_item_title">{{ item.messageTitle }}</div>
                    <div class="section_right_item_text">{{ item.messageText }}</div>
                    <div class="section_right_item_card">
                        <div class="section_right_item_card_item" v-for="(citem, cindex) in item.messageList" :key="cindex">
                            <div class="section_right_item_card_item_header">
                                <div class="section_right_item_card_item_header_title">{{ citem.title }}</div>
                                <div class="section_right_item_card_item_header_text">{{ citem.text }}</div>
                            </div>
                            <div class="section_right_item_card_item_button">
                                <img v-if="firstCheckQuestionMessage === citem.id || viewableWidth < 834"
                                    src="@/assets/images/learning_center_enter.png" alt="">
                                <img v-else src="@/assets/images/learning_center_enter_default.png" alt="">
                                <div @mouseenter="firstCheckQuestionMessage = citem.id"
                                    @mouseleave="firstCheckQuestionMessage = -1">Learn More</div>
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
    background-color: #FFFEFB;

    .header {
        width: 100%;
        height: 558px;
        background: url('@/assets/images/learning_center_background.png') no-repeat;
        background-size: cover;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        .header_content {
            width: 640px;
            height: 310px;
            flex-shrink: 0;
            border-radius: 10px;
            background: linear-gradient(180deg, rgba(244, 248, 248, 0.05) 0.13%, rgba(244, 248, 248, 0.00) 99.87%);
            box-shadow: 0px 1px 1px 1px #DFE7E6 inset;
            backdrop-filter: blur(4px);
            margin: 0 0 94px 140px;
            padding: 0 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .header_content_header {
                color: vrgba(21, 28, 26, 0.90);
                font-family: Lantinghei SC;
                font-size: 28px;
                font-weight: 700;
            }

            .header_content_text {
                // width: 398px;
                color: rgba(21, 28, 26, 0.90);
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
                color: var(--Light-dark, rgba(21, 28, 26, 0.90));
                font-family: Inter;
                font-size: 14px;
                font-weight: 500;
                line-height: 150%;
                cursor: pointer;

                &:hover {
                    border: 1px solid #3EDFCF;
                    background-color: #3EDFCF;
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
                background: linear-gradient(177deg, #FFF -24.77%, rgba(255, 255, 255, 0.00) 97.53%);
                box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.50);
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
                    color: rgba(21, 28, 26, 0.90);
                    font-family: Lantinghei SC;
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 9px;
                }

                .text_list {
                    margin-left: 20px;

                    .section_side_text {
                        color: rgba(21, 28, 26, 0.90);
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
                            color: #3EDFCF;
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
                    color: rgba(21, 28, 26, 0.90);
                    font-family: Lantinghei SC;
                    font-size: 18px;
                    font-weight: 700;
                    /* 21px */
                }

                .section_right_item_text {
                    color: rgba(21, 28, 26, 0.90);
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
                        width: 369px;
                        height: 246px;
                        padding: 35px 40px 40px;
                        margin-right: 14px;
                        border-radius: 8px;
                        border: 1px solid rgba(115, 255, 247, 0.00);
                        background: linear-gradient(90deg, #FFFEFB 49.96%, rgba(62, 223, 207, 0.00) 302.95%);
                        box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.50);
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        &:hover {
                            background: url('@/assets/images/learning_center_card_background.png') no-repeat;
                            background-size: cover;
                        }

                        .section_right_item_card_item_header {

                            .section_right_item_card_item_header_title {
                                color: #3EDFCF;
                                font-family: Lantinghei SC;
                                font-size: 16px;
                                font-weight: 700;
                                line-height: 150%;
                                margin-bottom: 10px;

                                /* 21px */
                            }

                            .section_right_item_card_item_header_text {
                                color: rgba(21, 28, 26, 0.90);
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

                            &>div {
                                color: rgba(21, 28, 26, 0.90);
                                font-family: Inter;
                                font-size: 14px;
                                font-weight: 600;
                                line-height: 150%;

                                &:hover {
                                    text-decoration: underline #3EDFCF;
                                    color: #3EDFCF;
                                }
                            }
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
            width: 100%;
            height: 457px;
            padding: 0 5%;
            background: url('@/assets/images/phone_learning_center.png') no-repeat;
            background-size: cover;
            display: flex;
            justify-content: center;

            .header_content {
                // width: 350px;
                width: 100%;
                height: none;
                flex-shrink: 0;
                padding: 0 48px;
                margin: 0 20px 41px;

                .header_content_text {
                    margin: 18px 0 24px;
                }
            }
        }

        .section {

            .section_right {
                width: 100%;
                padding: 0 5%;
                padding-bottom: 41px;

                .section_right_item {
                    margin-bottom: 0;

                    .section_right_item_title {
                        margin-top: 40px;
                        font-size: 20px;
                        text-align: center;
                    }

                    .section_right_item_text {
                        opacity: 0.8;
                        margin: 16px 0 20px;
                    }

                    .section_right_item_card {
                        .section_right_item_card_item {
                            width: 350px;
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
                                &>div {
                                    text-decoration: underline #3EDFCF;
                                    color: #3EDFCF;
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
