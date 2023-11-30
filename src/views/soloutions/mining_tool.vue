<script setup lang="ts">
import headerImage from '@/assets/images/mining_tool_icon.png';
import wallet_img1 from '@/assets/images/mining_tool_img1.png';
import wallet_img2 from '@/assets/images/mining_tool_img2.png';
import { ref } from 'vue';
const headerTitle = 'Mining管理工具';
const switchList = ['COIWN', 'COIWN', 'COIWN', 'COIWN'];
const firstLevelTitle = 'About Us';
const firstLevelText = 'Ankr is a great addition to the Celo Alliance, their unique applications make them a valuable contributor to the Celo ecosystem. The cLabs team enjoys working with Ankr to democratize participation in the Celo protocol.';
const secondLevelTitle = 'Key Features';
const secondLevelTextFirst = 'Ankr is the leading Web3 infrastructure provider company. It has a set of different products for building, earning, gaming, and more — all on blockchain. PC Service — a platform that enables users to empower their Web3 projects with the blockchain interaction capabilities (30+ chains supported) via the top-performing globally-distributed decentralized infrastructure of nodes.';
const secondLevelTextSecond = 'Indexing API - Advanced APIs is a specifically-tailored collection of JSON-RPC API endpoints built to support the most popular Web3 scenarios on multiple chains at almost instant speeds. We believe it to become a single point of reference for the multi-chain requests. Advanced APIs optimize, index, cache, and store blockchain data to make it access-ready for you. To make things even better, our Advanced APIs support querying eight EVM-compatible blockchains in a single request. Gaming SDK - Mirage gaming platform is an access point to a complete set of battle-tested solutions to build, power up, scale, support, and publish your Web3 games. Use SDKs to integrate with the platform and enable your game with the Web3 capabilities. AppChain - Serving developers and web3 consumers alike, AppChains are dedicated blockchains that serve only one dApp. ';
const secondLevelTextThird = "Ankr helps teams to develop, launch, & operate those chains, and they can deliver enhanced Web3 experiences to their users. AppChains offers plug-and-play tools for developers to build their dApps fast. The 6 AppChain building blocks to customize the chain to the builder's exact specs ensures they give their users low, near zero, gas fees, blazing-fast transactions, security, and a pleasing experience that works as intended every time. Liquid Staking - Liquid Staking extends the Staking experience to solve the problem of loss of liquidity and capital inefficiency. When assets are staked, they are usually locked up on-chain helping to maintain the network. However, Liquid Staking provides instant access to Liquid Staking tokens that are equivalent in value to the stake in a 1:1 ratio. These portable Liquid Staking tokens, such as ankrMATIC, ankrETH, and more, can be utilized on additional DeFi platforms to earn further rewards or instantly swap them for other assets. The clear benefits of Ankr Liquid Staking are: Minimum commitment costs Immediate access to liquidity Transfer of risks to Ankr experts.";
const imageList = [
    wallet_img1,
    wallet_img2
]
</script>
<template>
    <MiddleMessageIntroduce :headerImage="headerImage" :headerTitle="headerTitle" :switchList="switchList"
        :firstLevelTitle="firstLevelTitle" :firstLevelText="firstLevelText" :secondLevelTitle="secondLevelTitle"
        :secondLevelTextFirst="secondLevelTextFirst" :secondLevelTextSecond="secondLevelTextSecond"
        :secondLevelTextThird="secondLevelTextThird" :imageList="imageList">
    </MiddleMessageIntroduce>
</template>
<style scoped lang="less"></style>