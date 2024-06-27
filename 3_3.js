
const year_number = 27;
let year_word;
function how_old(year_number) {
    if (year_number % 10 === 1){
        year_word = "рік";
    } else if ((year_number % 10 === 2 || year_number % 10 === 3 || year_number % 10 === 4)) {
        year_word = "роки";
    } else {
        year_word = "років";
    }
console.log(`Вам ${year_number} ${year_word}`);
}
how_old(year_number);
