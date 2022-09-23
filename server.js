const express = require('express');
const app = express();


const middleware1 = (req, res, next) => {
    console.log("middleware1");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("middleware2");
}



app.use(middleware1);


app.get('/', middleware2, function (req, res) {
    res.send("<h1>it using the global middleware 1 and also the middleware2</h1>");
});


app.get('/myPage', middleware2, function (req, res) {
    res.send("<h1>it using the global middleware 1 and also the middleware2</h1>");
});



app.get('/home', middleware2, function (req, res) {
    res.send("<h1>it using the global middleware 1 and also the middleware2</h1>");
});

app.get('./page', function (req, res) {
    req.send(`<h1>it is using only middleware1 </h1>`)
})


app.get('./about', function (req, res) {
    req.send(`<h1>it is using only middleware1 </h1>`)
})


app.get('./details', function (req, res) {
    req.send(`<h1>it is using only middleware1 </h1>`)
})


app.listen(2000, () => {
    console.log("serer is running");
})