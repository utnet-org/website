<script setup lang="ts">
import { el } from "element-plus/es/locale";
import * as THREE from "three";
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  show: {
    type: Object,
    default: {
      one: false,
    },
  },
  show1: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:show", "update:show1"]);

const Y = [
  7060, 7061, 7062, 7063, 7064, 7065, 7421, 7422, 7423, 7424, 7425, 7781, 7782,
  7783, 7784, 7785, 7786, 8141, 8142, 8143, 8144, 8145, 8146, 8502, 8503, 8504,
  8505, 8506, 8507, 8862, 8863, 8864, 8865, 8866, 8867, 9223, 9224, 9225, 9226,
  9227, 9228, 9583, 9584, 9585, 9586, 9587, 9588, 9943, 9944, 9945, 9946, 9947,
  9948, 10304, 10305, 10306, 10307, 10308, 10309, 10664, 10665, 10666, 10667,
  10668, 10669, 11025, 11026, 11027, 11028, 11029, 11030, 11385, 11386, 11387,
  11388, 11389, 11390, 11745, 11746, 11747, 11748, 11749, 11750, 12106, 12107,
  12108, 12109, 12110, 12111, 12466, 12467, 12468, 12469, 12470, 12471, 12827,
  12828, 12829, 12830, 12831, 13187, 13188, 13189, 13190, 13191, 13192, 13193,
  13547, 13548, 13549, 13550, 13551, 13552, 13553, 13554, 13908, 13909, 13910,
  13911, 13912, 13913, 13914, 14268, 14269, 14270, 14271, 14272, 14273, 14628,
  14629, 14630, 14631, 14632, 14633, 14988, 14989, 14990, 14991, 14992, 14993,
  15347, 15348, 15349, 15350, 15351, 15352, 15707, 15708, 15709, 15710, 15711,
  15712, 16066, 16067, 16068, 16069, 16070, 16071, 16425, 16426, 16427, 16428,
  16429, 16430, 16431, 16783, 16784, 16785, 16786, 16787, 16788, 16789, 17141,
  17142, 17143, 17144, 17145, 17146, 17147, 17502, 17503, 17504, 17505, 17506,
  17507, 17862, 17863, 17864, 17865, 17866, 18222, 18223, 18224, 7076, 7077,
  7078, 7079, 7080, 7081, 7436, 7437, 7438, 7439, 7440, 7441, 7796, 7797, 7798,
  7799, 7800, 7801, 8156, 8157, 8158, 8159, 8160, 8161, 8515, 8516, 8517, 8518,
  8519, 8875, 8876, 8877, 8878, 8879, 9234, 9235, 9236, 9237, 9238, 9239, 9594,
  9595, 9596, 9597, 9598, 9954, 9955, 9956, 9957, 9958, 10314, 10315, 10316,
  10317, 10673, 10674, 10675, 10676, 10677, 11033, 11034, 11035, 11036, 11037,
  11393, 11394, 11395, 11396, 11752, 11753, 11754, 11755, 11756, 12112, 12113,
  12114, 12115, 12116, 12472, 12473, 12474, 12475, 12832, 12833, 12834, 12835,
];
const L = [
  3062, 3063, 3064, 3065, 3066, 3067, 3422, 3423, 3424, 3425, 3426, 3427, 3782,
  3783, 3784, 3785, 3786, 3787, 4142, 4143, 4144, 4145, 4146, 4147, 4502, 4503,
  4504, 4505, 4506, 4507, 4862, 4863, 4864, 4865, 4866, 4867, 5222, 5223, 5224,
  5225, 5226, 5227, 5582, 5583, 5584, 5585, 5586, 5587, 5942, 5943, 5944, 5945,
  5946, 5947, 6302, 6303, 6304, 6305, 6306, 6307, 6662, 6663, 6664, 6665, 6666,
  6667, 7022, 7023, 7024, 7025, 7026, 7027, 7382, 7383, 7384, 7385, 7386, 7387,
  7742, 7743, 7744, 7745, 7746, 7747, 8102, 8103, 8104, 8105, 8106, 8107, 8462,
  8463, 8464, 8465, 8466, 8467, 8822, 8823, 8824, 8825, 8826, 8827, 9182, 9183,
  9184, 9185, 9186, 9187, 9542, 9543, 9544, 9545, 9546, 9547, 9902, 9903, 9904,
  9905, 9906, 9907, 10262, 10263, 10264, 10265, 10266, 10267, 10622, 10623,
  10624, 10625, 10626, 10627, 10982, 10983, 10984, 10985, 10986, 10987, 11342,
  11343, 11344, 11345, 11346, 11347, 11702, 11703, 11704, 11705, 11706, 11707,
  12062, 12063, 12064, 12065, 12066, 12067, 12422, 12423, 12424, 12425, 12426,
  12427, 12782, 12783, 12784, 12785, 12786, 12787, 13142, 13143, 13144, 13145,
  13146, 13147, 13502, 13503, 13504, 13505, 13506, 13507, 13862, 13863, 13864,
  13865, 13866, 13867, 14222, 14223, 14224, 14225, 14226, 14227, 14582, 14583,
  14584, 14585, 14586, 14587,
];
const U = [
  3723, 3724, 3725, 3726, 3727, 4083, 4084, 4085, 4086, 4087, 4443, 4444, 4445,
  4446, 4447, 4803, 4804, 4805, 4806, 4807, 5163, 5164, 5165, 5166, 5167, 5523,
  5524, 5525, 5526, 5527, 5883, 5884, 5885, 5886, 5887, 6243, 6244, 6245, 6246,
  6247, 6603, 6604, 6605, 6606, 6607, 6963, 6964, 6965, 6966, 6967, 7323, 7324,
  7325, 7326, 7327, 7683, 7684, 7685, 7686, 7687, 8043, 8044, 8045, 8046, 8047,
  8403, 8404, 8405, 8406, 8407, 8763, 8764, 8765, 8766, 8767, 9123, 9124, 9125,
  9126, 9127, 9483, 9484, 9485, 9486, 9487, 9843, 9844, 9845, 9846, 9847, 10203,
  10204, 10205, 10206, 10207, 10563, 10564, 10565, 10566, 10567, 10923, 10924,
  10925, 10926, 10927, 11283, 11284, 11285, 11286, 11287, 11643, 11644, 11645,
  11646, 11647, 11648, 12004, 12005, 12006, 12007, 12008, 12364, 12365, 12366,
  12367, 12368, 12724, 12725, 12726, 12727, 12728, 12729, 13085, 13086, 13087,
  13088, 13089, 13090, 13445, 13446, 13447, 13448, 13449, 13450, 13451, 13452,
  13806, 13807, 13808, 13809, 13810, 13811, 13812, 13813, 13814, 13815, 13816,
  13817, 13818, 13819, 13820, 13821, 13822, 13823, 14167, 14168, 14169, 14170,
  14171, 14172, 14173, 14174, 14175, 14176, 14177, 14178, 14179, 14180, 14181,
  14529, 14530, 14531, 14532, 14533, 14534, 14535, 14536, 14537, 14538, 14539,
  14540, 14893, 14894, 14895, 14896, 3742, 3743, 3744, 3745, 3746, 4102, 4103,
  4104, 4105, 4106, 4462, 4463, 4464, 4465, 4466, 4822, 4823, 4824, 4825, 4826,
  5182, 5183, 5184, 5185, 5186, 5542, 5543, 5544, 5545, 5546, 5902, 5903, 5904,
  5905, 5906, 6262, 6263, 6264, 6265, 6266, 6622, 6623, 6624, 6625, 6626, 6982,
  6983, 6984, 6985, 6986, 7342, 7343, 7344, 7345, 7346, 7702, 7703, 7704, 7705,
  7706, 8062, 8063, 8064, 8065, 8066, 8422, 8423, 8424, 8425, 8426, 8782, 8783,
  8784, 8785, 8786, 9142, 9143, 9144, 9145, 9146, 9502, 9503, 9504, 9505, 9506,
  9862, 9863, 9864, 9865, 9866, 10222, 10223, 10224, 10225, 10226, 10582, 10583,
  10584, 10585, 10586, 10942, 10943, 10944, 10945, 10946, 11302, 11303, 11304,
  11305, 11306, 11662, 11663, 11664, 11665, 11666, 12021, 12022, 12023, 12024,
  12025, 12381, 12382, 12383, 12384, 12385, 12740, 12741, 12742, 12743, 12744,
  12745, 13099, 13100, 13101, 13102, 13103, 13104, 13457, 13458, 13459, 13460,
  13461, 13462, 13463, 13464,
];
const T = [
  4839, 5195, 5196, 5197, 5198, 5199, 5555, 5556, 5557, 5558, 5559, 5915, 5916,
  5917, 5918, 5919, 6275, 6276, 6277, 6278, 6279, 6635, 6636, 6637, 6638, 6639,
  6992, 6993, 6994, 6995, 6996, 6997, 6998, 6999, 7000, 7001, 7002, 7003, 7004,
  7005, 7352, 7353, 7354, 7355, 7356, 7357, 7358, 7359, 7360, 7361, 7362, 7363,
  7364, 7365, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722,
  7723, 7724, 7725, 8075, 8076, 8077, 8078, 8079, 8435, 8436, 8437, 8438, 8439,
  8795, 8796, 8797, 8798, 8799, 9155, 9156, 9157, 9158, 9159, 9515, 9516, 9517,
  9518, 9519, 9875, 9876, 9877, 9878, 9879, 10235, 10236, 10237, 10238, 10239,
  10595, 10596, 10597, 10598, 10599, 10955, 10956, 10957, 10958, 10959, 11315,
  11316, 11317, 11318, 11319, 11675, 11676, 11677, 11678, 11679, 12035, 12036,
  12037, 12038, 12039, 12395, 12396, 12397, 12398, 12399, 12755, 12756, 12757,
  12758, 12759, 13115, 13116, 13117, 13118, 13119, 13120, 13476, 13477, 13478,
  13479, 13480, 13481, 13836, 13837, 13838, 13839, 13840, 13841, 13842, 13843,
  13844, 13845, 14197, 14198, 14199, 14200, 14201, 14202, 14203, 14204, 14205,
  14558, 14559, 14560, 14561, 14562, 14563, 14564, 14565, 14921, 14922,
];
const I = [
  3771, 3772, 3773, 3774, 4130, 4131, 4132, 4133, 4134, 4135, 4490, 4491, 4492,
  4493, 4494, 4495, 4850, 4851, 4852, 4853, 4854, 4855, 5211, 5212, 5213, 5214,
  7011, 7012, 7013, 7014, 7015, 7371, 7372, 7373, 7374, 7375, 7731, 7732, 7733,
  7734, 7735, 8091, 8092, 8093, 8094, 8095, 8451, 8452, 8453, 8454, 8455, 8811,
  8812, 8813, 8814, 8815, 9171, 9172, 9173, 9174, 9175, 9531, 9532, 9533, 9534,
  9535, 9891, 9892, 9893, 9894, 9895, 10251, 10252, 10253, 10254, 10255, 10611,
  10612, 10613, 10614, 10615, 10971, 10972, 10973, 10974, 10975, 11331, 11332,
  11333, 11334, 11335, 11691, 11692, 11693, 11694, 11695, 12051, 12052, 12053,
  12054, 12055, 12411, 12412, 12413, 12414, 12415, 12771, 12772, 12773, 12774,
  12775, 13131, 13132, 13133, 13134, 13135, 13491, 13492, 13493, 13494, 13495,
  13851, 13852, 13853, 13854, 13855, 14211, 14212, 14213, 14214, 14215, 14571,
  14572, 14573, 14574, 14575,
];
const textArray = [...L, ...U, ...T, ...I, ...Y];
for (let i = 0; i < I.length; i++) {
  textArray.push(I[i] + 24);
}

for (let i = 0; i < T.length; i++) {
  textArray.push(T[i] + 52);
}
const scene = new THREE.Scene() as any;
const animation_container = ref<HTMLElement | null>(null);
// onMounted(() => {
//   container.value = document.getElementById(
//     "animation-container"
//   ) as HTMLElement;
// });
// 创建场景、相机和渲染器
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
) as any;
let cameraPositionZ = 11;
camera.position.set(0, 0, cameraPositionZ);
camera.lookAt(scene.position); // 设置相机的焦点

let renderer = new THREE.WebGLRenderer() as any;
renderer.setSize(window.innerWidth, window.innerHeight);

// animation_container.appendChild(renderer.domElement);

// 设置定位为固定定位
renderer.domElement.style.position = "fixed";

// 画布背景色设置为白色
renderer.setClearColor(0x000000, 1);

// 创建平面几何体
const planeLength = 40;
const planeWidth = 6.4;
const geometry = new THREE.PlaneGeometry(planeLength, planeWidth, 359, 57);
const innerRadius = planeLength / (2 * Math.PI);

// 创建着色器材质
const material = new THREE.ShaderMaterial({
  fragmentShader: `void main(){}`,
  vertexShader: `void main(){}`,
  wireframe: true,
});

const circles = [];

// 创建网格
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

let rotateAmount = 0; // 旋转角度
let targetRotateAmount = 0; // 目标 rotateAmount 值
let lerpFactor = 0.06; // 插值因子，控制过渡速度
let xzl = 0.15; // 旋转量
let lastScrollY = 0; // 上次滚动位置
let points_circles: any;
let points_circles_material: THREE.ShaderMaterial;
const vertices = geometry.attributes.position.array; // 顶点数组
// console.log('vertices:', vertices)
let time = 0;
// 动画循环
let bendAmount = 0.0;
const bendAmountMin = -0.12;
const bendAmountMax = 0.12;
const bendRange = bendAmountMax - bendAmountMin;
const bendSpeed = 1.5; // 调整这个值来控制速度
const groupCount = 29; // 假设有29组
const opacities = new Float32Array(vertices.length / 3); // 透明度数组
let interpolationFactor1 = 0; // 插值因子，控制从平面到圆环的过渡
let targetInterpolationFactor1 = 0; // 目标插值因子
let lerpFactor1 = 0.03; // 插值过渡速度因子
let baseScrollY = 400; // 初始基准点
let accelerationFactor = 0.002; // 加速因子，可根据需要调整

function animate() {
  requestAnimationFrame(animate);
  time += 0.01; // 更新时间变量
  // 将当前 rotateAmount 向目标值过渡
  interpolationFactor1 +=
    (targetInterpolationFactor1 - interpolationFactor1) * lerpFactor1;

  rotateAmount += (targetRotateAmount - rotateAmount) * lerpFactor;

  updateCircles();

  renderer.render(scene, camera); // 渲染 3D 场景 和 相机 视角 的输出 图像 到 canvas 元素
}
// createCircles();
createCircles();
// console.log('points_circles:', points_circles)
animate();

function createCircles() {
  const circleGeometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];
  const randoms = [];

  for (let i = 0; i < vertices.length; i += 3) {
    vertices[i + 2] += 0.4;
    const random = Math.random() * 15 - 15.2;
    vertices[i + 2] -= random;
    for (let j = 0; j < textArray.length; j++) {
      if (textArray[j] == i / 3) {
        vertices[i + 2] += random;
      }
    }
    randoms.push(Math.random());
    positions.push(vertices[i], vertices[i + 1], vertices[i + 2]);
    // 随机选择颜色
    if (Math.random() > 0.65) {
      // 15% 的概率选择 0x00ffff 颜色
      colors.push(0.0, 1.0, 1.0); // 0x00ffff 107, 161, 216
      opacities[i / 3] = 1.1;
    } else {
      colors.push(1.0, 1.0, 1.0); // 白色 75, 85, 162
      opacities[i / 3] = 0.8;
    }
  }

  circleGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  ); // 设置顶点位置 3个值代表一个顶点的位置
  circleGeometry.setAttribute(
    "color",
    new THREE.Float32BufferAttribute(colors, 3)
  ); // 设置顶点颜色 3个值代表一个顶点的颜色
  circleGeometry.setAttribute(
    "opacityMultiplier",
    new THREE.BufferAttribute(opacities, 1)
  );
  circleGeometry.setAttribute(
    "random",
    new THREE.Float32BufferAttribute(randoms, 1)
  );

  points_circles_material = new THREE.ShaderMaterial({
    uniforms: {
      pointSize: {
        value: 0.5,
      },
      scaling: {
        value: 1,
      },
      suiji: {
        value: 0,
      },
      interpolationFactor1: {
        value: 0,
      },
      cameraPosition1: {
        value: camera.position,
      },
    },
    vertexShader: `
        varying vec3 vColor;
        varying vec3 VPosition;
        uniform float pointSize;
        uniform float scaling;
        attribute float opacityMultiplier; 
        varying float vOpacityMultiplier;
        attribute float random;
        varying float vRandom;
        uniform float suiji;
        varying float vSuiji;
        uniform float interpolationFactor1;
        uniform vec3 cameraPosition1;
        void main() {
            vColor = color;
            vSuiji = suiji;
            vec3 position = position;
            position.z += random * (0.1 + suiji / 2.0);
            position.x += random * (0.1 + suiji / 2.0) * position.x * 0.2 + (position.x == 0.0 ? 0.001 : 0.0);
            position.y += random * (0.1 + suiji / 2.0);
            position.y -= (suiji > 1.0 ? suiji - 1.0 : suiji) * (suiji > 1.0 ? suiji - 1.0 : suiji) * (3.2 - position.y) * (3.2 - position.y) * 0.01;
            // position.x += (position.x + position.y) * 0.1;
            position.z -= suiji * 2.0;
            position.y = position.y * (1.0 - suiji * 0.6);
            // position.y = position.y < -7.0 ? -7.0  : position.y;
            // position.z = position.y < -7.0 ? 0.0  : position.z;
            VPosition = position;
            vOpacityMultiplier = opacityMultiplier; 
            vRandom = random;
            float size = (pointSize - suiji + position.z - position.y * position.y * 0.1) * scaling + random * 2.5;
            // size = interpolationFactor1 < 1.0 ? 6.0 : size;
            // gl_PointSize = size < 2.0 ? 2.0 : size;
            // 如果z < -2，就把点丢弃
            // if (position.z < -2.0) {
            //     gl_PointSize = 0.0;
            // }
            // 计算距离摄像头的距离
            float distance = length(cameraPosition1 - vec3(modelViewMatrix * vec4(position, 1.0)));

            // 根据距离调整点的大小
            gl_PointSize = (size  * 18.0) / distance + 1.0 - interpolationFactor1; // 距离越远点越小
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `,
    fragmentShader: `
        varying vec3 vColor;
        varying vec3 VPosition;
        varying float vOpacityMultiplier;
        varying float vSuiji;
        varying float vRandom;
            void main() {
                vec3 color = vColor;
                float r = 0.0, delta = 0.0, alpha = 1.0; // 初始化
                vec2 cxy = 2.0 * gl_PointCoord - 1.0; // gl_PointCoord 是内置的变量，用来获取片元在当前点的坐标
                r = dot(cxy, cxy); // 计算点的半径
                delta = fwidth(r); // 计算平滑过渡的边缘
                alpha = 1.0 - smoothstep(1.0 - delta, 1.0 + delta, r); // 计算最终的alpha值
                if (r > 1.0 || VPosition.z < -2.5 || VPosition.x == 0.001) {
                    discard; // 丢弃片元
                }

                float yOffset = abs(VPosition.y) * abs(VPosition.y);


                // 如果 颜色为 0x00ffff，透明度为 0.0
                if (color == vec3(0.0, 1.0, 1.0)) { 
                    alpha = vOpacityMultiplier * 0.7 - yOffset * 0.05 - vSuiji * 0.2;
                    alpha = alpha < 0.6 + vSuiji ? 0.6+ vSuiji : alpha;
                    alpha = alpha > 0.8 ? 0.8 : alpha;
                }else {
                    alpha = 0.68 - yOffset * 0.05 - vSuiji * 0.2;   
                    alpha = alpha < 0.4 ? 0.4 : alpha;
                }

                gl_FragColor = vec4(color * alpha, alpha); // 设置颜色和透明度
            }
        `,
    transparent: true,
    depthWrite: false,
    vertexColors: true,
  });

  points_circles = new THREE.Points(circleGeometry, points_circles_material);
  scene.add(points_circles);
}

function updateCircles() {
  if (window.innerWidth < 1548) {
    // 根据宽度计算相机位置 距离增加
    cameraPositionZ = 11 + (1548 - window.innerWidth) / 100;
    camera.position.set(0, 0, cameraPositionZ);
  } else {
    cameraPositionZ = 11;
    camera.position.set(0, 0, cameraPositionZ);
  }
  const positions = points_circles.geometry.attributes.position.array;
  const target = new THREE.Vector3(0, -6, 0); // 目标点
  points_circles_material.uniforms.cameraPosition1.value = camera.position;
  // 增加插值因子
  points_circles_material.uniforms.interpolationFactor1.value =
    interpolationFactor1;
  interpolationFactor1 = interpolationFactor1 > 1 ? 1 : interpolationFactor1; // 确保插值因子不超过 1
  if (interpolationFactor1 > 0.9995) {
    emit("update:show", { one: true });
  } else {
    emit("update:show", { one: false });
  }
  // if (interpolationFactor1 < 1.0 && interpolationFactor1 > 0.9995) {
  //     for (let i = 0; i < positions.length; i += 3) {
  //         vertices[i] += (vertices[i] + vertices[i + 1]) / 3;
  //     }
  // }

  // 更新每个圆的位置
  for (let i = 0; i < positions.length; i += 3) {
    const theta = (vertices[i] + vertices[i + 1] / 3) / innerRadius;
    let rx = innerRadius * Math.sin(theta);
    let rz = innerRadius * Math.cos(theta);
    let x = rx;
    let z = rz;
    let y = vertices[i + 1];

    let center = new THREE.Vector3(0, 0, 0); // 平面中心
    let distanceToCenter = new THREE.Vector3(x, y, z).distanceTo(center); // 圆心到圆的距离

    // const distanceToCenter = circle.position.distanceTo(center); // 圆心到圆的距离

    // // const directionToCenter = new THREE.Vector3() // 圆心到圆的方向
    // //     .subVectors(center, circle.position)
    // //     .normalize();
    // // const centerProjection =
    // //     directionToCenter.multiplyScalar(distanceToCenter);
    const newDistanceToCenter =
      distanceToCenter -
      y * y * (0.22 + (rotateAmount - xzl) * (rotateAmount - xzl) * 0.1); // 根据旋转角度调整圆心到圆的距离
    z =
      (z * newDistanceToCenter) / distanceToCenter -
      Math.cos((x + vertices[0]) * 2.6) * bendAmount * 2.4;
    x =
      ((x * newDistanceToCenter) / distanceToCenter) *
      (1.1 - (rotateAmount - xzl) * 0.2);

    let groupFactor = (y + x + x) / planeLength; // 组因子
    let groupIndex = Math.floor(groupFactor * groupCount); // 组索引
    let nextGroupIndex = Math.ceil(groupFactor * groupCount); // 下一组索引
    let interpolationFactor = groupFactor * groupCount - groupIndex; // 线性插值因子

    // // 平滑过渡
    let bendAmount1 =
      bendAmountMin +
      bendRange * 0.5 * (1.5 + Math.cos((time + groupIndex) * bendSpeed));
    let bendAmount2 =
      bendAmountMin +
      bendRange * 0.5 * (1.5 + Math.cos((time + nextGroupIndex) * bendSpeed));
    bendAmount =
      bendAmount1 * (1 - interpolationFactor) +
      bendAmount2 * interpolationFactor;

    let originalPosition = new THREE.Vector3(
      vertices[i],
      vertices[i + 1],
      vertices[i + 2] * newDistanceToCenter -
      Math.sin((x + vertices[0]) * 2.6) * bendAmount * 2.4
    ); // 原始位置

    const rotateMatrix = new THREE.Matrix4().makeRotationY(rotateAmount * 4);
    const position = new THREE.Vector3(x, y, z);
    position.applyMatrix4(rotateMatrix);
    x = position.x;
    y = position.y;
    z = position.z;

    let finalPosition = new THREE.Vector3(x, originalPosition.y, z); // 最终位置

    // 计算过渡位置
    let interpolatedPosition = originalPosition
      .clone()
      .lerp(finalPosition, interpolationFactor1); // 插值计算位置

    if (interpolationFactor1 < 1) {
      positions[i] = interpolatedPosition.x;
      positions[i + 1] = interpolatedPosition.y;
      positions[i + 2] = interpolatedPosition.z;
      points_circles.geometry.attributes.opacityMultiplier.needsUpdate = true;
      points_circles.geometry.attributes.position.needsUpdate = true; // 更新顶点位置
      points_circles.geometry.attributes.color.needsUpdate = true; // 更新顶点颜色
      continue;
    }
    // // 把距离摄像头最远的圆隐藏起来
    // if (z < -2) {
    //     circle.visible = false;
    // } else {
    //     circle.visible = true;
    // }
    // circle.position.set(x, y, z);

    // 根据圆心位置旋转圆 rotateAmount

    // positions[i * 3] = x;
    // positions[i * 3 + 1] = y;
    // positions[i * 3 + 2] = z;

    if (rotateAmount > 0.15) {
      let newrotateAmount = rotateAmount - xzl;
      // 下面的是收缩代码
      let currentPosition = new THREE.Vector3(x, y, z); // 当前位置
      let distance = currentPosition.distanceTo(target); // 当前位置到目标点的距离

      // 计算收缩速度，距离越近速度越快
      // let shrinkSpeed = Math.max(0.002, (rotateAmount * (i - (y + vertices[1]) * (y + vertices[1])) / 300) / distance); // 0.02 是最小速度
      let shrinkSpeed = Math.max(
        0.002,
        (newrotateAmount * (i - (y + vertices[1]) * (y + vertices[1]))) /
        600 /
        distance
      ); // 0.02 是最小速度

      // 计算向目标点的方向
      let direction = target.clone().sub(currentPosition).normalize(); // 目标点到当前位置的方向

      // 更新位置
      currentPosition.add(direction.multiplyScalar(shrinkSpeed)); // 更新位置

      // 将新位置回写到数组
      positions[i] =
        currentPosition.x * (1 - newrotateAmount * newrotateAmount * 0.2);
      // positions[i] = currentPosition.x * (1 - rotateAmount);
      // const theta1 = positions[i] / innerRadius;
      // positions[i] = Math.sin(theta1) * (innerRadius - rotateAmount * 5);
      // positions[i + 1] = currentPosition.y - rotateAmount * (y + vertices[1]) * (y + vertices[1]) * 0.08;
      positions[i + 1] =
        currentPosition.y *
        (1 +
          Math.sin(
            newrotateAmount *
            (Math.abs(vertices[1]) - y - newrotateAmount) *
            (Math.abs(vertices[1]) - y - newrotateAmount) *
            0.6
          ) *
          0.1) -
        newrotateAmount * (y + vertices[1]) * (y + vertices[1]) * 0.04 -
        newrotateAmount * newrotateAmount * 0.6;
      positions[i + 2] = currentPosition.z * (1 - newrotateAmount * 0.4);

      positions[i] = positions[i + 1] < -6 ? 0.0 : positions[i];
      positions[i + 1] = positions[i + 1] < -6 ? -6 : positions[i + 1];
      // positions[i + 2] = positions[i + 2] < -6 ? -6 : positions[i + 2];

      // points_circles_material.uniforms.scaling.value = ((1 - rotateAmount * 0.1) > 0.5) ? 1 - rotateAmount * 0.1 + 0.1 : 0.5;
      points_circles_material.uniforms.suiji.value = newrotateAmount * 0.5; // 旋转角度越大，随机值越大
    } else {
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
      points_circles_material.uniforms.suiji.value =
        (rotateAmount < 0 ? 0 : rotateAmount - xzl) * 0.5; // 旋转角度越大，随机值越大
    }

    // 如果 y < -5，就把点丢弃

    // 计算相对于平面中心的 y 轴距离
    // let yOffset = Math.abs(y);
    // 基于 y 轴距离计算透明度，距离越近透明度越低
    // 如果颜色为 0x00ffff,周期性的改变透明度
    // let opacity = 1 + Math.sin(time * 0.8);
    // opacities[i] = opacity < 0.5 ? 0.5 : opacity * 0.8 - yOffset * 0.2;
    points_circles.geometry.attributes.opacityMultiplier.needsUpdate = true;
    points_circles.geometry.attributes.position.needsUpdate = true; // 更新顶点位置
    points_circles.geometry.attributes.color.needsUpdate = true; // 更新顶点颜色
  }
}

// 窗口大小改变时，更新渲染器的宽度和高度
let onWindowResize = () => {
  if (window.innerWidth < 996) {
    return;
  }
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};

// 鼠标移动时，更新旋转角度
let onWindowMouseMove = (event: { clientX: any; clientY: any }) => {
  const x = event.clientX;
  const y = event.clientY;
  // rotateAmount = (y - window.innerHeight / 2) / 250;
  // rotateAmount = rotateAmount < 0 ? 0 : rotateAmount;
  // console.log('rotateAmount:', rotateAmount)
};

// 监听鼠标滚轮事件
let onWindowScroll = () => {
  if (window.innerWidth < 996) {
    return;
  }
  const y = window.scrollY;
  targetInterpolationFactor1 = ((y / 2) * (y / 2)) / 200000;
  // if (targetInterpolationFactor1 == 1) {
  // console.log('y:', y)
  // console.log('interpolationFactor1:', interpolationFactor1)
  // }
  interpolationFactor1 = interpolationFactor1 > 1 ? 1 : interpolationFactor1; // 确保插值因子不超过 1
  if (interpolationFactor1 >= 1) {
    if (targetRotateAmount < 0.15) {
      targetRotateAmount = (y - 400) / 10000;
      emit("update:show1", false);
    } else {
      emit("update:show1", true);
      let delta = y - baseScrollY;
      targetRotateAmount += delta * accelerationFactor;
      // targetRotateAmount = (y - 400) / 10000;
    }
  } else {
    emit("update:show1", false);
  }
  // 更新基准点
  baseScrollY = y;
  // 更新上次滚动位置
  lastScrollY = y;
  // 确保 rotateAmount 不会变得过大或负值
  rotateAmount = Math.max(rotateAmount, 0);
  rotateAmount = Math.min(rotateAmount, 2.2); // 假设 1 是 rotateAmount 的上限
};

onMounted(() => {
  animation_container.value?.appendChild(renderer.domElement);
  window.addEventListener("resize", onWindowResize);
  window.addEventListener("mousemove", onWindowMouseMove);
  window.addEventListener("scroll", onWindowScroll);
});

// });

// 组件销毁时候，移除事件监听
onUnmounted(() => {
  window.removeEventListener("resize", onWindowResize);
  window.removeEventListener("mousemove", onWindowMouseMove);
  window.removeEventListener("scroll", onWindowScroll);
  animation_container.value?.removeChild(renderer.domElement);
  // 移除场景中的所有元素
  scene.remove(plane);
  scene.remove(points_circles);
  // 移除所有的事件监听
  renderer.dispose();
  // 移除所有的缓存
  renderer.forceContextLoss();
  renderer.context = null;
  renderer.domElement = null;
  // renderer = null;
  // 移除所有的几何体
  geometry.dispose();
  // 移除所有的材质
  material.dispose();
  // 移除所有的纹理
  // texture.dispose();
  // 移除所有的场景
  // scene.dispose();
  // 移除所有的相机
  // camera = null;
  // 移除所有的控制器
  // controls.dispose();
  // 移除所有的灯光
  // light.dispose();
  // 移除所有的渲染目标
  // renderTarget.dispose();
  // 移除所有的渲染目标
  // renderTarget1.dispose();
  // 移除所有的渲染目标
  // renderTarget2.dispose();
  // 移除所有的渲染目标
  // renderTarget3.dispose();
});
</script>
<template>
  <div class="animation">
    <div class="body" id="animation-container" ref="animation_container"></div>
  </div>
</template>
<style scoped lang="less">
.animation {
  height: 100%;
  width: 100%;

  .body {
    height: 100%;
    width: 100%;
  }
}
</style>
