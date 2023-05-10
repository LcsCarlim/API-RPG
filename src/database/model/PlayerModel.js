const mongoose = require('mongoose');

const Player = new mongoose.Schema({
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
  }
},
{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Player', Player);
