module.exports = app => {
  const { Schema, model } = app.mongoose

  return model('user', new Schema({
    _id: String,
    name: String,
    // pwd: String,
    // avatar: String,
  }, {
    typeKey: '$type',
    timestamps: true,
    toObject: {
      // virtuals: true,
      transform: (doc, ret) => {
        // delete ret.createdAt
        // delete ret.updatedAt
        delete ret.pwd
        return ret
      },
      versionKey: false
    }
  }))
}
