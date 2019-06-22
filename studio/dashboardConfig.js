export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d0eb828d4d4ac197cb075b6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gp6qrrx7',
                  apiId: '50320c8c-385f-4449-a770-145560028421'
                },
                {
                  buildHookId: '5d0eb8283b68c47d0ccacdb7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-oxn2251b',
                  apiId: '3d21a936-2b26-4e5a-9d3b-0416a7c197ec'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thuthuat/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-oxn2251b.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
