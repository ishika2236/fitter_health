const mongoose = require('mongoose')
const ConversationSchema = mongoose.Schema(
    {
      participants: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        }
      ],
      lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );
  
  module.exports = mongoose.model('Conversation', ConversationSchema);
  