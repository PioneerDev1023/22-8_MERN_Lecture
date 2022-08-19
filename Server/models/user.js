const { model, Schema } = requrie('mongoose');

const UserSchema = new Schema({
    email: String,
    password: String,
    name: String,
    gender: String,
}, {
    timestamps: ['createAt', 'updateAt']
});

const User = model("User", UserSchema);

module.exports = User;