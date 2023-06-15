const mongoose = require('mongoose');

const Player = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  combat_class: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: false
  },
  location: {
    type: String,
    required: true
  }
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Player', Player);
