type Project = {
    id: number
    title: string
    description: string
    technologies: string
    toCode: string
    toViewing: string
    backgroundColor: string
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'Weather App',
        description: '',
        technologies: `React, typescript, hooks, redux, redux-thunk, redux-actions,
        reselect, redux-persist, adaptive, axios, styled-components`,
        toCode: 'https://github.com/st63/weather-app',
        toViewing: 'https://st63.github.io/weather-app/',
        backgroundColor: '',
    },
    {
        id: 2,
        title: 'TV Show App',
        description: '',
        technologies: 'React, hooks, typescript, axios, styled-components, material-ui',
        toCode: 'https://github.com/st63/tv-shows-app',
        toViewing: 'https://st63.github.io/tv-shows-app/',
        backgroundColor: '',
    },
    {
        id: 3,
        title: 'Asteroid monitoring app',
        description: '',
        technologies: 'React, redux, react-router, redux-thunk, axios, styled-components, luxon, adaptive',
        toCode: 'https://github.com/st63/asteroid-monitoring',
        toViewing: 'https://st63.github.io/asteroid-monitoring/',
        backgroundColor: '',
    },
    {
        id: 4,
        title: 'Todo list',
        description: '',
        technologies: 'React, hooks',
        toCode: 'https://github.com/st63/todo',
        toViewing: 'https://st63.github.io/todo/',
        backgroundColor: '',
    },
    {
        id: 5,
        title: 'Social networking site',
        description: '',
        technologies: 'React, redux, react-router, redux-thunk, axios, material-ui, redux-form',
        toCode: 'https://github.com/st63/react-social-networking-site',
        toViewing: '',
        backgroundColor: '',
    },
    {
        id: 6,
        title: 'Pages with posts',
        description: '',
        technologies: `React, typescript, redux, react-router, redux-thunk,
        axios, material-ui, react-final-form, styled-components, draft-js`,
        toCode: 'https://github.com/st63/react-test',
        toViewing: '',
        backgroundColor: '',
    },
    {
        id: 7,
        title: 'Landing page',
        description: '',
        technologies: 'jQuery, adaptive',
        toCode: 'https://github.com/st63/site',
        toViewing: 'https://st63.github.io/pages/landing-page-legal-advice',
        backgroundColor: '',
    },
    {
        id: 8,
        title: 'Admin panel',
        description: '',
        technologies: 'SCSS, jQuery, Gulp, Perfect Pixel',
        toCode: 'https://github.com/st63/admin-panel-on-react',
        toViewing: 'https://st63.github.io/pages/admin-panel',
        backgroundColor: '',
    },
    {
        id: 9,
        title: 'Test landing page',
        description: '',
        technologies: 'SCSS, jQuery, БЭМ, Bootstrap 4, Gulp, Perfect Pixel, adaptive',
        toCode: 'https://github.com/st63/test-lending-page/tree/master/src',
        toViewing: 'https://st63.github.io/pages/bootstrap-landing',
        backgroundColor: '',
    },
    {
        id: 10,
        title: 'Form',
        description: '',
        technologies: 'jQuery',
        toCode: 'https://github.com/st63/forma',
        toViewing: 'https://st63.github.io/pages/form',
        backgroundColor: '',
    },
]

export const TECHNOLOGIES: string[] = [
    'React',
    'React Native',
    'Next.js',
    'PWA',
    'JavaScript',
    'TypeScript',
    'CSS, SCSS',
    'Bootstrap',
    'Gulp, Webpack',
    'GIT',
    'AWS',
    'Адаптивная верстка',
    'Методология БЭМ',
    'Умею верстать по макету (Pixel Perfect)',
    'Adobe Photoshop, Figma',
    'ОС Linux, Windows'
]

type Link = {
    title: string
    to: string
}

export const ACCOUNTS: Link[] = [
    {
        title: 'Github',
        to: 'https://github.com/st63',
    },
    {
        title: 'Gitlab',
        to: 'https://gitlab.com/st63',
    },
    {
        title: 'Linkedin',
        to: 'https://www.linkedin.com/in/stanislav-andreev',
    },
    {
        title: 'Telegram',
        to: 'https://t.me/stanislav017',
    },
    {
        title: 'Instagram',
        to: 'https://www.instagram.com/stanislavandreev163/',
    },
]

export const CERTIFICATES: Link[] = [
    {
        title: 'Сертификат Mercury Academy',
        to: 'https://academy.mercdev.com/p/glKzY',
    },
]

export const ABOUT_ME: string = `Ищу удаленную работу на позицию Frontend React Developer
(есть опыт коммерческой разработки). Мечтаю попасть в команду профессионалов,
учиться у мастеров и стать сильным React разработчиком!`

export const COLORS = {
    GREY: '',
}