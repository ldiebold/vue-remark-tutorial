// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Tag',
        baseDir: './tags',
        pathPrefix: '/tags',
        template: './src/templates/Tag.vue'
      }
    },

    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './posts',
        pathPrefix: '/posts',
        template: './src/templates/Post.vue',
        includePaths: ['./src/sections'],
        route: '/blog/:slug',
        refs: {
          tags: 'Tag'
        }
      }
    }
  ]
}