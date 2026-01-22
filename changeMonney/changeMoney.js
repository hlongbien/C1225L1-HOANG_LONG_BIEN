function changeMoney() {
    let formMoney = document.getElementById("formMoney").value;
    let typeMoney1_1 = document.getElementById("typeMoney1_1").value;
    let typeMoney1_2 = document.getElementById("typeMoney1_2").value;
    let haveMoney;


    if (typeMoney1_1 == "USD" && typeMoney1_2 == "VND") {
        haveMoney = "Sẽ được: " + (formMoney * 26000) + " VNĐ";
    }
    else if (typeMoney1_1 == "VND"&& typeMoney1_2 =="USD"){
        haveMoney = "Sẽ được: "+ (formMoney / 26000) + " USD";
    }
    else if (typeMoney1_1 == "VND"&&typeMoney1_2=="VND") {
        haveMoney = "Sẽ được: " + formMoney + " VND";
    } else {
        haveMoney = "Sẽ được: " + formMoney + " USD";
    }
        
    document.getElementById("haveMoney").innerHTML = haveMoney;
}