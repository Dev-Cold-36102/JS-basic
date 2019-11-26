
function check() {
    let year=prompt("enter the year:");
    let leapyear=false;
    let divisibleBy4=year%4==0;
    let divisibleBy100=year%100==0;
    let divisibleBy400=year%400==0;
    if (divisibleBy4) {
        if (divisibleBy100) {
            if (divisibleBy400) {
                leapyear=true;
            }
        } else  {
            leapyear=true;
        }
    }
    if (leapyear) {
        document.getElementById("out_id").innerHTML= year+'is a leap year';
    } else  {
        document.getElementById("out_id").innerHTML=year+' '+' is not a leap year';
    }
}