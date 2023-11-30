<script  setup lang="ts">

</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header_content">
        <div class="header_content_bg"></div>
        <div class="header_content_header">Core System</div>
        <div class="header_content_button">
          <div class="header_content_button_one all">算力租赁平台 </div>
          <div class="header_content_button_two all"> 定制化配置</div>
<!--          <div class="header_content_button_three all">评分 </div>-->
          <div class="header_content_button_four all">多样化算力</div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        About Us
      </div>
      <div class="section_text">
        Core System是由Utility推出的创新算力租赁平台，专注于提供算力出租和购买服务。我们的团队由区块链和计算领域的专家组成，他们汇聚了广泛的技术知识和市场洞察，以满足市场对算力资源的多元化需求。在Core System中，
        我们致力于打造一个简单、高效且透明的平台，使用户能够轻松出租或购买算力。通过引入创新的评分系统和提供多种算力类型，我们旨在为用户提供最优质的服务和最适合的算力资源。
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        Key Features
      </div>
      <div class="section_text">
        Core System为用户提供了一系列核心特性，以优化算力租赁体验。平台支持算力的出租和购买，满足不同用户的需求。为了保证服务质量和透明度，
        引入了订单评分体系，每笔订单完成后，用户可以对服务进行评价，这不仅提升了服务提供者的质量，也帮助其他用户做出更明智的选择。
        平台提供了多种算力类型供用户租用，从而适应不同的计算需求和预算限制。不论是进行大规模数据处理还是复杂的AI训练，用户都能在Core System中找到合适的算力资源。此外，平台还提供了定制化配置服务，使用户能够根据自己的具体需求，
        定制想要租用的算力配置。这种灵活性和个性化的服务使Core System成为了一个满足各种计算需求的理想平台，无论用户是初创企业、研究机构还是个人开发者，都能在这里找到所需的算力资源。
      </div>
      <div class="text_img">
        <img  alt="" src="@/assets/images/mp_core_ong01.png">
      </div>
      <div class="text_img">
        <img  alt="" src="@/assets/images/mp_core_ong02.png">
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
          background: url('@/assets/images/mp_power_logo.png') no-repeat;
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
          flex-wrap: wrap;
          gap: 10px;
          //background: black;
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
