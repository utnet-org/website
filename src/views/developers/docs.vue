<script setup lang="ts">
import OptionsImage1 from '@/assets/images/options_image1.png';
import OptionsImage2 from '@/assets/images/options_image2.png';
import OptionsImage3 from '@/assets/images/options_image3.png';
import OptionsImage4 from '@/assets/images/options_image4.png';
</script>
<template>
    <div class="container">
        <div class="header">
            <div class="header_image">
                <div class="header_title">Utility Docs</div>
                <div class="header_text">
                    At this stage, UNC token issuance takes place, the public chain foundation is established, and the
                    community and public chain are in the development phase. During this stage, the first internal test will
                    be initiated, focusing on incentive model testing based on the Binance Smart Chain.
                </div>
            </div>
        </div>
        <div class="options_list">
            <div class="options_item">
                <img :src="OptionsImage1" alt="" style="width: 115px;height: 132px;margin: 50px 0 83px;">
                <div class="options_item_title">Run a node</div>
                <div class="options_item_text">You can try deploying your program on UtilityNet and we will provide you with
                    documentation and
                    tutorials.</div>
            </div>
            <div class="options_item">
                <img :src="OptionsImage2" alt="" style="width: 121px;height: 170px;margin: 17px 0 78px;">
                <div class="options_item_title">Provide my hashing power </div>
                <div class="options_item_text">You can try deploying your program on UtilityNet and we will provide you with
                    documentation and
                    tutorials.</div>
            </div>
            <div class="options_item">
                <img :src="OptionsImage3" alt="" style="width: 137px;height: 130px;margin: 50px 0 85px;">
                <div class="options_item_title">build a dapp</div>
                <div class="options_item_text">You can try deploying your program on UtilityNet and we will provide you with
                    documentation and
                    tutorials.</div>
            </div>
            <div class="options_item">
                <img :src="OptionsImage4" alt="" style="width: 117px;height: 135px;margin: 50px 0 80px;">
                <div class="options_item_title">White Paper</div>
                <div class="options_item_text">You can try deploying your program on UtilityNet and we will provide you with
                    documentation and
                    tutorials.</div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.container {
    background: #FFFEFB;

    .header {
        width: 100%;
        height: 430px;
        background: url("@/assets/images/docs_background.png") no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .header_image {

            .header_title {
                color: rgba(21, 28, 26, 0.90);
                text-align: center;
                font-family: Lantinghei SC;
                font-size: 32px;
                font-weight: 700;
                margin-bottom: 25px;
            }

            .header_text {
                width: 814px;
                color: rgba(21, 28, 26, 0.90);
                text-align: center;
                font-family: Inter;
                font-size: 16px;
                font-weight: 400;
                line-height: 154%;
                /* 24.64px */
                opacity: 0.8;
            }
        }
    }

    .options_list {
        padding: 68px 140px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(716px, 1fr));
        grid-column-gap: 16px;
        /* 项目之间的水平间距 */
        grid-row-gap: 16px;

        .options_item {
            width: 716px;
            height: 394px;
            padding: 0px 50px;
            border-radius: 12px;
            box-shadow: 0px 4px 24px 0px rgba(228, 233, 232, 0.50);
            cursor: pointer;

            &:hover {
                background: url('@/assets/images/docs_options_background.png') no-repeat;
                background-size: cover;
            }

            .options_item_title {
                color: #3EDFCF;
                font-family: Lantinghei SC;
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 14px;
            }

            .options_item_text {
                color: rgba(21, 28, 26, 0.90);
                font-family: Inter;
                font-size: 16px;
                font-weight: 500;
                line-height: 142%;
                /* 22.72px */
                letter-spacing: 0.48px;
                opacity: 0.8;
            }
        }
    }
}
</style>