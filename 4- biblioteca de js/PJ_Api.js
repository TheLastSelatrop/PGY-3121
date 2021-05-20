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

    
})