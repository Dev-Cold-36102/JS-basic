function index() {
    let a=prompt('please enter your weight:');
    let b=prompt('please enter your height:');
    let bmi=a/(b*b);
    if (bmi < 18) {
        alert("Underweight");
        document.getElementById('output_id').innerHTML = "Underweight"
    } else if (bmi < 25.0) {
        alert("Normal");
        document.getElementById('output_id').innerHTML = "Normal"
    } else if (bmi < 30.0) {
        alert("Overweight");
        document.getElementById('output_id').innerHTML = "Overweight"
    } else {
        alert("Obese");
    document.getElementById('output_id').innerHTML="Obese" }
}