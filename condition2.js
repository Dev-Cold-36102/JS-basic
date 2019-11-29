function bai7() {
    let a=parseInt(prompt("a="));
    let b=parseInt(prompt("b="));
    let c=parseInt(prompt("c="));
    let delta=b*b-4*a*c;
    if (delta<0) {
        alert("phuong trinh vo nghiem");
    } else if (delta==0) {
        document.getElementById("x1").innerHTML="phuong trinh co nghiem kep x1=x2="+(-b/(2*a));
    } else {
        document.getElementById("x1").innerHTML="x1="+((-b+Math.sqrt(delta))/(2*a));
        document.getElementById("x2").innerHTML="x2="+((-b-Math.sqrt(delta))/(2*a));
    }

}
function bai9() {
    let a=parseInt(prompt("a="));
    let b=parseInt(prompt("b="));
    let c=parseInt(prompt("c="));
    if (a>0&&b>0&&c>0&&(a+b)>c&&(a+c)>b&&(b+c>a)) {
        alert("tao thanh tam giac");
    } else {
        alert("khong tao thanh tam giac");
    }
}
function bai12() {
    let a=parseInt(prompt("so tien goc="));
    let b=parseFloat(prompt("lai ngan hang hang thang(%)="));
    let c=parseInt(prompt("so thang gui="));
    let d=Math.pow((1+b/100),c);
    document.getElementById("lai").innerHTML="tong tien nhan duoc sau "+c+" thang:"+a*d;
}