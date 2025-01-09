const chatInputId = 'chat-input';
const chatMessagesId = 'chat-messages';

const receiveMessage = (message) => {
  // Implement me
}

const sendMessage = (message) => {
  // Implement me
};

const renderMessage = (author, message) => {
  // Implement me
}

const getMessageText = () => (
  document.getElementById(chatInputId).value
)

const clearMessageText = () => {
  document.getElementById(chatInputId).value = '';
}
