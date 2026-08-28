// Central content + image source registry for the Haysimo Water site.
// Images are sourced (hotlinked) directly from the live haysimowater.com
// media library, per project brief. If any fail to load at runtime, the
// <ImageWithFallback> component swaps in a themed placeholder automatically.

const BASE = 'https://haysimowater.com/wp-content/uploads';
import aboutHero from "../assets/aboutHero.jpg"
import presentation from "../assets/homeImg.jpg"
import logo from "../assets/logo.webp"
import logoLarge from "../assets/logoLarge.webp"
import bottleTransparent from "../assets/bottleTransparent.webp"
import heroCover from "../assets/heroCover.webp"
import heroImg1 from "../assets/heroImg1.webp"
import heroImg2 from "../assets/heroImg2.webp"
import heroImg3 from "../assets/heroImg3.webp"
import bannerMain from "../assets/bannerMain.webp"
import bannerProducts from "../assets/bannerProducts.webp"
import processInfographic from "../assets/processInfographic.webp"
import bestSeller from "../assets/bestSeller.webp"
import homeVideoPoster from "../assets/homeVideoPoster.webp"
import productCombo from "../assets/productCombo.webp"
import product500 from "../assets/product500.webp"
import product1500 from "../assets/product1500.webp"
import product250 from "../assets/product250.webp"

import chamberOfCommerce from '../assets/certifications/chember of commerce.pdf';
import license from '../assets/certifications/liesence.pdf';
import tradeShow from '../assets/certifications/1.pdf';
import shahaadoSharaf1 from '../assets/certifications/2.pdf';
import shahaadoSharaf2 from '../assets/certifications/3.pdf';


export const images = {
  logo,
  logoLarge,
  bottleTransparent,

  heroCover,
  heroImg1,
  heroImg2,
  heroImg3,

  bannerMain,
  bannerProducts,

  processMain: {aboutHero},
  processInfographic,
  presentation,
  bestSeller,

  // Placeholder hero banner video — swap this for a Haysimo-branded clip.
  // (Reliable, freely hotlinkable Google-hosted sample used only as a stand-in.)
  homeVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  homeVideoPoster,

  productCombo,
  product500,
  product1500,
  product250,
};

export const products = [
  {
    id: 'haysimo-bt1-500ml',
    name: 'HAYSIMO',
    variant: '12 × 500ml',
    description:
      'Our everyday carry pack — grab-and-go hydration sized for the office, gym, or school run.',
    image: images.product500,
    tag: 'Everyday',
  },
  {
    id: 'haysimo-bt1-500ml-24',
    name: 'HAYSIMO',
    variant: '24 × 500ml',
    description:
      'A larger everyday pack for homes, offices, and businesses that need dependable hydration on hand.',
    image: images.product500,
    tag: 'Value Pack',
  },
  {
    id: 'haysimo-bt3-1500ltr',
    name: 'HAYSIMO',
    variant: '6 × 1.5L',
    description:
      'Family-sized bottles for the home and dinner table — pure hydration that goes further.',
    image: images.product1500,
    tag: 'Family Size',
  },
  {
    id: 'haysimo-bt3-1500ltr-12',
    name: 'HAYSIMO',
    variant: '12 × 1.5L',
    description:
      'A generous family pack designed for homes, gatherings, and everyday hydration.',
    image: images.product1500,
    tag: 'Large Pack',
  },
  {
    id: 'haysimo-bt2-250ml',
    name: 'HAYSIMO',
    variant: '24 × 250ml',
    description:
      'Compact bottles for events, classrooms, and gatherings — light to carry, easy to share.',
    image: images.product250,
    tag: 'Bulk & Events',
  },
];

export const features = [
  {
    title: 'Naturally Sourced, Purely Bottled',
    description:
      'Our water is drawn from deep underground sources, untouched by pollution and rich in natural minerals — giving you hydration straight from nature.',
    icon: 'droplet',
  },
  {
    title: '100% Somali, 100% Proud',
    description:
      'Every bottle of Haysimo is a celebration of Somali purity and resilience. Locally sourced, proudly produced, and made to uplift our people.',
    icon: 'flag',
  },
  {
    title: 'Mineral-Rich Hydration',
    description:
      'Packed with essential minerals, Haysimo Water fuels your body with more than just hydration — it gives you strength, vitality, and balance.',
    icon: 'sparkles',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Sourced Deep Underground',
    description:
      'Water is drawn from protected underground aquifers, far from surface pollution, preserving its natural mineral composition.',
  },
  {
    step: '02',
    title: 'Filtered & Tested',
    description:
      'Every batch passes through rigorous purification and quality checks before it is cleared for bottling.',
  },
  {
    step: '03',
    title: 'Bottled With Care',
    description:
      'Bottled locally in Bosaso, Puntland — supporting Somali jobs and Somali industry at every step.',
  },
  {
    step: '04',
    title: 'Delivered Fresh',
    description:
      'From our plant to your door — distributed across Somalia so freshness never has to travel far.',
  },
];

export const contact = {
  companyName: 'Haysimo Water Plant',
  address: 'Bossaso, Puntland State, Somalia',
  phones: ['+252 444 1177', '+252 422 4477'],
  email: 'info@haysimowater.com',
};

export const stats = [
  { value: '35+', label: 'Years of combined industry experience' },
  { value: '100%', label: 'Somali sourced & bottled' },
  { value: '5', label: 'Pack sizes for every need' },
  { value: '1', label: 'Mission — purity for every home' },
];

export const certificates = [
  {
    id: 'chamber-of-commerce',
    title: 'Chamber of Commerce',
    issuer: 'Puntland Chamber of Commerce & Industry',
    year: '2026',
    file: chamberOfCommerce,
  },
  {
    id: 'license',
    title: 'Industries License',
    issuer: 'Ministry of Commerce & Industry',
    year: '2026',
    file: license,
  },
  {
    id: 'trade-show',
    title: 'North Eastern Trade Show',
    issuer: 'North Eastern Trade Show',
    year: '2026',
    file: tradeShow,
  },
  {
    id: 'shahaado-sharaf-1',
    title: 'Shahaado Sharaf',
    issuer: 'Wasiirka Wasaaradda Maaliyadda Puntland',
    year: '2026',
    file: shahaadoSharaf1,
  },
  {
    id: 'shahaado-sharaf-2',
    title: 'Shahaado Sharaf',
    issuer: 'Puntland Tourism Expo',
    year: '2025',
    file: shahaadoSharaf2,
  },
];
