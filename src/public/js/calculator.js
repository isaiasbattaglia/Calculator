

var expression= document.getElementById("display").value;
var result = document.getElementById("result").value;
var last_calc_id = document.getElementById("last_calc_id").value;
 

$('#save').click(function(e) {
    e.preventDefault();
    console.log(expression);
    $.post('/save', {id: last_calc_id, exp: expression})
     
});

$('#last').click(function(e) {
    e.preventDefault();
    $.get('/'+last_calc_id+'/last')
        .done(data => {
            expression = data.expression
            result = ExpressionSolver(data.expression);
            console.log(expression);
            updateDisplay();
        }) 
});
 
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    
    if(expression === 'Hi!'){
        expression= '';
    }

    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        if(result !== ""){
            var s = target.value;
            expression = result.toString() + s;
            result = "";
        }
        else{
            expression = expression + target.value;
        }
        updateDisplay();
        return;
    }

    if (target.classList.contains('equal-sign')) {
        result = ExpressionSolver(expression);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }


    if (target.classList.contains('dot')) {
        expression = expression + "."
        updateDisplay();
        return;
    }
    

    expression = expression + target.value;
    result = "";  
    updateDisplay();
});

function resetCalculator() {
    expression = "";
    result = "";
}

function updateDisplay() {
    const display = document.querySelector('.calculator-expression');
    const res = document.querySelector('.calculator-result');
    display.value = expression;
    res.value = result;

}

function ExpressionSolver(e) {
    var calc = new MathCalc();
    var expr = calc.parse(e);
    if (expr.error) {
        return "Syntax Error";
    }
    else {
        return expr.eval();
    }
}