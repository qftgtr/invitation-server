module.exports = app => {
  const { Schema, model } = app.mongoose

  return model('user', new Schema({
    _id: String,
    name: String,
    gender: String,
    attend: String,
    phone: String,
    noParty: Boolean,
    party: String,
    gift: String,
    wishes: String,
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
