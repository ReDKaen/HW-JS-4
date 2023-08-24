

function calculator(operation, oneNumber, twoNumber){
    switch(operation){
        case "+":
            return oneNumber + twoNumber;
        case "-":
            return oneNumber - twoNumber;
        case "*":
            return oneNumber * twoNumber;
        case "/":
            if(twoNumber !==0){
                return oneNumber / twoNumber;
            } else {
                console.log("Ділити на нуль не можна");
            }
        default:
            console.log("Ви ввели не правильну операцію");
    }

}
    
function summ(){
    let oneNumber = parseFloat(prompt("Введіть перше число"));
    let twoNumber = parseFloat(prompt("Введіть друге число"));
    let objSumm = prompt("Введіть математичну дію");

    let result = calculator(objSumm, twoNumber, oneNumber)
    console.log(`${oneNumber} ${objSumm} ${twoNumber} = ${result}`);
}





summ()