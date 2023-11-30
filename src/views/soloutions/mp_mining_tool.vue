<script  setup lang="ts">

</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header_content">
        <div class="header_content_bg"></div>
        <div class="header_content_header">Mining Tool</div>
        <div class="header_content_button">
          <div class="header_content_button_one all">算力管理</div>
          <div class="header_content_button_two all">机器运维</div>
          <div class="header_content_button_three all">租赁透明化</div>
<!--          <div class="header_content_button_four all">COIWN </div>-->
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        About Us
      </div>
      <div class="section_text">
        Mining Tool项目专注于为Utility网络的矿工提供一站式的算力管理解决方案。
        我们的团队由经验丰富的开发者和区块链专家组成，致力于打造一个高效、可靠、易于操作的矿工工具。通过集成最先进的技术和用户友好的界面，我们旨在简化矿工的日常运维任务，提高他们对算力资源的管理效率。
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        Key Features
      </div>
      <div class="section_text">
        Mining Tool为Utility网络矿工提供了全面的算力管理解决方案。这款工具能够实现算力的集群调度，让矿工有效分配和管理大量算力资源。
        工具中的实时监控系统使矿工能够随时了解机器运行状况，及时处理任何问题，保证稳定运行。通过清晰的界面展示，矿工可以轻松查看当前出租和闲置的算力，优化资源配置。还包含机器状态监控功能，帮助矿工监测和维护矿机的健康状况。
        租赁日志功能则为矿工提供了详细的租赁记录，简化了算力出租过程。网络状态监控保证矿工的网络连接始终处于最佳状态，确保稳定的挖矿活动。Mining Tool通过这些综合功能，极大地提升了矿工管理和优化算力资源的能力。
      </div>
      <div class="text_img">
        <img  alt="" src="@/assets/images/mp_min_ong01.png">
      </div>
      <div class="text_img">
        <img  alt="" src="@/assets/images/mp_min_ong02.png">
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
          background: url('@/assets/images/mp_tool_logo.png') no-repeat;
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
