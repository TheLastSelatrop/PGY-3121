

$(document).ready(function(){
    
    $('#traer-comida').click(function(){
        //COMIDA
       $.get({
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php', //URL a usar
        success: function(respuesta) {
            var tabla = $("#comidas tbody")
            tabla.empty()

            $.each(respuesta.categories, function(indice, elemento){
                tabla.append("<tr>"+
                        "<th>" + elemento.idCategory + "</th>"+
                        "<td>" + elemento.strCategory + "</td>"+
                        "<td><img src='" + elemento.strCategoryThumb + "' /></td>"+
                        "<td>" + elemento.strCategoryDescription + "</td>" +
                    "</tr>")
            });
        },
        error: function(errorResponse) {
            console.error(errorResponse);
        },
       });
    })

    $('#traer-sw').click(function(){
       //STAR WARS
       $.get({
           url: 'https://akabab.github.io/starwars-api/api/all.json',
           success: function(listaSW) {

            var tarjetas = $('#tarjetas')
            tarjetas.empty();

            console.log(listaSW)

            $.each(listaSW, function(indice, elemento){
                tarjetas.append("<div class='card'>"+
                        "<img src='" + elemento.image + "' class='card-img-top' alt='" + elemento.name + "'>"+
                        "<div class='card-body'>"+
                            "<h5 class='card-title'>" + elemento.name + "</h5>"+
                            "<p class='card-text'><b>Planeta de Origen:</b> " + elemento.homeworld + "</p>"+
                            "<p class='card-text'><b>Especie:</b> " + elemento.species + "</p>"+
                            "<p class='card-text'><a href='" + elemento.wiki + "' class='btn btn-primary' target='_blank'>Wiki</a></p>"+
                        "</div>"+
                    "</div>");
            });

           },
           error: function(error) {
               console.error(error);
           }
       })
    })

    $('#traer-pk').click(function(){
        //Pokemon 1er llamado a la lista
        $.get({
            url: 'https://pokeapi.co/api/v2/pokemon?limit=1&offset=806"',
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

     $('#traer-marvel').click(function(){
        //Marvel
        var PRIV_KEY = "37fafc89e443344d000759ac31aefc70180f4f02";
        var PUBLIC_KEY = "dbb3041a457cd17a26f5c1caf639467b";
        var ts = new Date().getTime(); //Time stamp
        var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

        var url = 'https://gateway.marvel.com:443/v1/public/characters';

        $.get({
            url: url,
            data: {
                ts: ts,
                apikey: PUBLIC_KEY,
                hash: hash
            },
            success: function(listaMarvel) {
 
             var tarjetas = $('#tarjetas')
             tarjetas.empty();
 
             console.log(listaMarvel.data.results)

             $.each(listaMarvel.data.results, function(indice, elemento){
                 tarjetas.append("<div class='card'>"+
                         "<img src='" + elemento.thumbnail.path + "/portrait_xlarge." + elemento.thumbnail.extension+"' class='card-img-top' alt='" + elemento.name + "'>"+
                         "<div class='card-body'>"+
                             "<h5 class='card-title'>" + elemento.name + "</h5>"+
                             "<p class='card-text'>"+ elemento.description + "</p>"+
                        "</div>"+
                     "</div>");
             });

            },
            error: function(error) {
                console.error(error);
            }
        })
     })

     $('#traer-spotify').click(function(){
        //Spotify
        var idArtista = $('#id-artista').val()
        var token = $('#token').val()

        var url = 'https://api.spotify.com/v1/artists/' + idArtista +  '/albums?include_groups=album&market=CL';

        $.get({
            url: url,
            headers: {
                Authorization: 'Bearer ' + token
            },
            success: function(listaSpotify) {
 
             var tarjetas = $('#tarjetas')
             tarjetas.empty();
 
             console.log(listaSpotify.items)

             $.each(listaSpotify.items, function(indice, elemento){
                 tarjetas.append("<div class='card'>"+
                         "<img src='" + elemento.images[1].url + "' class='card-img-top' alt='" + elemento.name + "'>"+
                         "<div class='card-body'>"+
                             "<h5 class='card-title'>" + elemento.name + "</h5>"+
                             "<p class='card-text'><b>Pistas: </b>"+ elemento.total_tracks + "</p>"+
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

