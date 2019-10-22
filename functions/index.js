const functions = require('firebase-functions')
const { Nuxt } = require('nuxt-start')

const config = {
  dev: false, // disable hot reload for cloud functions, always leave to false
  debug: true, // leave true for testing change to false for production
  buildDir: 'nuxt',
};
const nuxt = new Nuxt(config)

exports.nuxtApp = functions.https.onRequest((req, res) => nuxt.render(req, res))