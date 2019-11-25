function nhapab() {
    var width=prompt("nhap chieu dai");
    var height=prompt("nhap chieu cao");
    document.write("width=" +width);
    document.write('<br/>');
    document.write("height=" +height);
    document.write('<br/>');
    let Width= parseInt(width);
    let Height= parseInt(height);
    document.write('the area=' +Width*Height);
}