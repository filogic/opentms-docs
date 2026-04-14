import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'App navigation',
      link: {type: 'doc', id: 'app-navigation/overview'},
      items: [
        'app-navigation/overview',
        'app-navigation/signing-in',
        'app-navigation/app-shell',
        'app-navigation/main-menu',
        'app-navigation/user-menu',
      ],
    },
    {
      type: 'category',
      label: 'Planboard',
      link: {type: 'doc', id: 'planboard/overview'},
      items: [
        'planboard/overview',
        'planboard/transport-files',
        'planboard/vehicle-outline',
        'planboard/layout-and-tabs',
      ],
    },
  ],
};

export default sidebars;
