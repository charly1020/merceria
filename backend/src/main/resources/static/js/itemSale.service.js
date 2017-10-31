


function saveItemSaleHttp(itemSale,funcPromice) {
    //var http = new XMLHttpRequest();
    var url = "/itemSale";
    var params = "sku=" + itemSale.sku + '&' + "description=" + itemSale.description + '&' + "cost=" + itemSale.cost + '&' + "price=" + itemSale.price  + '&' + "quantity=" + itemSale.quantity;


  /*  http.open("POST", url, true);

    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
           console.log(http.responseText);
           var itemSale1 = http.responseText;
           if(itemSale1 != ''){
              alert("El Item de venta  se guardo")
           }else{
              alert("El Item de venta no se guardo")
           }
           itemSale= JSON.parse(itemSale1);

           funcPromice(itemSale);

        }
    }

    http.send(params);*/
    itemSale = JSON.stringify(itemSale);

   $.ajax({

        type: "POST",
         headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
        },
        url: url,
        data: itemSale,
        success: function(data){
                       itemSale= JSON.parse(itemSale);
                       funcPromice(itemSale);
        },
    });
}
