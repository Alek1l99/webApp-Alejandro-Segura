export const dataListMenu = [
  {
    label: 'Profile',
    routerLink: 'profile'
  },
  {
    label: 'Portfolio',
    routerLink: 'portfolio'
  },
  {
    label: 'Skills',
    routerLink: 'skills'
  },
  {
    label: 'Contact',
    routerLink: 'contact'
  }
];




export const sgvIcons = [
  { image: '../assets/icons/menuIcons/castle-icon.svg' },
  { image: '../assets/icons/menuIcons/youtube-icon.svg' },
  { image: '../assets/icons/menuIcons/github-icon.svg' },
  { image: '../assets/icons/menuIcons/linkedin-icon.svg' }
]

export const techIcons: { [key: string]: any[] } = {
  Front: [
    { url: '../../assets/icons/techIcons/Front/js-icon.svg', alt: 'Javascrpit icono' },
    { url: '../assets/icons/techIcons/Front/angular-icon.svg', alt: 'Angular icono' },
    { url: '../../assets/icons/techIcons/Front/css_tres-icon.svg', alt: 'Css 3 icono' },
    { url: '../../assets/icons/techIcons/Front/html_cinco-icon.svg', alt: 'Html 5 icono' },
    { url: '../../assets/icons/techIcons/Front/bootstrap-icon.svg', alt: 'bootstrap icono' },
    { url: '../../assets/icons/techIcons/Front/Tailwind-icon.svg', alt: 'Tailwind icono' },
    { url: '../../assets/icons/techIcons/Front/web_design-icon.svg', alt: 'design destok web design icono' }, ,
  ],
  Back: [
    { url: '../../assets/icons/techIcons/Back/https-icon.svg', alt: 'https-icon' },
    { url: '../../assets/icons/techIcons/Back/dot-net-icon.svg', alt: 'dot-net-icon' },
    { url: '../../assets/icons/techIcons/Back/node_js-icon.svg', alt: 'node_js-icon' },
    { url: '../../assets/icons/techIcons/Back/expressjs-icon.svg', alt: 'expressjs-icon' },
    { url: '../../assets/icons/techIcons/Back/mongodb-icon.svg', alt: 'mongodb-icon' },
    { url: '../../assets/icons/techIcons/Back/servidor_sql-icon.svg', alt: 'servidor_sql-icon' },
    { url: '../../assets/icons/techIcons/Back/database-icon.svg', alt: 'database-icon' }
  ],
  Design: [
    { url: '../../assets/icons/techIcons/Design/code-image-icon.svg', alt: 'code-image-icon' },
    { url: '../../assets/icons/techIcons/Design/abode-xd-icon.svg', alt: 'abode-xd-icon' },
    { url: '../../assets/icons/techIcons/Design/figma-icon.svg', alt: 'figma-icon' },
    { url: '../../assets/icons/techIcons/Design/blender-icon.svg', alt: 'blender-icon' },
    { url: '../../assets/icons/techIcons/Design/crocotile3d-icon.svg', alt: 'crocotile3d-icon' }
  ],
  Software: [
    { url: '../../assets/icons/techIcons/Software/Git-icon.svg', alt: 'Git-icon' },
    { url: '../../assets/icons/techIcons/Software/ssh-icon.svg', alt: 'ssh-icon' },
    { url: '../../assets/icons/techIcons/Software/c_sharp-icon.svg', alt: 'c_sharp-icon' },
    { url: '../../assets/icons/techIcons/Software/scrum-ilustracion-icon.svg', alt: 'scrum-ilustracion-icon' },
    { url: '../../assets/icons/techIcons/Software/solid-ilustracion-icon.svg', alt: 'solid-ilustracion-icon' },
    { url: '../../assets/icons/techIcons/Software/package-ilustracion-icon.svg', alt: 'package-ilustracion-icon' }

  ],
};


export const backgoundList = [
  { url: '../assets/backgrounds/backgrount-pixelart-phixalek-website-alejandro-segura.svg', alt: 'PhixAlke bacground pixelart web alejandro segura' },
  { url: '../assets/backgrounds/backgrount-alejandro-segura-website.jpg', alt: '' }
]

export const images = [
  { url: '../assets/image/profile/phixAlek-pixelart-website-alejandro-segura.svg', alt: 'PhixAlke bacground pixelart web alejandro segura' },
  { url: '../assets/image/portfolio/web-site-baconmigo-portfolio-phixalek-website.svg', alt: 'web-site-baconmigo-portfolio-phixalek-website' },
  { url: '../assets/image/portfolio/web-site-bem-estar-financeiro-portfolio-phixalek-website.svg', alt: 'web-site-bem-estar-financeiro-portfolio-phixalek-website' },
  { url: '../assets/image/portfolio/web-site-JacMotorForm-portfolio-phixalek-website.svg', alt: 'web-site-JacMotorForm-portfolio-phixalek-websiteweb-site-platinummobiledetailinc-portfolio-phixalek-website' },
  { url: '../assets/image/portfolio/web-site-platinummobiledetailinc-portfolio-phixalek-website.svg', alt:'web-site-platinummobiledetailinc-portfolio-phixalek-website'}
]

export const dataDetailPortfolio = [
  {
    preview:'Welcome to JackMotors! This website is built with WordPress and JavaScript',
    detail: 'On JackMotors Crafted an API connecting user form data to CRM, facilitating customer data updates. Used JavaScript for the frontend, .NET, and a touch of PHP for the backend integration. Explore my tech journey.',
    url: 'https://jacmotors.com.co/solicitar-cotizacion/',
    background:images[3],
    isAnimating: false,
    isHovered: false,
    isClicked: false


  },
  {
    preview: 'Welcome to Baconmigo! This website is built in Drupal',
    detail: "Baconmigo is the result of my experience at SosaDíaz Bros (May - October 2020). As a freelance frontend developer, I specialized in creating Drupal applications, managing databases, and utilizing APIs. My primary focus was ensuring a responsive and user-friendly design. Explore what I've learned and achieved on this exciting journey.",
    url: 'https://www.baconmigo.com/',
    background:images[1],
    isAnimating: false,
    isHovered: false,
    isClicked: false
  },
  {
    preview:'Bem-estar financeiro: Financial Wellness with HTML, CSS, JavaScript, & API Integration',
    detail: 'Freelance work for Sosadiaz Bros, client Mercer. Created a financial wellness site using HTML, CSS, and JavaScript, connected to Mercer API for financial assessments. Provided actionable recommendations to improve financial status. Also, revamped an existing site with Portuguese (Brazil) version.',
    url: 'unavailable',
    background:images[2],
    isHovered: false,
    isAnimating: false,
    isClicked: false
  },
  {
    preview:'Platinum Mobile Detail - CSS, Responsive Design, & Loading Optimization',
    detail: 'At Platinum Mobile Detail Inc, I specialized in CSS, responsive design, and achieved remarkable 60ms page loading times. This WordPress site showcases my commitment to web excellence. Explore my work.',
    url: 'https://platinummobiledetailinc.com/',
    background:images[4],
    isHovered: false,
    isAnimating: false,
    isClicked: false

  }
];
