import"./Footer.css";

function Footer() {
    return (
        <div class="footer-section">
            <section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quas eum repellat ab, assumenda
                    cum
                    amet aspernatur earum quos laborum excepturi facilis, laudantium ducimus quam.</p>
                <hr class="split-lines" />
                <div class="icons">
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </section>
            <section>
                <div class="footer-direction">
                    <i class="fa-solid fa-location-dot"></i>
                    <span> Avenida Carrera 8, #12A-42, Bogotá DC, Colombia</span>
                </div>
                <div class="footer-cellphone">
                    <i class="fa-solid fa-phone"></i>
                    <span> +57 601 4567899</span>
                </div>
                <hr class="split-lines" />
            </section>
            <section>
                <div class="footer-policies">
                    <p>Politicas de privacidad</p>
                    <p>Politicas de privacidad</p>
                </div>
                <hr class="split-lines" />
            </section>
            <div class="icons-seconds">
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
    );
}

export default Footer;