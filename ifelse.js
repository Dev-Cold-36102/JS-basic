function answer() {
    let answer=prompt('enter your answer:');
    if (answer=='ECMAScript') {
        document.getElementById('out_id').innerHTML='Right!';
    } else {
        document.getElementById('out_id').innerHTML='Didn’t know? ECMAScript!';
    }
}