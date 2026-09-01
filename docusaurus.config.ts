import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'POREST Desk 가이드',
  tagline: '할 일·캘린더·가계부·자산을 한 곳에서',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // desk.porest.cloud/guide/ 경로 하나로 서빙한다 — 새 서브도메인 인증서를 새로 안 받으려고
  // 기존 desk 엣지 nginx 에 location 블록만 얹는 방식(README 참고).
  url: 'https://desk.porest.cloud',
  baseUrl: '/guide/',

  organizationName: 'lshdainty',
  projectName: 'porest-desk-guide',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // 문서가 곧 사이트 전체 — /docs/ 접두 없이 루트에서 바로
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lshdainty/porest-desk-guide/tree/main/',
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
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'POREST Desk 가이드',
      logo: {
        alt: 'POREST Desk',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: '설명서',
        },
        {
          href: 'https://desk.porest.cloud',
          label: 'Desk 열기',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `POREST Desk 사용자 설명서`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
