const express = require('express');
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// Much fake, very false
var faker = require('faker');
let fakeHacker = faker.name.findName();
let fakeVirus = faker.lorem.word();

// Routes
app.get("/", function(req, res)
{
   res.render("index.html", {"fakeHacker": fakeHacker});
});

app.get("/antivirus", function(req, res)
{
    res.render("antivirus.html");
});

app.get("/malware", function(req, res)
{
    res.render("malware.html");
});

app.get("/virii", function(req, res)
{
    res.render("virii.html", {"fakeVirus": fakeVirus});
});

// Starting server
app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Running Express server...");
});