<script  setup lang="ts">
import arrowButton from "@/assets/images/community_to_bottom.png";
import OptionsDefault from "@/assets/images/poci_consensus_options_default.png";
import OptionsHover from "@/assets/images/poci_consensus_options_hover.png";
import { number } from "echarts";
import { title } from "process";
import { ref } from "vue";
const optionsList = [
    {
        title: 'Feature A',
        text: 'Provide users with decentralized mining and artificial intelligence training services.'
    },
    {
        title: 'Feature A',
        text: 'Provide users with decentralized mining and artificial intelligence training services.'
    },
    {
        title: 'Feature A',
        text: 'Provide users with decentralized mining and artificial intelligence training services.'
    }
]
const accordionTitle = 'Consensus Chip';
const accordionList = [
    {
        title: 'Initialize Generation',
        messageTitle: 'Strengthen Utility Net',
        messageText: 'Provide users with decentralized mining and artificial intelligence training services. TPU (Tensor Processing Unit) is an accelerator chip designed for artificial intelligence, responsible for deep learning and computing tasks. Its characteristics include: high performance of floating-point operations up to trillions of levels per second; Fantastic floating point operations up to trillions of levels; Low power consumption; Optimized hardware design and flexibility compatible with various development framework software libraries such as TensorFlow and PyTorch.'
    },
    {
        title: 'Data Transmission',
        messageTitle: 'Data Transmission',
        messageText: 'Provide users with decentralized mining and artificial intelligence training services. TPU (Tensor Processing Unit) is an accelerator chip designed for artificial intelligence, responsible for deep learning and computing tasks. Its characteristics include: high performance of floating-point operations up to trillions of levels per second; Fantastic floating point operations up to trillions of levels; Low power consumption; Optimized hardware design and flexibility compatible with various development framework software libraries such as TensorFlow and PyTorch.'
    },
    {
        title: 'Data Validation',
        messageTitle: 'Data Validation',
        messageText: 'Provide users with decentralized mining and artificial intelligence training services. TPU (Tensor Processing Unit) is an accelerator chip designed for artificial intelligence, responsible for deep learning and computing tasks. Its characteristics include: high performance of floating-point operations up to trillions of levels per second; Fantastic floating point operations up to trillions of levels; Low power consumption; Optimized hardware design and flexibility compatible with various development framework software libraries such as TensorFlow and PyTorch.'
    }
]
const questionList = [
    {
        id: '01',
        question: 'Why Using TPU?',
        answer: 'Provide users with decentralized mining and artificial intelligence training services. TPU(Tensor Processing Unit) is an accelerator chip designed for artificial intelligence, tasked with deep learning computing tasks, features include: up to teraflops of high performance; Beautiful teraflops; Low power consumption; Optimized hardware design and flexibility for compatibility with multiple development framework software libraries such as TensorFlow and PyTorch.'
    },
    {
        id: '02',
        question: 'Why Using TPU?',
        answer: 'Provide users with decentralized mining and artificial intelligence training services. TPU(Tensor Processing Unit) is an accelerator chip designed for artificial intelligence, tasked with deep learning computing tasks, features include: up to teraflops of high performance; Beautiful teraflops; Low power consumption; Optimized hardware design and flexibility for compatibility with multiple development framework software libraries such as TensorFlow and PyTorch.'
    },
    {
        id: '03',
        question: 'Why Using TPU?',
        answer: 'Provide users with decentralized mining and artificial intelligence training services. TPU(Tensor Processing Unit) is an accelerator chip designed for artificial intelligence, tasked with deep learning computing tasks, features include: up to teraflops of high performance; Beautiful teraflops; Low power consumption; Optimized hardware design and flexibility for compatibility with multiple development framework software libraries such as TensorFlow and PyTorch.'
    },
]
const checkQuestionIndex = ref(-1);
const changeCheckIndex = (index: any) => {
    if (checkQuestionIndex.value == index) {
        checkQuestionIndex.value = -1;
        return;
    }
    checkQuestionIndex.value = index;
}
</script>
<template>
    <div>
        <div class="container">
            <div class="header">
                <div class="header_content">
                    <div class="header_content_header">POCI Consensus</div>
                    <div class="header_content_text">A brand new
                        Proof mechanism, indirectly proving computing power through the ownership of trusted computing power
                        Proof of Computing Integrity (PoCI)</div>
                    <div class="header_content_button">
                        <div>Read More</div>
                        <img :src="arrowButton" alt="">
                    </div>
                </div>
            </div>
            <div class="options">
                <div class="options_side">
                    <div class="options_side_title">Strengthen Utility Network</div>
                    <div class="options_side_text">Provide users with decentralized mining and artificial intelligence
                        training services. TPU (Tensor Processing Unit) is an accelerator chip designed for artificial
                        intelligence, responsible for deep learning and computing tasks. </div>
                    <div class="options_side_text">Its characteristics include: high performance of floating-point
                        operations up to trillions of levels per second; Fantastic floating point operations up to trillions
                        of levels; Low power consumption; Optimized hardware design and flexibility compatible with various
                        development framework software libraries such as TensorFlow and PyTorch.</div>
                </div>
                <div class="options_list">
                    <div class="options_item" v-for="(item, index) in optionsList" :key="index">
                        <div class="options_item_header">
                            <div class="options_item_header_index">{{ index + 1 }}</div>
                            <div class="options_item_header_title">{{ item.title }}</div>
                        </div>
                        <div class="options_item_text">{{ item.text }}</div>
                    </div>
                </div>
            </div>
            <Accordion :accordionTitle="accordionTitle" :accordionList="accordionList" />
            <div class="faq">
                <div class="faq_title">FAQ</div>
                <div class="faq_question_list">
                    <div class="faq_item_question" v-for="(citem, cindex) in questionList" :key="cindex"
                        @click="changeCheckIndex(cindex)" :class="checkQuestionIndex == cindex ? 'active' : ''">
                        <div class="faq_item_question_title">
                            <div class="faq_item_question_title_side">
                                <div class="faq_item_question_title_side_index">{{ citem.id }}/</div>
                                <div class="item_question_text">{{ citem.question }}</div>
                            </div>
                            <img src="@/assets/images/poci_to_bottom.png" alt="">
                        </div>
                        <div v-if="checkQuestionIndex == cindex" class="faq_item_question_answer">{{ citem.answer }}</div>
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
        height: 578px;
        background: url('@/assets/images/poci_consensus_background.png') no-repeat;
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
                justify-content: center;
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

                img {
                    width: 16px;
                    height: 16px;
                    margin-left: 8px;
                }

                &:hover {
                    border: 1px solid #3EDFCF;
                    background-color: #3EDFCF;
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
                color: rgba(21, 28, 26, 0.90);
                font-family: Lantinghei SC;
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 25px;
            }

            .options_side_text {
                color: rgba(21, 28, 26, 0.90);
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
                background: url('@/assets/images/poci_consensus_options_default.png') no-repeat;
                background-size: cover;
                margin-bottom: 16px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.50);

                &:hover {
                    background: url('@/assets/images/poci_consensus_options_hover.png') no-repeat;
                    background-size: cover;
                }

                .options_item_header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 13px;

                    .options_item_header_index {
                        width: 26px;
                        height: 26px;
                        line-height: 26px;
                        border-radius: 13px;
                        background-color: #3EDFCF;
                        color: #FFF;
                        text-align: center;
                        font-family: Montserrat;
                        font-size: 14px;
                        font-weight: 600;
                        /* 21px */
                        margin-right: 12px;
                    }

                    .options_item_header_title {
                        color: rgba(21, 28, 26, 0.90);
                        font-family: Lantinghei SC;
                        font-size: 16px;
                        font-weight: 700;
                    }
                }

                .options_item_text {
                    color: rgba(21, 28, 26, 0.90);
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
            color: rgba(21, 28, 26, 0.90);
            font-family: Lantinghei SC;
            font-size: 22px;
            font-weight: 700;

        }

        .faq_question_list {
            width: 100%;
            display: flex;
            flex-direction: column;

            .faq_item_question {

                border-bottom: 2px solid rgba(21, 28, 26, 0.06);

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
                            border: 1px solid rgba(21, 28, 26, 0.90);
                            margin-right: 10px;
                        }

                        .item_question_text {
                            color: rgba(21, 28, 26, 0.90);
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
                    color: rgba(21, 28, 26, 0.90);
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
                    img {
                        transform: rotateZ(180deg);
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
            height: 484px;
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
                margin: 0;
                margin-bottom: 32px;

                .header_content_text {
                    margin: 18px 0 24px;
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
                    padding: 31px 20px 39px 44px;
                    margin-bottom: 12px;

                    &:hover {
                        background: url('@/assets/images/poci_consensus_options_default.png') no-repeat;
                        background-size: cover;
                    }
                }
            }
        }
    }
}
</style>