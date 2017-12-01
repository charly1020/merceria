
var listSales = {};

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
               },
    error: function(err) {
        alert('No existe stock suficiente para realizar la venta.');
        console.log(err);
    }
  });
}

function getSalesServ(){
    var http = new XMLHttpRequest();
    var url = "/list";

    $.get(url, function(data){
        listSales = data;
        clearTableSale();
        for(var i=0; i < listSales.length ; i++){
            newRowSales(listSales[i]);
        }
    })

}






