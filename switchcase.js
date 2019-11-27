function exe1() {
    switch (browser) {
        case 'Edge':
            alert("You've got the Edge!");
            break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Okay we support these browsers too');
            break;
        default:
            alert('We hope that this page looks ok!');
    }
}
function exe2() {
    let a = prompt('a=');
    switch (a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert("2,3");
            break;
    }

}
function exe3() {
    let value=prompt('enter the number:');
    if (value > 0) {
        alert(1);
    } else if (value < 0) {
        alert(-1);
    } else {
        alert(0);
    }
}
function exe4() {
    let value=prompt('enter the number:');
    switch (value) {
        case 0:
            alert(0);
            break;

        default:
            if (value > 0) {
                alert(1);
            } else if (value < 0) {
                alert(-1);
            }
    }
}