function convert() {
    let amount1 =document.getElementById('amount_id').value;
    let amount =parseFloat(amount1);
    let from =document.getElementById('from_id').value;
    let to =document.getElementById('to_id').value;
    let result;
    if (from == 'VN'){
        if(to == 'USD'){
            result = amount/23000;
        }
    }
    else {
        if(to == 'VN'){
            result = amount*23000;
        }
    }


    document.getElementById("output").innerHTML = "ketqua:"+result;
}