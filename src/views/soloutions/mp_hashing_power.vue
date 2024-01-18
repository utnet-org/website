<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="header">
      <div class="header_content">
        <div class="header_content_bg"></div>
        <div class="header_content_header">
          {{ $t("soloutions.core_system") }}
        </div>
        <div class="header_content_button">
          <div class="header_content_button_one all">
            {{ $t("soloutions.computing_power_rental_platform") }}
          </div>
          <div class="header_content_button_two all">
            {{ $t("soloutions.score") }}
          </div>
          <!--          <div class="header_content_button_three all">评分 </div>-->
          <div class="header_content_button_four all">
            {{ $t("soloutions.diversified_computing_power") }}
          </div>
          <div class="header_content_button_four all">
            {{ $t("soloutions.customized_configuration") }}
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        {{ $t("soloutions.about_us_title") }}
      </div>
      <div class="section_text">
        {{ $t("soloutions.core_system_about_us_text") }}
      </div>
    </div>
    <div class="section">
      <div class="section_title">
        {{ $t("soloutions.key_features_title") }}
      </div>
      <div class="section_text">
        {{ $t("soloutions.core_system_key_features_text") }}
      </div>
      <div class="text_img">
        <img
          alt=""
          src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/mp_core_ong01.png"
        />
      </div>
      <div class="text_img">
        <img
          alt=""
          src="https://entysquare.oss-cn-shenzhen.aliyuncs.com/unc/images/mp_core_ong02.png"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
@media (max-width: 834px) {
  .container {
    // background-color: #fffefb;
    margin-bottom: 50px;

    .header {
      width: 100%;
      height: 410px;
      padding: 0 20px;
      background-size: cover;
      display: flex;
      justify-content: center;
      background: var(--mp_ai_model-bgc-phone);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      .header_content {
        width: 100%;
        flex-shrink: 0;
        //padding: 0 20px;
        margin: 120px 0 0;

        //border: 1px solid red;
        .header_content_bg {
          width: 100px;
          height: 100px;
          margin: 0 auto;
          background: var(--mp_hashing_power-bgc-phone);
          background-size: cover;
        }

        .header_content_header {
          color: var(--where-text);
          text-align: center;
          font-family: Lantinghei SC;
          font-size: 20px;
          font-style: normal;
          font-weight: bolder;
          line-height: normal;
          margin-top: 18px;
        }

        .header_content_button {
          display: flex;
          justify-content: space-around;
          margin-top: 26px;
          flex-wrap: wrap;
          gap: 10px;

          //background: black;
          .all {
            display: flex;
            padding: 5px 14px;
            justify-content: center;
            align-items: center;
            gap: 10px;
            border-radius: 20px;
            border: 1px solid #3edfcf;
            color: var(--where-text);
          }

          // .all:hover {
          //   // background: #3EDFCF;
          // }
        }
      }
    }

    .section {
      //border: 1px solid red;
      padding: 0 20px;

      .section_title {
        color: var(--where-text);
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 50px 0 14px;
      }

      .section_text {
        color: var(--unc_token-main_text-color) !important;
        font-family: Lantinghei SC;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 181%;
        /* 25.34px */
        opacity: 0.8;
        text-align: left;
      }

      .text_img {
        // width: 350px;
        height: 224px;
        flex-shrink: 0;
        border-radius: 8px;
        background: linear-gradient(
          177deg,
          #2d3231 -24.77%,
          rgba(45, 50, 49, 0) 97.53%
        );
        backdrop-filter: blur(4px);
        margin: 16px 0;
      }
    }
  }
}
</style>
