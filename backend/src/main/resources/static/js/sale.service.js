

function saveSaleInBknd(sales){

  var url = "/sales";

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






