<script setup lang="ts" name="HomeNew">
import authorSvg from "@/assets/svgs/author.svg";
import { ref } from "vue";

// 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import { defineComponent } from "vue";
// 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import { Swiper, SwiperSlide } from "swiper/vue";
// 单独导入所需的Swiper模块
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Scrollbar,
} from "swiper/modules";
// 导入Swiper的样式
import "swiper/swiper-bundle.css";
import "swiper/less";

//下面的link_arr是底部的链接，可以根据需要添加或者删除
const link_arr = ref([
  {
    name: "Website",
    link: "https://polygon.technology/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/0xPolygonLabs",
  },
  {
    name: "Developer Twitter",
    link: "https://twitter.com/0xPolygonDevs",
  },
  {
    name: "Forum",
    link: "https://forum.polygon.technology/",
  },
  {
    name: "Telegram",
    link: "https://t.me/polygonofficial",
  },
  {
    name: "Reddit",
    link: "https://www.reddit.com/r/0xPolygon/",
  },
  {
    name: "Discord",
    link: "https://discord.gg/XvpHAxZ",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/0xpolygon/",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/0xpolygon.Technology",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/company/13449964/",
  },
]);

// & 轮播图数据
const merryGoRound_arr = ref([
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
  {
    img: "/src/assets/images/Carousel_map.png",
    time: "September 21, 2023",
    title: "Arithmetic demand explodes on wave of big AI models!",
    text: "Read an exclusive interview between Valérie Whitacre, Head of Art at Trilitech, Madeleine Pierpont of MoMA and Sean Moss-Pultz of Bitmark to learn more about the Unsupervised by Refik Anadol.",
    isswiperenter: false,
    isBorder: false,
  },
]);
const mySwiper = ref(); // swiper实例
const indexNum = ref(0); // 当前活动swiper的索引

// & 轮播图 在modules加入要使用的模块
const modules = [Autoplay, Pagination, Navigation, Scrollbar];
// & 轮播图 更改当前活动swiper
const onSlideChange = (swiper: { activeIndex: any }) => {
  // & 轮播图 确定当前活动swiper的索引，方便阴影的显示
  indexNum.value = swiper.activeIndex;
  console.log("swiper.activeIndex", swiper.activeIndex);
};

// & 轮播图 swiper的配置左右的箭头
const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});
</script>

<template>
  <div class="news">
    <div class="container">
      <!-- ! 文章模块 -->
      <div class="article">
        <!--  ! 这里是文章的时间 -->
        <div class="time">19.12.2023</div>
        <!-- ! Originals -->
        <div class="Originals">
          <div class="line"></div>
          <div class="Originals_text">ORIGINALS</div>
        </div>
        <!-- ! 21X ESMA-Regulated -->
        <div class="X_title">
          21X ESMA-Regulated Market for Security Tokens Is Coming to Polygon PoS
        </div>
        <!-- ! 21.finance -->
        <div class="finance">
          <a href="https://www.21x.eu/" target="_blank" class="highlight_H"
            >21.finance</a
          >, a European fintech developing pioneering blockchain-powered digital
          asset platforms regulated by the European Securities and Markets
          Authority (ESMA), is building market infrastructure for security
          tokens on Polygon PoS.
        </div>
        <!-- !图片，Utility 和 Edited by Terrill -->
        <div class="author">
          <div class="author_img">
            <authorSvg style="width: 100%; height: 100%" />
          </div>
          <div class="author_right">
            <div class="author_name">Utility Labs</div>
            <div class="author_text">Edited by Terrill</div>
          </div>
        </div>
        <!-- !文章的背景图 -->
        <div class="article_bgc">
          <img src="/src/assets/images/article_bgc.png" alt="" />
        </div>
        <!-- ! 文章内容 -->
        <div class="article_text_one">
          <p>
            <a href="https://www.21x.eu/" target="_blank" class="highlight"
              >21.finance</a
            >, a European fintech developing pioneering blockchain-powered
            digital asset platforms regulated by the<span
              style="color: #3edfcf"
            >
              European Securities</span
            >
            and Markets Authority (ESMA), is building market infrastructure for
            security tokens on Polygon PoS.
          </p>
          <p>
            21X will enable smart contract-based trading and settlement of
            tokenized stocks, bonds, and fund instruments. The order books of
            21X operating on Polygon PoS will unlock the full potential of
            blockchain technology by promoting disintermediation and
            decentralization in capital markets. The initiative, headquartered
            in Frankfurt, is currently undergoing regulatory assessment with
            national and international supervisors.
          </p>
          <p>
            Tokenized financial instruments, such as stocks, bonds, or funds,
            are key to unlocking the next wave of institutional adoption of
            blockchain technology with profound implications for the financial
            industry. Asset tokenization enables fractional ownership of
            high-value assets, promotes accessibility to financial instruments,
            facilitates the tradability of illiquid assets, and automates
            processes such as reporting, interest payments, and corporate
            actions.
          </p>
          <p>
            The Polygon ecosystem has emerged as a tokenization hub, with 21X as
            the latest in a line of European companies tapping into its low
            transaction costs, battle-tested security and vanishingly-small
            carbon footprint. The list of projects includes
            <a
              href="https://www.taurushq.com/blog/taurus-integrates-polygon-blockchain-enabling-banks-and-brands-to-issue-custody-any-tokenized-asset/"
              class="highlight"
              target="_blank"
              >Taurus</a
            >
            streamlining a process for over 25 banks like Credit Suisse and
            Deutsche Bank, euro-denominated bond tokenization by
            <a
              href="https://press.siemens.com/global/en/pressrelease/siemens-issues-first-digital-bond-blockchain"
              target="_blank"
              class="highlight"
              >Siemens</a
            >
            , and a digital green bond offering by
            <a
              href="https://cointelegraph.com/news/abn-amro-issues-5m-digital-green-bond-through-polygon-powered-tokeny"
              target="_blank"
              class="highlight"
            >
              ABN AMRO</a
            >.
          </p>
          <p>
            "With the technical expertise of the Polygon Labs team and the
            vibrant Polygon ecosystem in asset tokenization, we will enable
            tradability and liquidity for tokenized securities and foster
            institutional adoption of the Polygon protocols," said Max J.
            Heinzle, CEO, and founder of 21.finance.
            <a
              href="https://www.21x.eu/contact"
              target="_blank"
              class="highlight"
              >Pre-register
            </a>
            for 21X to join the capital markets revolution. Tune into the
            <a
              href="https://polygon.technology/blog"
              target="_blank"
              class="highlight"
              >blog</a
            >
            and our social channels to keep up with updates about the Polygon
            ecosystem.
          </p>
          <p>
            Together, we can build an equitable future for all through the mass
            adoption of Web3!
          </p>
        </div>
        <!--!文章底部的可以点击跳转的文字 -->
        <div class="link">
          <div class="link_list">
            <div
              class="link_list_item"
              v-for="(item, index) in link_arr"
              :key="index"
            >
              <a :href="item.link" target="_blank"
                >{{ item.name
                }}<span class="Vertical_line" v-if="index < link_arr.length - 1"
                  >|
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- ! 轮播图模块 -->
      <div class="Carousel_map">
        <!-- ! title -->
        <div class="title">More News from Utility</div>
        <!-- ! 两个按钮 -->
        <div class="swiper_button">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <!-- ! 轮播图 -->
        <swiper
          :ref="mySwiper"
          :slidesPerView="3"
          :spaceBetween="0"
          :modules="modules"
          :loop="false"
          :navigation="navigation"
          class="swiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in merryGoRound_arr"
            :key="index"
            class="swiper-slide"
            :class="indexNum === index - 1 ? 'centered-slide' : ''"
            @mouseenter="item.isswiperenter = true"
            @mouseleave="item.isswiperenter = false"
          >
            <!-- ! 图片右上角的箭头 -->
            <div v-if="item.isswiperenter" class="icon">
              <img src="/src/assets/svgs/Arrow_Up.svg" alt="" />
            </div>
            <img class="swiper_img" :src="item.img" alt="" />
            <div class="swiper_time">
              {{ item.time }}
            </div>
            <div class="swiper_title">
              {{ item.title }}
            </div>
            <div class="swiper_text">
              {{ item.text }}
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.news {
  width: 100%;
  background-color: #fffefb;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .article {
      width: 100%;
      padding: 146px 321px 0 321px;
      .time {
        color: rgba(21, 28, 26, 0.9);
        font-family: Lantinghei SC;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 114.286% */
        letter-spacing: 1.68px;
        margin-bottom: 12px;
      }
      .Originals {
        display: flex;
        margin-bottom: 26px;
        .line {
          width: 3px;
          height: 15px;
          flex-shrink: 0;
          background: #3edfcf;
          margin-right: 8px;
        }
        .Originals_text {
          color: rgba(21, 28, 26, 0.9);
          font-family: Lantinghei SC;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px; /* 133.333% */
          text-transform: uppercase;
        }
      }
      .X_title {
        margin-bottom: 40px;
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
        font-family: Lantinghei SC;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 53px; /* 165.625% */
      }
      .finance {
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 33px; /* 33px */
        .highlight_H {
          color: var(--Light-dark, rgba(21, 28, 26, 0.9));
          font-family: Inter;
          font-size: 22px;
          font-style: normal;
          font-weight: 300;
          line-height: 33px; /* 33px */
          text-decoration-line: underline;
          //线的宽度
          text-decoration-thickness: 1.5px; /* 设置下划线的粗细 */
          //线的颜色
          text-decoration-color: rgba(21, 28, 26, 0.5);
          &:hover {
            color: #3edfcf;
            text-decoration-color: #3edfcf;
          }
        }
      }
      .author {
        display: flex;
        align-items: center;
        margin-top: 66px;
        margin-bottom: 38px;
        .author_img {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          margin-right: 16px;
          border-radius: 50%;
          background-color: #fff;
        }
        .author_right {
          display: flex;
          flex-direction: column;
          .author_name {
            color: rgba(21, 28, 26, 0.9);
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
          .author_text {
            margin-top: 8px;
            color: rgba(21, 28, 26, 0.9);
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            opacity: 0.8;
          }
        }
      }
      .article_bgc {
        width: 100%;
        margin-bottom: 50px;
      }
      .highlight {
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.76px;
        text-decoration-line: underline;
        &:hover {
          color: #3edfcf;
        }
      }
      .article_text_one {
        color: var(--Light-dark, rgba(21, 28, 26, 0.9));
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 161%;
        padding-bottom: 16px;
        border-bottom: 1px solid rgba(21, 28, 26, 0.1);
        margin-bottom: 24px;
        p {
          margin-bottom: 32px;
        }
      }
      .link {
        .link_list {
          display: flex;
          flex-wrap: wrap;

          .link_list_item {
            a {
              color: #3edfcf;
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 300;
              line-height: 150%; /* 24px */
              text-decoration-line: underline;
            }
            .Vertical_line {
              margin-left: 5px;
              margin-right: 5px;
            }
          }
        }
      }
    }
    .Carousel_map {
      position: relative;
      width: 100%;
      height: 797px;
      margin-top: 132px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      padding: 0 230px;
      .title {
        margin-bottom: 51px;
        color: rgba(21, 28, 26, 0.9);
        text-align: center;
        font-family: Lantinghei SC;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      .swiper {
        width: 100%;
        position: relative;
        .swiper-slide {
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer; ///鼠标移上去变成手指
          padding: 0 35px;
          .swiper_img {
            border-radius: 8px;
            flex-shrink: 0;
          }
          .icon {
            position: absolute;
            top: 21px;
            right: 53px;
            width: 34px;
            height: 34px;
            flex-shrink: 0;
            border-radius: 50%;
            background-color: #000;

            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .swiper_time {
            color: #151c1a;
            font-family: Jaldi;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 21px; /* 21.825px */
            letter-spacing: 0.3px;
            opacity: 0.8;
            margin-top: 24px;
            margin-bottom: 3px;
          }
          .swiper_title {
            margin-bottom: 10px;
            color: #151c1a;
            font-family: Lantinghei SC;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 24.735px */
          }
          .swiper_text {
            color: #151c1a;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 21.42px; /* 21.42px */
          }
        }
        .centered-slide {
          border-left: 1px solid rgba(21, 28, 26, 0.1); /* 左边框 */
          border-right: 1px solid rgba(21, 28, 26, 0.1); /* 右边框 */
        }
      }
      /* 添加在Swiper中居中的项的边框 */

      .swiper_button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        width: 100px;
        top: 0px;
        right: 250px;
        .swiper-button-prev,
        .swiper-button-next {
          width: 36px;
          height: 36px;
          z-index: 100;
          border-radius: 50%;
          margin: 0;
          cursor: pointer; ///鼠标移上去变成手指
          background-color: rgba(21, 28, 26, 0.9) !important;
          color: #fff !important;
          font-size: 17px !important;
          opacity: 1 !important; /* 可以设置不透明度来表示禁用状态 */
        }
        .swiper-button-prev.swiper-button-disabled,
        .swiper-button-next.swiper-button-disabled {
          pointer-events: auto;
          background-color: #fff !important;
          border: 1px solid #000 !important;
          color: #000 !important;
          cursor: not-allowed !important;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 17px !important;
        }
      }
    }
  }
}
</style>
