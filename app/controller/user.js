const { Controller } = require('egg')

module.exports = class UserController extends Controller {
  async show (ctx) {
    const { id } = ctx.query
    ctx.body = await ctx.model.User.findById(id)
  }

  async attend (ctx) {
    const { userId, attend, phone } = ctx.request.body
    ctx.body = await ctx.model.User.findByIdAndUpdate(userId, {
      attend, phone
    }, { new: true })
  }

  async party (ctx) {
    const { userId, party } = ctx.request.body
    ctx.body = await ctx.model.User.findByIdAndUpdate(userId, {
      party
    }, { new: true })
  }

  async gift (ctx) {
    const { userId, gift, wishes } = ctx.request.body
    ctx.body = await ctx.model.User.findByIdAndUpdate(userId, {
      gift, wishes
    }, { new: true })
  }
}
