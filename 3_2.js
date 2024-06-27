const number = 2025;
let templist_1 =`Цей рік (${number}) високосний`;
let templist_2 = `Цей рік (${number})не високосний`;
function a_leap_years(num){
if (num % 4 === 0 ) {
    console.log (templist_1)
} else {
    console.log(templist_2)
}
}
a_leap_years(number);