




function getArticleServ(funcPromise) {
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
          funcPromise(article1);
         }
       }
    }
    http.send();
}