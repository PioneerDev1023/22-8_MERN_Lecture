const { model, Schema } = requrie('mongoose');

const UserSchema = new Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
}, {
    timestamps: ['createAt', 'updateAt']
});

const User = model("User", UserSchema);

module.exports = User;