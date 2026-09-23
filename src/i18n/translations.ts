export type Lang = 'en' | 'id'

export const defaultLang: Lang = 'id'

export const translations = {
  en: {
    // Meta
    meta: {
      title: 'Rian Surya Pradhikta — Assistant IT Manager',
      description: 'Personal portfolio of Rian Surya Pradhikta — Assistant IT Manager specializing in network infrastructure, automation, and AI-powered tools.',
    },

    // Nav
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      badge: 'Open to collaboration',
    },

    // Hero
    hero: {
      tagline: 'Assistant IT Manager with a passion for infrastructure, automation, and building intelligent tools that help teams work more efficiently.',
      cta_projects: 'View Projects →',
      cta_contact: 'Get in Touch',
      scroll: 'Scroll',
    },

    // About
    about: {
      section_title: 'About',
      heading: 'IT Professional',
      heading_italic: 'building the future',
      bio1: 'I\'m Rian Surya Pradhikta, an Assistant IT Manager based in Indonesia with hands-on experience in managing infrastructure, networks, and server environments.',
      bio2: 'Currently working in the forex broker industry, I handle everything from network architecture to automation workflows — always looking for ways to leverage technology to solve real problems.',
      bio3: 'Outside of my main role, I build AI-powered tools and explore new technologies. ShortsCut AI is one of my latest projects — a tool that automatically finds viral moments in YouTube videos.',
      cta: 'Let\'s Connect →',
      cert: 'MikroTik Certified — MTCNA',
    },

    // Skills
    skills: {
      section_title: 'Skills',
      heading: 'What I',
      heading_italic: 'specialize in',
      items: [
        {
          icon: '🌐',
          title: 'Network Engineering',
          desc: 'MikroTik (MTCNA certified), routing, switching, firewall configuration, VPN setup, and network monitoring.',
        },
        {
          icon: '🖥️',
          title: 'Server & Infrastructure',
          desc: 'Linux/Ubuntu server management, VPS deployment, Docker, Coolify, Nginx reverse proxy, and SSL configuration.',
        },
        {
          icon: '⚙️',
          title: 'Automation & DevOps',
          desc: 'Workflow automation with n8n, CI/CD pipelines, GitHub Actions, process automation, and scripting with Python & Bash.',
        },
        {
          icon: '🤖',
          title: 'AI & Web Development',
          desc: 'Building AI-powered tools using Anthropic Claude API, Next.js, React, and integrating LLMs into practical applications.',
        },
        {
          icon: '🔒',
          title: 'IT Management',
          desc: 'Team coordination, IT project management, vendor relations, security policies, and IT asset management.',
        },
        {
          icon: '📊',
          title: 'System Monitoring',
          desc: 'Monitoring dashboard setup, alerting systems, log management, and ensuring high availability of critical systems.',
        },
      ],
    },

    // Projects
    projects: {
      section_title: 'Projects',
      heading: 'Selected',
      heading_italic: 'work',
      visit: 'Visit Project →',
      items: [
        {
          number: '01',
          badge: 'Featured',
          title: 'ShortsCut AI',
          desc: 'An AI-powered tool that automatically scans YouTube videos, detects the most viral moments, and generates short clips complete with captions and hashtags. Built with Next.js, Claude API, FFmpeg, and yt-dlp.',
          tags: ['Next.js', 'Claude API', 'FFmpeg', 'yt-dlp', 'n8n'],
          url: 'https://shortscut.pradhikta.my.id',
        },
        {
          number: '02',
          badge: '',
          title: 'Network Infrastructure',
          desc: 'Designed and implemented enterprise network infrastructure for a forex broker, including redundant links, VLAN segmentation, and automated failover.',
          tags: ['MikroTik', 'VLAN', 'BGP'],
          url: '',
        },
        {
          number: '03',
          badge: '',
          title: 'Automation Workflows',
          desc: 'Built n8n automation workflows for internal processes, reducing manual tasks and improving team efficiency across departments.',
          tags: ['n8n', 'Python', 'API Integration'],
          url: '',
        },
      ],
    },

    // Contact
    contact: {
      section_title: 'Contact',
      heading: 'Let\'s work',
      heading_italic: 'together',
      desc: 'Have a project to discuss or looking for collaboration opportunities? I\'m always open to interesting conversations.',
      cta_email: 'Send Email →',
    },

    // Footer
    footer: {
      rights: '© 2026 Rian Surya Pradhikta',
    },
  },

  id: {
    // Meta
    meta: {
      title: 'Rian Surya Pradhikta — Assistant IT Manager',
      description: 'Portfolio personal Rian Surya Pradhikta — Assistant IT Manager yang berspesialisasi di infrastruktur jaringan, otomasi, dan tools berbasis AI.',
    },

    // Nav
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      contact: 'Kontak',
      badge: 'Terbuka untuk kolaborasi',
    },

    // Hero
    hero: {
      tagline: 'Assistant IT Manager dengan passion di bidang infrastruktur, otomasi, dan membangun tools cerdas yang membuat tim bekerja lebih efisien.',
      cta_projects: 'Lihat Proyek →',
      cta_contact: 'Hubungi Saya',
      scroll: 'Gulir',
    },

    // About
    about: {
      section_title: 'Tentang',
      heading: 'Profesional IT yang',
      heading_italic: 'membangun masa depan',
      bio1: 'Saya Rian Surya Pradhikta, seorang Assistant IT Manager yang berbasis di Indonesia dengan pengalaman langsung dalam mengelola infrastruktur, jaringan, dan lingkungan server.',
      bio2: 'Saat ini bekerja di industri broker forex, saya menangani segalanya mulai dari arsitektur jaringan hingga alur kerja otomasi — selalu mencari cara memanfaatkan teknologi untuk menyelesaikan masalah nyata.',
      bio3: 'Di luar pekerjaan utama, saya membangun tools berbasis AI dan mengeksplorasi teknologi baru. ShortsCut AI adalah salah satu proyek terbaru saya — alat yang secara otomatis menemukan momen viral dalam video YouTube.',
      cta: 'Mari Terhubung →',
      cert: 'MikroTik Certified — MTCNA',
    },

    // Skills
    skills: {
      section_title: 'Keahlian',
      heading: 'Yang saya',
      heading_italic: 'kuasai',
      items: [
        {
          icon: '🌐',
          title: 'Rekayasa Jaringan',
          desc: 'MikroTik (bersertifikat MTCNA), routing, switching, konfigurasi firewall, setup VPN, dan monitoring jaringan.',
        },
        {
          icon: '🖥️',
          title: 'Server & Infrastruktur',
          desc: 'Manajemen server Linux/Ubuntu, deployment VPS, Docker, Coolify, Nginx reverse proxy, dan konfigurasi SSL.',
        },
        {
          icon: '⚙️',
          title: 'Otomasi & DevOps',
          desc: 'Workflow otomasi dengan n8n, CI/CD pipeline, GitHub Actions, otomasi proses, dan scripting dengan Python & Bash.',
        },
        {
          icon: '🤖',
          title: 'AI & Pengembangan Web',
          desc: 'Membangun tools berbasis AI menggunakan Anthropic Claude API, Next.js, React, dan mengintegrasikan LLM ke dalam aplikasi praktis.',
        },
        {
          icon: '🔒',
          title: 'Manajemen IT',
          desc: 'Koordinasi tim, manajemen proyek IT, hubungan vendor, kebijakan keamanan, dan manajemen aset IT.',
        },
        {
          icon: '📊',
          title: 'Monitoring Sistem',
          desc: 'Setup dashboard monitoring, sistem alerting, manajemen log, dan memastikan ketersediaan tinggi sistem-sistem kritis.',
        },
      ],
    },

    // Projects
    projects: {
      section_title: 'Proyek',
      heading: 'Karya',
      heading_italic: 'pilihan',
      visit: 'Kunjungi Proyek →',
      items: [
        {
          number: '01',
          badge: 'Unggulan',
          title: 'ShortsCut AI',
          desc: 'Tools berbasis AI yang secara otomatis memindai video YouTube, mendeteksi momen paling viral, dan menghasilkan klip pendek lengkap dengan caption dan hashtag. Dibangun dengan Next.js, Claude API, FFmpeg, dan yt-dlp.',
          tags: ['Next.js', 'Claude API', 'FFmpeg', 'yt-dlp', 'n8n'],
          url: 'https://shortscut.pradhikta.my.id',
        },
        {
          number: '02',
          badge: '',
          title: 'Infrastruktur Jaringan',
          desc: 'Merancang dan mengimplementasikan infrastruktur jaringan enterprise untuk broker forex, termasuk redundant link, segmentasi VLAN, dan automated failover.',
          tags: ['MikroTik', 'VLAN', 'BGP'],
          url: '',
        },
        {
          number: '03',
          badge: '',
          title: 'Workflow Otomasi',
          desc: 'Membangun workflow otomasi n8n untuk proses internal, mengurangi tugas manual dan meningkatkan efisiensi tim lintas departemen.',
          tags: ['n8n', 'Python', 'Integrasi API'],
          url: '',
        },
      ],
    },

    // Contact
    contact: {
      section_title: 'Kontak',
      heading: 'Mari bekerja',
      heading_italic: 'bersama',
      desc: 'Punya proyek yang ingin didiskusikan atau mencari peluang kolaborasi? Saya selalu terbuka untuk percakapan yang menarik.',
      cta_email: 'Kirim Email →',
    },

    // Footer
    footer: {
      rights: '© 2026 Rian Surya Pradhikta',
    },
  },
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/')
  if (lang === 'en' || lang === 'id') return lang
  return defaultLang
}

export function useTranslations(lang: Lang) {
  return translations[lang]
}

export function getOtherLang(lang: Lang): Lang {
  return lang === 'en' ? 'id' : 'en'
}

export function switchLangPath(currentPath: string, targetLang: Lang): string {
  const parts = currentPath.split('/')
  if (parts[1] === 'en' || parts[1] === 'id') {
    parts[1] = targetLang
    return parts.join('/')
  }
  return `/${targetLang}${currentPath}`
}
