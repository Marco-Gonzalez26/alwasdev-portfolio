export const NavLinks = [
  { text: 'Home', link: '#home' },
  { text: 'About', link: '#about' },
  { text: 'Projects', link: '#projects' },
  { text: 'Contact', link: '#contact' }
]

export const TechStackData = [
  { title: 'Javascript', img: './js.svg' },
  { title: 'Typescript', img: './ts.svg' },
  { title: 'React', img: './react.svg' },
  { title: 'NextJS', img: './nextjs.svg' },
  { title: 'Angular', img: './angular.svg' },
  { title: 'Sass', img: './sass.svg' },
  { title: 'Tailwind', img: './tailwind.svg' }
]

export const ProjectsData = [
  {
    title: 'ALWAYSPACE',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    textColor: 'text-react',
    description:
      'A modern and beautiful website made with Astro, React and The Astronomical Photo of The Day of NASA. In this website you can discover the Astronomical photo of the day and you can search the astronomical photo of your birth date. ',
    stack: [
      { title: 'React', img: '/public/react.svg' },
      { title: 'Tailwind', img: '/public/tailwind.svg' }
    ]
  },
  {
    title: 'NETFLIX CLONE',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    textColor: 'text-angular',
    description:
      'A modern and beautiful website made with Astro, React and The Astronomical Photo of The Day of NASA. In this website you can discover the Astronomical photo of the day and you can search the astronomical photo of your birth date. ',
    stack: [
      { title: 'React', img: '/public/angular.svg' },
      { title: 'Tailwind', img: '/public/tailwind.svg' }
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
      { title: 'NextJS', img: '/public/nextjs.svg' },
      { title: 'Tailwind', img: '/public/tailwind.svg' }
    ]
  }
]

export const TicketFlavors = [
  {
    title: 'React',
    icon: '/public/react.svg',
    borderColor: 'border-react',
    textColor: 'text-react',
    active: false
  },
  {
    title: 'NextJS',
    icon: '/public/nextjs.svg',
    borderColor: 'border-black',
    textColor: 'text-black',
    active: false
  },
  {
    title: 'Angular',
    icon: '/public/angular.svg',
    borderColor: 'border-angular',
    textColor: 'text-angular',
    active: true
  }
]
