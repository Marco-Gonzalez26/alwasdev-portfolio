export const NavLinks = [
  { text: 'Home', link: '#home' },
  { text: 'About', link: '#about' },
  { text: 'Projects', link: '#projects' },
  { text: 'Contact', link: '#contact' }
]

export const MobileNavLinks = [
  { img: '/home-icon.svg', link: '#home' },
  { img: '/user-icon.svg', link: '#about' },
  { img: '/project-icon.svg', link: '#projects' },
  { img: '/contact-icon.svg', link: '#contact' }
]

export const TechStackData = [
  { title: 'Javascript', img: '/js.svg' },
  { title: 'Typescript', img: '/ts.svg' },
  { title: 'React', img: '/react.svg' },
  { title: 'NextJS', img: '/nextjs.svg' },
  { title: 'Angular', img: '/angular.svg' },
  { title: 'Sass', img: '/sass.svg' },
  { title: 'Tailwind', img: '/tailwind.svg' }
]

export const ProjectsData = [
  ,
  {
    title: 'AlWAYS-CHAT',
    img: '/alwayschat.png',
    textColor: 'text-black',
    description:
      'This is a chat website made with next 13 with app directory, tailwind, next auth, upstash and pusher, lets chat!, this project was made with the guide of Josh Tried Coding and I added some features by myself like sending images and a beautiful responsive layout',
    stack: [
      { title: 'NextJS', img: '/nextjs.svg' },
      { title: 'Tailwind', img: '/tailwind.svg' }
    ],
    tag: ['next', 'all', 'react'],
    demo: 'https://always-chat.vercel.app/login',
    code: 'https://github.com/Marco-Gonzalez26/always-chat'
  },
  {
    title: 'ALWAYSPACE',
    img: '/alwayspace.png',
    textColor: 'text-orange-500',
    description:
      'A modern and beautiful website made with Astro, React and The Astronomical Photo of The Day of NASA. In this website you can discover the Astronomical photo of the day and you can search the astronomical photo of your birth date. ',
    stack: [{ title: 'Astro', img: '/astro.svg' }],
    tag: ['astro', 'all'],
    demo: 'https://alwayspace.vercel.app/',
    code: 'https://github.com/Marco-Gonzalez26/alwayspace'
  },
  {
    title: 'NETFLIX HOME PAGE CLONE',
    img: '/angular-netflix.png',
    textColor: 'text-angular',
    description:
      'This is my first app with Angular, this is a little clone of the home page of Netflix, with swipperjs ',
    stack: [
      { title: 'Angular', img: '/angular.svg' },
      { title: 'Tailwind', img: '/tailwind.svg' }
    ],
    tag: ['angular', 'all'],
    demo: 'https://angular-netflix-clone-iota.vercel.app/',
    code: 'https://github.com/Marco-Gonzalez26/angular-netflix-clone'
  },
  {
    title: 'AlWAYS-TWEET',
    img: '/alwaystweet.png',
    textColor: 'text-black',
    description:
      'This is a little clone of twitter ui, the original idea is from @midudev but I added my own features like: upload images on mobile devices, multi-image upload, profile pages with all you tweets.',
    stack: [
      { title: 'NextJS', img: '/nextjs.svg' },
      { title: 'Tailwind', img: '/tailwind.svg' }
    ],
    tag: ['next', 'all', 'react'],
    demo: 'https://alwaystweet.vercel.app/login',
    code: 'https://github.com/Marco-Gonzalez26/alwaystweet'
  }
]

export const filters = ['all', 'react', 'angular', 'next', 'astro']
export const TicketFlavors = [
  {
    title: 'React',
    icon: '/react.svg',
    border: '4px solid #53C1DE',
    text: '#53C1DE',
    active: true
  },
  {
    title: 'NextJS',
    icon: '/nextjs.svg',
    border: '4px solid #000',
    text: '#000',
    active: false
  },
  {
    title: 'Angular',
    icon: '/angular.svg',
    border: '4px solid #DD0031',
    text: '#DD0031',
    active: false
  }
]
