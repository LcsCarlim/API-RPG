require('dotenv').config();
const config = require('.');

try {
  config.open(process.env.MONGODB_URI).then(() => {
    config.app.listen(process.env.PORT || 3333, () => console.log('Server running!'));
  });
} catch (error) {
  console.log('Error:', error.message);
}
