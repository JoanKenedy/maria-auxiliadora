const promociones = document.getElementById("promotiones");
const showPromociones = document.getElementById("show-promociones");
const hidePromociones = document.getElementById("hide-promociones");
const texto = `
 <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img
              src="img/promociones/promo-1.jpg"
              alt="Promoción brackets iniciales desde $500"
            />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img
              src="img/promociones/promo-2.jpg"
              alt="Promociones implante dental desde $15,000"
            />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-3.jpg" />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-4.jpg" />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-5.jpg" />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-6.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-7.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-8.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-9.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-10.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-11.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-12.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-13.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-14.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-15.jpg" />
          </a>
           <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-16.jpg" />
          </a>
              
            `;

showPromociones.addEventListener("click", () => {
  promociones.insertAdjacentHTML("beforeend", texto);
  showPromociones.style.display = "none";
  hidePromociones.style.display = "flex";
});
hidePromociones.addEventListener("click", () => {
  promociones.innerHTML = `
                         <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img
              src="img/promociones/promo-1.jpg"
              alt="Promoción brackets iniciales desde $500"
            />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img
              src="img/promociones/promo-2.jpg"
              alt="Promociones implante dental desde $15,000"
            />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-3.jpg" />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-4.jpg" />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-5.jpg" />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=525522617896"
          >
            <img src="img/promociones/promo-6.jpg" />
          </a>
                        `;
  showPromociones.style.display = "flex";
  hidePromociones.style.display = "none";
});
