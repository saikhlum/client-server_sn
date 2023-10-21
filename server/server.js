const express = require('express');
const app = express();

const PORT = process.env.PORT || 8081;

app.get("/get", (req, res) => {
    res.json({message : "Saikhlum Narzary"});
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));


