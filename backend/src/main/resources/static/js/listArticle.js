document.addEventListener('DOMContentLoaded', function() {

});

var listArticle = [];

function getArticles() {
  //Empieza Ajax (peticiones async)
  var http = new XMLHttpRequest();
  var url = "/articles";

   http.open("GET", url, true);

    http.onreadystatechange = function() {//Call a function when the state changes.
       if(http.readyState == 4 && http.status == 200) {
         console.log(http.responseText);
         var a = http.responseText;
         if(a != '') {
          listArticle = JSON.parse(a);

          for(var i=0; i < listArticle.length ; i++){
           crearFilas(listArticle[i]);
          }
         }
       }
     }

    //peticion real al backend
   http.send();
}

function crearFilas(article) {

  $('#tblArticles tr:last').after('<tr>' +
  '<td>' + article.sku +'</td>' +
  '<td>' + article.precio + '</td>'+
  '<td>' + article.quantity +'</td>' +
  '<td>' + article.costo + '</td>' +
  '<td>' + article.typeProd + '</td>' +
  '<td>' + article.priceParcial + '</td>' +
  '<td>' + article.category + '</td>' +
  '<td>' + article.description + '</td>' +
  '<td>' + article.parcialCost + '</td>' +
  '</tr>');

}