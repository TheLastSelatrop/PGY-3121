$(document).ready(function(){

    $('#traer-pk').click(function(){
        //Pokemon 1er llamado a la lista
        $.get({
            url: 'https://pokeapi.co/api/v2/pokemon?limit=1&offset=806',
            success: function(listaPK) {
 
             var tarjetas = $('#tarjetas')
             tarjetas.empty();
 
             console.log(listaPK.results)

             //Por cada elemento de la lista, otro llamado
             $.each(listaPK.results, function(indice, elemento){
                $.get({
                    url: elemento.url,
                    success: function(detalle) {
                        console.log(detalle)
                        tarjetas.append("<div class='card'>"+
                         "<img src='" + detalle.sprites.front_default + "' class='card-img-top' alt='" + elemento.name + "'>"+
                         "<div class='card-body'>"+
                             "<h5 class='card-title'>" + detalle.name + "</h5>"+
                             "<span class='card-text'>" + detalle.id + "</span> <br>"+
                             "<span class='card-text'>" + detalle.stats.0.base_stat + "</span> <br>"+
                             "<span class='card-text'>" + "DF: EXAMPLE BOTTOM TEXT" + "</span> <br>"+
                             "<span class='card-text'>" + "SP: EXAMPLE BOTTOM TEXT" + "</span> <br>"+
                         "</div>"+
                        "</div>");

                    },
                    error: function(error) {
                        console.error(error);
                    }
                });

                 
                 
                     
             });

            },
            error: function(error) {
                console.error(error);
            }
        })
     })
})
