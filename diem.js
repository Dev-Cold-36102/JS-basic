function diem() {
   let vatly =prompt('nhap diem vat ly');
    let hoahoc =prompt('nhap diem hoa hoc');
    let sinhhoc =prompt('nhap diem sinh hoc');
    let ly=parseInt(vatly);
    let hoa=parseInt(hoahoc);
    let sinh=parseInt(sinhhoc);
    document.write('tong diem='+ (ly+hoa+sinh));
    document.write('<br/>');
    document.write('diem trung binh='+ (ly+hoa+sinh)/3);

}