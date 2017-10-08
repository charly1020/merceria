document.addEventListener('DOMContentLoaded', function() {

});

var itemSale = {};
var articleResponse;

function showArticle(article){

  articleResponse = article;

  $(".desc").remove();
  $("#articleDescription").append("<label class='desc' >" + article.description + " </label>");

  $(".cost").remove();
  $("#articleCost").append("<label class='cost' >" + article.cost  + "</label>");

  $(".prec").remove();
  $("#articlePrice").append("<label class='prec' >" + article.price + "</label>");

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
function validateItemSale(){
  if(itemSale.sku == null || itemSale.sku == "") {
     alert("ingrese el sku");
     return false;
  }
  if(itemSale.quantity == null || itemSale.quantity == ""){
      alert(" ingresa la cantidad del producto");
      return false;
  }
  return true;
}

function readValues(){
    itemSale.sku = document.getElementById('sku').value;
    itemSale.quantity = document.getElementById('quantity').value;
    itemSale.description = articleResponse.description;
    itemSale.cost = articleResponse.cost;
    itemSale.price = articleResponse.price;

}

function getArticle() {
    getArticleServ(showArticle);
}
//function calculation(quantity, price){
   //return = (parseInt(quantity) * parseInt(price))

//}
function saveItemSale() {

  readValues();

  if(!validateItemSale()) {
      return;
    }

  saveItemSaleHttp(itemSale, newRow);
}

