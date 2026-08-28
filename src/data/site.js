// Central content + image source registry for the Haysimo Water site.
// Images are sourced (hotlinked) directly from the live haysimowater.com
// media library, per project brief. If any fail to load at runtime, the
// <ImageWithFallback> component swaps in a themed placeholder automatically.

const BASE = 'https://haysimowater.com/wp-content/uploads';
import aboutHero from "../assets/aboutHero.jpg"

export const images = {
  logo: `${BASE}/2025/04/cropped-WhatsApp_Image_2025-04-02_at_12.04.42_PM-removebg-preview-138x56.png`,
  logoLarge: `${BASE}/2025/04/cropped-WhatsApp_Image_2025-04-02_at_12.04.42_PM-removebg-preview-1-270x270.png`,
  bottleTransparent: `${BASE}/2025/04/WhatsApp_Image_2025-04-02_at_12.04.42_PM-removebg-preview.png`,

  heroCover: `${BASE}/2025/04/Cover-2.png`,
  heroImg1: `${BASE}/2026/05/img_1.png`,
  heroImg2: `${BASE}/2026/05/img_2.png`,
  heroImg3: `${BASE}/2026/05/img_3.png`,

  bannerMain: `${BASE}/2025/04/Haysimo-banner-06.png`,
  bannerProducts: `${BASE}/2025/04/Haysimo-banner-06-1.png`,

  processMain: {aboutHero},
  processInfographic: `${BASE}/2025/04/Orange-and-Purple-Simple-Icon-Succeed-Career-Step-Infographic-410x1024.png`,
  presentation: `${BASE}/2025/04/Presentation.png`,
  bestSeller: `${BASE}/2025/04/Best-Seller-1024x576.png`,

  aboutVideo: `${BASE}/2025/04/WhatsApp-Video-2025-04-12-at-3.45.20-PM.mp4`,

  // Placeholder hero banner video — swap this for a Haysimo-branded clip.
  // (Reliable, freely hotlinkable Google-hosted sample used only as a stand-in.)
  homeVideo: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  homeVideoPoster: `${BASE}/2025/04/Cover-2.png`,

  productCombo: `${BASE}/2025/04/backgound-3.png`,
  product500: `${BASE}/2025/04/backgound-1.png`,
  product1500: `${BASE}/2025/04/backgound-.png`,
  product250: `${BASE}/2025/04/backgound-2.png`,
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
    file: `/src/assets/certifications/chember of commerce.pdf`,
  },
  {
    id: 'license',
    title: 'Industries License',
    issuer: 'Ministry of Commerce & Industry',
    year: '2026',
    file: `/src/assets/certifications/liesence.pdf`,
  },
  {
    id: 'trade-show',
    title: 'North Eastern Trade Show',
    issuer: 'North Eastern Trade Show',
    year: '2026',
    file: `/src/assets/certifications/1.pdf`,
  },
  {
    id: 'shahaado-sharaf',
    title: 'Shahaado Sharaf',
    issuer: 'Wasiirka Wasaaradda Maaliyadda Puntland',
    year: '2026',
    file: `/src/assets/certifications/2.pdf`,
  },
  {
    id: 'shahaado-sharaf',
    title: 'Shahaado Sharaf',
    issuer: 'Puntland Tourism Expo',
    year: '2025',
    file: `/src/assets/certifications/3.pdf`,
  },
  
];
