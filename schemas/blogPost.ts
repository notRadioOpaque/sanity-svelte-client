const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}},
    {name: 'publishedAt', title: 'Published At', type: 'datetime'},
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
    },
    {name: 'excerpt', title: 'Excerpt', type: 'text'},
    {name: 'body', title: 'Body', type: 'array', of: [{type: 'block'}]},
  ],
}

export default blogPost
