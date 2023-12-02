<script setup lang="ts" name="HomeNew">
import authorSvg from "@/assets/svgs/author.svg";
import {computed, onMounted, onUnmounted, ref} from "vue";

// 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import {defineComponent} from "vue";
// 导入Swiper和Swiper Vue组件 ，这里是按需导入，虽然看起来没用，但是实际上是用了的
import {Swiper, SwiperSlide} from "swiper/vue";
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

import {useRoute, useRouter} from "vue-router";

const route = useRoute();

const router = useRouter();
const articleId = Number(route.query.msg);

const jumpNews = (id: number) => {
  // articleId
  selectedArticle.value = news_arr.value.find((article) => article.id ===id);
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
    title: "计算需求分析和下一个风口",
    isswiperenter: false,
  },
  {
    id: 1,
    img: "/src/assets/images/article_bgc_two.png",
    time: "September 21, 2023",
    title: "计算需求分析和下一个风口",
    isswiperenter: false,
  },
  {
    id: 2,
    img: "/src/assets/images/article_bgc_three.png",
    time: "September 21, 2023",
    title: "去中心化算力等于边缘计算",
    isswiperenter: false,
  },
  {
    id: 3,
    img: "/src/assets/images/article_bgc_four.png",
    time: "September 21, 2023",
    title: "无算力浪费的加密世界",
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
const windowHeight = ref(window.innerHeight);

// 更新窗口尺寸的函数
const updateWindowSize = () => {
  windowWidth.value = window.innerWidth;
  windowHeight.value = window.innerHeight;
};
const selectedArticle = ref({});
// 当组件挂载时设置监听器，并在卸载时移除
onMounted(() => {
  console.log("  onMounted: ",Number(route.query.msg))
  news_arr.value.find((article) => article.id === Number(route.query.msg))
  selectedArticle.value = news_arr.value.find((article) => article.id === Number(route.query.msg));
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
// /{{  }}
// 根据articleId查找对应的文章
const news_arr = ref([
  {
    id: 0,
    X_title: "计算需求分析和下一个风口",
    article_bgc: "/src/assets/images/article_bgc_two.png",
    content: `<p>
      计算需求是指在各个领域中，利用计算机和相关技术对数据进行处理、分析、预测和优化等操作的需求。计算需求可以涉及到大量的数据，需要使用计算机和相关技术来进行高效的处理和分析，以便更好地理解数据和做出更好的决策。
计算的用途非常广泛。在科学研究中，计算可以帮助研究人员处理和分析大量的数据，以便更好地理解和解释现象。在工程领域中，计算可以用于模拟和优化各种系统和过程，以便更好地设计和改进产品。在商业领域中，计算可以用于分析市场和客户数据，以便更好地了解客户需求和市场趋势，从而做出更好的商业决策。在医疗领域中，计算可以用于分析患者数据，以便更好地诊断疾病和制定治疗方案。
          </p>
          <p>
            在当今信息时代，计算需求已成为各行业中不可或缺的一部分。无论是科学研究、工程设计、商业决策还是医疗诊断，计算需求都扮演着至关重要的角色。
          </p>
          <p>
            如何把握下一个风口？
          </p>
          <p>
            近年来，随着人工智能技术的发展，我们正进入一个全新的时代。在当前阶段，随着人工智能大模型的崛起，对人工智能算力的需求变得更为迫切。所以蕴含着巨大商机的人工智能计算市场的时代已经开启， 那么我们做为一个普通老百姓怎样才能在当下的财富风口分一杯羹呢？
          </p>
          <p>
            我们都知道大型深度学习模型，如GPT-4、BERT等，拥有数十亿甚至数百亿个参数，需要庞大的计算资源来进行训练和推理。这些大模型的训练过程需要大量的数据和计算能力，而推理阶段需要高效的计算资源来处理复杂的推理任务。
          </p>
          <p>
            为了应对人工智能大模型的崛起，云计算服务商和数据中心运营商不断提升自身的计算能力，推出针对大规模深度学习模型的定制化解决方案，以满足不同行业和场景的需求。同时，AI算力的需求也催生了一批新的创业公司，专注于AI算力的优化、分发和管理，为人工智能行业的发展提供了新的动力。比如我们近日关注到一个公共链平台UtilityNet它提供全球分布式的算力租赁和调度服务。它的PoCI共识机制是一种新型共识机制，与传统的工作量证明共识机制不同。
          </p>
          <p>
            传统的工作量证明共识机制要求节点通过解决一定难度的数学问题来证明自己对区块链的贡献，从而获得记账权。这种机制存在着一些问题，比如能源消耗过大、算力集中等。而PoCI共识机制则是通过对节点提交的计算任务进行验证，来证明节点对区块链的贡献。这种机制可以更好地利用分布式算力，减少能源消耗，避免算力集中等问题。
          </p>
          <p>
            在UtilityNet平台上，用户可以将自己的闲置算力租赁出去，从而获得收益。同时，用户也可以从平台上租赁算力，来完成自己的计算任务。这样，用户可以更加高效地利用算力资源，降低计算成本，提高计算效率。
          </p>
          <p>
            总的来说，UtilityNet平台提供了一种全新的算力租赁和调度服务，它的PoCI共识机制可以更好地利用分布式算力，降低计算成本，提高计算效率。这种服务有望在未来的人工智能计算市场中占据一席之地。
          </p>
          <p>
            通过分布式的算力布局，可以更好地满足不同地区、不同行业、不同规模的人工智能计算需求，促进人工智能技术的广泛应用。在未来，分布式AI算力的资源布局将会为人工智能技术的发展带来新的机遇和挑战，推动人工智能技术在各个领域的深入应用，对下一个时代的发展产生深远的影响。
          </p>
          `,
  },
  {
    id: 1,
    X_title: "计算需求分析和下一个风口",
    article_bgc: "/src/assets/images/article_bgc_two.png",
    content: `<p>
      计算需求是指在各个领域中，利用计算机和相关技术对数据进行处理、分析、预测和优化等操作的需求。计算需求可以涉及到大量的数据，需要使用计算机和相关技术来进行高效的处理和分析，以便更好地理解数据和做出更好的决策。
计算的用途非常广泛。在科学研究中，计算可以帮助研究人员处理和分析大量的数据，以便更好地理解和解释现象。在工程领域中，计算可以用于模拟和优化各种系统和过程，以便更好地设计和改进产品。在商业领域中，计算可以用于分析市场和客户数据，以便更好地了解客户需求和市场趋势，从而做出更好的商业决策。在医疗领域中，计算可以用于分析患者数据，以便更好地诊断疾病和制定治疗方案。
          </p>
          <p>
            在当今信息时代，计算需求已成为各行业中不可或缺的一部分。无论是科学研究、工程设计、商业决策还是医疗诊断，计算需求都扮演着至关重要的角色。
          </p>
          <p>
            如何把握下一个风口？
          </p>
          <p>
            近年来，随着人工智能技术的发展，我们正进入一个全新的时代。在当前阶段，随着人工智能大模型的崛起，对人工智能算力的需求变得更为迫切。所以蕴含着巨大商机的人工智能计算市场的时代已经开启， 那么我们做为一个普通老百姓怎样才能在当下的财富风口分一杯羹呢？
          </p>
          <p>
            我们都知道大型深度学习模型，如GPT-4、BERT等，拥有数十亿甚至数百亿个参数，需要庞大的计算资源来进行训练和推理。这些大模型的训练过程需要大量的数据和计算能力，而推理阶段需要高效的计算资源来处理复杂的推理任务。
          </p>
          <p>
            为了应对人工智能大模型的崛起，云计算服务商和数据中心运营商不断提升自身的计算能力，推出针对大规模深度学习模型的定制化解决方案，以满足不同行业和场景的需求。同时，AI算力的需求也催生了一批新的创业公司，专注于AI算力的优化、分发和管理，为人工智能行业的发展提供了新的动力。比如我们近日关注到一个公共链平台UtilityNet它提供全球分布式的算力租赁和调度服务。它的PoCI共识机制是一种新型共识机制，与传统的工作量证明共识机制不同。
          </p>
          <p>
            传统的工作量证明共识机制要求节点通过解决一定难度的数学问题来证明自己对区块链的贡献，从而获得记账权。这种机制存在着一些问题，比如能源消耗过大、算力集中等。而PoCI共识机制则是通过对节点提交的计算任务进行验证，来证明节点对区块链的贡献。这种机制可以更好地利用分布式算力，减少能源消耗，避免算力集中等问题。
          </p>
          <p>
            在UtilityNet平台上，用户可以将自己的闲置算力租赁出去，从而获得收益。同时，用户也可以从平台上租赁算力，来完成自己的计算任务。这样，用户可以更加高效地利用算力资源，降低计算成本，提高计算效率。
          </p>
          <p>
            总的来说，UtilityNet平台提供了一种全新的算力租赁和调度服务，它的PoCI共识机制可以更好地利用分布式算力，降低计算成本，提高计算效率。这种服务有望在未来的人工智能计算市场中占据一席之地。
          </p>
          <p>
            通过分布式的算力布局，可以更好地满足不同地区、不同行业、不同规模的人工智能计算需求，促进人工智能技术的广泛应用。在未来，分布式AI算力的资源布局将会为人工智能技术的发展带来新的机遇和挑战，推动人工智能技术在各个领域的深入应用，对下一个时代的发展产生深远的影响。
          </p>
          `,
  },
  {
    id: 2,
    X_title: "去中心化算力等于边缘计算",
    article_bgc: "/src/assets/images/article_bgc_three.png",
    content: `<p>
          什么是边缘计算？
          </p>
          <p class="p_buttom">
            边缘计算是一种分布式计算架构，它将计算能力和信息存储集成到边缘节点上，在靠近数据收集源或用户的地方提供计算、存储和网络带宽以对数据进行实时处理和分析。
          </p>
          <p>
            为什么需要边缘计算？
          </p>
          <p  class="p_buttom">
            随着物联网（IoT）的快速发展，越来越多的终端设备可以实现互联互通，实现万物互联（IoE）。但这些物联网终端设备在使用时将产生大量需要存储及处理的数据，按照预计，2023年全世界所产生的数据量将达到惊人的120ZB，而到了2025年，这个数字预计将是181ZB。这其中相当一部分数据都是由物联网终端设备产生。对传统的将所有数据上传至计算资源集中的数据中心或云计算中心进行处理的云计算模式来说，处理这些数据时将面临网络时延高、海量设备接入、海量数据处理难、带宽不够和功耗过高等高难度挑战。为解决这些挑战，边缘计算便应运而生。
          </p>
          <p>
            边缘计算的实现及其去中心化特性
          </p>
          <p>
            边缘计算的实现主要依靠在物理上将具备计算能力的边缘计算节点部署至终端节点的附近。其架构由终端节点——边缘计算节点——云计算节点组成，其中：

          </p>
          <p>
            终端节点由各种终端设备（如物联网传感器、摄像头、智能手机等）组成，主要完成原始数据的收集及上报的功能。
          </p>
          <p>
            边缘计算节点则由各种边缘计算设备组成，通过对边缘侧节点的计算和存储能力的合理部署和调配，实现基础服务响应，并将必要数据上报至云计算节点。
          </p>
          <p>
            云计算节点将边缘计算节点的上报数据进行永久性存储，同时完成边缘计算节点无法处理的分析任务和综合全局信息的处理任务。除此之外，云计算节点还可以根据网络资源分布动态调整边缘计算层的部署策略和算法。
          </p>
          <p class="p_buttom">
            可以看到，通过在物理上将计算资源进行分散至接近数据产生的地方的边缘计算无疑是一种去中心化的实现，这种去中心化的实现带来了更为实时的数据计算能力、更低的延迟、更低的部署成本及更高的隐私和安全性。
          </p>
          <p>
            边缘计算解决方案背后的难题
          </p>
          <p>
            尽管近几年许多云计算厂商如华为、Amazon、微软、Google及IBM等都早已推出了自己的边缘计算服务，也有了许多实际落地的案例，但其发展速度似乎远不及其应用场景的需求的增长速度。归根结底还是因为边缘计算虽然是一种去中心化的解决方案，但其实施过程却又不够“去中心化”。
          </p>
          <p>
            目前边缘计算的落地依旧由各云计算厂商主导，其中最为关键的边缘节点设备的研发及铺设均依赖于各厂商自身，这无疑是一笔不小的开销。且不同厂商的边缘节点设备必然存在其封闭性及定制性，无法轻易实现厂商间的互通复用，存在设备空置浪费的可能，这同样将为厂商们带来大量的设备维护成本。
          </p>
          <p class="p_buttom">
            而随着近两年AI技术的飞速发展，将AI部署至边缘计算节点的边缘AI也随之进入了人们的视野，其对算力的需求远超以往。显然，仅靠各厂商已无法高质量的满足全世界的算力需求，我们需要激励更多人参与进来去实现一个更加去中心化的边缘计算——去中心化算力。
          </p>
          <p>
            去中心化算力是边缘计算的未来
          </p>
          <p>
            提到去中心化算力，我们最先想到的最具可行性的方案必然是区块链。在过去，传统的基于工作量证明（PoW）实现共识机制的区块链项目难以被应用于实际生产。现在UtilityNet提出了基于PoCI证明的共识机制，这一共识机制利用提供算力的芯片自身所存储的密钥和密码学加解密验证来证明自己的存在以在链上达成共识，在这一共识机制下：
          </p>
          <p>
            任何参与去中心化算力网络的节点无需再通过计算来证明自己所拥有的算力资源；
          </p>
          <p>
            PoCI证明使得各节点所拥有的算力可以根据其所拥有的芯片数量标准化；
          </p>
          <p>
            各提供算力的节点在链上达成共识后，维持在线状态便可获得代币激励，保证了充足的算力提供节点。
          </p>
          <p>
            这使得各算力提供节点能够充分的承担边缘计算中各边缘计算节点的职能，并且节点数量及质量都将远超现在的边缘计算解决方案。
          </p>
          <p>
            通过UtilityNet的去中心化算力网络，我们可以通过代币激励任何拥有闲置算力资源的人主动参与建设去中心化算力网络，算力提供者无需担忧因为没有算力使用者而没有收益甚至是负收益，真正的实现分布式计算与存储，最终彻底覆盖边缘计算的需求场景，成为最佳的边缘计算解决方案。
          </p>
         `,
  },
  {
    id: 3,
    X_title: "无算力浪费的加密世界",
    article_bgc: "/src/assets/images/article_bgc_four.png",
    content: `<p>
      UtilityNet，是一个基于 BDC（Blockchain Define Chip）定义的芯片组成的去中心化数字芯片网络，使用芯片自我验证的 方式，零成本证明并高效地提供强大的链上资源。其中，UtilityNet 提出 PoCI （Proof of Computation Integrity）共识，摒弃高成本、高消耗的计算模式， 取而代之的是芯片算力拥有权的模式。 如何达成 PoCI 共识呢？他们利用了刻蚀在芯片一小段名为 eFuse 存储区 域的 128 位 AES(Advanced Encryption Standard) 钥匙，即“secure key(安 全钥匙)，将安全钥匙送入芯片的 SPACC(security protocol accelerator) 模 块进行加密学运算（AES 加解密运算），同时能保证自身不被暴露。通过芯片特 有自己产生的秘密和混合加密产生的数值元组将被提交到 utilityNet 的 define 类型的交易中，所有参与 UtillityNet 的节点将会共识并知晓每一张芯片的加密 私钥和与之对应的公钥。如此以来，“芯片证明芯片的存在”，无需耗费多余的 算力去证明这张芯片的存在。
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
            当且仅当芯片本身能够证明自己，连芯片持有者都不能，那么会带来什么影 响呢？这是一个绝对去中心化的状态，芯片证明自己的算力，这将对挖矿带来革 命性影响——只要我的矿池在运作，就可以提供算力。算力可以租赁给任何需要 的人使用，如此一来，算力租赁的灵活性、高效性和低成本等特点使其成为人们 的首选。随着市场竞争的加剧和技术进步，算力租赁市场有望呈现出更加多元化和个 性化的特点，为更多企业和机构提供更加优质的服务。而 UtilityNet 致力于打 造可持续、可循环发展的算力支持网络，不仅为科研工作者提供技术支持，也为 行业发展输出更多优质算力，打破科研行业技术壁垒，加快推动科研高质量发展。
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
            <authorSvg/>
          </div>
          <div class="author_right">
            <div class="author_name">Utility Labs</div>
            <div class="author_text">Edited by Terrill</div>
          </div>
        </div>
        <!-- !文章的背景图 -->
        <div class="article_bgc">
          <img :src="selectedArticle?.article_bgc" alt=""/>
        </div>
        <!-- ! 文章内容 -->
        <div class="article_text_one">
          <div v-html="selectedArticle?.content"></div>
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
              >{{
                  item.name
                }}<span class="Vertical_line" v-if="index < link_arr.length - 1"
                >|
                </span>
              </a>
            </div>
          </div>
        </div>
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
                <img src="/src/assets/svgs/Arrow_Up.svg" alt=""/>
              </div>
              <img class="swiper_img" :src="item.img" alt=""/>
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
              <img src="/src/assets/svgs/Arrow_Up.svg" alt=""/>
            </div>
            <img class="swiper_img" :src="item.img" alt=""/>
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
