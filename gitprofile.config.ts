const CONFIG = {
  github: {
    username: 'naveedullah41',
  },
  base: '/',

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: {
          forks: true,   // hide forked repos like GitProfile itself
          projects: [],
        },
      },
    },
    external: { header: 'Featured Projects', projects: [] },
  },

  seo: {
    title: 'Portfolio of Naveed Ullah – Sr. Embedded Software Engineer',
    description: 'Senior Embedded Software Engineer specializing in ...',
    imageURL: '',
  },

  social: {
    linkedin: 'YOUR_LINKEDIN_USERNAME',  // ← fill this in!
    email: 'your@email.com',             // ← fill this in!
    // leave others empty
  },

  resume: {
    fileUrl: '',  // ← add your resume PDF link here later
  },

  skills: [
    'C', 'C++', 'Embedded Linux',
    'RTOS', 'ARM Cortex', 'Python',
    'Git', 'Makefile', 'CAN', 'UART', 'SPI', 'I2C',
    // add your actual skills!
  ],

  experiences: [
    {
      company: 'Your Current Company',
      position: 'Sr. Embedded Software Engineer',
      from: 'Jan 2022',
      to: 'Present',
      companyLink: '',
    },
    // add previous jobs...
  ],

  themeConfig: {
    defaultTheme: 'nord',  // clean professional look
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'nord', 'corporate', 'business'],
  },

  enablePWA: true,
};
