document.addEventListener('DOMContentLoaded', function() {
//var myInput = document.getElementById('sku');
});

var art1 = {};

function getArticle() {
    getArticleServ(resolveResult);
}

function resolveResult(article1) {
  showArticle(article1);
}

function showArticle(article) {
  $(".prec").remove();
  $("#articlePrice").append("<label class='prec' >" + article.price + "</label>");

  $(".cant").remove();
  $("#articleQuantity").append("<label class='cant' >" + article.quantity + "</label>");

  $(".cost").remove();
  $("#articleCost").append("<label class='cost' >" + article.cost  + "</label>");

  $(".typePro").remove();
  $("#articleTypeProd").append("<label class='typePro' >" + article.typeProd + "</label>")

  $(".pricParc").remove();
  $("#articlePriceParcial").append("<label class='pricParc' >" + article.priceParcial + "</label>")

  $(".desc").remove();
  $("#articleDescription").append("<label class='desc' >" + article.description + " </label>");

  $(".parCost").remove();
  $("#articleParcialCost").append("<label class='parCost' >" + article.parcialCost + "</label>");


}
