console.log('script connected')

// simple math functions

function add(num1,num2){
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  return num1+num2
}
function subtract(num1,num2){
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  return num1-num2
}
function multiply(num1,num2){
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  return num1*num2
}
function divide(num1,num2){
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  return num1/num2
}

//operate function- takes operation and two numerical inputs
function operate(operation,num1,num2){
  switch (operation) {
    case '+':
      return add(num1,num2)
      break;
    case '-':
      return subtract(num1,num2)
      break;
    case "x":
      return multiply(num1,num2)
      break;
    case "÷":
      return divide(num1,num2)
      break;
    default:

  }
}

//display number clicks

buttons = document.querySelectorAll('button')
let inputs = []
let operator = ''

buttons.forEach((button)=>{
  button.addEventListener("click", function(event){
    if (event.target.classList.contains('num')){
      inputs.push(event.target.innerText) //need to change this to handle multidigit number
      let displayValue = inputs[inputs.length-1]
      display(displayValue)
    }else if (event.target.classList.contains('operator')){
      operator = event.target.innerText
    } else if (event.target.classList.contains('clear')){
      inputs = []
      operator = ''
      display('')
    }
    if (inputs.length >1){
      console.log(inputs[inputs.length-2])
      console.log(operator)
      console.log(inputs[inputs.length-1])
      result = operate(operator,inputs[inputs.length-2],inputs[inputs.length-1] )
      display(result)
      inputs = []
      operator = ''
      inputs.push(result)
    }

  })
})

disp = document.querySelector(".display")

//create function to pass argument that changes display value
function display(input){
  disp.innerText = input
}
