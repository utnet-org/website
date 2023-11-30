<script  setup lang="ts">

</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header_content">
        <div class="header_content_bg"></div>
        <div class="header_content_header">AI Model</div>
        <div class="header_content_button">
          <div class="header_content_button_one all">AI集市</div>
          <div class="header_content_button_two all">共享</div>
          <div class="header_content_button_three all">AI训练</div>
<!--          <div class="header_content_button_four all">COIWN </div>-->
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        About Us
      </div>
      <div class="section_text">
        我们打造了一个前沿且庞大的AI模型市场，旨在为用户提供一个平台，让他们不仅能分享和发布自己的AI模型，还能利用市场上的多样化模型进行AI相关的活动和研究。
        我们的团队深信，通过打破技术壁垒和促进知识共享，可以加速AI技术的发展和应用。我们致力于建设一个包容、创新的社区，让每一个对AI技术有兴趣的个体都能在这个平台上找到所需的资源，从而推动整个AI行业的进步。
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        Key Features
      </div>
      <div class="section_text">
        模型共享：用户可以发布自己的AI模型，与全球范围内的用户和研究者分享。
        模型使用：市场上拥有丰富多样的AI模型，用户可以根据自己的需求选择和使用这些模型。
        算力租赁：为了支持AI训练和运算，用户可以在Utility网络上租赁所需的算力资源。
        创新支持：项目鼓励创新和实验，支持用户在AI领域的探索和发展。
        AI Model项目不仅是一个模型市场，更是一个促进AI技术发展和应用的创新平台。
      </div>
      <div class="text_img">
        <img  alt="" src="@/assets/images/mp_ai_ong01.png">
      </div>
      <div class="text_img">
        <img  alt="" src="@/assets/images/mp_ai_ong02.png">
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
          background: url('@/assets/images/mp_model_logo.png') no-repeat;
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
