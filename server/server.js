const express = require('express');
const app = express();

const PORT = process.env.PORT || 8081;

app.get("/get", (req, res) => {
    res.json({
        "name" : "Saikhlum Narzary",
        "age" : 32,
        "gender" : "Male",
        "phone" : 9707760086,
        "address" : "#161/A, Sector 29/A, Chandigarh"
    });
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));


