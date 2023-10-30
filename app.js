'use strict'

// VARIABLES
const display = document.getElementById('display')

const clear = document.getElementById('clear')
const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const equals = document.getElementById('equals')

const keys = document.querySelectorAll('.keys')
const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const zero = document.getElementById('zero')
let displayString = ''
let displayArray = []
let operator = ''
// FUNCTIONS

function addNumbers(a, b) {
	return a + b
}

function subtractNumbers(a, b) {
	return a - b
}

function multiplyNumbers(a, b) {
	return a * b
}

function divideNumbers(a, b) {
	return a / b
}

function calculate(num1, operator, num2) {
	if (operator === '+') {
		display.value = addNumbers(num1, num2)
	}
	if (operator === '-') {
		display.value = subtractNumbers(num1, num2)
	}
	if (operator === '*') {
		display.value = multiplyNumbers(num1, num2)
	}
	if (operator === '/') {
		display.value = divideNumbers(num1, num2)
	}
}

keys.forEach(key => {
	key.addEventListener('click', e => {
		displayString += e.target.textContent
		if (e.target.textContent !== '=') {
			display.value += e.target.textContent
		}
	})
})

equals.addEventListener('click', () => {
	console.log(displayString)
	for (let i = 0; i <= displayString.length; i++) {
		if (
			displayString[i] === '+' ||
			displayString[i] === '-' ||
			displayString[i] === '*' ||
			displayString[i] === '/'
		) {
			displayArray = displayString.split(displayString[i])
			operator = displayString[i]
		}
	}
	calculate(+displayArray[0], operator, +displayArray[1])
})
