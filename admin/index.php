<!DOCTYPE html>
<html lang="en">

<head>

  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="../assets/css/login.css">


</head>
<!------ Include the above in your HEAD tag ---------->
<body>
<div class="sidenav">
         <div class="login-main-text ">
            <h1>CineTech</h1>
        
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               
                  <div class="form-group">
                     <label>Usuario</label>
                     <input type="text" id="usuario" class="form-control" placeholder="ingrese su usuario">
                  </div>
                  <div class="form-group">
                     <label>Contraseña</label>
                     <input type="password" id="pass" class="form-control" placeholder="ingrese su contraseña">
                  </div>
                  <button type="button" onclick="login()" class="btn btn-black">Iniciar Sesion</button>
              
            </div>
         </div>
      </div>
   </body>
</html>

      <script type="text/javascript">
         
         function login(){
            var usuario = document.getElementById("usuario").value
            var pass = document.getElementById("pass").value

            if (usuario == "admin" && pass == "admin") {

                window.location.href = "administracion-peliculas.php";
            }else{
               Swal.fire({
  title: '¡Credenciales Invalidas!',
  icon: 'error',
  padding: '3em',
})
            }
         }
      </script>