import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {type: 'doc', id: 'getting-started/overview'},
      items: [
        'getting-started/logging-in',
        'getting-started/onboarding-wizard',
        {
          type: 'category',
          label: 'Navigating OpenTMS',
          link: {type: 'doc', id: 'getting-started/navigating/overview'},
          items: [
            'getting-started/navigating/app-bar',
            'getting-started/navigating/user-menu',
            'getting-started/navigating/notifications',
            'getting-started/navigating/chat',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Planboard',
      link: {type: 'doc', id: 'planboard/overview'},
      items: [
        'planboard/transport-files',
        'planboard/vehicle-outline',
        'planboard/layout-and-tabs',
      ],
    },
    {
      type: 'category',
      label: 'Transport',
      link: {type: 'doc', id: 'transport/overview'},
      items: [],
    },
  ],
};

export default sidebars;
