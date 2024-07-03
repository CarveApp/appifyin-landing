import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Pricing',
      href: getPermalink('#pricing'),
    },
    {
      text: 'Features',
      href: getPermalink('#features'),
    },
    {
      text: 'FAQ',
      href: getPermalink('#faq'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Support', href: 'mailto:hello@usecarveapp.com' },
        { text: 'Pricing', href: '#' },
        { text: 'Login', href: '#' },
      ],
    },
    {
      title: 'More',
      links: [
        { text: 'CarveApp', href: 'https://usecarveapp.com/' },
        { text: 'Blog', href: 'https://usecarveapp.com/blog/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
  ],
};
