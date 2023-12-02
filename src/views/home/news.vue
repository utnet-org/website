<script setup lang="ts" name="HomeNew">
import authorSvg from "@/assets/svgs/author.svg";
import { computed, onMounted, onUnmounted, ref } from "vue";

// 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import { defineComponent } from "vue";
// 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import { Swiper, SwiperSlide } from "swiper/vue";
// 单独导入所需的Swiper模块
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Scrollbar,
} from "swiper/modules";
// 导入Swiper的样式
import "swiper/swiper-bundle.css";
import "swiper/less";

import "swiper/css/pagination"; // 轮播图底面的小圆点
// 引入Pagination模块

import SwiperCore from "swiper";

SwiperCore.use([Pagination]);

import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const router = useRouter();
const articleId = Number(route.query.msg);
const selectedArticle = computed(() =>
  news_arr.value.find((article) => article.id === articleId)
);

const jumpNews = (id: number) => {
  router.push({
    path: "/news",
    query: {
      msg: id,
    },
  });
};

//TODO 保留 下面的link_arr是底部的链接，可以根据需要添加或者删除
const link_arr = ref([
  //   {
  //     name: "Website",
  //     link: "https://polygon.technology/",
  //   },
  //   {
  //     name: "Twitter",
  //     link: "https://twitter.com/0xPolygonLabs",
  //   },
  //   {
  //     name: "Developer Twitter",
  //     link: "https://twitter.com/0xPolygonDevs",
  //   },
  //   {
  //     name: "Forum",
  //     link: "https://forum.polygon.technology/",
  //   },
  //   {
  //     name: "Telegram",
  //     link: "https://t.me/polygonofficial",
  //   },
  //   {
  //     name: "Reddit",
  //     link: "https://www.reddit.com/r/0xPolygon/",
  //   },
  //   {
  //     name: "Discord",
  //     link: "https://discord.gg/XvpHAxZ",
  //   },
  //   {
  //     name: "Instagram",
  //     link: "https://www.instagram.com/0xpolygon/",
  //   },
  //   {
  //     name: "Facebook",
  //     link: "https://www.facebook.com/0xpolygon.Technology",
  //   },
  //   {
  //     name: "LinkedIn",
  //     link: "https://linkedin.com/company/13449964/",
  //   },
]);

// & 轮播图数据
const merryGoRound_arr = ref([
  {
    id: 0,
    img: "/src/assets/images/article_bgc_two.png",
    time: "September 21, 2023",
    title: "Calculate demand analysis and the next tuyere",
    isswiperenter: false,
  },
  {
    id: 1,
    img: "/src/assets/images/article_bgc_two.png",
    time: "September 21, 2023",
    title: "Calculate demand analysis and the next tuyere",
    isswiperenter: false,
  },
  {
    id: 2,
    img: "/src/assets/images/article_bgc_three.png",
    time: "September 21, 2023",
    title: "Decentralized computing power equals edge computing",
    isswiperenter: false,
  },
  {
    id: 3,
    img: "/src/assets/images/article_bgc_four.png",
    time: "September 21, 2023",
    title: "An encrypted world without wasted computing power",
    isswiperenter: false,
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

// 创建响应式引用，用于存储窗口宽度和高度
const windowWidth = ref(window.innerWidth);
// 更新窗口尺寸的函数
const updateWindowSize = () => {
  windowWidth.value = window.innerWidth;
};

// 当组件挂载时设置监听器，并在卸载时移除
onMounted(() => {
  console.log("  onMounted: ", Number(route.query.msg));
  news_arr.value.find((article) => article.id === Number(route.query.msg));

  // const selectedArticle = ref(computed(() =>
  //     news_arr.value.find((article) => article.id === articleId)
  // ));
  // selectedArticle = computed(() =>
  //     news_arr.value.find((article) => article.id === articleId)
  // );
  window.addEventListener("resize", updateWindowSize);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowSize);
});
// 根据articleId查找对应的文章
const news_arr = ref([
  {
    id: 0,
    X_title: "Calculate demand analysis and the next tuyere",
    article_bgc: "/src/assets/images/article_bgc_two.png",
    content: `<p>
      Computing demand refers to the need to use computers and related technologies to process, analyze, predict, and optimize data in various fields. Computing needs can involve large amounts of data, requiring the use of computers and related technologies for efficient processing and analysis in order to better understand the data and make better decisions.
Computing has a wide range of uses. In scientific research, computing helps researchers process and analyze large amounts of data to better understand and explain phenomena. In engineering, computing can be used to simulate and optimize various systems and processes in order to better design and improve products. In the business world, computing can be used to analyze market and customer data to better understand customer needs and market trends to make better business decisions. In the medical field, computing can be used to analyze patient data to better diagnose disease and develop treatment options.
          </p>
          <p>
            In today's information age, computing needs have become an integral part of every industry. Whether it is scientific research, engineering design, business decisions or medical diagnosis, computing needs play a vital role.
          </p>
          <p>
            How to seize the next trend?
          </p>
          <p>
            In recent years, with the development of artificial intelligence technology, we are entering a new era. At the current stage, with the rise of large artificial intelligence models, the demand for artificial intelligence computing power has become more urgent. Therefore, the era of artificial intelligence computing market with huge business opportunities has begun. So how can we, as ordinary people, get a share of the current wealth trend?
          </p>
          <p>
            We all know that large deep learning models, such as GPT-4, BERT, etc., have billions or even tens of billions of parameters and require huge computing resources for training and inference. The training process of these large models requires a large amount of data and computing power, and the inference stage requires efficient computing resources to handle complex inference tasks.          </p>
          <p>
            In response to the rise of large artificial intelligence models, cloud computing service providers and data center operators continue to improve their computing capabilities and launch customized solutions for large-scale deep learning models to meet the needs of different industries and scenarios. At the same time, the demand for AI computing power has also spawned a number of new start-up companies, focusing on the optimization, distribution and management of AI computing power, providing new impetus for the development of the artificial intelligence industry. For example, we have recently paid attention to UtilityNet, a public chain platform that provides globally distributed computing power leasing and scheduling services. Its PoCI consensus mechanism is a new consensus mechanism that is different from the traditional proof-of-work consensus mechanism.
          </p>
          <p>
            The traditional proof-of-work consensus mechanism requires nodes to prove their contribution to the blockchain by solving mathematical problems of a certain degree of difficulty, thereby obtaining accounting rights. There are some problems with this mechanism, such as excessive energy consumption and concentration of computing power. The PoCI consensus mechanism proves the node's contribution to the blockchain by verifying the computing tasks submitted by the node. This mechanism can better utilize distributed computing power, reduce energy consumption, and avoid problems such as concentration of computing power.
          </p>
          <p>
            On the UtilityNet platform, users can rent out their idle computing power and earn profits. At the same time, users can also rent computing power from the platform to complete their own computing tasks. In this way, users can utilize computing resources more efficiently, reduce computing costs, and improve computing efficiency.
          </p>
          <p>
            In general, the UtilityNet platform provides a new computing power leasing and scheduling service. Its PoCI consensus mechanism can better utilize distributed computing power, reduce computing costs, and improve computing efficiency. This kind of service is expected to occupy a place in the future artificial intelligence computing market.
          </p>
          <p>
            Through distributed computing power layout, it can better meet the artificial intelligence computing needs of different regions, different industries, and different scales, and promote the widespread application of artificial intelligence technology. In the future, the resource layout of distributed AI computing power will bring new opportunities and challenges to the development of artificial intelligence technology, promote the in-depth application of artificial intelligence technology in various fields, and have a profound impact on the development of the next era.
          </p>
          `,
  },
  {
    id: 1,
    X_title: "Calculate demand analysis and the next tuyere",
    article_bgc: "/src/assets/images/article_bgc_two.png",
    content: `<p>
      Computing demand refers to the need to use computers and related technologies to process, analyze, predict, and optimize data in various fields. Computing needs can involve large amounts of data, requiring the use of computers and related technologies for efficient processing and analysis in order to better understand the data and make better decisions.
Computing has a wide range of uses. In scientific research, computing helps researchers process and analyze large amounts of data to better understand and explain phenomena. In engineering, computing can be used to simulate and optimize various systems and processes in order to better design and improve products. In the business world, computing can be used to analyze market and customer data to better understand customer needs and market trends to make better business decisions. In the medical field, computing can be used to analyze patient data to better diagnose disease and develop treatment options.
          </p>
          <p>
            In today's information age, computing needs have become an integral part of every industry. Whether it is scientific research, engineering design, business decisions or medical diagnosis, computing needs play a vital role.
          </p>
          <p>
            How to seize the next trend?
          </p>
          <p>
            In recent years, with the development of artificial intelligence technology, we are entering a new era. At the current stage, with the rise of large artificial intelligence models, the demand for artificial intelligence computing power has become more urgent. Therefore, the era of artificial intelligence computing market with huge business opportunities has begun. So how can we, as ordinary people, get a share of the current wealth trend?
          </p>
          <p>
            We all know that large deep learning models, such as GPT-4, BERT, etc., have billions or even tens of billions of parameters and require huge computing resources for training and inference. The training process of these large models requires a large amount of data and computing power, and the inference stage requires efficient computing resources to handle complex inference tasks.          </p>
          <p>
            In response to the rise of large artificial intelligence models, cloud computing service providers and data center operators continue to improve their computing capabilities and launch customized solutions for large-scale deep learning models to meet the needs of different industries and scenarios. At the same time, the demand for AI computing power has also spawned a number of new start-up companies, focusing on the optimization, distribution and management of AI computing power, providing new impetus for the development of the artificial intelligence industry. For example, we have recently paid attention to UtilityNet, a public chain platform that provides globally distributed computing power leasing and scheduling services. Its PoCI consensus mechanism is a new consensus mechanism that is different from the traditional proof-of-work consensus mechanism.
          </p>
          <p>
            The traditional proof-of-work consensus mechanism requires nodes to prove their contribution to the blockchain by solving mathematical problems of a certain degree of difficulty, thereby obtaining accounting rights. There are some problems with this mechanism, such as excessive energy consumption and concentration of computing power. The PoCI consensus mechanism proves the node's contribution to the blockchain by verifying the computing tasks submitted by the node. This mechanism can better utilize distributed computing power, reduce energy consumption, and avoid problems such as concentration of computing power.
          </p>
          <p>
            On the UtilityNet platform, users can rent out their idle computing power and earn profits. At the same time, users can also rent computing power from the platform to complete their own computing tasks. In this way, users can utilize computing resources more efficiently, reduce computing costs, and improve computing efficiency.
          </p>
          <p>
            In general, the UtilityNet platform provides a new computing power leasing and scheduling service. Its PoCI consensus mechanism can better utilize distributed computing power, reduce computing costs, and improve computing efficiency. This kind of service is expected to occupy a place in the future artificial intelligence computing market.
          </p>
          <p>
            Through distributed computing power layout, it can better meet the artificial intelligence computing needs of different regions, different industries, and different scales, and promote the widespread application of artificial intelligence technology. In the future, the resource layout of distributed AI computing power will bring new opportunities and challenges to the development of artificial intelligence technology, promote the in-depth application of artificial intelligence technology in various fields, and have a profound impact on the development of the next era.
          </p>
          `,
  },
  {
    id: 2,
    X_title: "Decentralized computing power equals edge computing",
    article_bgc: "/src/assets/images/article_bgc_three.png",
    content: `<p>
      What is edge computing?
          </p>
          <p class="p_buttom">
            Edge computing is a distributed computing architecture that integrates computing power and information storage onto edge nodes, providing computing, storage, and network bandwidth close to data collection sources or users for real-time processing and analysis of data.
          </p>
          <p>
            Why do you need edge computing?
          </p>
          <p  class="p_buttom">
            With the rapid development of the Internet of Things (IoT), more and more terminal devices can be interconnected and realize the Internet of Everything (IoE). However, these IoT terminal devices will generate a large amount of data that needs to be stored and processed when used. It is estimated that the amount of data generated in the world will reach an astonishing 120ZB in 2023, and by 2025, this number is expected to be 181ZB. A considerable part of this data is generated by IoT terminal devices. For the traditional cloud computing model that uploads all data to a data center or cloud computing center with concentrated computing resources for processing, processing this data will face high network latency, massive device access, difficulty in processing massive data, and insufficient bandwidth. and high power consumption. To solve these challenges, edge computing emerged.
          </p>
          <p>
            The implementation of edge computing and its decentralized characteristics
          </p>
          <p>
            The implementation of edge computing mainly relies on physically deploying edge computing nodes with computing capabilities near the terminal nodes. Its architecture consists of terminal nodes - edge computing nodes - cloud computing nodes, among which:

          </p>
          <p>
            The terminal node is composed of various terminal devices (such as IoT sensors, cameras, smartphones, etc.) and mainly completes the collection and reporting of raw data.
          </p>
          <p>
            Edge computing nodes are composed of various edge computing devices. Through reasonable deployment and allocation of the computing and storage capabilities of edge-side nodes, basic service response is achieved and necessary data is reported to cloud computing nodes.
          </p>
          <p>
            Cloud computing nodes permanently store the data reported by edge computing nodes, and at the same time complete analysis tasks that cannot be handled by edge computing nodes and comprehensive global information processing tasks. In addition, cloud computing nodes can also dynamically adjust the deployment strategies and algorithms of the edge computing layer based on network resource distribution.
          </p>
          <p class="p_buttom">
            It can be seen that edge computing by physically dispersing computing resources close to where the data is generated is undoubtedly a decentralized implementation. This decentralized implementation brings more real-time data computing capabilities. Lower latency, lower deployment costs, and greater privacy and security.
          </p>
          <p>
            The challenges behind edge computing solutions
          </p>
          <p>
            Although many cloud computing vendors such as Huawei, Amazon, Microsoft, Google and IBM have already launched their own edge computing services in recent years, and there have been many actual implementation cases, their development speed seems to be far behind the needs of their application scenarios. Growth. In the final analysis, although edge computing is a decentralized solution, its implementation process is not "decentralized" enough.
          </p>
          <p>
            At present, the implementation of edge computing is still dominated by various cloud computing manufacturers. The development and deployment of the most critical edge node equipment rely on each manufacturer itself, which is undoubtedly a considerable expense. Moreover, edge node equipment from different manufacturers must be closed and customized, making it impossible to easily realize interoperability and reuse between manufacturers. There is a possibility of equipment being left vacant and wasted, which will also bring a lot of equipment maintenance costs to manufacturers.
          </p>
          <p class="p_buttom">
            With the rapid development of AI technology in the past two years, edge AI that deploys AI to edge computing nodes has also entered people's field of vision, and its demand for computing power is far greater than before. Obviously, manufacturers alone can no longer meet the world's computing power needs with high quality. We need to encourage more people to participate in realizing a more decentralized edge computing - decentralized computing power.
          </p>
          <p>
            Decentralized computing power is the future of edge computing
          </p>
          <p>
            When it comes to decentralized computing power, the first and most feasible solution we think of must be blockchain. In the past, traditional blockchain projects based on proof of work (PoW) to achieve consensus mechanisms were difficult to apply to actual production. Now UtilityNet has proposed a consensus mechanism based on PoCI proof. This consensus mechanism uses the keys stored in the chip itself that provides computing power and cryptographic encryption and decryption verification to prove its existence to reach a consensus on the chain. In this consensus mechanism Down:
          </p>
          <p>
            Any node participating in the decentralized computing power network no longer needs to prove the computing power resources it possesses through calculation;
          </p>
          <p>
            PoCI proof allows the computing power possessed by each node to be standardized according to the number of chips it possesses;
          </p>
          <p>
            After each node providing computing power reaches a consensus on the chain, token incentives can be obtained by maintaining the online status, ensuring sufficient computing power providing nodes.
          </p>
          <p>
            This enables each computing power provider node to fully assume the functions of each edge computing node in edge computing, and the number and quality of nodes will far exceed current edge computing solutions.
          </p>
          <p>
            Through UtilityNet’s decentralized computing power network, we can use tokens to encourage anyone with idle computing power resources to actively participate in building a decentralized computing power network. Computing power providers do not need to worry about having no income or even profits because there are no computing power users. It is a negative return, truly realizes distributed computing and storage, and ultimately completely covers edge computing demand scenarios, becoming the best edge computing solution.
          </p>
         `,
  },
  {
    id: 3,
    X_title: "An encrypted world without wasted computing power",
    article_bgc: "/src/assets/images/article_bgc_four.png",
    content: `<p>
      UtilityNet is a decentralized digital chip network based on chips defined by BDC (Blockchain Define Chip). It uses chip self-verification to prove and efficiently provide powerful on-chain resources at zero cost. Among them, UtilityNet proposed the PoCI (Proof of Computation Integrity) consensus to abandon the high-cost and high-consumption computing model and replace it with a model of ownership of chip computing power. How to reach PoCI consensus? They used a 128-bit AES (Advanced Encryption Standard) key etched in a small section of the chip called eFuse storage area, that is, the "secure key", and sent the security key into the chip's SPACC (security protocol accelerator) module for encryption. learning operation (AES encryption and decryption operation), while ensuring that it is not exposed. The numerical tuple generated by the chip's own secret and mixed encryption will be submitted to the define type transaction of UtilityNet, and all nodes participating in UtilityNet will It will reach a consensus and know the encrypted private key and the corresponding public key of each chip. In this way, "the chip proves the existence of the chip", and there is no need to spend extra computing power to prove the existence of this chip.          </p>
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
            If and only if the chip itself can prove itself, not even the chip holder can, then what will be the impact? This is an absolutely decentralized state. The chip proves its computing power, which will revolutionize mining. Life-threatening impact - As long as my mining pool is operating, it can provide computing power. Computing power can be leased to anyone who needs it. Therefore, the flexibility, efficiency and low cost of computing power leasing make it the first choice for people. As market competition intensifies and technology advances, the computing power rental market is expected to become more diversified and personalized, providing better services to more companies and institutions. UtilityNet is committed to building a sustainable and recyclable computing power support network, which not only provides technical support for scientific researchers, but also outputs more high-quality computing power for industry development, breaks down technical barriers in the scientific research industry, and accelerates the high-quality development of scientific research.
          </p>
        `,
  },
]);
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
          {{ selectedArticle?.X_title }}
        </div>
        <!-- ! 21.finance -->
        <!-- <div class="finance">
          <a href="https://www.21x.eu/" target="_blank" class="highlight_H"
            >21.finance</a
          >, a European fintech developing pioneering blockchain-powered digital
          asset platforms regulated by the European Securities and Markets
          Authority (ESMA), is building market infrastructure for security
          tokens on Polygon PoS.
        </div> -->
        <!-- !图片，Utility 和 Edited by Terrill -->
        <div class="author">
          <div class="author_img">
            <authorSvg />
          </div>
          <div class="author_right">
            <div class="author_name">Utility Labs</div>
            <div class="author_text">Edited by Terrill</div>
          </div>
        </div>
        <!-- !文章的背景图 -->
        <div class="article_bgc">
          <img :src="selectedArticle?.article_bgc" alt="" />
        </div>
        <!-- ! 文章内容 -->
        <div class="article_text_one">
          <div v-html="selectedArticle?.content"></div>
        </div>
        <!--!文章底部的可以点击跳转的文字 -->
        <!-- <div class="link">
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
        </div> -->
      </div>
      <!-- ! 轮播图模块 -->
      <div v-if="windowWidth > 835" class="Carousel_map_f">
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
              @click="jumpNews(item.id)"
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
              <!-- <div class="swiper_text">
              {{ item.text }}
            </div> -->
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div v-else class="Carousel_map">
        <!-- ! title -->
        <div class="title">More News from Utility</div>
        <!-- ! 两个按钮 -->

        <!-- ! 轮播图 -->
        <swiper
          :ref="mySwiper"
          :slidesPerView="1"
          :spaceBetween="0"
          :modules="modules"
          :loop="false"
          class="swiper"
          :pagination="{ clickable: true }"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in merryGoRound_arr"
            :key="index"
            class="swiper-slide"
            :class="indexNum === index - 1 ? 'centered-slide' : ''"
            @mouseenter="item.isswiperenter = true"
            @mouseleave="item.isswiperenter = false"
            @click="jumpNews(item.id)"
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
            <!-- <div class="swiper_text">
              {{ item.text }}
            </div> -->
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@media (min-width: 835px) {
  .news {
    width: 100%;
    background-color: #fffefb;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      .article {
        max-width: 1086px;
        padding: 146px 21px 0 21px;

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

          :deep(.highlight_H) {
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
          // margin-top: 66px;
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

          img {
            border-radius: 8px;
          }
        }

        :deep(.highlight) {
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

          :deep(.p_buttom) {
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

      .Carousel_map_f {
        max-width: 90%;
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
          right: 30px;

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
}

@media (max-width: 834px) {
  .news {
    width: 100%;
    background-color: #fffefb;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 390px;
      padding: 0 20px;

      .article {
        width: 100%;
        padding-top: 149px;

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
          margin-bottom: 24px;

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
          margin-bottom: 12px;
          color: rgba(21, 28, 26, 0.9);
          font-family: Lantinghei SC;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 32px; /* 145.455% */
        }

        .finance {
          color: rgba(21, 28, 26, 0.9);
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px; /* 20.3px */

          :deep(.highlight_H) {
            color: rgba(21, 28, 26, 0.9);
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 20.3px */
            text-decoration-line: underline;
            //线的宽度
            text-decoration-thickness: 1.5px; /* 设置下划线的粗细 */
            //线的颜色
            text-decoration-color: rgba(21, 28, 26, 0.5);
          }
        }

        .author {
          display: flex;
          align-items: center;
          // margin-top: 30px;
          margin-bottom: 18px;

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
          border-radius: 6px;
          margin-bottom: 20px;
        }

        :deep(.highlight) {
          color: rgba(21, 28, 26, 0.9);
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px; /* 22.26px */
          text-decoration-line: underline;
        }

        .article_text_one {
          color: rgba(21, 28, 26, 0.9);
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 159%;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(21, 28, 26, 0.1);
          margin-bottom: 12px;

          :deep(p) {
            margin-bottom: 20px;
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
                font-size: 14px;
                font-style: normal;
                font-weight: 300;
                line-height: 24px; /* 24.08px */
                text-decoration-line: underline;
              }

              .Vertical_line {
                color: #3edfcf;
                font-family: Inter;
                font-size: 14px;
                font-style: normal;
                font-weight: 300;
                line-height: 24px;
                margin-left: 4px;
                margin-right: 4px;
              }
            }
          }
        }
      }

      .Carousel_map {
        position: relative;
        width: 100%;
        height: 607px;
        padding-top: 48px;
        display: flex;
        flex-direction: column;

        .title {
          margin-bottom: 24px;
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
            .swiper_img {
              border-radius: 8px;
              flex-shrink: 0;
            }

            .icon {
              position: absolute;
              top: 21px;
              right: 21px;
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
              margin-top: 18px;
              margin-bottom: 2px;
            }

            .swiper_title {
              margin-bottom: 40px;
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
              margin-bottom: 34px;
            }
          }

          .centered-slide {
            border-left: 1px solid rgba(21, 28, 26, 0.1); /* 左边框 */
            border-right: 1px solid rgba(21, 28, 26, 0.1); /* 右边框 */
          }
        }

        /* 设置未激活状态下的圆点颜色 */

        :deep(.swiper-pagination .swiper-pagination-bullet) {
          width: 8px;
          height: 8px;
          background: rgba(106, 209, 197, 0.8);
          border-radius: 8px;
        }

        /* 设置激活（当前选中）状态下的圆点颜色 */

        :deep(.swiper-pagination .swiper-pagination-bullet-active) {
          width: 8px;
          height: 8px;
          background: rgba(106, 209, 197, 1);
          border-radius: 8px;
        }
      }
    }
  }
}
</style>
