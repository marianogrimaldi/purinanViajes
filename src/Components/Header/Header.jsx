import "./Header.scss"
import logoMajo from "../../assets/logo-03.png"
import free from "../../assets/freeway.png"
import delfos from "../../assets/delfos.png"
import julia from "../../assets/julia.gif"
import jumping from "../../assets/jumping.png"
import low from "../../assets/low.png"
import midas from "../../assets/midas.png"
import tosseli from "../../assets/tosseli.png"
import rapel from "../../assets/rapel.png"
import assist from "../../assets/assist.svg"
import universal from "../../assets/universal.png"
import ap from "../../assets/aptour.png"
import jtos from "../../assets/jtos.png"
import ola from "../../assets/ola.svg"
import van from "../../assets/van.png"
import leon from "../../assets/leon.png"
import europa from "../../assets/europa.png"
import amadeus from "../../assets/amadeus.jpg"
import euro from "../../assets/euro.svg"
import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <div >
            <div className="flexLogo">
                <img src={logoMajo} alt="Logo Majo" />
            </div>
            <div>
                <div className="titleFlex">
                    <h1>OPERADORES</h1>
                    <a href="#ctas"><h1>CUENTAS</h1></a>
                    <a href="#capa"><h1>CAPACITACIONES</h1></a>
                    <a href="#fly"><h1>FLYERS</h1></a>
                    <a href="#contacto"><h1>CONTACTO</h1></a>
                </div>

                <div className="gridProveedores">
                    <a href="https://www.freeway.com.ar/" target="_blank"><img src={free} alt="Logo Freeway" /></a>
                    <a href="https://www.delfos.tur.ar/home.xhtml"target="_blank"><img src={delfos} alt="Logo Delfos" /></a>
                    <a href="https://www.ola.com.ar/agencia/material-para-redes"target="_blank"><img src={ola} alt="Logo Ola" /></a>
                    <a href="https://www.juliatours.com.ar/index.php"target="_blank"><img src={julia} alt="Logo JuliaTours" /></a>
                    <a href="https://www.europamundo.com/"target="_blank"><img src={europa} alt="Logo Europamundo" /></a>
                    <a href="https://www.eurovips.com/"target="_blank"><img src={euro} alt="Eurovips" /></a>
                    <a href="http://www.vantravel.com.ar/"target="_blank"><img src={van} alt="Logo Vantravel" /></a>
                    <a href="https://www.tiendaleonmdq.com/"target="_blank"><img src={leon} alt="Logo MTL" /></a>
                    <a href="https://www.jumping.com.ar/"target="_blank"><img src={jumping} alt="Logo Jumping" /></a>
                    <img src={amadeus} alt="Logo Amadeus" target="_blank"/>
                    <a href="https://www.lowcost.com.ar/"target="_blank"><img src={low} alt="Logo Lowcost" /></a>
                    <a href="https://www.kingmidas.com.ar/"target="_blank"><img src={midas} alt="Logo KingMidas" /></a>
                    <div></div>
                    <a href="https://www.ebooking.com.ar/#/"target="_blank"><img src={tosseli} alt="Logo Tosseli" /></a>
                    <a href="https://rapelturismo.com.ar/#!/-inicio/"target="_blank"><img src={rapel} alt="Logo Rapel" /></a>

                    <a href="https://agencias.assistcard.com/Home"target="_blank"><img src={assist} alt="Logo Assist Card" /></a>
                    <a href="https://www.universal-assistance.com/ar-es/viaje-seguro?utm_source=google&utm_medium=cpc&utm_campaign=__MARCA%20Arg&utm_term=universal%20assistance&gad_source=1&gclid=Cj0KCQjwq86wBhDiARIsAJhuphl4O4i6C5au9Rgse1Kh3GnnsrIkhp-IfWgCZUDFaioiZuOX-7tg_cQaAovSEALw_wcB"target="_blank"><img src={universal} alt="Logo Universal" /></a>
                    <div></div>
                </div>
            </div>
            <div >
                <h2 id="ctas">CUENTAS BANCARIAS</h2>

                <p className="cuentas">SERVICIOS EN EL EXTERIOR: <br />
                    ESTA CUENTA ES PARA TRANSFERENCIAS BANCARIAS <br />

                    BANCO GALICIA  <br />

                    GLOBAL TURISMO SRL  <br />

                    CUIT 33-71479189-9  <br />

                    CTA.CTE. PESOS $ 19624-0 075-5  <br />

                    CBU 0070075720000019624059  <br />

                    ALIAS: GLOBAL.TURISMO.1</p>

                <p className="cuentas">
                    SERVICIOS EN EL EXTERIOR: <br />
                    ESTA CUENTA ES PARA TRANSFERENCIAS Y DEPOSITOS BANCARIOS <br />

                    GLOBAL TURISMO SRL <br />
                    CUIT 33-71479189-9 <br />

                    CTA.CTE.ESP. DOLARES U$ 9750570-1 075-1 <br />
                    CBU 0070075731009750570115 <br />

                    ALIAS: VIAJES.2 <br />
                </p>
            </div>

         <h2 id="fly">FLYERS</h2>

            <h2 id="capa" >CAPACITACIONES</h2>
            <div className="flexCap">
                <a download="Capacitacion Uganda" href="../uganda.pdf" className="btnCap">UGANDA</a>
                <a download="Capacitacion Curacao" href="../Curacao.pdf" className="btnCap">CURACAO</a>
                <a download="Capacitacion Egipto y Jordania" href="../egipto.pdf" className="btnCap">EGIPTO Y JORDANIA</a>
                <a download="Capacitacion Bali" href="../bali.pdf" className="btnCap">BALI</a>
            </div>
            <h2 id="contacto" > CONTACTO</h2>
            <div className="contactFlex">
                <a href="https://api.whatsapp.com/send?phone=5493416207110" target="blank">WPP MAJO</a>
                <a href="https://api.whatsapp.com/send?phone=5493416836459" target="blank">WPP NATI</a>
                <a href="https://api.whatsapp.com/send?phone=5493406421065" target="blank">WPP MARIAN</a>

            </div>

        </div>

    )
}

export default Header