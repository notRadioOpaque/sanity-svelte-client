const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'stack', title: 'Stack', type: 'array', of: [{type: 'string'}]},
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {hotspot: true},
    },
    {name: 'liveUrl', title: 'Live URL', type: 'url'},
    {name: 'repoUrl', title: 'Repo URL', type: 'url'},
  ],
}

export default project
