export default {
  widgets: [
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
                  buildHookId: '6063bfe767023500971a540b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wfnywjsj',
                  apiId: '100c5cdb-fa05-45cf-8bf8-079c2ff8b107'
                },
                {
                  buildHookId: '6063bfe7b0cbe51a2dae8bcf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-otcvuh47',
                  apiId: 'e95c6b9c-fca9-46b3-85ad-674c86dc0ec3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/snowyu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-otcvuh47.netlify.app', category: 'apps'}
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
