$(document).ready(function(){
    
    

    $('#traer-snk').click(function(){
       //Shingeki
       $.get({
           url: 'https://my-json-server.typicode.com/FrapoDeveloper/json-db/personajes',
           success: function(listaSW) {

            var tarjetas = $('#tarjetas')
            tarjetas.empty();

            console.log(listaSW)

            $.each(listaSW, function(indice, elemento){
                tarjetas.append("<div class='card'>"+
                        "<img src='" + elemento.img + "' class='card-img-top' alt='" + elemento.name + "'>"+
                        "<div class='card-body'>"+
                            "<h5 class='card-title'>" + elemento.nombre + "</h5>"+
                            "<p class='card-text'><b>Edad:</b> " + elemento.years + "</p>"+
                            "<p class='card-text'><b>Fecha de nacimiento:</b> " + elemento.birthdate + "</p>"+
                            "<p class='card-text'><b>Descripción:</b> " + elemento.description + "</p>"+
                        "</div>"+
                    "</div>");
            });

           },
           error: function(error) {
               console.error(error);
           }
       })
    })

    
    $('#traer-saint').click(function(){
        //saint seiya
        $.get({
            url: 'https://saint-seiya-api.herokuapp.com/api/characters',
            success: function(listaSW) {
 
             var tarjetas = $('#tarjetas')
             tarjetas.empty();
 
             console.log(listaSW)
 
             $.each(listaSW, function(indice, elemento){
                 tarjetas.append("<div class='card'>"+
                         "<img src='" + elemento.image + "' class='card-img-top' alt='" + elemento.name + "'>"+
                         "<div class='card-body'>"+
                             "<h5 class='card-title'>" + elemento.name + "</h5>"+
                             "<p class='card-text'><b>Genero:</b> " + elemento.gender + "</p>"+
                             "<p class='card-text'><b>Nacionalidad:</b> " + elemento.nationality + "</p>"+
                             "<p class='card-text'><b>Ataques:</b> " + elemento.attacks + "</p>"+
                         "</div>"+
                     "</div>");
             });
 
            },
            error: function(error) {
                console.error(error);
            }
        })
     })
     
    //geolocalizacion
     var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
      };
      
      function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };
      
      navigator.geolocation.getCurrentPosition(success, error, options);
})
