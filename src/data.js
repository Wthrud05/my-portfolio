export const links = [
  {url: '/', title: 'Home'},
  {url: '/about', title: 'About'},
  {url: '/projects', title: 'Projects'},
  {url: '/contact', title: 'Contact'},
]

export const socials = [
  {href: 'https://github.com/Wthrud05', icon: '/github.png', alt: 'github'},
  {href: 'https://vk.com/provider1', icon: '/vk.png', alt: 'vk'},
  {href: 'https://t.me/LoAlexander', icon: '/telegram.png', alt: 'telegram'},
]

export const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Redux',
  'Redux Toolkit',
  'Node.js',
  'Git',
  'Express',
  'PostgreSQL',
  'Next.js',
  'Framer Motion',
  'Webpack',
  'Vite',
  'CSS',
  'Scss',
  'Tailwind',
  'Figma',
]

export const projects = [
  {
    id: 1,
    name: 'Electronic Store',
    stack: ['React.js', 'Typescript', 'Firebase', 'Scss', 'Redux Toolkit'],
    description: 'Electronic store SPA',
    year: 2023,
    images: [
      '/electronic-store1.png',
      '/electronic-store2.png',
      '/electronic-store3.png',
      '/electronic-store4.png',
    ],
    link: 'https://wthrud05.github.io/electronic-store/',
  },
  {
    id: 2,
    name: 'Book shelf',
    stack: ['React.js', 'Redux Toolkit', 'Express.js', 'PostgreSQL', 'Node.js', 'Scss'],
    description: 'Fullstack SPA for collecting read books',
    year: 2023,
    images: ['/bookshelf1.png', '/bookshelf2.png', '/bookshelf3.png', '/bookshelf4.png'],
    link: 'https://bookshelf-swart.vercel.app/',
  },
  {
    id: 3,
    name: 'Web AI',
    stack: ['React.js', 'Scss', 'Framer Motion'],
    description: 'Animated landing page about AI',
    year: 2024,
    images: ['/landing-ai1.png', '/landing-ai2.png', '/landing-ai3.png', '/landing-ai4.png'],
    link: 'https://ai-landing-seven.vercel.app/',
  },
  {
    id: 4,
    name: 'Weather App',
    stack: ['Next.js', 'Typescript', 'Tailwind'],
    description: 'Weather app with geolocation',
    year: 2024,
    images: ['/weather-app1.png', '/weather-app2.png', '/weather-app3.png'],
    link: 'https://weather-app-wthrud05.vercel.app/',
  },
]
