let creditscore=650;
let annualincome=50000;
let loanamount=20000;
if(creditscore>=600){
    if(annualincome>=40000){
        if(loanamount<=(annualincome*0.5)){
            console.log("eligible for loan");
        }else{
            console.log("loan amount exceeds 50% of annual income");
        }
    }else{
        console.log("annual income is less than 40000");
    }
}else{
    console.log("creditscore is less than 600");
}

 
