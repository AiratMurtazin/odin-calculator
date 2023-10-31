'use strict'

// VARIABLES
const display = document.getElementById('display')

const clear = document.getElementById('clear')
const plus = document.getElementById('add')
const minus = document.getElementById('subtract')
const multi = document.getElementById('multiply')
const divid = document.getElementById('divide')
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
// let operator = ''
let onlyNumbersRegEx = /^\d+$/
// FUNCTIONS

function add(a, b) {
	return a + b
}
function subtract(a, b) {
	return a - b
}
function multiply(a, b) {
	return a * b
}
function divide(a, b) {
	return a / b
}

function operator(num1, operator, num2) {
	switch (operator) {
		case '+':
			return add(num1, num2)
			break
		case '-':
			return subtract(num1, num2)
			break
		case '*':
			return multiply(num1, num2)
			break
		case '/':
			return divide(num1, num2)
		default:
			console.log('Do your calculations!')
	}
}
