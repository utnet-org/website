<script lang="ts" setup name="Home">
import MainStore from '@/store'
import { nextTick, ref } from 'vue';
import imgUrl from './imageUrl'
const { home } = MainStore() //使用store

//! 下面部分为引入方式导入动画
const ivEMfk9ulAFRBn22Show = ref(false) // 小球轨道动画显示
function loaded(Spline: any) { // 小球轨道动画加载完成后执行
    Spline.setZoom(1.4);
    home.homeObj.ivEMfk9ulAFRBn22 = Spline
    setTimeout(() => {
        if (!home.temS) {
            home.homeObj.ivEMfk9ulAFRBn22.setBackgroundColor('#f1f2f1')
        } else {
            home.homeObj.ivEMfk9ulAFRBn22.setBackgroundColor('#202020')
        }
        ivEMfk9ulAFRBn22Show.value = true
    }, 3000);
}
nextTick(() => {
    getWindowInfo()
})
//? cardItem 动画的函数
// function cardItemFun(Spline: any) {
//     if (!home.temS) {
//         Spline.setBackgroundColor('#f1f1f1')
//     } else {
//         Spline.setBackgroundColor('#525252')
//     }
// }
// function yoZEKkDaaM4Bf0Lc(Spline: any) {
//     home.homeObj.yoZEKkDaaM4Bf0Lc = Spline
//     cardItemFun(Spline)
//     getWindowInfo()
// }
// function YFmYddqszej3kVrS(Spline: any) {
//     home.homeObj.YFmYddqszej3kVrS = Spline
//     cardItemFun(Spline)
//     getWindowInfo()
// }
// function SgyiTMMFrboWvNt2(Spline: any) {
//     home.homeObj.SgyiTMMFrboWvNt2 = Spline
//     cardItemFun(Spline)
//     getWindowInfo()
// }
// function k4JRyXh7Gy1jhj(Spline: any) {
//     home.homeObj.k4JRyXh7Gy1jhj = Spline
//     cardItemFun(Spline)
//     getWindowInfo()
// }
const cardyoZEKkDaaM4Bf0Lc = ref({ offsetWidth: Number }) // cardItem 动画的dom
// const cardyozeArr = [ // cardItem 动画的id
//     'yoZEKkDaaM4Bf0Lc',
//     'YFmYddqszej3kVrS',
//     'SgyiTMMFrboWvNt2',
//     'k4JRyXh7Gy1jhj',
// ]
const cardYozH = ref()
//? cardItem 动画的函数
const getWindowInfo = () => {
    const width = cardyoZEKkDaaM4Bf0Lc.value.offsetWidth
    cardYozH.value = width + 'px'
    // cardyozeArr.forEach((item) => {
    //     document.getElementById(item)!.style.width = width + 'px'
    //     document.getElementById(item)!.style.borderRadius = '25px'
    //     document.getElementById(item)!.style.height = width + 'px'
    // })
};
let resize = window.addEventListener('resize', getWindowInfo); // 监听窗口大小变化
// 页面加载解析完成后执行
</script>
<script lang="ts">
export default { name: "Home" }
</script>

<template>
    <div class="home">
        <!--小球轨道动画 -->
        <div class="ivEMfk9ulAFRBn22">
            <!-- 主题蒙版 -->
            <div :class="[home.temS ? 'nav-theme-dark' : 'nav-theme-light']"></div>
            <!-- 通过引入的动画部分 -->
            <Lottie v-if="!ivEMfk9ulAFRBn22Show"></Lottie>
            <div v-show="ivEMfk9ulAFRBn22Show">
                <Spline id="ivEMfk9ulAFRBn22" @spline-loaded="loaded"
                    scene="https://prod.spline.design/ivEMfk9ulAFRBn22/scene.splinecode" />
            </div>
            <!-- 文字部分 -->
            <div class="ivEMfk9ulAFRBn22-text">
                <div class="ivEMfk9ulAFRBn22-text-title">Welcome To Utility</div>
                <div class="ivEMfk9ulAFRBn22-text-subtitle">尤特网是一个由社区和个体驱动的非盈利组织</div>
                <div class="ivEMfk9ulAFRBn22-text-subtitle">构建划时代的并行计算网络</div>
                <div class="ivEMfk9ulAFRBn22-text-subtitle">用于支撑人工智能超大模型如GPT和BERT等的训练和推理</div>
            </div>
        </div>
        <!--小球轨道动画 -->
        <div class="container">
            <div class="card">
                <div class="card-title">How to start</div>
                <div class="card-body-one">
                    <div ref="cardyoZEKkDaaM4Bf0Lc" :class="['card-item', home.temS ? 'dark' : '']"
                        :style="{ height: cardYozH }">
                        <div class="card-item-text">
                            <div class="card-item-text-title">选择钱包</div>
                            <div class="card-item-text-subtitle">你可以通过钱包</div>
                            <div class="card-item-text-subtitle">链接尤特网并管理资金</div>
                        </div>
                        <img :src="imgUrl[0]" loading="eager" alt="" v-show="home.temS">
                        <img :src="imgUrl[1]" loading="eager" v-show="!home.temS" alt="">
                        <!-- <Spline id="yoZEKkDaaM4Bf0Lc" @spline-loaded="yoZEKkDaaM4Bf0Lc" scene="https://prod.spline.design/yoZEKkDaaM4Bf0Lc/scene.splinecode" /> -->
                    </div>
                    <div :class="['card-item', home.temS ? 'dark' : '']" :style="{ height: cardYozH }">
                        <div class="card-item-text">
                            <div class="card-item-text-title">获取UNC</div>
                            <div class="card-item-text-subtitle">尤特是尤特网的货币</div>
                            <div class="card-item-text-subtitle">你可以部署训练</div>
                            <div class="card-item-text-subtitle">和AI应用时使用它</div>
                        </div>
                        <img :src="imgUrl[2]" loading="eager" alt="" v-show="home.temS">
                        <img :src="imgUrl[3]" loading="eager" v-show="!home.temS" alt="">
                        <!-- <Spline id="YFmYddqszej3kVrS" @spline-loaded="YFmYddqszej3kVrS" scene="https://prod.spline.design/YFmYddqszej3kVrS/scene.splinecode" /> -->
                    </div>
                    <div :class="['card-item', home.temS ? 'dark' : '']" :style="{ height: cardYozH }">
                        <div class="card-item-text">
                            <div class="card-item-text-title">参与mining</div>
                            <div class="card-item-text-subtitle">挖去UNC</div>
                            <div class="card-item-text-subtitle">提供算力支持</div>
                            <div class="card-item-text-subtitle">平衡整个网络共识</div>
                            <div class="card-item-text-subtitle">获取激励</div>
                        </div>
                        <img :src="imgUrl[4]" loading="eager" alt="" v-show="home.temS">
                        <img :src="imgUrl[5]" loading="eager" v-show="!home.temS" alt="">
                        <!-- <Spline id="SgyiTMMFrboWvNt2" @spline-loaded="SgyiTMMFrboWvNt2" scene="https://prod.spline.design/SgyiTMMFrboWvNt2/scene.splinecode" /> -->
                    </div>
                    <div :class="['card-item', home.temS ? 'dark' : '']" :style="{ height: cardYozH }">
                        <div class="card-item-text">
                            <div class="card-item-text-title">开始构建</div>
                            <div class="card-item-text-subtitle">在尤特网内使用pytorch/tensorflow</div>
                            <div class="card-item-text-subtitle">开发并部署去中心模型</div>
                            <div class="card-item-text-subtitle">我们有文档与教程可供参考</div>
                            <div class="card-item-text-subtitle">也可以在社区门户中看更多信息</div>
                        </div>
                        <img :src="imgUrl[6]" loading="eager" alt="" v-show="home.temS">
                        <img :src="imgUrl[7]" loading="eager" v-show="!home.temS" alt="">
                        <!-- <Spline id="k4JRyXh7Gy1jhj" @spline-loaded="k4JRyXh7Gy1jhj" scene="https://prod.spline.design/0k4JRyXh-7Gy1jhj/scene.splinecode" /> -->
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-title">More about Utility</div>
                <div class="card-body-two">
                    <div class="card-item-two" :style="{ height: cardYozH }">
                        <div class="card-item-two-text">
                            <div class="card-item-two-text-title">什么是尤特？</div>
                            <div class="card-item-two-text-subtitle">
                                尤特是面向并行计算处理器建立的全球化去中心超级计算网络，人工智能时代的分散算力已经不能集中解决大模型大规模训练任务，同时为大模型提供推理服务也是弹性计算的内在要求</div>
                        </div>
                        <img :src="imgUrl[8]" loading="eager" alt="" style="object-position:right;">
                    </div>
                    <div class="card-item-two" :style="{ height: cardYozH }">
                        <div class="card-item-two-text right">
                            <div class="card-item-two-text-title">更合理的资产配置</div>
                            <div class="card-item-two-text-subtitle">
                                通过参与尤特网络的算力建设，来获取尤特币的激励，尤特币可以支付交易手续费、训练开销、推理开销</div>
                        </div>
                        <img :src="imgUrl[9]" loading="eager" alt="" style="object-position: left;">
                    </div>
                    <div class="card-item-two" :style="{ height: cardYozH }">
                        <div class="card-item-two-text">
                            <div class="card-item-two-text-title">面向服务能力的基础设施</div>
                            <div class="card-item-two-text-subtitle">
                                通过尤特网的服务，能够让数以万计的企业拥有同一超级计算资源的起跑线，将人工智能的基石：算力和数据分配给全人类的事业</div>
                        </div>
                        <img :src="imgUrl[10]" loading="eager" alt="" style="object-position: right;">
                    </div>
                    <div class="card-item-two" :style="{ height: cardYozH }">
                        <div class="card-item-two-text right">
                            <div class="card-item-two-text-title">开放式、零成本的网络</div>
                            <div class="card-item-two-text-subtitle">
                                任何人，哪怕是刚接触区块链的用户，也可以使用尤特网的服务来获取人工智能的便利，问答、生成图片、智能管家、早餐清单、学习助手</div>
                        </div>
                        <img :src="imgUrl[11]" loading="eager" alt="" style="object-position: left;">
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-title">Utility Today</div>
                <div class="card-body-three">
                    <div class="card-item-three" :style="{ height: cardYozH }">
                        <div class="card-item-three-text">
                            <div class="top">UNC Price
                                <div class="top_right">
                                    <span>30d</span>
                                    <span>90d</span>
                                </div>
                            </div>
                            <div class="bom">
                                <div class="left">$1,920</div>
                                <div class="right">
                                    <span>30d</span>
                                    <span>90d</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-item-three" :style="{ height: cardYozH }">
                        <div class="card-item-three-text">
                            <div class="top">今日交易量
                                <div class="top_right">
                                    <span>30d</span>
                                    <span>90d</span>
                                </div>
                            </div>
                            <div class="bom">
                                <div class="left">1.23M</div>
                                <div class="right">
                                    <span>30d</span>
                                    <span>90d</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-item-three" :style="{ height: cardYozH }">
                        <div class="card-item-three-text">
                            <div class="top">Value Locked in Defi (USD)
                                <div class="top_right">
                                    <span>30d</span>
                                    <span>90d</span>
                                </div>
                            </div>
                            <div class="bom">
                                <div class="left">$21.5B</div>
                                <div class="right">
                                    <span>30d</span>
                                    <span>90d</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-item-three" :style="{ height: cardYozH }">
                        <div class="card-item-three-text">
                            <div class="top">Nodes
                                <div class="top_right">
                                    <span>30d</span>
                                    <span>90d</span>
                                </div>
                            </div>
                            <div class="bom">
                                <div class="left">189234</div>
                                <div class="right">
                                    <span>30d</span>
                                    <span>90d</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-title">Explore</div>
                <div class="card-body-four">
                    <div class="card-body-four-item">
                        <div class="four-item-title">
                            学习并提升尤特知识和技能
                        </div>
                        <div class="card-item-four" :style="{ height: cardYozH }">
                            <img :src="imgUrl[12]" loading="eager" alt="">
                        </div>
                    </div>
                    <div class="card-body-four-item">
                        <div class="four-item-title">
                            部署和训练属于自己的AI
                        </div>
                        <div class="card-item-four" :style="{ height: cardYozH }">
                            <img :src="imgUrl[13]" loading="eager" alt="">
                        </div>
                    </div>
                    <div class="card-body-four-item">
                        <div class="four-item-title">
                            尤特社区
                        </div>
                        <div class="card-item-four" :style="{ height: cardYozH }">
                            <img :src="imgUrl[14]" loading="eager" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-title">Contribute</div>
                <div class="card-body-two">
                    <div class="card-item-two" :style="{ height: cardYozH }">
                        <div class="card-item-two-text">
                            <div class="card-item-two-text-subtitle">
                                这个网站是开源的，有数百个社区贡献者。您可以对这个网站上的任何内容提出编辑建议，建议出色的新功能，或者帮助我们排除错误。</div>
                            <div class="card-item-two-text-subtitle">
                                <div class="link_text">其他平台</div>
                                <div class="link_text">Github</div>
                            </div>
                        </div>
                        <img :src="imgUrl[15]" loading="eager" alt="" style="object-position: right;width: 500px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.home {
    min-height: 2000px;
    width: 100%;
    padding-bottom: 70px;

    .ivEMfk9ulAFRBn22 {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 635px;

        .nav-theme-light,
        .nav-theme-dark {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 635px;
            z-index: 998;
            pointer-events: none;

            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 500px;
                z-index: 998;
            }
        }

        .nav-theme-light {
            background: linear-gradient(0deg, rgba(217, 217, 217, 0) 0%, #bfffd294 100%);

            &::before {
                background: linear-gradient(180deg, #00000000 70%, #f2f3f2 100%);
            }
        }

        .nav-theme-dark {
            background: linear-gradient(0deg, #20202000 50%, #20202000 50%, #202020 100%);

            &::before {
                background: linear-gradient(180deg, #20202000 0%, #20202000 0%, #202020 100%);
            }
        }

        .ivEMfk9ulAFRBn22-text {
            padding: 0 10px;
            pointer-events: none;
            position: absolute;
            z-index: 998;
            bottom: 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: Manrope-Regular;

            .ivEMfk9ulAFRBn22-text-title {
                text-align: center;
                font-size: 40px;
                line-height: 48px;
                font-weight: 600;
                margin-bottom: 20px;
            }

            .ivEMfk9ulAFRBn22-text-subtitle {
                text-align: center;
                font-size: 20px;
                line-height: 24px;
                font-weight: 400;
                margin-bottom: 10px;
            }
        }
    }

    .container {
        padding: 0 30px;
        width: 100%;

        .card {
            width: 100%;
            margin-top: 70px;
            height: 100%;

            .card-title {
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
                text-align: center;
                font-family: Manrope-Bold;
            }

            .card-body-one {
                height: 100%;
                padding-top: 25px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;


                .card-item {
                    position: relative;
                    background: #f1f1f1;
                    border-radius: 25px;
                    max-width: 576px;
                    width: 100%;
                    margin-bottom: 30px;
                    filter: drop-shadow(-2px -2px 6px rgba(0, 0, 0, 0.12)) drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.12));

                    &:nth-child(2n) {
                        margin-left: 80px;
                    }

                    .card-item-text {
                        top: 0;
                        left: 0;
                        position: absolute;
                        padding-left: 30px;
                        display: flex;
                        font-family: Manrope-Regular;
                        flex-direction: column;
                        justify-content: center;
                        height: 100%;
                        width: 50%;

                        .card-item-text-title {
                            font-weight: 400;
                            font-size: 24px;
                            line-height: 29px;
                            margin-bottom: 20px;
                        }

                        .card-item-text-subtitle {
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 150%;
                            white-space: nowrap;
                        }
                    }

                    img {
                        border-radius: 25px;
                    }
                }

                .dark {
                    background: #525252 !important;
                }
            }

            .card-body-two {
                position: relative;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .card-item-two {
                    position: relative;
                    margin-top: 25px;
                    border-radius: 25px;
                    background: #222869;
                    filter: drop-shadow(-2px -2px 6px rgba(0, 0, 0, 0.12)) drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.12));
                    max-height: 366px;
                    max-width: 1226px;
                    width: 100%;
                    text-align: right;

                    img {
                        height: 100%;
                        border-radius: 25px;
                        object-fit: cover;
                    }

                    .right {
                        right: 0;
                    }

                    .card-item-two-text {
                        color: white;
                        border-radius: 25px;
                        position: absolute;
                        top: 0;
                        padding: 50px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        width: 50%;
                        font-family: Manrope-Regular;

                        .card-item-two-text-title {
                            font-weight: 400;
                            font-size: 24px;
                            line-height: 29px;
                            margin-bottom: 20px;
                        }

                        .card-item-two-text-subtitle {
                            text-align: center;
                            font-weight: 400;
                            font-size: 16px;
                            line-height: 150%;
                            display: flex;
                            gap: 35px;

                            .link_text {
                                margin-top: 20px;
                                text-decoration: none;
                                font-weight: 600;
                                margin-left: 5px;
                                text-decoration-line: underline;
                            }
                        }


                    }
                }
            }

            .card-body-three {
                padding-top: 25px;
                height: 100%;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 25px;

                .card-item-three {
                    position: relative;
                    border-radius: 25px;
                    background: white;
                    filter: drop-shadow(-2px -2px 6px rgba(0, 0, 0, 0.12)) drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.12));
                    max-height: 340px;
                    max-width: 620px;
                    width: 100%;

                    .card-item-three-text {
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        color: black;
                        padding: 30px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        font-family: Manrope-Regular;

                        .top {
                            font-weight: 700;
                            font-size: 24px;
                            line-height: 29px;
                        }

                        .top_right {
                            margin-top: 20px;
                            display: none;
                            filter: drop-shadow(-2px -2px 12px rgba(0, 0, 0, 0.12)) drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.12));

                            span {
                                font-weight: 400;
                                font-size: 24px;
                                line-height: 29px;
                                display: block;
                                padding: 10px 20px;

                                &:nth-child(1) {
                                    background-color: #fff;
                                }

                                &:nth-child(2) {
                                    background-color: #5D6BB2;
                                }
                            }
                        }

                        .bom {
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;

                            .left {
                                font-weight: 700;
                                font-size: 64px;
                                line-height: 77px;
                            }

                            .right {
                                display: flex;
                                filter: drop-shadow(-2px -2px 12px rgba(0, 0, 0, 0.12)) drop-shadow(2px 2px 12px rgba(0, 0, 0, 0.12));

                                span {
                                    font-weight: 400;
                                    font-size: 24px;
                                    line-height: 29px;
                                    display: block;
                                    padding: 10px 20px;

                                    &:nth-child(1) {
                                        background-color: #fff;
                                    }

                                    &:nth-child(2) {
                                        background-color: #5D6BB2;
                                    }
                                }
                            }
                        }
                    }

                    &::before {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 55%;
                        border-radius: 25px;
                        background: linear-gradient(180deg, #5D6BB2 0%, rgba(223, 226, 240, 0.54) 100%);
                        z-index: -2;
                    }

                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 25px;
                        background-image: url('@/assets/images/blx.png');
                        background-repeat: no-repeat;
                        background-size: 100%;
                        background-position: center;
                        z-index: -1;
                    }
                }
            }

            .card-body-four {
                padding-top: 25px;
                height: 100%;
                width: 100%;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 50px;

                .card-body-four-item {
                    max-width: 372px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;

                    .four-item-title {
                        font-weight: 400;
                        font-size: 24px;
                        line-height: 29px;
                        text-align: center;
                        font-family: Manrope-Bold;
                        margin-bottom: 20px;
                    }

                    .card-item-four {
                        border-radius: 25px;
                        background: #232966;
                        filter: drop-shadow(-2px -2px 6px rgba(0, 0, 0, 0.12)) drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.12));
                        max-height: 372px;
                        max-width: 372px;
                        width: 100%;

                        img {
                            border-radius: 25px;
                        }
                    }
                }
            }
        }
    }
}
</style>
