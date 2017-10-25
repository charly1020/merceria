




function getArticleServ(funcPromise) {
  //Empieza Ajax (peticiones async)
  //var http = new XMLHttpRequest();
  var sku = document.getElementById('sku').value;
  var url = "/articles" + "/" + sku;

//wrapper jquery the request to backend
    $.get( url, function(data) {
           article1 = data;
           funcPromise(article1);
          }
    );

}