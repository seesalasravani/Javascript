var http=require("http")
var fs=require("fs");
var url=require("url");
var server=http.createServer((req,res)=>{
   // var g=fs.readFileSync("./html1.html");
    //console.log(g);
    //res.write(g)
    //res.end()
    //fs.unlink("index.txt",(err)=>{
     //   if(err){
       //     res.write("error")
         //   res.end()
       // }else{
         //   res.write("hi, deleted file successfully created")
           // res.end();
        //}
    //})
    console.log(req.url);
    var urll=url.parse(req.url)
    console.log(urll);
    res.write(JSON.stringify(urll))
    res.end()
    if(urll.pathname=="./product.txt"){
        fs.readFile("./product.txt","utf-8",(err,data)=>{
            if(data){
                res.write("data",data)
                res.end();
            }else{
                res.write("error",err)
                res.end();
            }
        })
    }else if(urll.pathname=="./html1.html" && req.method=="POST"){
        fs.readFile("./html1.html","utf-8",(err,data)=>{
            if(data){
                res.write("data",data)
                res.end();
            }else{
                res.write("error",err)
                res.end();
            }
        })

    }else{
        res.write("no match provide with eitheir products /html with post method ")
    }
    
});
var port=3005;
server.listen(port,()=>{
    console.log("server is running");

})