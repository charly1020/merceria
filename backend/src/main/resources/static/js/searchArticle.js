document.addEventListener('DOMContentLoaded', function() {
//var myInput = document.getElementById('sku');
});

var art1 = {};

function getRepository() {
  //Empieza Ajax (peticiones async)
  var http = new XMLHttpRequest();
  var sku = document.getElementById('sku').value;
  var url = "/articles" + "/" + sku;

   http.open("GET", url, true);

    http.onreadystatechange = function() {//Call a function when the state changes.
       if(http.readyState == 4 && http.status == 200) {
         console.log(http.responseText);
         var art1 = http.responseText;
         if(art1 != '') {
          article1 = JSON.parse(art1);

          showArticle(article1);

         }
       }
     }
      http.send();
}
function showArticle(article) {
  $(".prec").remove();
  $("#articlePrecio").append("<label class='prec' >" + article.precio + "</label>");

  $(".cant").remove();
  $("#articleQuantity").append("<label class='cant' >" + article.quantity + "</label>");

  $(".cost").remove();
  $("#articleCosto").append("<label class='cost' >" + article.costo  + "</label>");

  $(".typePro").remove();
  $("#articleTypeProd").append("<label class='typePro' >" + article.typeProd + "</label>")

  $("pricParc").remove();
  $("#articlePriceParcial").append("<label class='pricParc' >" + article.priceParcial + "</label>")

  $(".desc").remove();
  $("#articleDescription").append("<label class='desc' >" + article.description + " </label>");

  $(".parCost").remove();
  $("#articleParcialCost").append("<label class='parCost' >" + article.parcialCost + "</label>");


}
