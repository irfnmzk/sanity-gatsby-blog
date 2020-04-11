export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e91574babd8ccf242284d04',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p6t2ozii',
                  apiId: '2cc58f4e-3274-4db5-94c4-07722fae64e8'
                },
                {
                  buildHookId: '5e91574bfdd5cf6707218c14',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pvcjw96e',
                  apiId: '75440d4b-081d-46bb-88ad-b2142f74377d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Arukio/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pvcjw96e.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
