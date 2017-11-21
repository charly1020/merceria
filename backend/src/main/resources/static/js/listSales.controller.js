
var sales = [];

function newRowSales(sales){

    $('#tblviewSales tbody').append('<tr>' +
    '<td>' + sales.id + '</td>' +
    '<td>' + sales.description + '</td>' +
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
