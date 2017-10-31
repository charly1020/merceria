
var sales = {};

function saveSale() {

  sales = {
                description: "semana1",
                itemsale: [
                    {
                        sku: "bla1",
                        description: "prod 1",
                        cost:12,
                        price:24,
                        quantity:3
                        }
                   ]
              };

    saveSaleInBknd(sales);
}

