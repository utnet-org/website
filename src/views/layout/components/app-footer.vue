<script lang="ts" setup name="AppFooter"></script>
<script lang="ts">
export default { name: "AppFooter" }
</script>

<template>
    <footer class="app_footer">
        <div class="container">
            <div class="socialize">
                <span>社交媒体</span>
                <div>
                    <i class="iconfont icon-tuite"></i>
                    <i class="iconfont icon-github"></i>
                    <i class="iconfont icon-Youtube"></i>
                    <i class="iconfont icon-weixin"></i>
                </div>
            </div>
            <div class="linktext">
                <div class="linktext-item">
                    <div class="linktext-item-title">使用Utility</div>
                    <div class="linktext-item-content">
                        <span>连接钱包</span>
                        <span>获取UNC</span>
                        <span>参与Mining</span>
                        <span>开始构建</span>
                    </div>
                </div>
                <div class="linktext-item">
                    <div class="linktext-item-title">学习Utility</div>
                    <div class="linktext-item-content">
                        <span>什么是尤特</span>
                        <span>合理的资产配置</span>
                        <span>面向服务能力的基础设施</span>
                        <span>开放式的网络</span>
                    </div>
                </div>
                <div class="linktext-item">
                    <div class="linktext-item-title">开发者</div>
                    <div class="linktext-item-content">
                        <span>开始</span>
                        <span>教程</span>
                        <span>搭建本地环境</span>
                    </div>
                </div>
                <div class="linktext-item">
                    <div class="linktext-item-title">社区</div>
                    <div class="linktext-item-content">
                        <span>论坛</span>
                        <span>帮助</span>
                    </div>
                </div>
                <div class="linktext-item">
                    <div class="linktext-item-title">关于我们</div>
                    <div class="linktext-item-content">
                        <span>服务协议</span>
                        <span>相关条款</span>
                    </div>
                </div>
            </div>
            <div class="socialize">
                <span class="bom">@ All Rights Reserved</span>
                <span class="bom">EntySquare Technology</span>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="less">
.app_footer {
    min-height: 446px;
    border-top: 1px solid #5D6BB2;
    font-family: Manrope-Regular;

    .container {
        height: 100%;
        padding: 35px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .linktext {
            padding: 80px 58px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 13px;

            .linktext-item {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;

                .linktext-item-title {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    cursor: pointer;
                }

                .linktext-item-content {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 24px;
                    opacity: 0.5;
                    display: flex;
                    flex-direction: column;

                    span {
                        margin-top: 15px;
                        cursor: pointer;
                    }
                }
            }
        }

        .socialize {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            span {
                font-family: Manrope-Regular;
                font-weight: 400;
                font-size: 24px;
                line-height: 29px;
            }

            div {
                display: flex;
                align-items: center;
                gap: 30px;

                .iconfont {
                    cursor: pointer;
                    opacity: 0.5;
                    font-size: 24px;

                    &:nth-child(3) {
                        font-size: 30px;
                    }
                }
            }

            .bom {
                text-align: center;
                word-wrap: normal;
                padding-bottom: 10px;
            }
        }
    }
}
</style>
