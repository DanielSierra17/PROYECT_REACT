import mapa from './mapa.jpg';
import "./Maps.css";

function Maps({ info }) {
    return (
        <div id="container-location">
            <h2 class="location-tittle">{info}</h2>

            <div class="location-zone">
                <p>AVENIDA CARRERA 8, #12A-42, BOGOTA DC, COLOMBIA</p>
                <img class="cont-maps" src={mapa} alt="" />
                <hr class="split-line"></hr>
                <p>+57 601 4567899</p>
            </div>
        </div>
    );
}

export default Maps;