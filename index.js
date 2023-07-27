function writeCards(nameArray){
    let msgArray = [];
    for (let i=0; i < nameArray.length; i++){
        msgArray.push(`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`);
    }
    return msgArray;
}

function countDown(n){
    let count = n;
    while (count >= 0){
        console.log(count--);
    }
}