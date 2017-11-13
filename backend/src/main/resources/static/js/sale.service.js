

function saveSaleInBknd(sales){

  var url = "/sales";
  var token = $("meta[name='_csrf']").attr("content");
  var header = $("meta[name='_csrf_header']").attr("content");
  sales = JSON.stringify(sales);

  $.ajax({
    type: "POST",
    headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': token
    },
    url: url,
    data: sales,
    success: function (data){
                 sales = JSON.parse(sales);
                 alert("la venta se guardo");
               }
  });

}






