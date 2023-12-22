const path = require('path');

module.exports = {
  title: 'The GraspOS Infrastracture',
  tagline: 'Next Generation Research Assessment to Promote Open Science',
  url: 'https://malta.imsi.athenarc.gr',
  baseUrl: '/graspos-infra',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'athenarc', // Usually your GitHub org/user name.
  projectName: 'gaspos-infra', // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    authors: {
      simon: {
        name: 'Simon Prickett',
        link: 'https://simonprickett.dev',
        title: 'Principal Developer Advocate at Redis',
        image: 'profile_pic_simon_prickett.jpg',
      },
      suze: {
        name: 'Suze Shardlow',
        link: 'https://suze.dev',
        title: 'Developer Community Manager at Redis',
        image: 'profile_pic_suze_shardlow.jpg',
      },
      ajeet: {
        name: 'Ajeet Raina',
        link: 'https://twitter.com/ajeetsraina',
        title: 'Former Developer Growth Manager at Redis',
        image: 'profile_pic_ajeet_raina.jpg',
      },
      talon: {
        name: 'Talon Miller',
        link: 'https://www.linkedin.com/in/talon-miller-005054109/',
        title: 'Technical Product Marketing Manager at Redis',
        image: 'profile_pic_talon_miller.jpg',
      },
      alex: {
        name: 'Alex Mikhalev',
        link: 'https://www.linkedin.com/in/alexmikhalev',
        title: 'AI/ML Architect at Nationwide Building Society',
        image: 'profile_pic_alex_mikhalev.jpg',
      },
      will: {
        name: 'Will Johnston',
        link: 'https://twitter.com/wjohnsto',
        title: 'Developer Growth Manager at Redis',
        image: 'profile_pic_will_johnston.jpg',
      },
      prasan: {
        name: 'Prasan Kumar',
        link: 'https://www.linkedin.com/in/prasankumar93/',
        title: 'Technical Solutions Developer at Redis',
        image: 'profile_pic_prasan_kumar.jpg',
      },
      ryan: {
        name: 'Ryan Gray',
        link: 'https://www.linkedin.com/in/ryan-t-gray/',
        title: 'Technical Consultant at Portainer.io',
        image: 'profile_pic_ryan_gray.jpg',
      },
      rahul: {
        name: 'Rahul Chauhan',
        link: 'https://www.linkedin.com/in/rchauhan2/',
        title: 'Corporate Solution Architect at Redis',
        image: 'profile_pic_rahul_chauhan.jpg',
      },
      julian: {
        name: 'Julian Mateu',
        link: 'https://www.linkedin.com/in/julian-mateu',
        title: 'Sr. Backend Software Engineer at Globality, Inc.',
        image: 'profile_pic_julian_mateu.jpg',
      },
      andrew: {
        name: 'Andrew Brookins',
        link: 'https://andrewbrookins.com/',
        title: 'Former Curriculum Software Engineer at Redis',
        image: 'profile_pic_andrew_brookins.jpg',
      },
      manuel: {
        name: 'Manuel Aguirre',
        link: 'https://github.com/manuelaguirre',
        title: 'Backend Engineer at Baseline Spain',
        image: 'profile_pic_manuel_aguirre.jpg',
      },
      guyroyse: {
        name: 'Guy Royse',
        link: 'http://guy.dev',
        title: 'Senior Developer Advocate at Redis',
        image: 'profile_pic_guy_royse.jpg',
      },
      christian: {
        name: 'Christian Mague',
        link: 'https://www.linkedin.com/in/chris-mague-35b1624/',
        title: 'Former Principal Field Engineer at Redis',
        image: 'profile_pic_christian_mague.jpg',
      },
      karan: {
        name: 'Karan Singh',
        link: 'https://www.linkedin.com/in/karansingh7',
        title: 'Senior Principal Architect & Developer Evangelist at Red Hat',
        image: 'profile_pic_karan_singh.png',
      },
      sumit: {
        name: 'Sumit Shatwara',
        link: 'https://www.linkedin.com/in/sumitshatwara',
        title: 'Solution Architect at Redis',
        image: 'profile_pic_sumit_shatwara.jpeg',
      },
      matthew: {
        name: 'Matthew Royal',
        link: 'https://www.linkedin.com/in/royalmatthew/',
        title: 'Consulting Engineer at Redis',
        image: 'profile_pic_matthew_royal.jpg',
      },
      steve: {
        name: 'Steve Lorello',
        link: 'https://twitter.com/slorello',
        title: 'Senior Field Engineer at Redis',
        image: 'profile_pic_steve_lorello.jpg',
      },
      bsb: {
        name: 'Brian Sam-Bodden',
        link: 'https://twitter.com/bsbodden',
        title: 'Developer Advocate at Redis',
        image: 'profile_pic_brian_sam-bodden.jpeg',
      },
      justin: {
        name: 'Justin Castilla',
        link: 'http://www.justincastilla.com',
        title: 'Senior Developer Advocate at Redis',
        image: 'profile_pic_justin_castilla.jpg',
      },
      kurt: {
        name: 'Kurt Moeller',
        title: 'Technical Enablement Manager, US at Redis',
        image: 'profile_pic_kurt_moeller.png',
      },
      elena: {
        name: 'Elena Kolevska',
        link: 'https://twitter.com/elena_kolevska',
        title: 'Technical Enablement Manager, EMEA at Redis',
        image: 'profile_pic_elena_kolevska.jpg',
      },
      jyotsna: {
        name: 'Jyotsna Gupta',
        title: 'Redis Insider',
        image: 'profile_pic_jyotsna_gupta.jpeg',
      },
      moiz: {
        name: 'Moiz Kapasi',
        title: 'Redis Insider',
        image: 'profile_pic_moiz_kapasi.jpeg',
      },
      michael: {
        name: 'Michael Owolabi',
        link: 'https://www.linkedin.com/in/imichaelowolabi/',
        title: 'Redis Insider',
        image: 'profile_pic_michael_owolabi.jpeg',
      },
      stevan: {
        name: 'Stevan Thomas',
        title: 'Redis Insider',
        image: 'profile_pic_stevan_thomas.png',
      },
      sachin: {
        name: 'Sachin Kottarathodi',
        title: 'Staff Software Engineer at Walmart Global Tech India',
        image: 'profile_pic_sachin_kottarathodi.jpg',
      },
      tug: {
        name: 'Tugdual Grall',
        title: 'Former Technical Marketing Manager at Redis',
        image: 'profile_pic_tugdual_grall.png',
      }
    },
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/logo.png',
      // ...
      googleTagManager: {
        trackingID: 'GTM-W8Z6BLQ',
      },
      prism: {
        additionalLanguages: [
          'csharp',
          'php',
          'ruby',
          'java',
          'rust',
          'elixir',
          'groovy',
          'sql',
          'typescript'
        ],
      },

      navbar: {
        style: 'dark',
        title: null,
        logo: {
          alt: 'GraspOS logo',
          src: 'img/logo.png',
        },
        hideOnScroll: true,
        items: [
          // {
          //   type: 'search',
          //   position: 'right',
          // },
          // {
          //   to: '/howtos/quick-start',
          //   activeBasePath: 'docs',
          //   label: 'Get started',
          //   position: 'right',
          // },
          // {
          //   href: 'https://launchpad.redis.com',
          //   label: 'Redis Launchpad',
          //   position: 'right',
          // },
          // {
          //   href: 'https://redis.com/try-free/',
          //   label: 'Try Free',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'GraspOS logo',
          src: 'img/logo.png',
          href: 'https://graspos.eu/',
        },
        links: [
          {
            title: 'Follow us on',
            items: [
              {
                label: 'Twitter',
                to: 'https://twitter.com/GraspOS_project',
              },
              {
                label: 'Mastodon',
                href: 'https://scicomm.xyz/@graspos',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/groups/9303131/',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Services Catalogue',
                href: 'https://graspos-services.athenarc.gr',
              },
              {
                label: 'Tools Catalogue',
                href: 'https://zenodo.org/communities/graspos-tools',
              },
              {
                label: 'Datasets',
                href: 'https://graspos-data.athenarc.gr',
              },
              {
                label: 'About',
                href: 'https://graspos.eu',
              }
            ],
          },
        ],
        copyright: 'This project has received funding from the European Union’s Horizon Europe framework programme under grant agreement No. 101095129. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Research Executive Agency. Neither the European Union nor the European Research Executive Agency can be held responsible for them.'
      },
      colorMode: {
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,
      }
    }),
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/redis-developer/redis-developer/edit/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/lp/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    path.resolve(__dirname, 'plugins', 'gtm'),
  ]
};
