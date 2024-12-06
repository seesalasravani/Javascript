let distance =25;
let fare=0;
if(distance<=5){
    fare=5;
}
else if(distance<=10){
    fare=10;

}
else if(distance<=20){
    fare=20;
}
else{
    fare=30;
    for(let i=21;i<=distance;i++){
        fare+=5;

    }
}
console.log("fare for",distance,"km is:$",fare);