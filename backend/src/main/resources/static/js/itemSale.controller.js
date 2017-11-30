

var itemSale = {};
var itemSales = [];
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
     '<td>' + itemSale.amount + '</td>'+
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
function getAmount(price, quantity){
  itemSale.amount = (parseFloat(itemSale.price) * parseFloat(itemSale.quantity))
}

function addItemToTable() {

  readValues();
  itemSales.push(itemSale);

  if(!validateItemSale()) {
      return;
   }
   getAmount(itemSale.price, itemSale.quantity);

   newRow(itemSale);

  return itemSale;
}


