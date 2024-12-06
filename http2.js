var http = require("http");

var server = http.createServer((req, res) => {
    
    const person = {
        name: "sravani",
        age: 22,
        occupation: "Software Engineer"
    };

    
    console.log(person.name); 
    console.log(person["age"]); 

    
   // res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(person));
});

var port = 3003;
server.listen(port, () => {
    console.log("Server started on port " + port);
});
