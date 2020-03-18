// var app = require("express")(); // combining 2 lines in one
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//======================================================
// Creating Routes
app.get("/", function(req, res) {
  //   res.send("welcome to Home page");
  res.render("home");
});

app.get("/myroute/:variable", function(req, res) {
  var variable = req.params.variable;
  //   res.send("The variable you entered is " + variable);
  res.render("myroute", { myVar: variable });
});

app.get("/posts", function(req, res) {
  var posts = [
    { title: " Post 1", author: "Author 1" },
    { title: " Post 2", author: "Author 2" },
    { title: " Post 3", author: "Author 3" }
  ];
  res.render("posts", { posts: posts });
});

//======================================================
app.listen(3000, function() {
  console.log("The Node server has started on Port 3000");
});
