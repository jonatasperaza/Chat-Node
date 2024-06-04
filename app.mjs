import axios from 'axios';

const apiKey = '';

async function createChatCompletion() {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant.'
          },
          {
            role: 'user',
            content: 'Hello!'
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error('Error creating chat completion:', error.response ? error.response.data : error.message);
  }
}

createChatCompletion();
