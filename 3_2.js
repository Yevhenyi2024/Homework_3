const number = 1900;
let templist_1 =`Цей рік (${number}) високосний`;
let templist_2 = `Цей рік (${number})не високосний`;
let year_leap = 365.24219
let year = 1
function a_leap_years(num){
if (num % 4 === 0 && num % 100 !== 0){
    console.log (templist_1)
} else if(num % 400 === 0 ){
    console.log(templist_1)
}else{
    console.log(templist_2)
}
}
a_leap_years(number);