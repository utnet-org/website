<script  setup lang="ts">
import arrowButton from "@/assets/images/community_to_bottom.png";
import OptionsBackground from "@/assets/images/unc_token_options_background.png";
import OptionsItem1 from "@/assets/images/unc_token_options_item1.png";
import OptionsItem2 from "@/assets/images/unc_token_options_item2.png";
import OptionsItem3 from "@/assets/images/unc_token_options_item3.png";
import ToRight from "@/assets/images/unc_token_to_right.png";
import LineChart from "@/assets/images/unc_token_line_chart.png";
import { openNewPage } from "@/utils/request";
import { ref } from "vue";
const optionsList = [
    {
        image: OptionsItem1,
        title: 'Pancakeswap',
        text: 'utilityNetwork.decentralized_exchange',
        link: 'https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x35da89a339de2c78f8fb1c5e1a9a9c6539e2fa8a',

    },
    {
        image: OptionsItem2,
        title: 'Hotcoin Global',
        text: 'utilityNetwork.digital_asset_trading',
        link: 'https://www.hotcoin.com/'
    },
    {
        image: OptionsItem3,
        title: 'CoinW',
        text: 'utilityNetwork.multifacetedc_ryptocurrency_platform',
        link: 'https://www.coinw.com/frontSpot/spottrade?symbol=1382'
    }
]
const messageCardList = [
    {
        title: 'utilityNetwork.talos_age_title',
        firstLevelText: 'utilityNetwork.talos_age_first_text',
        secondLevelText: 'utilityNetwork.talos_age_second_text'
    },
    {
        title: 'utilityNetwork.vajra_age_title',
        firstLevelText: 'utilityNetwork.vajra_age_first_text',
        secondLevelText: 'utilityNetwork.vajra_age_second_text'
    },
    {
        title: 'utilityNetwork.golem_age_title',
        firstLevelText: 'utilityNetwork.golem_age_first_text',
        secondLevelText: 'utilityNetwork.golem_age_second_text'
    },
    {
        title: 'utilityNetwork.maria_age_title',
        firstLevelText: 'utilityNetwork.maria_age_first_text',
        secondLevelText: 'utilityNetwork.maria_age_second_text'
    },
]
const viewableWidth = ref(document.documentElement.clientWidth ?? 0);
</script>
<template>
    <div class="container">
        <div class="header">
            <div class="header_content">
                <div class="header_content_header">
                    <div class="header_content_header_title">
                        Current UNC (USD)
                    </div>
                    <div class="header_content_header_title_div">
                        <div class="dots"></div>
                        <div class="time_text">Last 24 hours</div>
                    </div>
                </div>
                <div class="header_content_acount">
                    $0.20963
                </div>
                <!-- <div class="header_content_line_chart">
                    <img :src="LineChart" alt="">
                </div> -->
                <div class="header_content_button"
                    @click="openNewPage('https://www.bscscan.com/address/0x35Da89A339DE2c78F8FB1c5e1A9a9C6539e2FA8A')">
                    <div>view details</div>
                    <img :src="ToRight" alt="">
                </div>
            </div>
        </div>
        <div class="message">
            <div class="main_title_message">
                <div class="main_title">{{ $t('utilityNetwork.learn_about_unc_token_title') }}</div>
                <div class="main_text">{{ $t('utilityNetwork.learn_about_unc_token_text') }}</div>
            </div>
            <div class="subtitle">
                <div class="subtitle_options" v-if="viewableWidth > 834">
                    <div class="subtitle_options_item">
                        <img src="@/assets/images/unc_token_options1.png" alt="">
                        <div>
                            <div class="subtitle_options_item_title">{{
                                $t('utilityNetwork.fundamentals_of_blockchain_title')
                            }}</div>
                            <div class="subtitle_options_item_text">{{
                                $t('utilityNetwork.fundamentals_of_blockchain_text')
                            }}</div>
                        </div>
                    </div>
                    <div class="subtitle_options_item">

                        <div>
                            <div class="subtitle_options_item_title">{{
                                $t('utilityNetwork.superb_application_of_smart_contracts_title')
                            }}</div>
                            <div class="subtitle_options_item_text">{{
                                $t('utilityNetwork.superb_application_of_smart_contracts_text')
                            }}</div>
                        </div>
                        <img src="@/assets/images/unc_token_options2.png" alt="">
                    </div>
                    <div class="subtitle_options_item">
                        <img src="@/assets/images/unc_token_options3.png" alt="">
                        <div>
                            <div class="subtitle_options_item_title">{{
                                $t('utilityNetwork.incentive_mechanism_for_innovation_title')
                            }}</div>
                            <div class="subtitle_options_item_text">{{
                                $t('utilityNetwork.incentive_mechanism_for_innovation_text')
                            }}</div>
                        </div>
                    </div>
                    <div class="subtitle_options_item">
                        <div>
                            <div class="subtitle_options_item_title">{{
                                $t('utilityNetwork.digital_interpretation_of_blockchain_governance_title')
                            }}
                            </div>
                            <div class="subtitle_options_item_text">{{
                                $t('utilityNetwork.digital_interpretation_of_blockchain_governance_text')
                            }}</div>
                        </div>

                        <img src="@/assets/images/unc_token_options4.png" alt="">
                    </div>
                </div>
                <div class="subtitle_options" v-else>
                    <div class="subtitle_options_item">
                        <img src="@/assets/images/unc_token_options1.png" alt="">
                        <div>
                            <div class="subtitle_options_item_title">{{
                                $t('utilityNetwork.fundamentals_of_blockchain_title')
                            }}</div>
                            <div class="subtitle_options_item_text">{{
                                $t('utilityNetwork.fundamentals_of_blockchain_text')
                            }}</div>
                        </div>
                    </div>
                    <div class="subtitle_options_item">
                        <img src="@/assets/images/unc_token_options2.png" alt="">
                        <div>
                            <div class="subtitle_options_item_title">{{
                                $t('utilityNetwork.superb_application_of_smart_contracts_title')
                            }}</div>
                            <div class="subtitle_options_item_text">{{
                                $t('utilityNetwork.superb_application_of_smart_contracts_text')
                            }}</div>
                        </div>
                    </div>
                    <div class="subtitle_options_item">
                        <img src="@/assets/images/unc_token_options3.png" alt="">
                        <div>
                            <div class="subtitle_options_item_title">{{
                                $t('utilityNetwork.incentive_mechanism_for_innovation_title')
                            }}</div>
                            <div class="subtitle_options_item_text">{{
                                $t('utilityNetwork.incentive_mechanism_for_innovation_text')
                            }}</div>
                        </div>
                    </div>
                    <div class="subtitle_options_item">
                        <img src="@/assets/images/unc_token_options4.png" alt="">
                        <div>
                            <div class="subtitle_options_item_title">{{
                                $t('utilityNetwork.digital_interpretation_of_blockchain_governance_title')
                            }}
                            </div>
                            <div class="subtitle_options_item_text">{{
                                $t('utilityNetwork.digital_interpretation_of_blockchain_governance_text')
                            }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="message_card_title">{{ $t('utilityNetwork.how_to_earn_unc') }}</div>
            <div class="message_card_list">
                <div class="message_card_list_item" v-for="(item, index) in messageCardList" :key="index">
                    <div class="message_card_list_item_title">
                        <div class="message_card_list_item_title_line"></div>
                        <div>{{ $t(item.title) }}</div>
                    </div>
                    <div class="message_card_list_item_text">{{ $t(item.firstLevelText) }}</div>
                    <div class="message_card_list_item_text">{{ $t(item.secondLevelText) }}</div>
                </div>
            </div>
            <div class="options_list_header">{{ $t('utilityNetwork.unc_tading_market_title') }}</div>
            <div class="options_list">
                <div v-for="(item, index) in optionsList" :key="index">
                    <div class="options_item" @click="openNewPage(item.link)">
                        <img :src="item.image" alt="">
                        <div class="options_item_header">
                            <div class="options_item_header_title">{{ item.title }}</div>
                            <div class="options_item_header_text">{{ $t(item.text) }}</div>
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
        height: 578px;
        background: url('@/assets/images/unc_token_background.png') no-repeat;
        background-size: cover;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;

        .header_content {
            width: 646px;
            height: 271px;
            border-radius: 10px;
            background: linear-gradient(180deg, rgba(244, 248, 248, 0.05) 0.13%, rgba(244, 248, 248, 0.00) 99.87%);
            box-shadow: 0px 1px 1px 1px #DFE7E6 inset;
            backdrop-filter: blur(4px);
            margin: 0 0 132px 121px;
            padding: 26px 60px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .header_content_header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 3px;

                .header_content_header_title {
                    color: #3EDFCF;
                    font-family: Lantinghei SC;
                    font-size: 14px;
                    font-weight: 400;
                    text-transform: uppercase;
                }

                .header_content_header_title_div {
                    width: 117px;
                    height: 31px;
                    border-radius: 20px;
                    background: #3EDFCF;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .dots {
                        width: 4px;
                        height: 4px;
                        border-radius: 2px;
                        background-color: #FFF;
                        margin-right: 4px;
                    }

                    .time_text {
                        color: #FFF;
                        font-family: Inter;
                        font-size: 12px;
                        font-weight: 500;
                    }
                }
            }

            .header_content_acount {
                color: rgba(21, 28, 26, 0.90);
                font-family: Lantinghei SC;
                font-size: 28px;
                font-weight: 700;
                margin-bottom: 57px;
            }

            .header_content_line_chart {
                width: 530px;
                height: 97px;
                margin: 41px 0 51px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .header_content_button {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 526px;
                height: 42px;
                border-radius: 6px;
                padding: 0 24px;
                color: rgba(21, 28, 26, 0.90);
                font-family: Inter;
                font-size: 14px;
                font-weight: 600;
                line-height: 150%;
                background-color: #3EDFCF;
                cursor: pointer;

                img {
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }

    .message {
        padding: 70px 11.5% 74px;

        .main_title_message {
            display: flex;
            flex-direction: column;

            .main_title {
                color: rgba(21, 28, 26, 0.90);
                font-family: Lantinghei SC;
                font-size: 22px;
                font-weight: 700;
                margin-bottom: 26px;
                text-align: center;
            }

            .main_text {
                color: rgba(21, 28, 26, 0.90);
                font-family: Inter;
                font-size: 14px;
                font-weight: 400;
                line-height: 161%;
                /* 22.54px */
                opacity: 0.8;
                margin-bottom: 15px;
            }
        }

        .subtitle {
            .subtitle_options {
                margin-bottom: 62px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .subtitle_options_item {
                    width: 1328px;
                    height: 295px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    &:first-child {
                        background: linear-gradient(100deg, rgba(149, 235, 227, 0.17) 1.02%, rgba(149, 235, 227, 0.00) 38.87%);
                        padding: 0 70px 0 123px;

                        img {
                            width: 134px;
                            height: 252px;
                        }
                    }

                    &:nth-child(2) {
                        background: linear-gradient(260deg, rgba(149, 235, 227, 0.17) 1.02%, rgba(149, 235, 227, 0.00) 38.87%);
                        padding: 0 111px 0 50px;

                        img {
                            width: 234px;
                            height: 227px;
                        }
                    }

                    &:nth-child(3) {
                        background: linear-gradient(100deg, rgba(149, 235, 227, 0.17) 1.02%, rgba(149, 235, 227, 0.00) 38.87%);
                        padding: 0 70px 0 115px;

                        img {
                            width: 151px;
                            height: 198px;
                        }
                    }

                    &:last-child {
                        background: linear-gradient(260deg, rgba(149, 235, 227, 0.17) 1.02%, rgba(149, 235, 227, 0.00) 38.87%);
                        padding: 0 183px 0 50px;

                        img {
                            width: 120px;
                            height: 257px;
                        }
                    }

                    margin-bottom: 14px;

                    .subtitle_options_item_title {
                        color: rgba(21, 28, 26, 0.90);
                        font-family: Lantinghei SC;
                        font-size: 16px;
                        font-weight: 700;
                        margin-bottom: 12px;
                    }

                    .subtitle_options_item_text {
                        color: rgba(21, 28, 26, 0.90);
                        font-family: Inter;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 161%;
                        opacity: 0.8;
                        max-width: 700px;
                    }
                }
            }
        }

        .message_card_title {
            text-align: center;
            color: rgba(21, 28, 26, 0.90);
            font-family: Lantinghei SC;
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 40px;
        }

        .message_card_list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
            grid-column-gap: 28px;
            grid-row-gap: 28px;
            margin-bottom: 62px;

            .message_card_list_item {
                width: 650px;
                height: 378px;
                margin: auto;
                padding: 50px 50px 0;
                border-radius: 12px;
                background: #F6F9F9;
                //box-shadow: 4px 4px 24px 0px rgba(228, 233, 232, 0.80);
                display: flex;
                flex-direction: column;
                // justify-content: center;

                .message_card_list_item_title {
                    margin-bottom: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    .message_card_list_item_title_line {
                        width: 4px;
                        height: 16px;
                        background: #3EDFCF;
                        margin-right: 8px;
                    }

                    div {
                        color: rgba(21, 28, 26, 0.90);
                        font-family: Lantinghei SC;
                        font-size: 16px;
                        font-weight: 700;
                    }
                }

                .message_card_list_item_text {
                    color: var(--Light-dark, rgba(21, 28, 26, 0.90));
                    font-family: Inter;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 161%;
                    /* 22.54px */
                    opacity: 0.8;
                    margin-top: 16px;
                }
            }
        }

        .options_list_header {
            color: rgba(21, 28, 26, 0.90);
            font-family: Lantinghei SC;
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 32px;
            text-align: center;
        }

        .options_list {
            // display: grid;
            // grid-template-columns: repeat(auto-fill, minmax(321px, 1fr));
            // grid-column-gap: 14px;
            // /* 项目之间的水平间距 */
            // grid-row-gap: 14px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;


            .options_item {
                min-width: 321px;
                height: 105px;
                padding: 27px 32px;
                margin-right: 14px;
                margin-bottom: 14px;
                border-radius: 8px;
                background: linear-gradient(177deg, #FFF -24.77%, rgba(255, 255, 255, 0.00) 97.53%);
                box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.50);
                display: flex;
                cursor: pointer;
                border: 1px solid transparent;

                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 20px;
                    margin-right: 16px;
                    background-color: #151C1A;
                }

                .options_item_header {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;

                    .options_item_header_title {
                        color: rgba(21, 28, 26, 0.90);
                        font-family: Inter;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 150%;
                        /* 24px */
                        margin-bottom: 6px;
                    }

                    .options_item_header_text {
                        color: rgba(21, 28, 26, 0.90);
                        font-family: Inter;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 150%;
                        /* 21px */
                        opacity: 0.8;
                    }
                }

                &:hover {
                    // background: url('@/assets/images/unc_token_options_background.png') no-repeat;
                    border: 1px solid #3EDFCF;
                    background-size: cover;
                }
            }
        }
    }

}

@media (max-width: 834px) {
    .container {
        .header {
            height: 480px;
            padding: 0 5%;
            background: url('@/assets/images/phone_unc_token.png') no-repeat;
            background-size: cover;
            justify-content: center;

            .header_content {
                width: 100%;
                height: 206px;
                flex-shrink: 0;
                padding: 28px 18px;
                margin: 0;
                margin-bottom: 95px;

                .header_content_header {
                    .header_content_header_title {
                        font-size: 12px;
                    }
                }

                .header_content_acount {
                    font-size: 24px;
                    margin-bottom: 24px;
                }

                .header_content_line_chart {
                    width: 100%;
                    height: 104px;
                    margin: 22px 0 32px;
                }

                .header_content_button {
                    width: 100%;
                    height: 32px;
                    font-size: 12px;
                    padding: 0 14px;
                    background-color: #96EBE3;
                }
            }
        }

        .message {
            padding: 32px 5% 37px;

            .main_title_message {
                .main_title {
                    font-size: 20px;
                    margin-bottom: 16px;
                }

                .main_text {
                    margin-bottom: 28px;
                }
            }

            .subtitle {
                .subtitle_options {
                    margin-bottom: 16px;

                    .subtitle_options_item {
                        width: 100%;
                        height: 600px;
                        margin-bottom: 0px;
                        border-radius: 12px;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;

                        &:first-child {
                            background: linear-gradient(180deg, rgba(149, 235, 227, 0.17) 1.02%, rgba(149, 235, 227, 0.00) 38.87%);
                            padding: 0 24px;

                            img {
                                width: 130px;
                                height: 248px;
                                margin: 38px 0 24px;
                            }
                        }

                        &:nth-child(2) {
                            background: linear-gradient(180deg, rgba(149, 235, 227, 0.17) 1.02%, rgba(149, 235, 227, 0.00) 38.87%);
                            padding: 0 24px;

                            img {
                                width: 234px;
                                height: 227px;
                                margin: 40px 0 43px;
                            }
                        }

                        &:nth-child(3) {
                            background: linear-gradient(180deg, rgba(149, 235, 227, 0.17) 1.02%, rgba(149, 235, 227, 0.00) 38.87%);
                            padding: 0 24px;

                            img {
                                width: 151px;
                                height: 198px;
                                margin: 46px 0 49px;
                            }
                        }

                        &:last-child {
                            background: linear-gradient(180deg, rgba(149, 235, 227, 0.17) 1.02%, rgba(149, 235, 227, 0.00) 38.87%);
                            padding: 0 24px;

                            img {
                                width: 116px;
                                height: 247px;
                                margin: 8px 0 38px;
                            }
                        }

                        .subtitle_options_item_text {
                            max-width: 100%;
                        }
                    }
                }
            }

            .message_card_title {
                margin-bottom: 24px;
            }

            .message_card_list {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
                grid-column-gap: 14px;
                grid-row-gap: 14px;
                margin-bottom: 20px;

                .message_card_list_item {
                    width: 100%;
                    height: max-content;
                    padding: 28px 18px 18px;

                    .message_card_list_item_text {
                        color: var(--Light-dark, rgba(21, 28, 26, 0.90));
                        font-family: Inter;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 161%;
                        /* 22.54px */
                        opacity: 0.8;
                        margin-top: 10px;
                    }
                }
            }

            .options_list_header {
                color: rgba(21, 28, 26, 0.90);
                font-family: Lantinghei SC;
                font-size: 20px;
                font-weight: 700;
                margin-bottom: 24px;
                text-align: center;
            }

            .options_list {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(90%, 1fr));
                grid-column-gap: 12px;
                /* 项目之间的水平间距 */
                grid-row-gap: 12px;

                .options_item {
                    min-width: 90%;
                    height: max-content;
                    margin-right: 0px;
                    margin-bottom: 0px;

                    img {
                        margin-right: 20px;
                    }

                    .options_item_header {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                    }

                    &:hover {
                        background: none;
                    }
                }
            }
        }
    }
}
</style>
