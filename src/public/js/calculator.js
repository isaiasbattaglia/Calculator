

var expression= document.getElementById("display").value;
var last_calc_id = document.getElementById("last_calc_id").value;
var result=0;
 

$('#save').click(function(e) {
    e.preventDefault();
    console.log(expression);
    
    $.post('/save', {id: last_calc_id, exp: expression})
     
});

$('#last').click(function(e) {
    e.preventDefault();
    $.get('/'+last_calc_id+'/last')
        .done(data => {
            expression = data.expression;
            console.log(expression);
            updateDisplay();
            
        })
        
     
});
 
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
        if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        expression= expression+ target.value;
        updateDisplay();
        return;
    }

    if (target.classList.contains('equal-sign')) {
        ExpressionSolver(expression);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    if (target.classList.contains('db')) {
        dbManager(target);
        updateDisplay();
        return;
    }

    expression = expression + target.value;
    updateDisplay();
});

function resetCalculator() {
    expression="";
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = expression;
}

function ExpressionSolver(e) {
    var expr = calc.parse(expressionString.replace(new RegExp("<br>", 'g'), ""));
    return res = expr.eval();
}



  