const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const withPWA = require('next-pwa')

module.exports = withPlugins([
  {
    distDir: 'build',
    future: { webpack5: true },
    typescript: {
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    env: {
      NEXTAUTH_URL: 'http://localhost:3000'
    }
  },
  [withPWA, { 
    pwa: {
      dest: 'public'
    }
  }],
  withSvgr
  // your other plugins here
])
