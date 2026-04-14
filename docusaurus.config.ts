import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenTMS Documentation',
  tagline: 'User guide for the OpenTMS Transport Management System',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://documentation.opentms.nl',
  baseUrl: '/',

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap',
      type: 'text/css',
    },
  ],

  organizationName: 'filogic',
  projectName: 'opentms-docs',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr'},
      nl: {label: 'Nederlands', direction: 'ltr'},
    },
  },

  // Inline script runs in <head> on every page load — redirects first-time
  // visitors to their preferred locale based on navigator.language, and
  // honors the user's last explicit choice on subsequent sessions.
  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `(function(){try{
  var LS='opentms-docs-locale';
  var SS='opentms-docs-locale-session';
  var path=window.location.pathname;
  var isNl=path==='/nl'||path.indexOf('/nl/')===0;
  var current=isNl?'nl':'en';
  var stored=localStorage.getItem(LS);
  var sessionInit=sessionStorage.getItem(SS);
  if(!sessionInit){
    sessionStorage.setItem(SS,'1');
    var desired=stored;
    if(!desired){
      var lang=((navigator.language||navigator.userLanguage||'')+'').toLowerCase();
      desired=lang.indexOf('nl')===0?'nl':'en';
      localStorage.setItem(LS,desired);
    }
    if(desired!==current){
      var rest=isNl?path.replace(/^\\/nl/,'')||'/':path;
      var target=desired==='nl'?('/nl'+(rest==='/'?'/':rest)):rest;
      window.location.replace(target+window.location.search+window.location.hash);
      return;
    }
  } else if(stored!==current){
    localStorage.setItem(LS,current);
  }
  }catch(e){}})();`,
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/filogic/opentms-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OpenTMS',
      logo: {
        alt: 'FiLogic OpenTMS',
        src: 'img/filogic-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/whats-new',
          label: "What's new?",
          position: 'left',
        },
        {
          to: '/changelog',
          label: 'Change log',
          position: 'left',
        },
        {
          href: 'https://app.opentms.nl',
          label: 'Login to OpenTMS',
          position: 'right',
          className: 'navbar-cta',
          'aria-label': 'Open the OpenTMS application in a new tab',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Welcome', to: '/'},
            {label: 'Getting Started', to: '/getting-started/overview'},
            {label: 'Planboard', to: '/planboard/overview'},
            {label: 'Transport', to: '/transport/overview'},
          ],
        },
        {
          title: 'FiLogic',
          items: [
            {label: 'filogic.nl', href: 'https://filogic.nl'},
            {label: 'Contact', href: 'mailto:info@filogic.nl'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FiLogic B.V. — OpenTMS is a product of FiLogic.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
