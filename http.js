var http=require("http")
var server=http.createServer((req,res)=>{
    res.write("sravani\n");
    res.write("sasi institute of technology & engineering\n");
    res.write("Tadepalligudem\n");
    res.write("ECE\n");
    res.end()

})
var port=5007;
server.listen(port,()=>{
    console.log("hi server started "+port);

})