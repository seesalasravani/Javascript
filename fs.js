let fs=reqire('fs')
fs.readfile('./topics.txt',(error,data)=>{
    if(error){
        console.log("file not found")
    }
    else{
        console.log(data.toString())
    }
})
console.log("before reading");