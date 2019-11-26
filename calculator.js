function add(){
    let a=parseFloat(document.getElementById("in1_id").value);
    let b=parseFloat(document.getElementById("in2_id").value);
    let c=document.getElementById("cal_id").value;
    let result =a+b;
document.getElementById("out_id").innerHTML="result" +result;
}
function sub() {
    let a=parseFloat(document.getElementById("in1_id").value);
    let b=parseFloat(document.getElementById("in2_id").value);
    let c=document.getElementById("cal_id").value;
    let result =a-b;
    document.getElementById("out_id").innerHTML="result" +result;
}
function mul() {
    let a=parseFloat(document.getElementById("in1_id").value);
    let b=parseFloat(document.getElementById("in2_id").value);
    let c=document.getElementById("cal_id").value;
    let result =a*b;
    document.getElementById("out_id").innerHTML="result" +result;
}
function divi() {
    let a=parseFloat(document.getElementById("in1_id").value);
    let b=parseFloat(document.getElementById("in2_id").value);
    let c=document.getElementById("cal_id").value;
    let result =a/b;
    document.getElementById("out_id").innerHTML="result=" +result;
}