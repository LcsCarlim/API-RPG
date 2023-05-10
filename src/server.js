require('dotenv').config();
const config = require('.');

try {
  config.open(process.env.MONGODB_URI).then(() => {
    config.app.listen('https://api-rpg-gold.vercel.app', () => console.log('Server running!'));
  });
} catch (error) {
  console.log('Error:', error.message);
}
