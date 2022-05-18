// genera un array di 10 numeri casuali range 1- 100 senza doppioni.
const myArr = [];

while (myArr.length < 10) {
    let randNum = Math.floor(Math.random() * 100) +;

    let trovato = myArr.includes(random);

    if (trovato){
        console.log();
        myArr.push(randNum);
    }
}

console.log(myArr);


