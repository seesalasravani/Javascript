//generate 6 digits otp
function generateotp(){
    let otp=Math.floor(100000+Math.random()*900000);
    return otp;
}
console.log("6-digit otp:",generateotp());
