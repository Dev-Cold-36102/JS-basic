
function dateofmonth() {
    let a=document.getElementById("month").value;
    switch (a) {
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            alert("that month has " + 31+" day");
            break;
        case '4':
        case '6':
        case '9':
        case '11':
            alert("that month has " +30+" day");
            break;
        case '2':
            alert("that month has "+28+" or "+29+" day");
            break;



    }
}