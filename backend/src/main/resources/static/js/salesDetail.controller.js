
function showGreeting() {
    var url = window.location.href;
    var urlParts = url.split('/');
    getSalesById(urlParts[4]);
}


function getSalesById(id ) {
  console.log('aca va a estar la implementacion: ' + id);
}

