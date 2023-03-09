function countArguments() {
			var argCount = arguments.length;
			document.getElementById("result1").innerHTML = "Number of arguments: " + argCount;
		}



        function compareNumbers() {
  var num1 = parseInt(document.getElementById("number1").value);
  var num2 = parseInt(document.getElementById("number2").value);
  if (num1 < num2) {
    document.getElementById("result2").innerHTML = "-1";
  } else if (num1 > num2) {
    document.getElementById("result2").innerHTML = "1";
  } else {
    document.getElementById("result2").innerHTML = "0";
  }
}



function calculateFactorial() {
  var num = parseInt(document.getElementById("number").value);
  var factorial = 1;
  for (var i = num; i > 1; i--) {
    factorial *= i;
  }
  document.getElementById("result3").innerHTML = factorial;
}



function convertToNumber() {
  var digit1 = parseInt(document.getElementById("digit1").value);
  var digit2 = parseInt(document.getElementById("digit2").value);
  var digit3 = parseInt(document.getElementById("digit3").value);
  var number = digit1 * 100 + digit2 * 10 + digit3;
  document.getElementById("result4").innerHTML = number;
}


const form = document.getElementById('form');
		const resultDiv = document.getElementById('result5');

		form.addEventListener('submit', function(e) {
			e.preventDefault();

			const length = Number(document.getElementById('length').value);
			const width = Number(document.getElementById('width').value);

			let area;
			if (width) {
				// Якщо передано обидва параметри, то обчислюємо площу прямокутника
				area = length * width;
			} else {
				// Якщо передано лише один параметр, то обчислюємо площу квадрата
				area = length * length;
			}

			resultDiv.innerHTML = `Площа: ${area}`;
			form.reset();
		});






        function isPerfectNumber(number) {
			let sum = 0;
			for (let i = 1; i <= number/2; i++) {
				if (number % i == 0) {
					sum += i;
				}
			}
			return (sum == number && number != 0);
		}

		function checkNumber() {
			let inputNumber = document.getElementById("inputNumber").value;
			if (isPerfectNumber(inputNumber)) {
				document.getElementById("result6").innerHTML = inputNumber + " є досконалим числом";
			} else {
				document.getElementById("result6").innerHTML = inputNumber + " не є досконалим числом";
			}
		}