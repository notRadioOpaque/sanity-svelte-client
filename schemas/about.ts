const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'resumeLink',
      title: 'Resume Link',
      type: 'string',
    },
    {
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Technology Name',
              type: 'string',
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  {title: 'Language', value: 'language'},
                  {title: 'Framework / Library', value: 'framework'},
                  {title: 'CMS / Backend', value: 'backend'},
                  {title: 'Tool', value: 'tool'},
                  {title: 'Styling', value: 'styling'},
                ],
              },
            },
            {
              name: 'icon',
              title: 'Icon (Optional)',
              type: 'image',
              options: {hotspot: true},
            },
          ],
        },
      ],
    },
    {
      name: 'inspoList',
      title: 'Inspiration List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Title / Role',
              type: 'string',
            },
            {
              name: 'bio',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'social',
              title: 'Social Handle',
              type: 'string',
              description: 'Just the handle, e.g., @t3dotgg',
            },
            {
              name: 'socialLink',
              title: 'Social Link',
              type: 'string',
              description: 'Just the link, full link.',
            },
            {
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
            },
            {
              name: 'image',
              title: 'Profile Image',
              type: 'image',
              options: {hotspot: true},
            },
          ],
        },
      ],
    },
  ],
}

export default about
