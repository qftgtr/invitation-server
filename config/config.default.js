const path = require('path')
const fs = require('fs')
// const { xForwardedProtoResolver } = require('koa-sslify')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1613871965379_5481'

  config.middleware = ['historyApi']

  // config.proxy = true
  // config.ipHeaders = 'X-Forwarded-For'

  config.siteFile = {
    // '/favicon.ico': fs.readFileSync(path.join(__dirname, '../app/public/favicon.ico'))
  }

  // config.static = {
  //   dir: [
  //     { prefix: '/', dir: path.join(appInfo.baseDir, 'app/public') }
  //   ],
  //   gzip: true
  // }

  let domainWhiteList = []
  if (process.env.REDIRECT_WHITELIST) {
    domainWhiteList = domainWhiteList.concat(process.env.REDIRECT_WHITELIST.split(';'))
  }
  config.security = {
    domainWhiteList,
    csrf: false
  }

  config.cors = {
    origin: '*', // with "credentials: true" option, don't use orgin: '*'", domainWhiteList will be used
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  }

  config.multipart = {
    mode: 'file'
  }

  config.mongoose = {
    client: {
      url: process.env.MONGO_URL,
      options: {
        replicaSet: false,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASSWORD,
        retryWrites: false
      }
    }
  }

  return config
}
