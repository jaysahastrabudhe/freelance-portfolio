export const projects = [
  {
    id: 'jay-defence-academy',
    title: 'Jay Defence Academy',
    subtitle: 'Defence Exam Coaching Institute',
    tagline: 'Digital presence for India\'s next defence officers',
    category: 'Education',
    year: '2024',
    url: 'https://www.jaydefenceacademy.com',
    accent: '#F59E0B',
    gradientFrom: '#F59E0B',
    gradientTo: '#EA580C',
    tech: ['WordPress', 'PHP', 'Custom CSS', 'SEO', 'Responsive Design'],
    shortDesc: 'Institutional website for a premier defence exam coaching academy in Dharwad covering SSB, NDA, CDS, and AFCAT.',
    overview:
      'Jay Defence Academy is one of Dharwad\'s leading coaching centers for Indian Armed Forces entrance examinations. They needed a professional digital presence to attract aspirants and clearly communicate their course offerings, faculty credentials, and success track record.',
    challenge:
      'Creating a website that felt authoritative and trustworthy for a serious educational institution, while remaining accessible and easy to navigate for students and parents — many of whom would be visiting on mobile networks.',
    solution:
      'Designed a clean, structured WordPress site with clear course information, prominent enquiry CTAs, faculty profiles, and SEO-optimized pages targeting defence coaching queries in Dharwad and surrounding regions. The mobile-first approach ensures fast load times even on slower connections.',
    features: [
      'Comprehensive course pages for SSB, NDA, CDS, and AFCAT',
      'Student enquiry and contact forms with email notifications',
      'Mobile-first responsive design with fast load times',
      'Local SEO optimization for Dharwad and North Karnataka',
      'Faculty credentials and testimonial sections',
      'Batch schedule and fee structure pages',
    ],
    metrics: [
      { label: 'Pages', value: '12+' },
      { label: 'Mobile Score', value: '95' },
      { label: 'Load Time', value: '<2s' },
    ],
  },
  {
    id: 'jawandrop',
    title: 'JawanDrop',
    subtitle: 'Limited-Edition Patriotic Apparel',
    tagline: 'Honor the Soldier. Wear the Mission.',
    category: 'E-commerce',
    year: '2024',
    url: 'https://jawandrop.in',
    accent: '#10B981',
    gradientFrom: '#10B981',
    gradientTo: '#0891B2',
    tech: ['React', 'Supabase', 'Razorpay', 'Resend', 'Tailwind CSS', 'Node.js'],
    shortDesc: 'Full-stack e-commerce store for a tribute apparel brand with live Razorpay payments, real-time inventory, and Pan-India shipping.',
    overview:
      'JawanDrop creates limited-edition clothing that pays tribute to India\'s military operations and personnel. Each collection is a non-restocked drop, creating urgency and exclusivity. The brand has served 2,000+ customers across India.',
    challenge:
      'Building a drop-style e-commerce experience with limited-edition mechanics, live payment processing across multiple methods, real-time inventory to prevent overselling, and automated transactional emails — all while maintaining a fast, emotion-driven user experience.',
    solution:
      'Built a React frontend powered by Supabase for real-time inventory and order management. Integrated Razorpay for UPI, card, and net banking payments. Used Resend for transactional emails (order confirmations, shipping updates, early-access newsletters). Partnered with Delhivery and BlueDart for Pan-India logistics.',
    features: [
      'Live Razorpay checkout (UPI, credit/debit cards, net banking)',
      'Real-time inventory via Supabase — prevents overselling on drops',
      'Limited-edition mechanics: no restocks, no reprints',
      'Transactional email flows via Resend (order, shipping, newsletter)',
      'Delhivery & BlueDart shipping integration with tracking',
      'Newsletter signup with 24-hour early access to drops',
      'XS–3XL sizing with DTF print quality showcase',
      '48-hour dispatch commitment and return window management',
    ],
    metrics: [
      { label: 'Customers Served', value: '2,000+' },
      { label: 'Payment Methods', value: '5+' },
      { label: 'Dispatch SLA', value: '48 hrs' },
    ],
  },
  {
    id: 'bliive',
    title: 'BLiive',
    subtitle: 'Campus Transformation Consulting',
    tagline: 'We don\'t run campuses. We strengthen the people who lead them.',
    category: 'Consulting',
    year: '2024',
    url: 'https://darkred-leopard-153534.hostingersite.com',
    accent: '#8B5CF6',
    gradientFrom: '#8B5CF6',
    gradientTo: '#6366F1',
    tech: ['WordPress', 'Custom Theme', 'PHP', 'CSS', 'Consultation Forms'],
    shortDesc: 'Authoritative consulting platform for a higher-education transformation firm founded by a retired Indian Army Colonel.',
    overview:
      'BLiive partners with colleges and universities across India to strengthen governance, academic quality, and institutional culture. Founded by a retired Colonel with 33 years of leadership experience, the firm serves as a neutral external partner during institutional change.',
    challenge:
      'Communicating complex B2B consulting services clearly to academic administrators, while conveying the credibility of a military-background founder in the higher-education space. The design needed to feel institutional yet modern.',
    solution:
      'Built a clean, authoritative WordPress site organized around BLiive\'s four core service pillars. The design language uses structured, content-rich layouts that mirror the firm\'s systems-driven approach. Compliance messaging aligned with UGC, NAAC, AICTE, and NEP 2020 frameworks is woven throughout.',
    features: [
      'Service showcase across 4 pillars: Governance, Leadership, Student Readiness, Compliance',
      'Founder story and leadership credentials highlight',
      'Regulatory alignment messaging (UGC, NAAC, NEP 2020, AICTE, NBA)',
      'Consultation scheduling and enquiry integration',
      'Impact metrics and institutional reach statistics',
      'Mobile-responsive professional design',
    ],
    metrics: [
      { label: 'Service Pillars', value: '4' },
      { label: 'Compliance Frameworks', value: '5+' },
      { label: 'Load Time', value: '1.8s' },
    ],
  },
]

export const services = [
  {
    icon: 'Code2',
    title: 'Custom Web Development',
    desc: 'Pixel-perfect React applications built for performance and scale. From SPAs to full-stack apps with Supabase backends.',
    tags: ['React', 'Vite', 'TypeScript', 'Supabase'],
  },
  {
    icon: 'ShoppingCart',
    title: 'E-commerce Stores',
    desc: 'End-to-end e-commerce with payment gateway integration (Razorpay, Stripe), inventory management, and shipping APIs.',
    tags: ['Razorpay', 'Stripe', 'React', 'Supabase'],
  },
  {
    icon: 'Globe',
    title: 'WordPress Development',
    desc: 'Custom WordPress themes and plugins for institutions, businesses, and blogs. Fast, SEO-ready, easy to manage.',
    tags: ['WordPress', 'PHP', 'Custom Themes', 'SEO'],
  },
  {
    icon: 'Database',
    title: 'Backend & Database',
    desc: 'Supabase database design, row-level security, real-time subscriptions, and serverless edge functions.',
    tags: ['Supabase', 'PostgreSQL', 'Edge Functions', 'Auth'],
  },
  {
    icon: 'Mail',
    title: 'Email Infrastructure',
    desc: 'Transactional and marketing email flows using Resend. Order confirmations, welcome sequences, newsletters.',
    tags: ['Resend', 'React Email', 'Transactional', 'SMTP'],
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design & CRO',
    desc: 'Clean, conversion-focused interfaces. Wireframes to production-ready UI with attention to mobile-first experience.',
    tags: ['Figma', 'Tailwind CSS', 'Responsive', 'CRO'],
  },
]
