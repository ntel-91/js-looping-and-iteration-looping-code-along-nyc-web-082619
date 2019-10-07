function writeCards(array, event) {
    let ary = [];
    for (let i = 0; i < array.length; i++) {
        ary.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return ary;
}

function countdown(int) {
    while(int >= 0) {
        console.log(int);
        int--;
    }
}