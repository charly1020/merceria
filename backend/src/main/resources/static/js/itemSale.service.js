


function saveItemSaleHttp(itemSale,funcPromice) {

    var url = "/itemSale";
    var params = "sku=" + itemSale.sku + '&' + "description=" + itemSale.description + '&' + "cost=" + itemSale.cost + '&' + "price=" + itemSale.price  + '&' + "quantity=" + itemSale.quantity + '&' + "monto=" + itemSale.monto;

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
