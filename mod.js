var http=require("http")
var server=http.createServer((req,res)=>{
    console.log(req.method,"method");
   if(req.method=="GET"){
     const person = {
        name: "sravani",
        age: 22,
        occupation: "Software Engineer"
    };

    
    console.log(person.name); 
    console.log(person["age"]);
    res.end(JSON.stringify(person));

   }else if(req.method=="POST"){
    const person = {
        name: "sree",
        age: 23,
        occupation: "Software Engineer"
    };

    
    console.log(person.name); 
    console.log(person["age"]);
    res.end(JSON.stringify(person));
   
   }else{
    res.write("i dont know")
   }
   res.end();
})
var port=3007;
server.listen(port,()=>{
    console.log("hi running on" + "http://localhost:"+port)
})