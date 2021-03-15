module.exports = app => {
  const { router, controller } = app
  const { auth } = app.middleware

  router.get('/', controller.home.index)

  router.get('/api/v1/user', controller.user.show)
  router.post('/api/v1/attend', controller.user.attend)
  router.post('/api/v1/gift', controller.user.gift)
}

