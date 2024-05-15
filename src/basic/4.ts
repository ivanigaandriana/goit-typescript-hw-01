function showMessage(message:string):void{
    console.log(message)
}
showMessage('Hello');
function calc(num1:number, num2:number): number {
    return num1 +num2;
}

function customError(): string {
    throw new Error('Error');
}
let result = customError();