import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/banner/Banner';
import Description from '../../components/descripcion/Descripcion';
import Feature from '../../components/feature/Feature';
import Maps from '../../components/maps/Maps';
import Cards from '../../components/cards/Cards';
import Footer from '../../components/footer/Footer';
import './Index.css';

function Inicio() {
    return (
        <div className="contenedor">
            <Navbar />
            <Banner />
            <Description />
            <Feature />
            <Maps />
            <Cards opiniones='Opniones Clientes' />
            <Footer />
        </div>
    );
}

export default Inicio;