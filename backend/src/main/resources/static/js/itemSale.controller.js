document.addEventListener('DOMContentLoaded', function() {

});

var art1 = {};

function showArticle(article){
  $(".desc").remove();
  $("#articleDescription").append("<label class='desc' >" + article.description + " </label>");

  $(".cost").remove();
  $("#articleCosto").append("<label class='cost' >" + article.costo  + "</label>");

  $(".prec").remove();
  $("#articlePrecio").append("<label class='prec' >" + article.precio + "</label>");

}
function newRow(itemSale){
     $('#tbl2Sale tbody').append('<tr>' +
     '<td>' + itemSale.sku +'</td>' +
     '<td>' + itemSale.description + '</td>' +
     '<td>' + itemSale.cost + '</td>' +
     '<td>' + itemSale.price + '</td>' +
     '<td>' + itemSale.quantity + '</td>' +
     '<td>' + itemSale.monto + '</td>'+
     '</tr>');
}
function validationDate(){
  if(itemSale.sku == null || itemSale.sku == "") {
     alert("ingrese el sku");
     return false;
  }
  if(itemSale.quantity == null || itemSale.quantity == ""){
      alert(" ingresa la cantidad del producto");
      return false;
  }
}

function saveArticle() {

    if(!validationDate()) {
        return;
    }
    saveArticleHttp();
}

function operation(precio , quantity){
    return (parseInt(precio) * parseInt(quantity));
}

function getArticle() {
    getArticleServ(showArticle);
}
function getArticleItemSale(){
    saveItemSaleServ(newRow)
}

function saveItemSale() {
  //leerValuesFromView();
  //showValuesFromView();

  /*if(!validateItemSale()) {
    return;
  }*/

  var itemSale = {
    sku: "bla",
    description: "bla2",
    cost: 23,
    price: 34,
    quantity: 2
  };


  saveItemSaleHttp(itemSale, newRow);
}


function getSale() {

  var http = new XMLHttpRequest();
  var sku = document.getElementById('sku').value;
  var url = "/itemSale" + "/" + sku;

   http.open("GET", url, true);

    http.onreadystatechange = function() {//Call a function when the state changes.
       if(http.readyState == 4 && http.status == 200) {
         console.log(http.responseText);
         var art1 = http.responseText;
         if(art1 != '') {
          itemSale = JSON.parse(art1);
         }
       }
     }
    http.send();
}

function clearArticleTable(){
 $("tbody").find('tr').remove()
}

//function saleArticle(){
  //  saveItemSaleServ(newRow);
//}
//function addNewSale(resolveSale){

//}
//function resolveSale(article){
  //  clearArticleTable(articles);
  //saveArticle(article);
  //operation(article);
//}
//function addSale(){
   // clearArticleTable(article);
//}
            //showArticle(itemSaleResponse);
            //newRow(itemSaleResponse);
            //operation(itemSaleResponse);

