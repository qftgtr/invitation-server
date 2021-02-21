module.exports = () => {
  return async function historyApi (ctx, next) {
    if (ctx.url.startsWith('/api/v1')) {
      await next()
      return
    }

    ctx.url = '/'
    await next()
  }
}
