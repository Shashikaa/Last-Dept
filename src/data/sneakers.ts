export interface SneakerSpecs {
  upper: string;
  sole: string;
  lining: string;
  weight: string;
  origin: string;
}

export interface Sneaker {
  id: string;
  code: string;
  name: string;
  colorway: string;
  price: number;
  shelfRow: 1 | 2;
  shelfCol: 1 | 2 | 3 | 4 | 5;
  category: string;
  tagline: string;
  designDetails: string;
  description: string;
  specs: SneakerSpecs;
  ledColor: string;
  accentHex: string;
  image: string;
}

export const EU_SIZES: string[] = [
  'EU 36',
  'EU 37',
  'EU 38',
  'EU 39',
  'EU 40',
  'EU 41',
  'EU 42',
  'EU 42.5',
  'EU 43',
  'EU 44',
  'EU 45',
  'EU 46',
  'EU 47.5'
];

export const SNEAKERS: Sneaker[] = [
  {
    id: 'foundry-01',
    code: '01',
    name: 'FOUNDRY 01',
    colorway: 'Peach orange',
    price: 175,
    shelfRow: 1,
    shelfCol: 1,
    category: 'Sculpted Runner',
    tagline: 'Sculpted lines. A translucent amber sole.',
    designDetails: 'Horizontal overlays, tonal laces, and three transparent supports.',
    description:
      'Engineered with horizontal full-grain leather overlays, tonal waxed laces, and a three-point translucent polyurethane amber outsole designed to diffuse warm gallery light.',
    specs: {
      upper: 'Full-Grain Italian Calfskin & Nubuck',
      sole: 'Dual-Density Translucent Amber TPU',
      lining: 'Breathable Vegetable-Tanned Leather',
      weight: '410g (EU 42)',
      origin: 'Hand-assembled in Porto, Portugal'
    },
    ledColor: 'rgba(245, 158, 11, 0.72)',
    accentHex: '#F59E0B',
    image: '/images/foundry-01.webp'
  },
  {
    id: 'yard-02',
    code: '02',
    name: 'YARD 02',
    colorway: 'Forest / Bone',
    price: 160,
    shelfRow: 1,
    shelfCol: 2,
    category: 'High-Collar Boot',
    tagline: 'A high collar with a distinctive buckle closure.',
    designDetails: 'Light contrast panels, a padded collar, and a straight sole profile.',
    description:
      'Built around an architectural high-top silhouette featuring anodized matte titanium buckle hardware, contrast bone leather paneling, and a precision straight-edge cup sole.',
    specs: {
      upper: 'Drum-Dyed Forest Calfskin & Bone Nappa',
      sole: 'Vulcanized Architectural Rubber Cup Sole',
      lining: 'Micro-Perforated Calfskin',
      weight: '465g (EU 42)',
      origin: 'Hand-assembled in Marche, Italy'
    },
    ledColor: 'rgba(245, 158, 11, 0.65)',
    accentHex: '#10B981',
    image: '/images/yard-02.webp'
  },
  {
    id: 'hangar-03',
    code: '03',
    name: 'HANGAR 03',
    colorway: 'Cobalt / White',
    price: 185,
    shelfRow: 1,
    shelfCol: 3,
    category: 'Technical Volume',
    tagline: 'Padded panels with a clear blue sole.',
    designDetails: 'Quilted technical upper, recessed lacing system, and optical ice-blue sole.',
    description:
      'Inspired by aerospace pressure suits and brutalist hangars. Features high-rebound quilted ballistic nylon, speed-lace cord locks, and an ice-blue optical-grade chambered sole.',
    specs: {
      upper: 'Quilted Ballistic Nylon & Calfskin Trim',
      sole: 'Optical-Grade Ice TPU with Air Chamber',
      lining: 'Neoprene Technical Mesh',
      weight: '440g (EU 42)',
      origin: 'Hand-assembled in Porto, Portugal'
    },
    ledColor: 'rgba(245, 158, 11, 0.65)',
    accentHex: '#3B82F6',
    image: '/images/hangar-03.webp'
  },
  {
    id: 'tier-04',
    code: '04',
    name: 'TIER 04',
    colorway: 'Lilac / Cream',
    price: 165,
    shelfRow: 1,
    shelfCol: 4,
    category: 'Layered Silhouette',
    tagline: 'Soft volumes. A layered silhouette.',
    designDetails: 'Cantilevered heel geometry, folded nubuck seams, and tonal cream midsole.',
    description:
      'Cantilevered heel geometry meets pastel matte nubuck. Each leather tier is skived and folded by hand to eliminate visible stitching along the primary tension lines.',
    specs: {
      upper: 'Velvet Nubuck & Cream Pebbled Leather',
      sole: 'Cantilevered EVA & Rubber Compound',
      lining: 'Unbleached Organic Cotton & Calfskin',
      weight: '395g (EU 42)',
      origin: 'Hand-assembled in Alicante, Spain'
    },
    ledColor: 'rgba(245, 158, 11, 0.68)',
    accentHex: '#C084FC',
    image: '/images/tier-04.webp'
  },
  {
    id: 'escarp-05',
    code: '05',
    name: 'ESCARP 05',
    colorway: 'Graphite / Olive',
    price: 155,
    shelfRow: 1,
    shelfCol: 5,
    category: 'All-Terrain Atelier',
    tagline: 'A rugged profile, finished with orange laces.',
    designDetails: 'Hydrophobic suede mudguard, metallic eyelets, and high-visibility cordage.',
    description:
      'Engineered for urban topography and wet basalt surfaces. Combines water-repellent olive suede, rubberized graphite mudguards, and high-visibility safety-orange toggle lacing.',
    specs: {
      upper: 'Hydrophobic Olive Suede & Rubberized Leather',
      sole: 'High-Traction Vibram-Spec Lugged Outsole',
      lining: 'Weather-Sealed Membrane Lining',
      weight: '480g (EU 42)',
      origin: 'Hand-assembled in Porto, Portugal'
    },
    ledColor: 'rgba(249, 115, 22, 0.68)',
    accentHex: '#F97316',
    image: '/images/escarp-05.webp'
  },
  {
    id: 'index-06',
    code: '06',
    name: 'INDEX 06',
    colorway: 'Sand / Burgundy',
    price: 125,
    shelfRow: 2,
    shelfCol: 1,
    category: 'Low-Profile Court',
    tagline: 'A low profile with diagonal panelling.',
    designDetails: 'Golden-ratio diagonal suede cuts, Bordeaux calfskin heel tab, and stitched cup sole.',
    description:
      'The signature icon of Series 01. A study in restraint featuring golden-ratio diagonal suede cuts, deep Bordeaux calfskin quarters, and a hand-stitched margom-style sole.',
    specs: {
      upper: 'Sand Split-Suede & Bordeaux Box Calf',
      sole: 'Low-Profile Stitched Natural Rubber',
      lining: 'Full Glove-Soft Calfskin',
      weight: '350g (EU 42)',
      origin: 'Hand-assembled in Marche, Italy'
    },
    ledColor: 'rgba(245, 158, 11, 0.72)',
    accentHex: '#D97706',
    image: '/images/index-06.webp'
  },
  {
    id: 'frame-07',
    code: '07',
    name: 'FRAME 07',
    colorway: 'Graphite / Cobalt',
    price: 170,
    shelfRow: 2,
    shelfCol: 2,
    category: 'High-Collar Boot',
    tagline: 'An enveloping collar. A sharp flash of blue.',
    designDetails: 'Shrouded lace-less vamp, molded ankle pod, and cobalt architectural slash.',
    description:
      'Shrouded lace-less appearance with internal gusseted lockdown. Matte carbon-black technical leather is bisected by a single electric cobalt architectural slash.',
    specs: {
      upper: 'Matte Carbon Technical Leather',
      sole: 'Sculpted Dual-Tone Phylon & Rubber',
      lining: 'Memory-Foam Molded Ankle Collar',
      weight: '430g (EU 42)',
      origin: 'Hand-assembled in Porto, Portugal'
    },
    ledColor: 'rgba(245, 158, 11, 0.65)',
    accentHex: '#0EA5E9',
    image: '/images/frame-07.webp'
  },
  {
    id: 'form-08',
    code: '08',
    name: 'FORM 08',
    colorway: 'Pearl / Silver',
    price: 165,
    shelfRow: 2,
    shelfCol: 3,
    category: 'Knit Sculpture',
    tagline: 'Continuous knit over a clear amber sole.',
    designDetails: 'Seamless 3D pearl filament upper, ribbed sock collar, and fluid amber sole.',
    description:
      'Zero-waste 3D-knitted upper infused with metallic silver and pearl filaments, fused directly onto an organic fluid-form amber polyurethane sole unit.',
    specs: {
      upper: '3D-Engineered Pearl & Metallic Filament Knit',
      sole: 'Fluid-Cast Translucent Amber PU',
      lining: 'Seamless Integrated Sock Fit',
      weight: '330g (EU 42)',
      origin: 'Hand-assembled in Milan, Italy'
    },
    ledColor: 'rgba(245, 158, 11, 0.75)',
    accentHex: '#F59E0B',
    image: '/images/form-08.webp'
  },
  {
    id: 'plinth-09',
    code: '09',
    name: 'PLINTH 09',
    colorway: 'White / Terracotta',
    price: 120,
    shelfRow: 2,
    shelfCol: 4,
    category: 'Low-Profile Court',
    tagline: 'Clean lines, grounded in terracotta.',
    designDetails: 'Chalk-white calfskin upper, concealed eyelets, and sculpted terracotta base.',
    description:
      'Monolithic chalk-white upper set atop a raw, hand-carved texture terracotta midsole inspired by classical Mediterranean architectural plinths.',
    specs: {
      upper: 'Chalk Matte Full-Grain Calfskin',
      sole: 'Architectural Carved Terracotta Rubber',
      lining: 'Supple Bone Nappa Leather',
      weight: '375g (EU 42)',
      origin: 'Hand-assembled in Alicante, Spain'
    },
    ledColor: 'rgba(234, 88, 12, 0.68)',
    accentHex: '#EA580C',
    image: '/images/plinth-09.webp'
  },
  {
    id: 'grade-10',
    code: '10',
    name: 'GRADE 10',
    colorway: 'Coral / Blue / Lime',
    price: 150,
    shelfRow: 2,
    shelfCol: 5,
    category: 'Knit Sculpture',
    tagline: 'A woven upper on a sculpted foundation.',
    designDetails: 'Multi-tension chromatic knit, hollowed-out midsole bridge, and coral cord laces.',
    description:
      'High-contrast chromatic weave combining coral, ultramarine, and kinetic lime yarns tensioned across a hollowed-out bone and carbon sculptural sole.',
    specs: {
      upper: 'Multi-Tension Jacquard Technical Weave',
      sole: 'Hollow-Core Sculpted Bone Elastomer',
      lining: 'Breathable Performance Microfiber',
      weight: '360g (EU 42)',
      origin: 'Hand-assembled in Porto, Portugal'
    },
    ledColor: 'rgba(245, 158, 11, 0.65)',
    accentHex: '#84CC16',
    image: '/images/grade-10.webp'
  }
];
