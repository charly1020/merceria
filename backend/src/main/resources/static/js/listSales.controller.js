
var sales = [];

function newRowSales(sales){

    $('#tblviewSales tbody').append('<tr>' +
    '<td>' + sales.id + '</td>' +
    '<td>' + sales.description + '</td>' +
    '<td><a href="/sales/' + sales.id + '">Detalle de la venta</a></td>'+
    '</tr>');

}

function clearTableSale(){

    $("tbody").find('tr').remove()
}

function getSales() {
    getSalesServ();
}

function resolveResult() {
  console.log("resolve Result");
}

