

function saveSale(){

  var http = new XMLHttpRequest();
  var url = "/sale";
  var params = "sku=" + sale.sku + '&' + "description=" + sale.description + '&' + "cost=" + sale.cost + '&' + "price=" + sale.price + '&' + "quantity=" + sale.quantity;

  http.open('POST',url,true);

  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function(){

    if(readyState == 4 && http.status == 200){
        console.log(http.responseText);
        var sale1 = http.responseText;
        if(sale1 != ''){
            alert("la venta se guardo")
        }else{
            alert("no se guardo la venta")
        }
        sale = JSON.parse(sale1);
    }
  }
      http.send(params);

}






