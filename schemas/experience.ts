const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {name: 'company', title: 'Company', type: 'string'},
    {name: 'position', title: 'Position', type: 'string'},
    {name: 'startDate', title: 'Start Date', type: 'date'},
    {name: 'endDate', title: 'End Date', type: 'date'},
    {name: 'summary', title: 'Summary', type: 'text'},
    {
      name: 'tech',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

export default experience
