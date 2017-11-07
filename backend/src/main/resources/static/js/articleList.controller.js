document.addEventListener('DOMContentLoaded', function() {

});

var listArticle = [];
var article1 = [];

function getArticles() {
  //Empieza Ajax (peticiones async)
  var http = new XMLHttpRequest();
  var url = "/articles";

   $.get(url, function(data){
        listArticle = data;
        clearArticleTable();
        for(var i=0; i < listArticle.length ; i++){
            createRows(listArticle[i]);
        }

   }
   )
}

function createRows(article) {

  $('#tblArticles tbody').append('<tr>' +
  '<td>' + article.sku +'</td>' +
  '<td>' + article.price + '</td>'+
  '<td>' + article.quantity +'</td>' +
  '<td>' + article.cost + '</td>' +
  '<td>' + article.typeProd + '</td>' +
  '<td>' + article.priceParcial + '</td>' +
  '<td>' + article.category + '</td>' +
  '<td>' + article.description + '</td>' +
  '<td>' + article.parcialCost + '</td>' +
  '<td><input id="' + article.sku + '" type="button"  class="btn btn-primary" value="Eliminar"  onclick="deleteArticle(this)" /></td>'+
  '</tr>');

}

function clearArticleTable(){
 $("tbody").find('tr').remove()
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
          deleteArticle(b);
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
function deleteArticle(article){

$("sku").delete;
}


