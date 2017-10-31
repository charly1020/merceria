

function saveSaleInBknd(sales){

  //var http = new XMLHttpRequest();
  var url = "/sales";


  /*http.open('POST',url,true);

  http.setRequestHeader("Content-Type", "application/json");

  http.onreadystatechange = function(){

    if(http.readyState == 4 && http.status == 200){
        console.log(http.responseText);
        var sale1 = http.responseText;
        if(sale1 != ''){
            alert("la venta se guardo")
        }else{
            alert("la venta no se guardo")
        }
        sale = JSON.parse(sale1);
    }
  }

  var saleAsString = JSON.stringify(sales);
  http.send(saleAsString);*/

  sales = JSON.stringify(sales);

  $.ajax({
    type: "POST",
    headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
    },
    url: url,
    data: sales,
    success: function (data){
                 sales = JSON.parse(sales);
                 alert("la venta se guardo");
               }
  });

}






