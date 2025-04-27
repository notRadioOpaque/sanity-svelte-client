const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'string',
    },
    {
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'domain',
      title: 'Domain / Type',
      type: 'string',
      description: 'e.g. Portfolio, eCommerce, SaaS, Dashboard',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      description: '1-2 line summary of the project',
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        {name: 'live', title: 'Live URL', type: 'url'},
        {name: 'repo', title: 'Repository URL', type: 'url'},
        {name: 'demo', title: 'Demo Video URL', type: 'url'},
      ],
    },
    {
      name: 'stack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'What was your role? (e.g. Frontend Developer, Fullstack Dev)',
    },
    {
      name: 'otherImages',
      title: 'Gallery / Additional Images',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'challenges',
      title: 'Challenges',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'solutions',
      title: 'Solutions',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'experienceGained',
      title: 'Experience Gained',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'insights',
      title: 'Insights',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'conclusion',
      title: 'Conclusion',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}

export default project
