const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      //required: true,
      trim: true
    },
    last_name: {
      type: String,
      //required: true,
      trim: true
    },
    birthdate: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      //required: true,
      trim: true,
      validate(value) {
        if (!value.match(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/)) {
          throw new Error('Email is not valid.');
        }
      }
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