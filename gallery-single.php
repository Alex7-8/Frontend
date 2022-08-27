<!DOCTYPE html>
<html lang="en">

<head>
  <script src="js/funciones.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>CINETECH</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="https://instructure-uploads.s3.amazonaws.com/account_192470000000000001/attachments/2022/480.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Cardo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: PhotoFolio - v1.0.0
  * Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body onload='cargar(<?php echo '"'.$_GET['id'].'"'; ?>), listas()' >

  <!-- ======= Header ======= -->
  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center  me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
        <!-- <img src="assets/img/logo.png" alt=""> -->
        <i class="bi bi-camera-reels"></i>
        <h1>CineTech</h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html">Inicio</a></li>
          
          <li class="dropdown"><a href="#"><span>Categorias</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>

              <div id="categorias"></div>
              
            </ul>
          </li>

          <li class="dropdown"><a href="#"><span>Ubicaciones</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>

              <div id="ubicaciones"></div>
              
            </ul>
          </li>
          <li><a href="admin/index.php">Administrar</a></li>
          <li><a href="about.php">Acerca de</a></li>
          
          
        </ul>
      </nav><!-- .navbar -->

      <div class="header-social-links">
        
      </div>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header><!-- End Header -->

  <main id="main" data-aos="fade" data-aos-delay="1500">

    
    <div id="detalle">
      

    </div>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer" class="footer">
    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>KJJsystem</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/ -->
        Designed by <a href="https://bootstrapmade.com/">KJJsystem</a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <div id="preloader">
    <div class="line"></div>
  </div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>


<!--Estado: true
Poster: "https://static.cinepolis.com/img/peliculas/31967/1/1/31967.jpg"
Title: "La viuda"
Type: "Suspenso"
Ubication: "Oklan"
Year: "2019"
description: "Frances es una dulce e ingenua joven que, tras la muerte de su madre, se muda a Manhattan. Cuando encuentra en el metro un bolso extraviado, decide entregárselo a su legítima dueña, Greta, una pianista viuda con una desesperada necesidad de compañía. Rápidamente se convierten en amigas, pero su amistad cambia cuando se descubren las siniestras intenciones de Greta."
imdbID: "P004"-->
</body>

</html>