document.addEventListener('DOMContentLoaded', function() {
  //var myInput = document.getElementById('sku');
  //myInput.value = "hola usuario, como estas?";
});

var article = {};

//refactorizar -> hacer que el codigo sea mas limpio y reutilizable.
function saveArticle() {

  leerValuesFromView();
  showValuesFromView();

  if(!validateArticle()) {
    return;
  }

  saveArticleHttp();
}

function leerValuesFromView() {

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
  //Empieza Ajax (peticiones async)
  var http = new XMLHttpRequest();
  var url = "/article";
  var params = "sku=" + article.sku + '&' + "price=" + article.price + '&' + "quantity=" + article.quantity + '&' + "cost=" + article.cost + '&' + "typeProd=" + article.typeProd + '&' + "priceParcial=" + article.priceParcial + '&' + "description=" + article.description + '&' + "parcialCost=" + article.parcialCost;

  //le decis que metodo http estas invocando (POST-GET-DELETE-UPDATE)
  http.open("POST", url, true);
  //informa al backend que tipo de info se le esta mandando
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
      console.log(http.responseText);
       var a = http.responseText;
      if(a != '') {
        alert("El articulo se guardo correctamente.");
    } else {
        alert("No se pudo guardar el articulo.");
    }
  }
}
  //peticion real al backend
  http.send(params);
}
