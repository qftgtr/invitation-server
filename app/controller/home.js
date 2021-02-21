const fs = require('fs')
const path = require('path')
const { Controller } = require('egg')

module.exports = class HomeController extends Controller {
  async index (ctx) {
    ctx.body = await fs.promises.readFile(path.join(__dirname, '../public/index.html'), 'utf-8')
  }
}
