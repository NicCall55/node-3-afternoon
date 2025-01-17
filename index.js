require('dotenv').config()
const express = require('express');
const massive = require('massive');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
})
.catch(err => console.log(err));

app.use(express.json());

app.post('/api/products', product_controller.create);
app.get('/api/products', product_controller.getAll);
app.get('/api/products', product_controller.getOne);
app.put('/api/products', product_controller.update);
app.delete('/api/products', product_controller.delete);


app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`)
});