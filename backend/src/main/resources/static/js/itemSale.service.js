


function saveItemSaleHttp(itemSale,funcPromice) {
    var http = new XMLHttpRequest();
    var url = "/itemSale";
    var params = "sku=" + itemSale.sku + '&' + "description=" + itemSale.description + '&' + "cost=" + itemSale.cost + '&' + "price=" + itemSale.price  + '&' + "quantity=" + itemSale.quantity;


    http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
           console.log(http.responseText);
           var itemSale = http.responseText;

           if(itemSale != ''){
              alert("El Item de venta  se guardo")
           }else{
              alert("El Item de venta no se guardo")
           }
           funcPromice(itemSale);
        }
    }

    http.send(params);
}
