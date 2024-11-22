const services = document.getElementById("services");
const showServices = document.getElementById("show-services");
const hideServices = document.getElementById("hide-services");
const txt = `
              <div class="card-servicio">
                <img src="img/dermatologia.svg" alt="Prótesis Imagotipo">
                <h4>Dermatología</h4>
              
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div>
              <div class="card-servicio">
                <img src="img/gastro.svg" alt="Prótesis Imagotipo">
                <h4>Gastroentorología</h4>
               
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
              <div class="card-servicio">
                <img src="img/ginecologia.svg" alt="Prótesis Imagotipo">
                <h4>Ginecologia y  Obstetricia</h4>
               
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div>
              <div class="card-servicio">
                <img src="img/medicina.svg" alt="Prótesis Imagotipo">
                <h4>Médicina</h4>
                
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
              <div class="card-servicio">
                <img src="img/nutricion.svg" alt="Prótesis Imagotipo">
                <h4>Nutrición</h4>
               
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
                 <div class="card-servicio">
                <img src="img/oftalmologia.svg" alt="Prótesis Imagotipo">
                <h4>Oftalmología y Optometría</h4>
                
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
                <div class="card-servicio">
                <img src="img/otorrino.svg" alt="Prótesis Imagotipo">
                <h4>Otorrinolaringología</h4>
                
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
               <div class="card-servicio">
                <img src="img/psicologia.svg" alt="Prótesis Imagotipo">
                <h4>Psicología</h4>
                
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
              <div class="card-servicio">
                <img src="img/rehabilitacion.svg" alt="Prótesis Imagotipo">
                <h4>Rehabilitación Física</h4>
                
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
              <div class="card-servicio">
                <img src="img/urologia.svg" alt="Prótesis Imagotipo">
                <h4>Urología</h4>
               
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
            `;

showServices.addEventListener("click", () => {
  services.insertAdjacentHTML("beforeend", txt);
  showServices.style.display = "none";
  hideServices.style.display = "flex";
});
hideServices.addEventListener("click", () => {
  services.innerHTML = `
                        <div class="card-servicio">
                <img src="img/dermatologia.svg" alt="Prótesis Imagotipo">
                <h4>Dermatología</h4>
              
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div>
              <div class="card-servicio">
                <img src="img/gastro.svg" alt="Prótesis Imagotipo">
                <h4>Gastroentorología</h4>
               
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div> 
              <div class="card-servicio">
                <img src="img/ginecologia.svg" alt="Prótesis Imagotipo">
                <h4>Ginecologia y  Obstetricia</h4>
               
                <a href="https://api.whatsapp.com/send?phone=525522617896">Ver más</a>
              </div>
                        `;
  showServices.style.display = "flex";
  hideServices.style.display = "none";
});
