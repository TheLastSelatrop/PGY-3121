$(document).ready(function(){




    $('#traer-pk').click(function(){
        //Pokemon 1er llamado a la lista
        $.get({
            url: 'https://pokeapi.co/api/v2/pokemon?limit=12&offset='+ ((document.getElementById('demo').innerHTML)-1), // 795'
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
                             "<p class='card-text' id='stat"+detalle.id+"'>" + "</p>"+
                         "</div>"+
                        "</div>");
                        $.each(detalle.stats, function(i, stat){
                            console.log(stat)
                            $('#stat'+detalle.id).append("<span>" + stat.stat.name + " " + stat.base_stat + "</span> <br>")
                        })

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
