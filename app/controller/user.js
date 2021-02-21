const { Controller } = require('egg')

module.exports = class UserController extends Controller {
  async show (ctx) {
    const { id } = ctx.query
    ctx.body = await ctx.model.User.findById(id)
  }
}
