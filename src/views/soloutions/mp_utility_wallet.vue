<script  setup lang="ts">

</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header_content">
        <div class="header_content_bg"></div>
        <div class="header_content_header">Utility Wallet</div>
        <div class="header_content_button">
          <div class="header_content_button_one all">资产管理 </div>
          <div class="header_content_button_two all">多功能钱包 </div>
          <div class="header_content_button_three all">dapp互动 </div>
<!--          <div class="header_content_button_four all">COIWN </div>-->
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        About Us
      </div>
      <div class="section_text">
        Utility Wallet 是一款创新的区块链钱包，专为Utility链设计，提供全面的数字资产管理解决方案。它不仅包括一个易用的网页钱包插件，还有一个功能全面的App钱包。通过这款钱包，
        用户可以轻松转账、租赁算力、查看租赁订单，并与各种dapp进行互动。此外，Utility Wallet还内置了区块链浏览器，使用户能够实时查看交易和区块链活动。
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        Key Features
      </div>
      <div class="section_text">
        多功能钱包：结合网页插件和移动应用，提供灵活的资产管理。
        转账与算力租赁：用户可以轻松转账和租赁算力，管理租赁订单。
        dapp互动：与Utility dapp生态无缝连接，拓展区块链应用的可能性。
        区块链浏览器：内置浏览器让用户能够实时监控区块链活动，确保交易的透明度。
      </div>
      <div class="text_img">
        <img  alt="" src="@/assets/images/mp_wallet_ong.png">
      </div>
      <div class="text_img">
        <img  alt="" src="@/assets/images/mp_wallet_ong2.png">
      </div>
    </div>

  </div>
</template>
<style scoped lang="less">

@media (max-width: 834px) {
  .container {
    background-color: #FFFEFB;
    margin-bottom: 50px;
    .header {
      width: 100%;
      height: 380px;
      padding: 0 20px;
      background-size: cover;
      display: flex;
      justify-content: center;
      background: linear-gradient(250deg, #CDEAF1 5.3%, #FAFBFB 43.99%, #DEF2F3 100.09%);

      .header_content {
        width: 100%;
        flex-shrink: 0;
        //padding: 0 20px;
        margin: 120px 0 0;
        //border: 1px solid red;
        .header_content_bg{
          width: 100px;
          height: 100px;
          margin: 0 auto;
          background: url('@/assets/images/mp_wallet_logo.png') no-repeat;
        }

        .header_content_header{
          color: var(--Light-dark, rgba(21, 28, 26, 0.90));
          text-align: center;
          font-family: Lantinghei SC;
          font-size: 20px;
          font-style: normal;
          font-weight: bolder;
          line-height: normal;
          margin-top: 18px;
        }

        .header_content_button{
          display: flex;
          justify-content: space-around;
          margin-top: 26px;
          .all{
            display: flex;
            padding: 5px 14px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 20px;
            border: 1px solid #3EDFCF;
          }
          .all:hover{
            background: #3EDFCF;
          }
        }
      }
    }

    .section {
      //border: 1px solid red;
      padding: 0 20px;

      .section_title{
        color: var(--Light-dark, rgba(21, 28, 26, 0.90));
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 50px 0 14px;
      }

      .section_text{
        color: var(--Light-dark, rgba(21, 28, 26, 0.90));
        font-family: Lantinghei SC;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 181%; /* 25.34px */
        opacity: 0.8;
        text-align: left;
      }

      .text_img{
        width: 350px;
        height: 224px;
        flex-shrink: 0;
        border-radius: 8px;
        background: linear-gradient(177deg, #2D3231 -24.77%, rgba(45, 50, 49, 0.00) 97.53%);
        backdrop-filter: blur(4px);
        margin: 16px 0;
      }
    }
  }
}
</style>
