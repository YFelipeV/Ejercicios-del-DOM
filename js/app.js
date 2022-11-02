function insertar() {
  var header2 = document.getElementById("header");
  var div1 = document.createElement("div");
  var content =
    '<nav class="navbar navbar-expand-lg bg-dark navbar-dark "><div class="container-fluid "><a class="navbar-brand text-info fs-3 font-weight-bold mr-2" href="#">CARS</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active fs-4" aria-current="page" href="#">INICIO</a></li><li class="nav-item"><a class="nav-link text-light fs-4" href="#">AYUDA</a></li><li class="nav-item dropdown fs-4"><a class="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">NOSOTROS</a><ul class="dropdown-menu"><li><a class="dropdown-item fs-4" href="#">AYUDA</a></li><li><a class="dropdown-menu" href="#">Another action</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item fs-4" href="#">Something else here</a></li></ul></li><li class="nav-item"><a class="nav-link "></a></li></ul><form class="d-flex" role="search"><input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"><button class="btn btn-outline-success" type="button">Search</button></form></div></div></nav>';
  console.log(content);
  div1.innerHTML = content;
  header2.appendChild(div1);
}

function insertar1() {
  var main = document.getElementById("main");
  var container = document.createElement("div");
  var content =
    '<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">  <div class="carousel-indicators">    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>  </div>  <div class="carousel-inner">    <div class="carousel-item active">      <img src="..." class="d-block w-100" alt="...">    </div>    <div class="carousel-item">      <img src="./imagenes/login.jpg" class="d-block w-100 " alt="...">    </div>    <div class="carousel - item">      <img src="..." class="d - block w - 100" alt="...">    </div> </div>  <button class="carousel - control - prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">    <span class="carousel - control - prev - icon" aria-hidden="true"></span>    <span class="visually - hidden">Anterior</span>  </button>  <button class="carousel - control - next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">    <span class="carousel - control - next - icon" aria-hidden="true"></span>    <span class="visually - hidden">Siguiente</span>  </button></div>';
  container.innerHTML = content;
  main.appendChild(container);
}
function insertar2() {
  var footer = document.getElementById("footer");
  var parr = document.createElement("p");
  parr.textContent = "REDES SOCIALES";
  parr.className = "p text-light text-center";
  footer.className = "footer bg-dark";
  footer.style = "height:20vh";
  footer.appendChild(parr);
}
