const mongoose = require('mongoose');

const Character = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  card_name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  player_id: {
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

module.exports = mongoose.model('Character', Character);
