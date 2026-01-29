/*
let value =prompt('Bạn hãy nhập kiểu số','0');
if (value>0){
    alert(value+ " là Số dương");
} else if(value<0){
    alert(value+ " là Số Âm");
} else{
    alert(0);
}
*/
let value =prompt('Bạn hãy nhập kiểu số','0');
switch(value){
    case '5':
    alert(value+ " là Số dương");
    break;
    case '-5':
    alert(value+ " là Số Âm");
    break;
    case '0':
    alert(value);
    break;
    default:
    alert('Hãy nhập một trong 3 số sau: 5 hoặc -5 hoặc 0.');
}
