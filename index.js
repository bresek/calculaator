console.log('script connected')

// simple math functions

function add(num1,num2){
  return num1+num2
}
function subtract(num1,num2){
  return num1-num2
}
function multiply(num1,num2){
  return num1*num2
}
function divide(num1,num2){
  return num1/num2
}

//operate function- takes operation and two numerical inputs
function operate(operation,num1,num2){
  switch (operation) {
    case add:
      return add(num1,num2)
      break;
    case subtract:
      return subtract(num1,num2)
      break;
    case multiply:
      return multiply(num1,num2)
      break;
    case divide:
      return divide(num1,num2)
      break;
    default:

  }
}

//display button clicks

buttons = document.querySelectorAll('button')

buttons.forEach((button)=>{
  button.addEventListener("click", function(event){
    displayValue = event.target.innerText
    display(displayValue)
  })
})

disp = document.querySelector(".display")

//create function to pass argument that changes display value
function display(input){
  disp.innerText = input
}
