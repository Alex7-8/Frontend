
function buscarUbicacion(ubicacion){
  
 
  
  $.ajax({
    
    url: "https://movie.azurewebsites.net/api/cartelera?title=&ubication="
  
  }).done(function(data) {
     
var array = data.filter(item => item.Ubication == ubicacion);

       for (var i =0; i< array.length; i++){
      	let peli = '<div class="col-xl-3 col-lg-4 col-md-6"><div class="gallery-item h-100">'+
          '<img src="' + array[i].Poster + '" class="img-fluid" width="480" height="210"  alt="">' +
          '<div class="gallery-links d-flex align-items-center justify-content-center">'+
                '<a href="gallery-single.php?id='+array[i].imdbID+'" class="details-link"><i class="bi bi-link-45deg"></i></a>'+
              '</div>'+
            '</div>'+
          '</div>' 
     $('#respuesta_body').append(peli)
      }     
  
  });
}
//<div class="col-xl-3 col-lg-4 col-md-6">
 //           <div class="gallery-item h-100">
 //             <img src="assets/img/gallery/gallery-3.jpg" class="img-fluid" alt="">
 //             <div class="gallery-links d-flex align-items-center justify-content-center">
 //               <a href="editar-pelicula.php"  class="details-link"><i class="bi bi-link-45deg"></i></a>
//                <a href="gallery-single.html" class="details-link"><i class="bi bi-link-45deg"></i></a>
 //             </div>
 //           </div>
 //         </div><!-- End Gallery Item -->
function listas(){
  $.ajax({
    
    url: "https://movie.azurewebsites.net/api/cartelera?title=&ubication="
  
  }).done(function(data) {
        
       
let hash = {};
var array = data.filter(item => hash[item.Type] ? false : hash[item.Type] = true);

for (var x =0; x< array.length; x++){
      let cat = '<li><a href="categorias.php?categoria='+array[x].Type+'">'+array[x].Type+'</a></li>' 
     $('#categorias').append(cat)
      }


let hash2 = {};
var array2 = data.filter(item2 => hash2[item2.Ubication] ? false : hash2[item2.Ubication] = true);
console.log("ssssss"+JSON.stringify(array2)); 

for (var x =0; x< array2.length; x++){
      let ub = '<li><a href="ubicaciones.php?ubicacion='+array2[x].Ubication+'">'+array2[x].Ubication+'</a></li>' 
     $('#ubicaciones').append(ub)
      }
  });
}



function buscar(){
  
  
  $.ajax({
    
    url: "https://movie.azurewebsites.net/api/cartelera?title=&ubication="
  
  }).done(function(data) {

    var array = data.filter(item => item.Estado == true);
      
       for (var i =0; i< array.length; i++){
      let peli = '<div class="col-xl-3 col-lg-4 col-md-6"><div class="gallery-item h-100">'+
          '<img src="' + array[i].Poster + '" class="img-fluid" width="480" height="210"  alt="">' +
          '<div class="gallery-links d-flex align-items-center justify-content-center">'+
                '<a href="gallery-single.php?id='+array[i].imdbID+'" class="details-link"><i class="bi bi-link-45deg"></i></a>'+
              '</div>'+
            '</div>'+
          '</div>' 
     $('#respuesta_body').append(peli)
      }

     
  
  });
}

function buscarCategoria(categoria){
  
 
  
  $.ajax({
    
    url: "https://movie.azurewebsites.net/api/cartelera?title=&ubication="
  
  }).done(function(data) {
     
var array = data.filter(item => item.Type == categoria);

       for (var i =0; i< array.length; i++){
      	let peli = '<div class="col-xl-3 col-lg-4 col-md-6"><div class="gallery-item h-100">'+
          '<img src="' + array[i].Poster + '" class="img-fluid" width="480" height="210"  alt="">' +
          '<div class="gallery-links d-flex align-items-center justify-content-center">'+
                '<a href="gallery-single.php?id='+array[i].imdbID+'" class="details-link"><i class="bi bi-link-45deg"></i></a>'+
              '</div>'+
            '</div>'+
          '</div>' 
     $('#respuesta_body').append(peli)
      }

     
  
  });
}

function cargar(id){
  
  
  $.ajax({
    
    url: "https://movie.azurewebsites.net/api/cartelera?imdbID="+id
  
  }).done(function(data) {
     
     let det = `<div class="page-header d-flex align-items-center">
      <div class="container position-relative">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6 text-center">
            <img src="`+data.Poster+`"  width="210" height="285">
            <h3>`+data.Title+`</h3>
            <p>`+data.description+`</p>

          </div>
        </div>
      </div>
    </div><!-- End Page Header -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="row gy-4 justify-content-center">

          <div class="col-lg-3">
            <div class="info-item d-flex">
              <i class="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h4>Ubicacion:</h4>
                <p>`+data.Ubication+`</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-lg-3">
            <div class="info-item d-flex">
              <i class="bi bi-boxes flex-shrink-0"></i>
              <div>
                <h4>Tipo:</h4>
                <p>`+data.Type+`</p>
              </div>
            </div>
          </div><!-- End Info Item -->

          <div class="col-lg-3">
            <div class="info-item d-flex">
              <i class="bi bi-calendar-check-fill flex-shrink-0"></i>
              <div>
                <h4>Año:</h4>
                <p>`+data.Year+`</p>
              </div>
            </div>
          </div><!-- End Info Item -->

        </div>

       

      </div>
    </section>`
   $('#detalle').append(det)
  });
  
}

function agregarPelicula() {

    var url = 'https://movie.azurewebsites.net/api/cartelera';
    
    var codigo = document.getElementById("nuevoCodigo").value
    var titulo = document.getElementById("nuevoNombre").value
    var anio = document.getElementById("nuevoAnio").value
    var tipo = document.getElementById("nuevoGenero").value
    var poster = document.getElementById("nuevoPoster").value
    var descripcion = document.getElementById("nuevoDescripcion").value
    var ubicacion = document.getElementById("nuevoUbicacion").value


    if(codigo == "" || titulo == "" || anio == "" || tipo == "" || poster == "" || descripcion == "" || ubicacion == ""){
        Swal.fire({
  title: '¡Complete todos los campos!',
  icon: 'warning',
  padding: '3em',
})
    }
    else{
        var data = {
    imdbID: codigo,
    Title: titulo,
    Year: anio,
    Type: tipo,
    Poster: poster,
    Estado: true,
    description: descripcion,
    Ubication: ubicacion
  };

            Swal.fire({
        title: '¿Guardar nueva pelicula?',
        text: "¡Si no está seguro puede cancelar la acción !",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Guardar!'
    }).then(function(result){

        if(result.value){

           fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => {
                alert(error.message)
                console.error('Error:', error)
            })
            .then(response => {       

    document.getElementById("nuevoCodigo").value = '';
    document.getElementById("nuevoNombre").value = '';
    document.getElementById("nuevoAnio").value = '';
    document.getElementById("nuevoGenero").value = '';
    document.getElementById("nuevoPoster").value = '';
    document.getElementById("nuevoDescripcion").value = '';
    document.getElementById("nuevoUbicacion").value = '';
                
               Swal.fire({
  title: '¡Pelicula Agregada Exitosamente!',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `
})
            });

       setTimeout("location.href = 'administracion-peliculas.php';", 2000); 
        }

    })
        
    }
    

}


function editarPeliculaDetalle(id){
  
  $.ajax({
    
    url: "https://movie.azurewebsites.net/api/cartelera?imdbID="+id
  
  }).done(function(data) {
     
    document.getElementById("editarCodigo").value = data.imdbID;
    document.getElementById("editarNombre").value = data.Title;
    document.getElementById("editarAnio").value = data.Year;
    document.getElementById("editarGenero").value = data.Type;
    document.getElementById("editarPoster").value = data.Poster;
    document.getElementById("editarDescripcion").value = data.description;
    document.getElementById("editarUbicacion").value = data.Ubication;

  });

  
}


function editarPelicula(id){

  var url2 = "https://movie.azurewebsites.net/api/cartelera?imdbID="+id;
    
    var codigo = document.getElementById("editarCodigo").value
    var titulo = document.getElementById("editarNombre").value
    var anio = document.getElementById("editarAnio").value
    var tipo = document.getElementById("editarGenero").value
    var poster = document.getElementById("editarPoster").value
    var descripcion = document.getElementById("editarDescripcion").value
    var ubicacion = document.getElementById("editarUbicacion").value


    if(codigo == "" || titulo == "" || anio == "" || tipo == "" || poster == "" || descripcion == "" || ubicacion == ""){
        Swal.fire({
  title: '¡Complete todos los campos!',
  icon: 'warning',
  padding: '3em',
})
    }
    else{
        var data = {
    imdbID: codigo,
    Title: titulo,
    Year: anio,
    Type: tipo,
    Poster: poster,
    Estado: true,
    description: descripcion,
    Ubication: ubicacion
  };

        Swal.fire({
        title: '¿Está seguro que desea guardar los cambios?',
        text: "¡Si no lo está puede cancelar la acción!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, guardar cambios!'
    }).then(function(result){

        if(result.value){

           fetch(url2, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => {
                alert(error.message)
                console.error('Error:', error)
            })
            .then(response => {       
                
               Swal.fire({
  title: '¡Pelicula editada Exitosamente!',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `
})
               
            }); 
      setTimeout("location.href = 'administracion-peliculas.php';", 2000); 
       }

    })
        
    }
  
}


function buscarAdmin(){
  
  
  $.ajax({
    
    url: "https://movie.azurewebsites.net/api/cartelera?title=&ubication="
  
  }).done(function(data) {
     
       for (var i =0; i< data.length; i++){
       // 8. construyes el <tr> con tus datos de respuesta
     let tr = '<tr>'+

          '<td><img src="' + data[i].Poster + '" class="img-fluid" width="60" height="81"  alt=""></td>' +
          '<td>' + data[i].Title + '</td>' +
          '<td>' + data[i].Type + '</td>' +
          '<td>' + data[i].description + '</td>' +
          '<td>' + data[i].Ubication + '</td>' +
          '<td>' + data[i].Year + '</td>' +
          '<td><div class="btn-group">'+
          '<a href="editar-pelicula.php?id='+data[i].imdbID+'" class="btn btn-warning"><i class="bi bi-pen"></i></a>'+
          "<button class='btn btn-md btn-danger' onclick='ocultar("+'"'+data[i].imdbID+'"'+")'>Ocultar</button>"+
          '</div></td>' +
        '</tr>'
     
     // 9. usas append para agregar el tr al final
     $('#bodyTablePeliculas').append(tr)
      }

     
  $('#adminPeliculas').DataTable();
  });

}

function ocultar(id){

  Swal.fire({
        title: '¿Está seguro que desea ocultar la pelicula?',
        text: "¡Si no lo está puede cancelar la acción!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, ocultar!'
    }).then(function(result){

        if(result.value){

           $.ajax({
    
    url: "https://movie.azurewebsites.net/api/cartelera?imdbID="+id
  
  }).done(function(data) {
     
    var data = {
    imdbID: data.imdbID,
    Title: data.Title,
    Year: data.Year,
    Type: data.Type,
    Poster: data.Poster,
    Estado: false,
    description: data.description,
    Ubication: data.Ubication
  };
 
var url2 = "https://movie.azurewebsites.net/api/cartelera?imdbID="+id;
  fetch(url2, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => {
                alert(error.message)
                console.error('Error:', error)
            })
            .then(response => {       
                
               Swal.fire({
  title: '¡Pelicula Ocultada Exitosamente!',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://sweetalert2.github.io/images/nyan-cat.gif")
    left top
    no-repeat
  `
})
               
            }); 
      setTimeout("location.href = 'administracion-peliculas.php';", 2000); 

  });




       }

    })

}
