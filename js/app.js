function insertar() {
  var header2 = document.getElementById("header");
  var div1 = document.createElement("div");
  var content =
    '<nav class="navbar navbar-expand-lg bg-warning text-dark "><div class="container-fluid "><a class="navbar-brand  fs-4 font-weight-bold mr-2 text-danger" href="#">CARS</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active fs-5 text-dark " aria-current="page" href="#">INICIO</a></li><li class="nav-item"><a class="nav-link text-light fs-5 text-dark " href="#">AYUDA</a></li><li class="nav-item dropdown fs-4"><a class="nav-link text-light fs-5 dropdown-toggle text-dark " href="#" role="button" data-bs-toggle="" >NOSOTROS</a></a></li></ul><form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success" type="button">Search</button></form></div></div></nav>';
  console.log(content);
  div1.innerHTML = content;
  header2.appendChild(div1);
}

function insertar1() {
  var main = document.getElementById("main");
  var container = document.createElement("div");
  var content =
    '<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>    </div><div class="carousel-inner"><div class="carousel-item active"><img src="./imagenes/audi1-r-8.jpg" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Etiqueta de la primera diapositiva</h5><p>Algún contenido placeholder representativo para la primera diapositiva.</p></div></div><div class="carousel-item"><img src="./imagenes/audi1.jpg" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block"><h5>Etiqueta de la segunda diapositiva</h5><p>Algún contenido placeholder representativo para la segunda diapositiva.</p></div></div><div class="carousel-item"><img src="./imagenes/slider4.jpg" class="d-block w-100" alt="..."><div class="carousel-caption d-none d-md-block">          <h5>Etiqueta de la tercera diapositiva</h5><p>Algún contenido placeholder representativo para la tercera diapositiva.</p></div></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" ata-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Anterior</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">     <span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Siguiente</<span></button></div><div class="container-xxl py-5" id="equipo"> <div class="container">  <div class="text-center wow fadeInUp"><h6 class="text-primary text-uppercase">Cars</h6>  <h1 class="mb-5">Nuestro equipo</h1></div><div class="row g-4"> <div class="col-lg-3 col-md-6 wow fadeInUp"><div class="team-item"><div class="position-relative overflow-hidden"></div><div class="bg-light text-center p-4"><h5 class="fw-bold mb-0">Camilo Gonzales</h5><small>CEO</small></div></div></div><div class="col-lg-3 col-md-6 wow fadeInUp"><div class="team-item"><div class="position-relative overflow-hidden"></div><div class="bg-light text-center p-4"><h5 class="fw-bold mb-0">Javier Torres</h5><small>Gerente Financiero</small></div></div></div><div class="col-lg-3 col-md-6 wow fadeInUp"><div class="team-item"><div class="position-relative overflow-hidden"></div><div class="bg-light text-center p-4"><h5 class="fw-bold mb-0">Luis Diaz</h5><small>Gerente Comercial</small></div></div></div><div class="col-lg-3 col-md-6 wow fadeInUp"><div class="team-item"><div class="position-relative overflow-hidden"></div><div class="bg-light text-center p-4"><h5 class="fw-bold mb-0">Pablo Montero</h5><small>Gerente Marketing</small></div></div></div></div></div></div>';
  container.innerHTML = content;
  main.appendChild(container);
}
function insertar2() {
  var footer = document.getElementById("footer");
  var parr = document.createElement("div");
  var content= 
  '<h4 class="text-center text-light f-5">REDES SOCIALES</h4>  <div class=" d-flex justify-content-center"> <a class="mx-3 icon" href="https://www.facebook.com/"><img src="./iconos/facebook.svg" alt=""></a><a class="mx-3 icon4" href="https://twitter.com/home?lang=es"><img src="./iconos/twitter.svg" alt=""></a><a class="mx-3 icon2" href="https://www.instagram.com/?hl=es-la"><img src="./iconos/instagram.svg" alt=""></a>  <a class="mx-3 icon3" href="https://github.com/YFelipeV/trabajo-pablo"><img src="./iconos/github.svg" alt=""></a></div><address class="text-light text-center"><em><b>Desarrollado por</b>Yoan felipe segura villamarin</em></address>';
  footer.className="bg-dark"
  parr.innerHTML=content;
  footer.appendChild(parr);
  
}

