const express = require('express');

const app = express();

app.use((req, res) => {
    console.log('Inside middleware');
});

app.listen(3000);