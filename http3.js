const http = require("http");
const fs = require("fs");

const url=require("url");

const port = 3600;

const server = http.createServer((req, res) => {
  // fs.readFile("./data.txt",(err,data)=>{

  //     if(err){
  //         res.write("something went wrong");
  //         res.end();
  //     }

  //     else{
  //         res.write(data);
  //         res.end();
  //     }

  // })

//   const ip = "welcome";

  // fs.writeFile("./sample.js",ip,{flag:"a"},(err,data)=>{

  //     if(err){

  //         res.write("error");
  //         res.end();
  //     }

  //     else{

  //         res.write("data inserted successfully");
  //         res.end();
  //     }

  // })

  const parsedUrl=url.parse(req.url,true);

  const ip=parsedUrl.query.ip;

  fs.readFile("./sample.js", "utf-8", (err, data) => {
    if (err) {
      res.write("error occured");
      res.end();
    } else {
      let existingData = JSON.parse(data); // ["js"]
      console.log(existingData);
      existingData.push(ip);//["js","hello"]
      console.log(existingData);
      fs.writeFile("./sample.js", JSON.stringify(existingData), (err, data) => {         
      });
      res.write("inserted");
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log("server is up");
});
