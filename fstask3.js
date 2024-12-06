var http=require("http")
var fs=require("fs")
var server=http.createServer((req,res)=>{
    //fs.readFile("./fstask4.js","utf-8",(err,data)=>{
      //  if(err){
        //    console.log("error",err);
          //  res.write(err)
          //  res.end();
        //}else{
         //   console.log("data",data);
           // res.write(data)
           // res.end();
        //}
        const ip = [
            { name: "Alice", age: 22, grade: "A" },
            { name: "Bob", age: 24, grade: "B" },
            { name: "Charlie", age: 23, grade: "A+" }
          ];
          const result=JSON.stringify(ip,null,2)
   fs.writeFile("./sample1.js",result,{flag:"a"},(err,data)=>{

       if(err){

           res.write("error");
           res.end();
       }

       else{
        res.write("file created sucessfully")
        res.end();
       }
    });

  
});
var port=3008;
server.listen(port,()=>{
    console.log("server is up"+port)
})