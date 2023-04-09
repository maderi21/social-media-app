export default {
  name: 'pin',
  title: 'Pin',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'sting',
    },
    {
      name: 'about',
      title: 'Aitle',
      type: 'sting',
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'userId',
      title: 'UserID',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'UserID',
      type: 'string',
    },
    {
      name: 'userId',
      title: 'UserID',
      type: 'string',
    },
  ],
}
