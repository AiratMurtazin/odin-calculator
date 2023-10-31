'use strict'

// VARIABLES
const display = document.getElementById('display')

const clear = document.getElementById('clear')

const keys = document.querySelectorAll('.keys')

const number = document.querySelector('.number')
const oper = document.querySelector('.operator')

let displayString = ''
let displayArray = []

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
	}
}

function showAnswer() {
	displayArray = displayString.split(' ')
	let answer = operator(+displayArray[0], displayArray[1], +displayArray[2])
	if (answer) {
		displayString = ''
		displayString += answer
	}
	display.value = displayString
}

keys.forEach(key => {
	key.addEventListener('click', e => {
		e.preventDefault()
		if (e.target.classList.contains('number')) {
			displayString += e.target.textContent
		} else if (e.target.classList.contains('operator')) {
			showAnswer()
			displayString += ` ${e.target.textContent} `
		}
	})
})

equals.addEventListener('click', showAnswer)

clear.addEventListener('click', () => {
	displayString = ''
	displayArray = []
	display.value = ''
})
