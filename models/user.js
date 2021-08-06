const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      //required: true,
      trim: true
    },
    middle_name: {
      type: String,
      //required: false,
      trim: true
    },
    last_name: {
      type: String,
      //required: true,
      trim: true
    },
    birthdate: {
      type: String,
      //required: true,
      trim: true
    },
    user_email: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
          throw new Error('Email is not valid.');
        }
      }
    },
    user_password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6
    },
    grade: {
      type: String,
      //required: true,
      trim: true
    },
    subject: {
      type: String,
      //required: true,
      trim: true
    }
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;