const express = require("express");
const app = express();
const PORT = 3000;
const api = require("./api");

app.get("/fibonacci", (req, res) => {
    const { n } = req.query;

    if (n === undefined || n.length === 0 || isNaN(n)) {
        res.json({
            "status": "error",
            "error": "Query parameter N is missing/invalid"
        });
    }
    else {
        res.json({
            "status": "ok",
            "result": api.fibonacci(n)
        });
    }
});

app.get("/factorial", (req, res) => {
    const { n } = req.query;
    
    if (n === undefined || n.length === 0 || isNaN(n)) {
        res.json({
            "status": "error",
            "error": "Query parameter N is missing/invalid"
        });
    }
    else {
        res.json({
            "status": "ok",
            "result": api.factorial(n)
        });
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})