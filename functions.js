str="10kcoders"
rows=1,ind=0
while(str[ind]!=undefined){
    res=" "
    for(i=1;i<=rows;i++){
        if(str[ind]==undefined){
        res=res+"* "
        else
        res=res+str[ind]+" "
        ind++
}
        console.log(res);
        rows++
}
