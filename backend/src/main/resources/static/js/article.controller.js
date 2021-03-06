document.addEventListener('DOMContentLoaded', function() {

});

var article = {};

//refactorizar -> hacer que el codigo sea mas limpio y reutilizable.
function saveArticle() {

  readValuesFromView();
  showValuesFromView();

  if(!validateArticle()) {
    return;
  }

  saveArticleHttp();
}

function readValuesFromView() {

    article.sku = document.getElementById('sku').value;
    article.price = document.getElementById('price').value;
    article.quantity = document.getElementById('quantity').value;
    article.cost = document.getElementById('cost').value;
    article.typeProd = document.getElementById('typeProd').value;
    article.priceParcial = document.getElementById('priceParcial').value;
    article.description = document.getElementById('description').value;
    article.parcialCost = document.getElementById('parcialCost').value;
}

function showValuesFromView() {
  console.log("El valor sku seleccionado es: " + article.sku);
  console.log("El valor precio del articulo es: " + article.price);
  console.log("La cantidad ingresada es: " + article.quantity);
  console.log("El costo del articulo es: " + article.cost);
  console.log("El tipo de producto seleccionado es: " + article.typeProd);
  console.log("El precio parcial del articulo es: " + article.priceParcial);
  console.log("La descripcion del producto es: " + article.desription);
  console.log("El precio parcial es: " + article.parcialCost);
}

function validateArticle() {
  //validar que se haya completado los campos requeridos, y que esten correctos
  //"" -> es un valor de tipo string, pero sin caracteres;
  //undefine -> signifca que no se creo la variable;
  //nul -> signica que la variable apunta a un vacio en memoria.

  /*VALIDACIONES DE CAMPOS REQUERIDOS*/
  if(article.sku == null || article.sku == "") {
    alert("Ingrese el sku");
    return false;
  }
  if(article.price == null || article.price == ""){
    alert("ingrese el precio");
    return false;
  }
  if(article.quantity == null || article.quantity == ""){
    alert(" ingrese la cantidad del producto");
    return false;
  }
  if(article.cost == null || article.cost == ""){
    alert("ingrese el costo del producto");
    return false;
  }
  if(article.typeProd == null || article.typeProd == ""){
    alert("ingrese el tipo de producto");
    return false;
  }
  if(article.priceParcial == null || article.priceParcial == ""){
    alert("ingrese el precio parcial");
    return false;
  }
  if(article.description == null || article.description == ""){
    alert("ingrese la descripcion ");
    return false;
  }
  if(article.parcialCost == null || article.parcialCost == ""){
    alert("Ingrese el precio parcial");
    return false;
  }

  /*VALIDACIONES DE CAMPOS VALIDOS*/

  return true;

}

function saveArticleHttp() {

  var url = "/article";
  var params = "sku=" + article.sku + '&' + "price=" + article.price + '&' + "quantity=" + article.quantity + '&' + "cost=" + article.cost + '&' + "typeProd=" + article.typeProd + '&' + "priceParcial=" + article.priceParcial + '&' + "description=" + article.description + '&' + "parcialCost=" + article.parcialCost;

  var articleStr = JSON.stringify(article);

  //Based in this link
  //https://docs.spring.io/spring-security/site/docs/current/reference/html/csrf.html
   var token = $("meta[name='_csrf']").attr("content");
   var header = $("meta[name='_csrf_header']").attr("content");

  $.ajax({
        type: "POST",
        headers: {
                  'Accept': 'application/json',
                   'Content-Type': 'application/json',
                   'X-CSRF-TOKEN': token
        },
        url: url,
        data: articleStr,
        success: function(data){
                       alert("El articulo se guardo correctamente.");
         }
  });

}
