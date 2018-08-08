const app = require('./app.js');
const port = process.env.port || 3000;


app.listen(3000, () =>console.log(`Server started on ${port}`));