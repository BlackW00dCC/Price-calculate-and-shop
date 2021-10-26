
var co =(prompt("จำนวนสินค้าที่ต้องการ"))
var sum = 0 


for(var i = 1; i<=co; i++){

var mo =(prompt("รายการที่"+i+"ราคา" ))
sum = sum + parseInt(mo) 

document.getElementById("t_output").innerHTML += "รายกการที่ " + i + " ราคา " + mo + " บาท<br>" 
document.getElementById("a11").innerHTML = ("ทั้งหมดรวมแล้วมี "+co)
document.getElementById("a_mo").innerHTML = ("ราคารวม" + sum+" บาท")
   
}



//co = จำนวนสินค้าที่ต้องใส่  mo = ราคา

//แปลง จำนวนเต็ม parseInt 