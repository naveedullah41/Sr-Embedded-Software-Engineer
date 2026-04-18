// gitprofile.config.ts
// =====================================================
// NAVEED ULLAH — Sr. Embedded Linux Engineer Portfolio
// Replace this file at: naveedullah41/Sr-Embedded-Software-Engineer/gitprofile.config.ts
// =====================================================

const CONFIG = {
  github: {
    username: 'naveedullah41', // Your GitHub username
  },

  /**
   * Deploying to https://naveedullah41.github.io
   * Set base to '/'
   * If deploying to https://naveedullah41.github.io/Sr-Embedded-Software-Engineer/
   * set base to '/Sr-Embedded-Software-Engineer/'
   */
  base: '/Sr-Embedded-Software-Engineer/',

  projects: {
    github: {
      display: true,
      header: 'Open Source & GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: {
          forks: true, // Hides the GitProfile fork from your list
          projects: ['naveedullah41/naveedullah41'], // hide profile readme repo
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Yocto Custom Image — LS1046AFRWY',
          description:
            'Built a Yocto meta-layer for NXP LS1046AFRWY with kernel patches, secure-boot components, and a full CI/CD pipeline for automated image generation. Optimized OTA workflow and reduced update duration significantly.',
          imageUrl:
            'https://img.freepik.com/free-vector/circuit-board-technology-background_1017-8180.jpg',
          link: 'https://github.com/naveedullah41',
        },
        {
          title: 'Secure U-Boot Customization — i.MX8M',
          description:
            'Adapted U-Boot for High Assurance Boot (HAB) on i.MX8M. Integrated TPM 2.0 for secure key storage, enabled signed kernel and device-tree loading within Yocto, and implemented encrypted root-filesystem handling.',
          imageUrl:
            'https://img.freepik.com/free-vector/circuit-board-technology-background_1017-8180.jpg',
          link: 'https://github.com/naveedullah41',
        },
        {
          title: 'Raspberry Pi 4 Secure Boot — Yocto & U-Boot',
          description:
            'Full secure-boot chain for Raspberry Pi 4 using OTP keys, external TPM 2.0 for measured boot, encrypted root-filesystem, and OTA updates via Mender. Aligned with agile release cycles.',
          imageUrl:
            'https://img.freepik.com/free-vector/circuit-board-technology-background_1017-8180.jpg',
          link: 'https://github.com/naveedullah41',
        },
        {
          title: 'LS1046AFRWY Fast-Reboot & Boot Optimization',
          description:
            'Engineered sub-500ms restart capability through multi-stage secure boot. Created a secondary bootloader for encrypted payloads and modified boot scripts for custom network interfaces.',
          imageUrl:
            'https://img.freepik.com/free-vector/circuit-board-technology-background_1017-8180.jpg',
          link: 'https://github.com/naveedullah41',
        },
      ],
    },
  },

  seo: {
    title: 'Naveed Ullah — Sr. Embedded Linux Engineer | C++ · Yocto · Kernel Security',
    description:
      'Senior Embedded Linux Engineer with 6+ years in C++ firmware, Yocto builds, Linux kernel hardening, ARM IoT, secure boot, and TPM 2.0. Available for freelance projects and consulting.',
    imageURL: '',
  },

  social: {
    linkedin: 'embeddedswe',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '+966530166890',
    email: 'naveedullah41@gmail.com',
  },

  resume: {
    fileUrl: '', // Upload your CV PDF to Google Drive (set to "Anyone with link can view"), paste the direct link here
    // Example: 'https://drive.google.com/file/d/YOUR_FILE_ID/view'
  },

  skills: [
    // Core Languages
    'C++',
    'C',
    'Embedded C',
    'Python',
    'Bash',
    // Embedded OS & Platforms
    'Embedded Linux',
    'Linux Kernel',
    'Yocto Project',
    'U-Boot',
    'FreeRTOS',
    'RTOS',
    'LXC',
    'Docker',
    // Build & Debug Tools
    'BitBake',
    'GDB',
    'CMake',
    'Make',
    'Git',
    'Wireshark',
    // CI/CD
    'Jenkins',
    'GitLab CI/CD',
    // Hardware & Protocols
    'ARM Cortex',
    'RISC-V',
    'I2C',
    'UART',
    'SPI',
    'CAN',
    'MQTT',
    'TCP/IP',
    'TLS 1.3',
    // Security
    'Secure Boot',
    'Kernel Hardening',
    'TPM 2.0',
    'AWS IoT Security',
    'OTA Updates',
    // Methodologies
    'Agile',
    'Cross-compilation',
    'Multithreading',
    'OOP',
  ],

  experiences: [
    {
      company: 'Renie Tech',
      position: 'Senior Embedded Software / IoT Engineer',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/renie-tech',
    },
    {
      company: 'Devomech',
      position: 'Embedded Software / Linux Engineer',
      from: 'August 2021',
      to: 'July 2023',
      companyLink: 'https://www.devomech.com',
    },
    {
      company: 'AMT Electric',
      position: 'IoT Engineer',
      from: 'September 2019',
      to: 'August 2021',
      companyLink: '',
    },
  ],

  certifications: [
    // Add any certifications you have — e.g. AWS, Coursera, etc.
    // Leave empty array [] to hide this section
  ],

  educations: [
    {
      institution: 'University of Engineering and Technology, Peshawar',
      degree: 'Masters — Renewable Energy Engineering',
      from: '2017',
      to: '2019',
    },
    {
      institution: 'Ghulam Ishaq Khan Institute (GIKI)',
      degree: 'Bachelors — Electronic Engineering',
      from: '2013',
      to: '2017',
    },
  ],

  publications: [],

  blog: {
    source: 'dev',
    username: '', // Add your dev.to or medium username if you write articles
    limit: 3,
  },

  googleAnalytics: {
    id: '', // Optional: add your GA4 tag (G-XXXXXXXXXX) to track visitors
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'business', // Dark, professional theme — great for engineers
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'corporate',
      'business',
      'nord',
      'night',
      'dracula',
      'luxury',
    ],
  },

  footer: `Senior Embedded Linux Engineer • C++ • Yocto • Kernel Security • Available for projects`,

  enablePWA: true,
};

export default CONFIG;
