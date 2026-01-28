let year = parseInt(prompt("Hãy nhập năm: "));
if (year%4==0){
    if(year%100==0){
        if(year%400==0){
            alert(year+ " là năm nhuận.");
        }else{
            alert(year + " không phải là năm nhuận.");
        }
        }else{
            alert(year + " không phải là năm nhuận.");
        }
        }else{
            alert(year + " không phải là năm nhuận.");
}