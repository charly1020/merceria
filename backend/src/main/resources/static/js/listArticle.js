document.addEventListener('DOMContentLoaded', function() {

});

var listArticle = [];
var article1 = [];

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
  '<td><input id="' + article.sku + '" type="button"  class="btn btn-primary" value="Eliminar"  onclick="deleteArticle(this)" /></td>'+
  '</tr>');

}

function clearArticleTable(){
}

function deleteArticle(btn){
   var sku = btn.id;
   var http = new XMLHttpRequest();
   var url = "/article" + "/" + sku;

   http.open("DELETE", url, true);

   http.onreadystatechange = function(){
          if(http.readyState == 4 && http.status == 200){
          console.log(http.responseText);
          var b = http.responseText;
          if(b != ''){
          eliminarArticle(b);
            if(http.status == 200){
                alert("el articulo se elimino")
            }else{
                alert("el articulo no se pudo eliminar")
            }

          }
       }
   }
   http.send();
}
function eliminarArticle(article){

//delete article1['sku']
$("sku").delete;
}
