function login() {
    let username=prompt("please enter your username:");
    if (username=='Admin') {
        let pass=prompt("please enter your password");
        if (pass=="TheMaster") {
            alert('Welcome');
        } else if (pass=='null') {
            alert('Canceled');
        } else {
            alert('Wrong password');
        }
    } else if (username=='null') {
        alert('canceled');
    } else {
        alert("I don't know you");
    }
}