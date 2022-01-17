module.exports = {
  collections_config: {
    projects: {
      path: 'src/projects',
      parser: 'front-matter',
      url: '/projects/[slug]',
      output: true,
      name: 'Projects',
    }
  }
}