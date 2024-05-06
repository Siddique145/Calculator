var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var result = document.getElementById('result')

function calculator(sign){
    var num1Value = num1.value
    var num2Value = num2.value
    if(sign == '+')
        {
            result.innerText = parseInt(num1Value) + parseInt(num2Value)
        }
    if(sign == '-')
        {
            result.innerText = parseInt(num1Value) - parseInt(num2Value)
        }
    if(sign == '*')
        {
            result.innerText = parseInt(num1Value) * parseInt(num2Value)
        }
    if(sign == '/')
        {
            result.innerText = parseInt(num1Value) / parseInt(num2Value)
        }

}

var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds= document.getElementById("seconds")

var updated = setInterval(function(){
    var date =new Date()
    hours.innerText = date.getHours()
    minutes.innerText = date.getMinutes()
    seconds.innerText = date.getSeconds()
},1000
)