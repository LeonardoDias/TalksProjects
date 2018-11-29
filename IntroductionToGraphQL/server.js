const { port } = require('./api/config');
const app = require('./api/app');

app.listen(port, () => {
    console.log('Connected');
    console.log('Server started and running on port '+port)
});