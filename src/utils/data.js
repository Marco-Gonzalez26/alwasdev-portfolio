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
  {
    title: 'ALWAYSPACE',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    textColor: 'text-react',
    description:
      'A modern and beautiful website made with Astro, React and The Astronomical Photo of The Day of NASA. In this website you can discover the Astronomical photo of the day and you can search the astronomical photo of your birth date. ',
    stack: [
      { title: 'React', img: '/react.svg' },
      { title: 'Tailwind', img: '/tailwind.svg' }
    ]
  },
  {
    title: 'NETFLIX CLONE',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    textColor: 'text-angular',
    description:
      'A modern and beautiful website made with Astro, React and The Astronomical Photo of The Day of NASA. In this website you can discover the Astronomical photo of the day and you can search the astronomical photo of your birth date. ',
    stack: [
      { title: 'React', img: '/angular.svg' },
      { title: 'Tailwind', img: '/tailwind.svg' }
    ]
  },
  ,
  {
    title: 'ALWAYS.DEV BLOG',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    textColor: 'text-black',
    description:
      'A modern and beautiful website made with Astro, React and The Astronomical Photo of The Day of NASA. In this website you can discover the Astronomical photo of the day and you can search the astronomical photo of your birth date. ',
    stack: [
      { title: 'NextJS', img: '/nextjs.svg' },
      { title: 'Tailwind', img: '/tailwind.svg' }
    ]
  }
]

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
