function tamgiac() {
    let i, j;
    let day = "";
    let height = parseInt(prompt("nhap chieu cao tam giac"));
    for (i = 1; i <= height; i++) {
        for (j = 1; j <= i; j++) {
            day += "*";
        }
        day += "<br/>";
    }
    for (i = height; i > 0; i--) {
        for (j = i; j > 0; j--) {
            day += "*";
        }
        day += "<br/>";
    }
    for (i = 1; i <= height; i++) {
        for (j = height; j > 0; j--) {
            if (j > i) {
                day += "&nbsp ";
            } else {
                day += "*";
            }

        }
        day += "<br/>";
    }
    for (i = 1; i <= height; i++) {
        for (j = 1; j <= height; j++) {
            if (j < i) {
                day += "&nbsp&nbsp";
            } else day += "*";
        }
        day += "<br/>";
    }
    document.getElementById("output1").innerHTML = day;
}

function rectangle() {
    let i, j, rectangle = "";
    let h = parseInt(prompt("enter the height:"));
    let w = parseInt(prompt("enter the width:"));
    for (i = 1; i <= h; i++) {
        if (i == 1 || i == h) {
            for (j = 1; j <= w; j++) {
                rectangle += "*";
            }
        } else {
            for (j = 1; j <= w; j++) {
                if (j == 1 || j == w) {
                    rectangle += "*";
                } else {
                    rectangle += "&nbsp&nbsp";
                }
            }
        }
        rectangle += "<br/>";
    }

    document.getElementById("output2").innerHTML = rectangle;

}

function lainganhang() {
    let a = parseInt(prompt("so tien goc="));
    let b = parseFloat(prompt("lai ngan hang hang thang(%)="));
    let c = parseInt(prompt("so thang gui="));
    let d = Math.pow((1 + b / 100), c);
    document.getElementById("lai").innerHTML = "tong tien nhan duoc sau " + c + " thang:" + a * d;
}