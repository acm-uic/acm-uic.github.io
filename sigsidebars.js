/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sigsSidebar: [
    'Overview',
    {
      type: "category",
      label: "Active",
      collapsed: false,
      items: [
        'siggame',
        'sigsysadmin',
      ],
    },
    {
      type: "category",
      label: "Inactive",
      items: [],
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
