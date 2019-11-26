function calculator(operator) {
    let a=parseFloat(document.getElementById('in1_id').value);
    let b=parseFloat(document.getElementById('in2_id').value);
    let result;
    if (operator =='+') {
        result=a+b;
    } else if (operator=='-') {
        result=a-b;
    } else if (operator=='*') {
        result=a*b;
    } else {
        result=a/b;
    }
    document.getElementById("out_id").innerHTML="result=" +result;
}